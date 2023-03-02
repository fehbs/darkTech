import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { products } from "../products";

const ProductsScreen = () => {
  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center w="250px" h="550px">
            {product.name}
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductsScreen;
