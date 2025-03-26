import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'

import { slugField } from '@/fields/slug'

interface RouteParams {
  slug: string; // Definimos que slug es una cadena
}

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
   
    read: anyone,
    
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'text',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      type: 'relationship',
      relationTo: 'categories', // "pages" is the slug of an existing collection
      name: 'category',
      required: true,
      
    },
    {
      type: 'relationship',
      relationTo: 'style', // "pages" is the slug of an existing collection
      name: 'style',
      required: true,
      
    },
    
    {
      name: 'isFeatured', // required
      type: 'checkbox', // required
      label: 'Colocar en carousel principal',
      defaultValue: false,
    },
    {
      name: 'isActive', // required
      type: 'checkbox', // required
      label: 'Producto disponible',
      defaultValue: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    ...slugField(),
  ],
  endpoints: [
    {
      path: '/:slug',
      method: 'get',
      handler: async (req) => {
        const { routeParams } = req;
        
        // Verificamos que routeParams no sea undefined y que contenga slug
        if (!routeParams || typeof routeParams.slug !== 'string') {
          return Response.json({ error: 'Slug no válido' }, { status: 400 });
        }

        const { slug } = routeParams; // Ahora podemos acceder a slug de forma segura
        const product = await req.payload.find({
          collection: 'products',
          where: {
            slug: {
              equals: slug,
            },
          },
        });

        if (!product.docs.length) {
          return Response.json({ error: 'Producto no encontrado' }, { status: 404 });
        }

        return Response.json(product.docs[0]);
      },
    },
  ],
}
