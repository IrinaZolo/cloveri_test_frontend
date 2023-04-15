import { IProfessions } from "./models/models"

export const Professions: IProfessions[] = [
    {
        id: 1,
        icon: new URL('./img/frontend.jpg', import.meta.url).href,
        name: "Frontend-разработчик"
    },
    {
        id: 2,
        icon: new URL('./img/devOps.png', import.meta.url).href,
        name: "DevOps-разработчик"
    },
    {
        id: 3,
        icon: new URL('./img/php.png', import.meta.url).href,
        name: "PHP-разработчик"
    },
    {
        id: 4,
        icon: new URL('./img/backend.jpg', import.meta.url).href,
        name: "Backend-разработчик"
    },
    {
        id: 5,
        icon: new URL('./img/java.png', import.meta.url).href,
        name: "Java-разработчик"
    },
    {
        id: 6,
        icon: new URL('./img/python.png', import.meta.url).href,
        name: "Python-разработчик"
    },
    {
        id: 7,
        icon: new URL('./img/android.png', import.meta.url).href,
        name: "Android-разработчик"
    },
    {
        id: 8,
        icon: new URL('./img/qa.jpg', import.meta.url).href,
        name: "QA-инженер"
    },
    {
        id: 9,
        icon: new URL('./img/ux-ui.jpg', import.meta.url).href,
        name: "UX/UI-дизайнер"
    },
    {
        id: 10,
        icon: new URL('./img/product.jpg', import.meta.url).href,
        name: "Product-менеджер"
    },
]