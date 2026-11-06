using System;
using System.Diagnostics;
using System.IO;
using System.ServiceProcess;
using System.Threading;
using System.Threading.Tasks;
public sealed class XcrSiteBootstrap : ServiceBase {
 public XcrSiteBootstrap(){ServiceName="XcrSiteBootstrap";CanStop=true;}
 protected override void OnStart(string[] args){ThreadPool.QueueUserWorkItem(_=>Run());}
 void Run(){
  try{
   var info=new ProcessStartInfo("powershell.exe","-NoProfile -NonInteractive -ExecutionPolicy Bypass -File F:\\XCR-Site\\app\\install.ps1");
   info.UseShellExecute=false;info.CreateNoWindow=true;info.RedirectStandardOutput=true;info.RedirectStandardError=true;
   info.WorkingDirectory="F:\\XCR-Site\\app";
   using(var process=Process.Start(info)){
    var output=process.StandardOutput.ReadToEndAsync();var error=process.StandardError.ReadToEndAsync();
    if(!process.WaitForExit(600000)){process.Kill();throw new Exception("Installer timeout");}
    if(Task.WaitAll(new Task[]{output,error},2000)){
     File.WriteAllText("F:\\XCR-Site\\logs\\bootstrap.stdout.log",output.Result);
     File.WriteAllText("F:\\XCR-Site\\logs\\bootstrap.stderr.log",error.Result);
    }
    File.WriteAllText("F:\\XCR-Site\\bootstrap-exit.txt",process.ExitCode.ToString());
   }
  }catch(Exception error){File.WriteAllText("F:\\XCR-Site\\bootstrap-error.txt",error.GetType().Name);}
  finally{Stop();}
 }
 public static void Main(){ServiceBase.Run(new XcrSiteBootstrap());}
}
