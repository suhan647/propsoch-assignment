  export interface Property {
    id: number;
    title: string;
    description: string;
    price: string;
    location: string;
    availability: string;
    amenities: string[];
    images: string[];
    coordinates: { lat: number; lng: number };
  }

export const mockPropertyData = [
    {
      id: 1,
      images: [
        "https://s3-alpha-sig.figma.com/img/aea6/2809/4c461cf6ea5efc5ec03157d9b758ee34?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IxeXxojgyV4zFIj6sBWgOGCidD3bwSUXIUM4u~zScN8JmD5mb5QGoy-xkTjXpUAvgWtZ8Ff9gaLfpYJb~b-kbxYIllk89bEKURNHpE743QIYdZRE6WHuwQ2tud0Zyl10YQ9HUJog46lZ2k4NAcTjyvHLIRp-DveoqJvq4p7GCizY3dKAZ5l-sbLZ3Sapdv2RZyMQ9dcpaR9p5V~yY4N5lJh8hqlh9uSBPxl-Y5wrho5mhcpncrGK~7N-rtdqZjNG2k9m50Ka~kvPO9iYAHwYAD3F~-BnupiWwIIOOH7H9zLbg8Ns-6NJxj4QRvbg3JckWpjqTrJePC1RRrDQv6xsNQ",
        "https://s3-alpha-sig.figma.com/img/d55a/569c/2ca1635723246683d1944ec89586d547?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3QsIyrKiZy3exwrNXwNnDjx8C23~HEgEoXQuZYzj1EdvfotPnU3la~uSlmirgrnuy0OLocOMOhz6X7tCh9N8QdnQIN67R2kJs5JcK8T~D9tZcyHtOIzJikQz38g-2wRP~ezh6j~LlFtCf-W08irZQOFOlD2Lw4VRFUeXsKNbW3cx7flsQqOggHlbKZW9ZWaxN4ozU8N1ngXtPQNliVeIosmP-sHnKOT2rvYQQXgLkF~gWzPzRBRQxfflNYgrnSuVIs3WUfHkiNIBCzCFtU~jpoPehJhoOST2uQ2ArEyLRCl5HZSPbf0MLGT8W34F2pwSM~a3BeUPwHqBqqb9eO9ug_",
        "https://s3-alpha-sig.figma.com/img/2f10/a3bc/9a6b62cdc6b6ad91f37c4ddaf7b7b2c7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owdeG8aNPNMENyvvhGOr48N2RGodfTHCJ1uJCJccahKvD024XXTXdZu9dTayn4C1SkFD24-4LVMOhAn6CJCpsECJdwLV6EpuATPOmhqumpojW24RKTTEi9bjnzEgjwp0AkGs52js4p1FPjZ~hK799gtxoup-aQcVftr0eFaU1IQlrxlHVTKHdFrmAAEtRNU0ZR84FyRGzQLmBOia1Le4ueuUyhA6KxE2rMagGK-K10l8LwNywhCyUYdxVVwPklVXB~KXp4o1-XDYUXQE5um6erVDhpdvSWcezturjXSKj2VWXRZ5Lvh4fvip9A5XQXgT0Z9C2O~y57Lt6oOGRPwtZg__",
        "https://s3-alpha-sig.figma.com/img/1db4/9179/2f508a3110f38659ed219254221a8452?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DElbH6nW7SBVy1Sbkf5X7-a9gnpvQAjowvoLaqqJ-F9l1frRg088iaaWzIm6viPqX5w~Ym4EodbwaafS3TLR5amjOGjOFjtaZZoevadCxrrj4KtHpeRwi1NmR-CJOJOdSjwGe~N5xKm0Xe52jtQbUmihFON878hUtu11r75f8TlD5yb88BYo1ct3N-BfrK7oEalOWcjzlIDio~DzbJCTuHKaRg0nZ3vGtM-9M1dzc-VxXcWVi1RBwdv80za7cG5wA5~2EjlvIUIEUJLmUKAudemijSMhH7QzunOWbOFaYZRHJ4Fy21xR6FU~MI52b1O-siWuInH-0~DjDMdTbPcNNw__",
      ],
      views: "8,402",
      rating: "5.0",
      title: "Rainbow Heights, HSR",
      date: "Mar 9 - 14",
      description: "A luxurious apartment complex with modern amenities and a beautiful view of the city skyline.",
      price: "1.5 Cr",
      location: "Sector 56, Gurgaon",
      address: "Jl. Genungan, Banjaran Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
      amenities: ["Hospital", "Gas stations", "Schools"],
      propertyType: "Apartment",
      availability: "Available",
       coordinates: { lat: 28.4595, lng: 77.0266 },
    },
    {
      id: 2,
      images: [
        "https://s3-alpha-sig.figma.com/img/1db4/9179/2f508a3110f38659ed219254221a8452?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DElbH6nW7SBVy1Sbkf5X7-a9gnpvQAjowvoLaqqJ-F9l1frRg088iaaWzIm6viPqX5w~Ym4EodbwaafS3TLR5amjOGjOFjtaZZoevadCxrrj4KtHpeRwi1NmR-CJOJOdSjwGe~N5xKm0Xe52jtQbUmihFON878hUtu11r75f8TlD5yb88BYo1ct3N-BfrK7oEalOWcjzlIDio~DzbJCTuHKaRg0nZ3vGtM-9M1dzc-VxXcWVi1RBwdv80za7cG5wA5~2EjlvIUIEUJLmUKAudemijSMhH7QzunOWbOFaYZRHJ4Fy21xR6FU~MI52b1O-siWuInH-0~DjDMdTbPcNNw__",
        "https://s3-alpha-sig.figma.com/img/aea6/2809/4c461cf6ea5efc5ec03157d9b758ee34?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IxeXxojgyV4zFIj6sBWgOGCidD3bwSUXIUM4u~zScN8JmD5mb5QGoy-xkTjXpUAvgWtZ8Ff9gaLfpYJb~b-kbxYIllk89bEKURNHpE743QIYdZRE6WHuwQ2tud0Zyl10YQ9HUJog46lZ2k4NAcTjyvHLIRp-DveoqJvq4p7GCizY3dKAZ5l-sbLZ3Sapdv2RZyMQ9dcpaR9p5V~yY4N5lJh8hqlh9uSBPxl-Y5wrho5mhcpncrGK~7N-rtdqZjNG2k9m50Ka~kvPO9iYAHwYAD3F~-BnupiWwIIOOH7H9zLbg8Ns-6NJxj4QRvbg3JckWpjqTrJePC1RRrDQv6xsNQ",
        "https://s3-alpha-sig.figma.com/img/d55a/569c/2ca1635723246683d1944ec89586d547?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3QsIyrKiZy3exwrNXwNnDjx8C23~HEgEoXQuZYzj1EdvfotPnU3la~uSlmirgrnuy0OLocOMOhz6X7tCh9N8QdnQIN67R2kJs5JcK8T~D9tZcyHtOIzJikQz38g-2wRP~ezh6j~LlFtCf-W08irZQOFOlD2Lw4VRFUeXsKNbW3cx7flsQqOggHlbKZW9ZWaxN4ozU8N1ngXtPQNliVeIosmP-sHnKOT2rvYQQXgLkF~gWzPzRBRQxfflNYgrnSuVIs3WUfHkiNIBCzCFtU~jpoPehJhoOST2uQ2ArEyLRCl5HZSPbf0MLGT8W34F2pwSM~a3BeUPwHqBqqb9eO9ug_",
        "https://s3-alpha-sig.figma.com/img/2f10/a3bc/9a6b62cdc6b6ad91f37c4ddaf7b7b2c7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owdeG8aNPNMENyvvhGOr48N2RGodfTHCJ1uJCJccahKvD024XXTXdZu9dTayn4C1SkFD24-4LVMOhAn6CJCpsECJdwLV6EpuATPOmhqumpojW24RKTTEi9bjnzEgjwp0AkGs52js4p1FPjZ~hK799gtxoup-aQcVftr0eFaU1IQlrxlHVTKHdFrmAAEtRNU0ZR84FyRGzQLmBOia1Le4ueuUyhA6KxE2rMagGK-K10l8LwNywhCyUYdxVVwPklVXB~KXp4o1-XDYUXQE5um6erVDhpdvSWcezturjXSKj2VWXRZ5Lvh4fvip9A5XQXgT0Z9C2O~y57Lt6oOGRPwtZg__",
      ],
      views: "5,123",
      rating: "4.8",
      title: "Sunny Apartments, Indiranagar",
      date: "Mar 1 - 5",
      description: "A cozy apartment complex with a garden and a play area for children.",
      price: "1.2 Cr",
      location: "Indiranagar, Bangalore",
      address: "1234 Sunny Lane, Indiranagar, Bangalore 560038",
      amenities: ["Park", "Gym", "Swimming Pool"],
      propertyType: "Apartment",
      availability: "Available",
       coordinates: { lat: 28.4595, lng: 77.0266 },
    },
    {
        id: 3,
        images: [
          "https://s3-alpha-sig.figma.com/img/2f10/a3bc/9a6b62cdc6b6ad91f37c4ddaf7b7b2c7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owdeG8aNPNMENyvvhGOr48N2RGodfTHCJ1uJCJccahKvD024XXTXdZu9dTayn4C1SkFD24-4LVMOhAn6CJCpsECJdwLV6EpuATPOmhqumpojW24RKTTEi9bjnzEgjwp0AkGs52js4p1FPjZ~hK799gtxoup-aQcVftr0eFaU1IQlrxlHVTKHdFrmAAEtRNU0ZR84FyRGzQLmBOia1Le4ueuUyhA6KxE2rMagGK-K10l8LwNywhCyUYdxVVwPklVXB~KXp4o1-XDYUXQE5um6erVDhpdvSWcezturjXSKj2VWXRZ5Lvh4fvip9A5XQXgT0Z9C2O~y57Lt6oOGRPwtZg__",
        "https://s3-alpha-sig.figma.com/img/aea6/2809/4c461cf6ea5efc5ec03157d9b758ee34?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IxeXxojgyV4zFIj6sBWgOGCidD3bwSUXIUM4u~zScN8JmD5mb5QGoy-xkTjXpUAvgWtZ8Ff9gaLfpYJb~b-kbxYIllk89bEKURNHpE743QIYdZRE6WHuwQ2tud0Zyl10YQ9HUJog46lZ2k4NAcTjyvHLIRp-DveoqJvq4p7GCizY3dKAZ5l-sbLZ3Sapdv2RZyMQ9dcpaR9p5V~yY4N5lJh8hqlh9uSBPxl-Y5wrho5mhcpncrGK~7N-rtdqZjNG2k9m50Ka~kvPO9iYAHwYAD3F~-BnupiWwIIOOH7H9zLbg8Ns-6NJxj4QRvbg3JckWpjqTrJePC1RRrDQv6xsNQ",
        "https://s3-alpha-sig.figma.com/img/d55a/569c/2ca1635723246683d1944ec89586d547?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3QsIyrKiZy3exwrNXwNnDjx8C23~HEgEoXQuZYzj1EdvfotPnU3la~uSlmirgrnuy0OLocOMOhz6X7tCh9N8QdnQIN67R2kJs5JcK8T~D9tZcyHtOIzJikQz38g-2wRP~ezh6j~LlFtCf-W08irZQOFOlD2Lw4VRFUeXsKNbW3cx7flsQqOggHlbKZW9ZWaxN4ozU8N1ngXtPQNliVeIosmP-sHnKOT2rvYQQXgLkF~gWzPzRBRQxfflNYgrnSuVIs3WUfHkiNIBCzCFtU~jpoPehJhoOST2uQ2ArEyLRCl5HZSPbf0MLGT8W34F2pwSM~a3BeUPwHqBqqb9eO9ug_",
        "https://s3-alpha-sig.figma.com/img/1db4/9179/2f508a3110f38659ed219254221a8452?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DElbH6nW7SBVy1Sbkf5X7-a9gnpvQAjowvoLaqqJ-F9l1frRg088iaaWzIm6viPqX5w~Ym4EodbwaafS3TLR5amjOGjOFjtaZZoevadCxrrj4KtHpeRwi1NmR-CJOJOdSjwGe~N5xKm0Xe52jtQbUmihFON878hUtu11r75f8TlD5yb88BYo1ct3N-BfrK7oEalOWcjzlIDio~DzbJCTuHKaRg0nZ3vGtM-9M1dzc-VxXcWVi1RBwdv80za7cG5wA5~2EjlvIUIEUJLmUKAudemijSMhH7QzunOWbOFaYZRHJ4Fy21xR6FU~MI52b1O-siWuInH-0~DjDMdTbPcNNw__",
      ],
        views: "5,123",
        rating: "4.8",
        title: "Sunny Apartments, Indiranagar",
        date: "Mar 1 - 5",
        description: "A cozy apartment complex with a garden and a play area for children.",
        price: "1.2 Cr",
        location: "Indiranagar, Bangalore",
        address: "1234 Sunny Lane, Indiranagar, Bangalore 560038",
        amenities: ["Park", "Gym", "Swimming Pool"],
        propertyType: "Apartment",
        availability: "Available",
        coordinates: { lat: 28.4595, lng: 77.0266 },
        
      },
      {
        id: 4,
        images: [
          "https://s3-alpha-sig.figma.com/img/d55a/569c/2ca1635723246683d1944ec89586d547?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3QsIyrKiZy3exwrNXwNnDjx8C23~HEgEoXQuZYzj1EdvfotPnU3la~uSlmirgrnuy0OLocOMOhz6X7tCh9N8QdnQIN67R2kJs5JcK8T~D9tZcyHtOIzJikQz38g-2wRP~ezh6j~LlFtCf-W08irZQOFOlD2Lw4VRFUeXsKNbW3cx7flsQqOggHlbKZW9ZWaxN4ozU8N1ngXtPQNliVeIosmP-sHnKOT2rvYQQXgLkF~gWzPzRBRQxfflNYgrnSuVIs3WUfHkiNIBCzCFtU~jpoPehJhoOST2uQ2ArEyLRCl5HZSPbf0MLGT8W34F2pwSM~a3BeUPwHqBqqb9eO9ug_",
        "https://s3-alpha-sig.figma.com/img/aea6/2809/4c461cf6ea5efc5ec03157d9b758ee34?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IxeXxojgyV4zFIj6sBWgOGCidD3bwSUXIUM4u~zScN8JmD5mb5QGoy-xkTjXpUAvgWtZ8Ff9gaLfpYJb~b-kbxYIllk89bEKURNHpE743QIYdZRE6WHuwQ2tud0Zyl10YQ9HUJog46lZ2k4NAcTjyvHLIRp-DveoqJvq4p7GCizY3dKAZ5l-sbLZ3Sapdv2RZyMQ9dcpaR9p5V~yY4N5lJh8hqlh9uSBPxl-Y5wrho5mhcpncrGK~7N-rtdqZjNG2k9m50Ka~kvPO9iYAHwYAD3F~-BnupiWwIIOOH7H9zLbg8Ns-6NJxj4QRvbg3JckWpjqTrJePC1RRrDQv6xsNQ",
        "https://s3-alpha-sig.figma.com/img/2f10/a3bc/9a6b62cdc6b6ad91f37c4ddaf7b7b2c7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owdeG8aNPNMENyvvhGOr48N2RGodfTHCJ1uJCJccahKvD024XXTXdZu9dTayn4C1SkFD24-4LVMOhAn6CJCpsECJdwLV6EpuATPOmhqumpojW24RKTTEi9bjnzEgjwp0AkGs52js4p1FPjZ~hK799gtxoup-aQcVftr0eFaU1IQlrxlHVTKHdFrmAAEtRNU0ZR84FyRGzQLmBOia1Le4ueuUyhA6KxE2rMagGK-K10l8LwNywhCyUYdxVVwPklVXB~KXp4o1-XDYUXQE5um6erVDhpdvSWcezturjXSKj2VWXRZ5Lvh4fvip9A5XQXgT0Z9C2O~y57Lt6oOGRPwtZg__",
        "https://s3-alpha-sig.figma.com/img/1db4/9179/2f508a3110f38659ed219254221a8452?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DElbH6nW7SBVy1Sbkf5X7-a9gnpvQAjowvoLaqqJ-F9l1frRg088iaaWzIm6viPqX5w~Ym4EodbwaafS3TLR5amjOGjOFjtaZZoevadCxrrj4KtHpeRwi1NmR-CJOJOdSjwGe~N5xKm0Xe52jtQbUmihFON878hUtu11r75f8TlD5yb88BYo1ct3N-BfrK7oEalOWcjzlIDio~DzbJCTuHKaRg0nZ3vGtM-9M1dzc-VxXcWVi1RBwdv80za7cG5wA5~2EjlvIUIEUJLmUKAudemijSMhH7QzunOWbOFaYZRHJ4Fy21xR6FU~MI52b1O-siWuInH-0~DjDMdTbPcNNw__",
      ],
        views: "5,123",
        rating: "4.8",
        title: "Sunny Apartments, Indiranagar",
        date: "Mar 1 - 5",
        description: "A cozy apartment complex with a garden and a play area for children.",
        price: "1.2 Cr",
        location: "Indiranagar, Bangalore",
        address: "1234 Sunny Lane, Indiranagar, Bangalore 560038",
        amenities: ["Park", "Gym", "Swimming Pool"],
        propertyType: "Apartment",
        availability: "Available",
         coordinates: { lat: 28.4595, lng: 77.0266 },
      },
      {
        id: 5,
        images: [
        "https://s3-alpha-sig.figma.com/img/aea6/2809/4c461cf6ea5efc5ec03157d9b758ee34?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IxeXxojgyV4zFIj6sBWgOGCidD3bwSUXIUM4u~zScN8JmD5mb5QGoy-xkTjXpUAvgWtZ8Ff9gaLfpYJb~b-kbxYIllk89bEKURNHpE743QIYdZRE6WHuwQ2tud0Zyl10YQ9HUJog46lZ2k4NAcTjyvHLIRp-DveoqJvq4p7GCizY3dKAZ5l-sbLZ3Sapdv2RZyMQ9dcpaR9p5V~yY4N5lJh8hqlh9uSBPxl-Y5wrho5mhcpncrGK~7N-rtdqZjNG2k9m50Ka~kvPO9iYAHwYAD3F~-BnupiWwIIOOH7H9zLbg8Ns-6NJxj4QRvbg3JckWpjqTrJePC1RRrDQv6xsNQ",
        "https://s3-alpha-sig.figma.com/img/d55a/569c/2ca1635723246683d1944ec89586d547?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3QsIyrKiZy3exwrNXwNnDjx8C23~HEgEoXQuZYzj1EdvfotPnU3la~uSlmirgrnuy0OLocOMOhz6X7tCh9N8QdnQIN67R2kJs5JcK8T~D9tZcyHtOIzJikQz38g-2wRP~ezh6j~LlFtCf-W08irZQOFOlD2Lw4VRFUeXsKNbW3cx7flsQqOggHlbKZW9ZWaxN4ozU8N1ngXtPQNliVeIosmP-sHnKOT2rvYQQXgLkF~gWzPzRBRQxfflNYgrnSuVIs3WUfHkiNIBCzCFtU~jpoPehJhoOST2uQ2ArEyLRCl5HZSPbf0MLGT8W34F2pwSM~a3BeUPwHqBqqb9eO9ug_",
        "https://s3-alpha-sig.figma.com/img/2f10/a3bc/9a6b62cdc6b6ad91f37c4ddaf7b7b2c7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owdeG8aNPNMENyvvhGOr48N2RGodfTHCJ1uJCJccahKvD024XXTXdZu9dTayn4C1SkFD24-4LVMOhAn6CJCpsECJdwLV6EpuATPOmhqumpojW24RKTTEi9bjnzEgjwp0AkGs52js4p1FPjZ~hK799gtxoup-aQcVftr0eFaU1IQlrxlHVTKHdFrmAAEtRNU0ZR84FyRGzQLmBOia1Le4ueuUyhA6KxE2rMagGK-K10l8LwNywhCyUYdxVVwPklVXB~KXp4o1-XDYUXQE5um6erVDhpdvSWcezturjXSKj2VWXRZ5Lvh4fvip9A5XQXgT0Z9C2O~y57Lt6oOGRPwtZg__",
        "https://s3-alpha-sig.figma.com/img/1db4/9179/2f508a3110f38659ed219254221a8452?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DElbH6nW7SBVy1Sbkf5X7-a9gnpvQAjowvoLaqqJ-F9l1frRg088iaaWzIm6viPqX5w~Ym4EodbwaafS3TLR5amjOGjOFjtaZZoevadCxrrj4KtHpeRwi1NmR-CJOJOdSjwGe~N5xKm0Xe52jtQbUmihFON878hUtu11r75f8TlD5yb88BYo1ct3N-BfrK7oEalOWcjzlIDio~DzbJCTuHKaRg0nZ3vGtM-9M1dzc-VxXcWVi1RBwdv80za7cG5wA5~2EjlvIUIEUJLmUKAudemijSMhH7QzunOWbOFaYZRHJ4Fy21xR6FU~MI52b1O-siWuInH-0~DjDMdTbPcNNw__",
      ],
        views: "8,402",
        rating: "5.0",
        title: "Rainbow Heights, HSR",
        date: "Mar 9 - 14",
        description: "A luxurious apartment complex with modern amenities and a beautiful view of the city skyline.",
        price: "1.5 Cr",
        location: "Sector 56, Gurgaon",
        address: "Jl. Genungan, Banjaran Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
        amenities: ["Hospital", "Gas stations", "Schools"],
        propertyType: "Apartment",
        availability: "Available",
         coordinates: { lat: 28.4595, lng: 77.0266 },
      },
      {
        id: 6,
        images: [
        "https://s3-alpha-sig.figma.com/img/aea6/2809/4c461cf6ea5efc5ec03157d9b758ee34?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IxeXxojgyV4zFIj6sBWgOGCidD3bwSUXIUM4u~zScN8JmD5mb5QGoy-xkTjXpUAvgWtZ8Ff9gaLfpYJb~b-kbxYIllk89bEKURNHpE743QIYdZRE6WHuwQ2tud0Zyl10YQ9HUJog46lZ2k4NAcTjyvHLIRp-DveoqJvq4p7GCizY3dKAZ5l-sbLZ3Sapdv2RZyMQ9dcpaR9p5V~yY4N5lJh8hqlh9uSBPxl-Y5wrho5mhcpncrGK~7N-rtdqZjNG2k9m50Ka~kvPO9iYAHwYAD3F~-BnupiWwIIOOH7H9zLbg8Ns-6NJxj4QRvbg3JckWpjqTrJePC1RRrDQv6xsNQ",
        "https://s3-alpha-sig.figma.com/img/d55a/569c/2ca1635723246683d1944ec89586d547?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3QsIyrKiZy3exwrNXwNnDjx8C23~HEgEoXQuZYzj1EdvfotPnU3la~uSlmirgrnuy0OLocOMOhz6X7tCh9N8QdnQIN67R2kJs5JcK8T~D9tZcyHtOIzJikQz38g-2wRP~ezh6j~LlFtCf-W08irZQOFOlD2Lw4VRFUeXsKNbW3cx7flsQqOggHlbKZW9ZWaxN4ozU8N1ngXtPQNliVeIosmP-sHnKOT2rvYQQXgLkF~gWzPzRBRQxfflNYgrnSuVIs3WUfHkiNIBCzCFtU~jpoPehJhoOST2uQ2ArEyLRCl5HZSPbf0MLGT8W34F2pwSM~a3BeUPwHqBqqb9eO9ug_",
        "https://s3-alpha-sig.figma.com/img/2f10/a3bc/9a6b62cdc6b6ad91f37c4ddaf7b7b2c7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owdeG8aNPNMENyvvhGOr48N2RGodfTHCJ1uJCJccahKvD024XXTXdZu9dTayn4C1SkFD24-4LVMOhAn6CJCpsECJdwLV6EpuATPOmhqumpojW24RKTTEi9bjnzEgjwp0AkGs52js4p1FPjZ~hK799gtxoup-aQcVftr0eFaU1IQlrxlHVTKHdFrmAAEtRNU0ZR84FyRGzQLmBOia1Le4ueuUyhA6KxE2rMagGK-K10l8LwNywhCyUYdxVVwPklVXB~KXp4o1-XDYUXQE5um6erVDhpdvSWcezturjXSKj2VWXRZ5Lvh4fvip9A5XQXgT0Z9C2O~y57Lt6oOGRPwtZg__",
        "https://s3-alpha-sig.figma.com/img/1db4/9179/2f508a3110f38659ed219254221a8452?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DElbH6nW7SBVy1Sbkf5X7-a9gnpvQAjowvoLaqqJ-F9l1frRg088iaaWzIm6viPqX5w~Ym4EodbwaafS3TLR5amjOGjOFjtaZZoevadCxrrj4KtHpeRwi1NmR-CJOJOdSjwGe~N5xKm0Xe52jtQbUmihFON878hUtu11r75f8TlD5yb88BYo1ct3N-BfrK7oEalOWcjzlIDio~DzbJCTuHKaRg0nZ3vGtM-9M1dzc-VxXcWVi1RBwdv80za7cG5wA5~2EjlvIUIEUJLmUKAudemijSMhH7QzunOWbOFaYZRHJ4Fy21xR6FU~MI52b1O-siWuInH-0~DjDMdTbPcNNw__",
      ],
        views: "8,402",
        rating: "5.0",
        title: "Rainbow Heights, HSR",
        date: "Mar 9 - 14",
        description: "A luxurious apartment complex with modern amenities and a beautiful view of the city skyline.",
        price: "1.5 Cr",
        location: "Sector 56, Gurgaon",
        address: "Jl. Genungan, Banjaran Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
        amenities: ["Hospital", "Gas stations", "Schools"],
        propertyType: "Apartment",
        availability: "Available",
         coordinates: { lat: 28.4595, lng: 77.0266 },
      },
  ];
