import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sa'

export const client = createClient({
    projectId: '5fbel3lb',
    dataset:'production',
    apiVersion:'2023-03-26',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);