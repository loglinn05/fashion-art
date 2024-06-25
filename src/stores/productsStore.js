import { defineStore } from 'pinia'
import { ref } from 'vue'
import productImage1 from '../assets/img/product-image-1.jpg'
import productImage2 from '../assets/img/product-image-2.jpg'
import productImage3 from '../assets/img/product-image-3.jpg'
import productImage4 from '../assets/img/product-image-4.jpg'
import productImage5 from '../assets/img/product-image-5.jpg'
import productImage6 from '../assets/img/product-image-6.webp'
import productImage7 from '../assets/img/product-image-7.webp'
import productImage8 from '../assets/img/product-image-8.webp'
import productImage9 from '../assets/img/product-image-9.jpg'
import productImage10 from '../assets/img/product-image-10.jpg'
import productImage11 from '../assets/img/product-image-11.webp'
import productImage12 from '../assets/img/product-image-12.jpeg'
import productImage13 from '../assets/img/product-image-13.jpg'
import productImage14 from '../assets/img/product-image-14.jpg'
import productImage15_1 from '../assets/img/product-image-15-1.webp'
import productImage15_2 from '../assets/img/product-image-15-2.webp'
import productImage15_3 from '../assets/img/product-image-15-3.webp'
import productImage15_4 from '../assets/img/product-image-15-4.webp'
import productImage15_5 from '../assets/img/product-image-15-5.webp'
import productImage15_6 from '../assets/img/product-image-15-6.webp'
import productImage15_7 from '../assets/img/product-image-15-7.webp'

export const useProductsStore = defineStore('products', () => {
    const products = ref([
        {
            id: 1,
            hit: false,
            new: true,
            featured: true,
            images: [productImage1],
            title: 'Beach suit',
            description: 'Enjoy sun, sea and sand in this pretty beachwear.',
            contents: '80% cotton, 20% polyester.',
            price: 24,
            oldPrice: 29,
            numInStock: 700,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: "Beachwear",
            sizes: ['XXS', 'XS', 'S', 'M'],
            manufacturer: "Zara",
            colors: ['#fb6f92', '#ef476f', '#073b4c'],
            materials: ['Cotton', 'Polyester'],
            seasons: ['Summer']
        },
        {
            id: 2,
            hit: true,
            new: false,
            featured: true,
            images: [productImage2],
            title: 'Beach suit',
            description: 'Enjoy sun, sea and sand in this pretty beachwear.',
            contents: '100% cotton.',
            price: 20,
            oldPrice: 27,
            numInStock: 1350,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: "Beachwear",
            sizes: ['S', 'M', 'L', 'XL'],
            manufacturer: "Xolo",
            colors: ['#c20114', '#c7d6d5', '#ecebf3'],
            materials: ['Cotton'],
            seasons: ['Summer']
        },
        {
            id: 3,
            hit: true,
            new: false,
            featured: true,
            images: [productImage3],
            title: 'Women\'s elegant red dress',
            description: 'Elegant and chic dress for any occasion.',
            contents: '60% linen, 40% silk.',
            price: 190,
            oldPrice: 270,
            numInStock: 430,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: "Dresses",
            sizes: ['M', 'L', 'XL', 'XXL'],
            manufacturer: "H&M",
            colors: ['#f28482', '#ba181b', '#0b090a'],
            materials: ['Linen', 'Silk'],
            seasons: ['Summer']
        },
        {
            id: 4,
            hit: true,
            new: true,
            featured: true,
            images: [productImage4],
            title: 'Women\'s pantsuit',
            description: 'Comfortable pantsuit. Smooth like silk.',
            contents: '100% satin.',
            price: 50,
            oldPrice: 60,
            numInStock: 670,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Suits',
            sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            manufacturer: 'Xantan',
            colors: ['#f28482', '#ba181b', '#0b090a'],
            materials: ['Satin'],
            seasons: ['Spring & Autumn']
        },
        {
            id: 5,
            hit: false,
            new: true,
            featured: true,
            images: [productImage5],
            title: 'Women\'s pantsuit',
            description: 'Comfortable pantsuit. Smooth like silk.',
            contents: '100% satin.',
            price: 40,
            oldPrice: 53,
            numInStock: 210,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Suits',
            sizes: ['XS', 'S', 'M', 'L'],
            manufacturer: 'Xantan',
            colors: ['#f79f79', '#e2e1b9', '#41e2ba'],
            materials: ['Satin'],
            seasons: ['Spring & Autumn']
        },
        {
            id: 6,
            hit: true,
            new: true,
            featured: true,
            images: [productImage6],
            title: 'High quality women\'s elegant shoes',
            description: 'Show your style with these pretty shoes.',
            contents: '100% suede.',
            price: 50,
            oldPrice: 75,
            numInStock: 340,
            category: 'Shoes',
            subcategory: 'Women\'s shoes',
            type: 'Mules',
            sizes: [36, 37, 38, 39, 40],
            manufacturer: 'Llama',
            colors: ['#fbb02d', '#ef476f', '#118ab2'],
            materials: ['Suede'],
            seasons: ['Summer', 'Spring & Autumn']
        },
        {
            id: 7,
            hit: true,
            new: false,
            featured: true,
            images: [productImage7],
            title: 'High quality women\'s elegant shoes',
            description: 'Show your style with these pretty shoes.',
            contents: '100% leather.',
            price: 60,
            oldPrice: 80,
            numInStock: 500,
            category: 'Shoes',
            subcategory: 'Women\'s shoes',
            type: 'Sandals',
            sizes: [39, 40, 41, 42],
            manufacturer: 'Llama',
            colors: ['#a2666f', '#f49390', '#631a86', '#fb6107'],
            materials: ['Leather'],
            seasons: ['Summer']
        },
        {
            id: 8,
            hit: true,
            new: false,
            featured: true,
            images: [productImage8],
            title: 'Women\'s elegant pink dress',
            description: 'This cute and lovely dress can conquer hearts!',
            contents: '100% chiffon.',
            price: 75,
            oldPrice: 90,
            numInStock: 120,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Dresses',
            sizes: ['M', 'L'],
            manufacturer: 'Flutter',
            colors: ['#cdb4db', '#ffc8dd', '#ffafcc'],
            materials: ['Chiffon'],
            seasons: ['Summer']
        },
        {
            id: 9,
            hit: true,
            new: true,
            featured: false,
            images: [productImage9],
            title: 'Two piece suit',
            description: 'Lovely and light summer suit.',
            contents: '100% silk.',
            price: 45,
            oldPrice: 50,
            numInStock: 230,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Suits',
            sizes: ['S', 'M', 'L', 'XL'],
            manufacturer: 'Flutter',
            colors: ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'],
            materials: ['Silk'],
            seasons: ['Summer']
        },
        {
            id: 10,
            hit: false,
            new: false,
            featured: false,
            images: [productImage10],
            title: 'Summer suit',
            description: 'Lovely and light summer suit.',
            contents: '50% cotton, 50% silk.',
            price: 65,
            oldPrice: 70,
            numInStock: 600,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Suits',
            sizes: ['L', 'XL', 'XXL'],
            manufacturer: 'Flutter',
            colors: ['#b279a7', '#e899dc', '#f991cc'],
            materials: ['Cotton', 'Silk'],
            seasons: ['Summer']
        },
        {
            id: 11,
            hit: false,
            new: true,
            featured: false,
            images: [productImage11],
            title: 'Clothes set',
            description: 'Light and comfortable casual clothing.',
            contents: '100% silk.',
            price: 50,
            oldPrice: 60,
            numInStock: 900,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Sets',
            sizes: ['XS', 'S', 'M'],
            manufacturer: 'Pretty Little Thing',
            colors: ['#ffffff', '#23c9ff', '#e7bbe3'],
            materials: ['Silk'],
            seasons: ['Summer']
        },
        {
            id: 12,
            hit: false,
            new: true,
            featured: false,
            images: [productImage12],
            title: 'Office wear',
            description: 'Beautiful business clothes for women.',
            contents: 'Pants, jacket - 100% linen, the blouse - 100% satin.',
            price: 35,
            oldPrice: 45,
            numInStock: 1100,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Suits',
            sizes: ['XS', 'S', 'M', 'L'],
            manufacturer: 'Pretty Little Thing',
            colors: ['#073b4c', '#5e4b56', '#14248a'],
            materials: ['Linen', 'Satin'],
            seasons: ['Summer', 'Spring & Autumn']
        },
        {
            id: 13,
            hit: true,
            new: true,
            featured: false,
            images: [productImage13],
            title: 'High quality men\'s jacket',
            description: 'Warm and cozy, like near a fireplace.',
            contents: 'The jacket itself - 100% leather, insulation - 100% wool.',
            price: 75,
            oldPrice: 90,
            numInStock: 430,
            category: 'Clothes',
            subcategory: 'Men\'s clothes',
            type: 'Outerwear',
            sizes: ['L', 'XL', 'XXL'],
            manufacturer: 'Wulf',
            colors: ['#587b7f', '#394032', '#8dab7f', '#41e2ba', '#2b2d42'],
            materials: ['Leather', 'Wool'],
            seasons: ['Spring & Autumn', 'Winter']
        },
        {
            id: 14,
            hit: true,
            new: false,
            featured: false,
            images: [productImage14],
            title: 'Jacket for girls',
            description: 'This clothing model adorns all girls.',
            contents: 'The jacket itself - 100% dyneema, insulation - 100% sintepon.',
            price: 40,
            oldPrice: 65,
            numInStock: 120,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Outerwear',
            sizes: ['L', 'XL', 'XXL'],
            manufacturer: 'Wulf',
            colors: ['#ffffff', '#23c9ff', '#e7bbe3'],
            materials: ['Dyneema', 'Sintepon'],
            seasons: ['Spring & Autumn', 'Winter']
        },
        {
            id: 15,
            hit: true,
            new: false,
            featured: false,
            images: [
                productImage15_1,
                productImage15_2,
                productImage15_3,
                productImage15_4,
                productImage15_5,
                productImage15_6,
                productImage15_7
            ],
            title: 'Chic dress for women',
            description: 'Great event dress for women. Light up the night!',
            contents: 'The dress is made from polyester, decorated with ostrich feathers and sequins.',
            price: 53.90,
            oldPrice: 76.40,
            numInStock: 48,
            category: 'Clothes',
            subcategory: 'Women\'s clothes',
            type: 'Dresses',
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
            manufacturer: 'Catchall',
            colors: ['#ffafcc', '#f07167', '#07393c', '#700548'],
            materials: ['Polyester'],
            seasons: ['Summer']
        }
    ]);

    return {
        products
    }
})