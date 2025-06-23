import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  neolianeService,
  Product,
  ProductDocument,
} from '../services/neolianeService';

const MutuelleEditiquePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [documents, setDocuments] = useState<ProductDocument[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await neolianeService.getProducts();
        setProducts(res);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchProducts();
  }, []);

  const handleSelectChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const gammeId = parseInt(e.target.value, 10);
    const product = products.find((p) => p.gammeId === gammeId) || null;
    setSelectedProduct(product);
    setDocuments([]);

    if (product) {
      setLoading(true);
      setError(null);
      try {
        const docs = await neolianeService.getProductDocuments(gammeId);
        setDocuments(docs);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDownload = async (doc: ProductDocument) => {
    if (selectedProduct) {
      await neolianeService.downloadDocument(
        selectedProduct.gammeId,
        doc.documentId,
        doc.filename,
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>API Editique | Mutuelle</title>
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-6">API Editique</h1>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="mb-6">
            <label className="block mb-2 font-medium">Produit</label>
            <select
              className="border p-2 w-full"
              onChange={handleSelectChange}
              value={selectedProduct?.gammeId ?? ''}
            >
              <option value="">Sélectionnez un produit</option>
              {products.map((p) => (
                <option key={p.gammeId} value={p.gammeId}>
                  {p.gammeLabel || `Produit ${p.gammeId}`}
                </option>
              ))}
            </select>
          </div>

          {loading && <p>Chargement...</p>}

          {documents.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Documents</h2>
              {documents.map((doc) => (
                <div
                  key={doc.documentId}
                  className="border p-4 rounded flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{doc.filename}</p>
                    <p className="text-sm text-gray-600">{doc.label}</p>
                  </div>
                  <button
                    onClick={() => handleDownload(doc)}
                    className="bg-primary-600 text-white px-3 py-1 rounded"
                  >
                    Télécharger
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MutuelleEditiquePage;
