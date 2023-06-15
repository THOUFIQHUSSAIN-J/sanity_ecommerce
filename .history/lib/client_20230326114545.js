import createClient from '@sanity/client';
import { ImageUrlBuilder } from 'next-sanity-image';

const client = createClient({
    projectId: '5fbel3lb',
    dataset:'production',
    apiVersion:'',
    useCdn:true,
    token: ''

})