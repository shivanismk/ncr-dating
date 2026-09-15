import {
    Building2,
    Hotel,
    UtensilsCrossed,
    Camera,
    Dumbbell,
    Stethoscope,
    GraduationCap,
    Car,
} from "lucide-react";

export const categories = [

    {
        id:1,
        name:"Hotels",
        icon:Hotel,
        image:"/images/categories/hotel.jpg",
        listings:256
    },

    {
        id:2,
        name:"Restaurants",
        icon:UtensilsCrossed,
        image:"/images/categories/restaurant.jpg",
        listings:480
    },

    {
        id:3,
        name:"Hospitals",
        icon:Stethoscope,
        image:"/images/categories/hospital.jpg",
        listings:198
    },

    {
        id:4,
        name:"Gyms",
        icon:Dumbbell,
        image:"/images/categories/gym.jpg",
        listings:102
    },

    {
        id:5,
        name:"Photography",
        icon:Camera,
        image:"/images/categories/photo.jpg",
        listings:140
    },

    {
        id:6,
        name:"Education",
        icon:GraduationCap,
        image:"/images/categories/education.jpg",
        listings:260
    },

    {
        id:7,
        name:"Transport",
        icon:Car,
        image:"/images/categories/car.jpg",
        listings:88
    },

    {
        id:8,
        name:"Business",
        icon:Building2,
        image:"/images/categories/business.jpg",
        listings:310
    }

]