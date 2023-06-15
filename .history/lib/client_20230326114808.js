import sanityClient from '@sanity/client';
import { ImageUrlBuilder } from 'next-sanity-image';

const client = sanityClient({
    projectId: '5fbel3lb',
    dataset:'production',
    apiVersion:'2023-',
    useCdn:true,
    token: ''

})