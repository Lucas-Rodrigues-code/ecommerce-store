import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

async function HomePage() {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard("40b627b9-c287-46f9-9450-6451f02d5efd");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produtos em destaque" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
