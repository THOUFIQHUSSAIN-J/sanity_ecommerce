import sanityClient from '@sanity/client';
import { imageUrlBuilder } from 'next-sanity-image';

export const client = sanityClient({
    projectId: '5fbel3lb',
    dataset:'production',
    apiVersion:'2023-03-26',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client)