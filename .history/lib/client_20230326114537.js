import creaClient from '@sanity/client';
import { ImageUrlBuilder } from 'next-sanity-image';

const client = sanityClient({
    projectId: '5fbel3lb',
    dataset:'production',
    apiVersion:'',
    useCdn:true,
    token: ''

})