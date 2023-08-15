export interface Listings {
  pagination: Pagination;
  facets?: FacetsEntity[] | null;
  products?: ProductsEntity[] | null;
}

export interface Pagination {
  from: number;
  size: number;
  total: number;
  sortType: number;
}

export interface FacetsEntity {
  identifier: string;
  displayName: string;
  priority: number;
  options?: OptionsEntity[] | null;
  facetType: number;
}

export interface OptionsEntity {
  identifier: string;
  value: Value | string | boolean;
  displayValue: string;
  productCount?: number | null;
  priority: number;
  linkSlug?: string | null;
  childOptions?: null[] | null;
}
export interface Value {
  gte: number;
  lte?: number | null;
}

export interface ProductsEntity {
  id: string;
  legacyId?: string | null;
  legacyVariantId?: string | null;
  cultureCode: string;
  isDefaultVariant: boolean;
  sku: string;
  productName: string;
  slug: string;
  averageRating?: number | null;
  reviewsCount: number;
  questionsCount: number;
  image: Image;
  stockStatus: StockStatus;
  price: Price;
  attributes: ProductAttributes;
  defaultCategory: DefaultCategory;
  brand: Brand;
  score: number;
}

export interface Image {
  externalId: string;
  url: string;
  priority: number;
  isDefault: boolean;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  imageAltText: string;
}

export interface StockStatus {
  status: string;
}

export interface Price {
  currencyCode: string;
  priceIncTax: number;
  priceExcTax: number;
  isOnPromotion: boolean;
  wasPriceIncTax?: number | null;
  wasPriceExcTax?: number | null;
  monthlyFinanceEstimate?: number | null;
  discountPercentage?: number | null;
}

export interface ProductAttributes {
  isApproved: boolean;
  isShownOnTv: boolean;
  isBestSeller: boolean;
  isFreeWaste: boolean;
  isPremium: boolean;
  isRecommended: boolean;
  isTrayIncluded: boolean;
  isBluetoothIncluded: boolean;
  isBatteryIncluded: boolean;
  isAntiSlipIncluded: boolean;
  isShortProjection: boolean;
  hasOneOutlet: boolean;
  hasTwoOutlets: boolean;
  hasThreeOutlets: boolean;
  isNew: boolean;
  hasMoreOptions: boolean;
  variationListingLabel?: string | null;
}

export interface DefaultCategory {
  externalId: string;
  slug: string;
  name: string;
  isDefault: boolean;
  ancestors?: AncestorsEntity[] | null;
}

export interface AncestorsEntity {
  slug: string;
  externalId: string;
  name: string;
  depth: number;
}

export interface Brand {
  externalId: string;
  slug: string;
  name: string;
  brandImage: Image;
}
