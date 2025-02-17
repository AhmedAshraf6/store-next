import ProductsContainer from '@/components/products/ProductsContainer';

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout: string; search?: string }>;
}) {
  const { layout, search } = await searchParams;

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
