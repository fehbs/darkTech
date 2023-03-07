import { useParams } from 'react-router-dom';
import {
    Box,
    Image,
    Text,
    Wrap,
    Stack,
    Spinner,
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle,
    Flex,
    Badge,
    Heading,
    HStack,
    Button,
    SimpleGrid,
    useToast,
} from '@chakra-ui/react';
import { MinusIcon, StarIcon, SmallAddIcon } from '@chakra-ui/icons';
import { BiPackage, BiCheckShield, BiSupport } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addCartItem } from '../redux/actions/cartActions';
import { useEffect, useState } from 'react';

const ProductsScreen = () => {
    <>
    </>
}

export default ProductsScreen;