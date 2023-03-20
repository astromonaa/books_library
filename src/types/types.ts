export interface IBooksState {
  searchBooks: ISearchResponse,
  page: number,
  searchValue: string;
  category: string;
  sortBy: string;
}


export interface ISearchResponse {
  kind: string
  totalItems: number
  items: IBookItem[]
}

export interface IBookItem {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo?: SearchInfo
}

export interface VolumeInfo {
  title: string
  authors: string[]
  publishedDate: string
  industryIdentifiers: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount?: number
  printType: string
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary?: PanelizationSummary
  imageLinks?: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
  subtitle?: string
  publisher?: string
  description?: string
  categories?: string[]
}

export interface IndustryIdentifier {
  type: string
  identifier: string
}

export interface ReadingModes {
  text: boolean
  image: boolean
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  buyLink?: string
  listPrice?: ListPrice
  retailPrice?: RetailPrice
  offers?: Offer[]
}

export interface ListPrice {
  amount: number
  currencyCode: string
}

export interface RetailPrice {
  amount: number
  currencyCode: string
}

export interface Offer {
  finskyOfferType: number
  listPrice: ListPrice2
  retailPrice: RetailPrice2
  giftable: boolean
}

export interface ListPrice2 {
  amountInMicros: number
  currencyCode: string
}

export interface RetailPrice2 {
  amountInMicros: number
  currencyCode: string
}

export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Epub
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface Epub {
  isAvailable: boolean
  downloadLink?: string
}

export interface Pdf {
  isAvailable: boolean
  acsTokenLink?: string
  downloadLink?: string
}

export interface SearchInfo {
  textSnippet: string
}

export interface ISortCategory {
  id: number,
  text: string,
  value: string
}

export interface IBookItem {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
}

export interface IBookItemInfo {
  title: string
  subtitle: string
  authors: string[]
  publisher: string
  publishedDate: string
  industryIdentifiers: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount: number
  printedPageCount: number
  dimensions: Dimensions
  printType: string
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummary
  imageLinks: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export interface IndustryIdentifier {
  type: string
  identifier: string
}

export interface ReadingModes {
  text: boolean
  image: boolean
}

export interface Dimensions {
  height: string
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
}

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
}

export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Epub
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface Epub {
  isAvailable: boolean
}

export interface Pdf {
  isAvailable: boolean
}
