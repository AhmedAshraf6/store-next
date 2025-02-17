import ProductsContainer from '@/components/products/ProductsContainer';

async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const layout = (await searchParams).layout?.toString() || 'grid';
  const search = (await searchParams).search?.toString() || '';

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
