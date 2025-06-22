import React, { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export const FormField = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  children,
  className = '',
  icon
}: FormFieldProps) => {
  if (type === 'checkbox') {
    return (
      <div className={`flex items-start ${className}`}>
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={value as boolean}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1 ${
            error ? 'border-red-500' : ''
          }`}
        />
        <label htmlFor={name} className="ml-2 text-sm text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </p>
        )}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className={className}>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={name}
          name={name}
          value={value as string}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          rows={4}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </p>
        )}
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className={className}>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
          id={name}
          name={name}
          value={value as string}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          {children}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`w-full ${icon ? 'pl-10' : 'px-4'} py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;