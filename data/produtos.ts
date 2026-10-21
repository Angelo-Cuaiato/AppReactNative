export interface Produto {
    id: string
    titulo: string
    preco: number
    imagem: string
}

const CDN = "https://cdn.dummyjson.com/product-images"

export const produtos: Produto[] = [
    { id: "1", titulo: "iPhone 6", preco: 1899.90, imagem: `${CDN}/smartphones/iphone-6/thumbnail.webp` },
    { id: "2", titulo: "MacBook Pro 14\"", preco: 12999.00, imagem: `${CDN}/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp` },
    { id: "3", titulo: "Nike Air Jordan 1", preco: 1199.99, imagem: `${CDN}/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp` },
    { id: "4", titulo: "Óculos de Sol Preto", preco: 149.90, imagem: `${CDN}/sunglasses/black-sun-glasses/thumbnail.webp` },
    { id: "5", titulo: "Perfume CK One", preco: 299.90, imagem: `${CDN}/fragrances/calvin-klein-ck-one/thumbnail.webp` },
    { id: "6", titulo: "Batom Vermelho", preco: 39.90, imagem: `${CDN}/beauty/red-lipstick/thumbnail.webp` },
    { id: "7", titulo: "Asus Zenbook Pro", preco: 9499.00, imagem: `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp` },
    { id: "8", titulo: "Paleta de Sombras", preco: 79.90, imagem: `${CDN}/beauty/eyeshadow-palette-with-mirror/thumbnail.webp` },
]
