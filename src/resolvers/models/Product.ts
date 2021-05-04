import { model, Schema } from 'mongoose';

import * as TYPES from 'types';
import { Price, Image } from './components';

type TProduct = TYPES.ItemDocument<TYPES.Product>;

const ProductSchema = new Schema<TProduct>(
  {
    SKU: String,
    title: { type: String, required: true },
    description: String,
    images: [Image],
    price: Price,
    salePrice: Price,
    unitPricing: {
      type: String,
      enum: Object.values(TYPES.CurrencyType),
    },
    published: Boolean,
    availability: {
      type: String,
      enum: Object.values(TYPES.ProductAvailability),
    },
    availabilityDate: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    colors: [{ type: Schema.Types.ObjectId, ref: 'Color' }],
  },
  { timestamps: true }
);

const ProductModel = model<TProduct>('Product', ProductSchema);

export default ProductModel;
