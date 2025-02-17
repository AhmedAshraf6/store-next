import ProductsContainer from '@/components/products/ProductsContainer';

interface ProductsPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const layout = (await searchParams)?.layout?.toString() || 'grid';
  const search = (await searchParams)?.search?.toString() || '';

  return <ProductsContainer layout={layout} search={search} />;
}
