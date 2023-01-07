* page 1
# List Of City
> http://localhost:9500/location

# List of Restaurants
> http://localhost:9500/menu

> # List of Restaurants wrt City
> http://localhost:9500/ourmenu?cityid=2


# List of mealType
> http://localhost:9500/favmenu
> http://localhost:9500/ourmenu

* Page2
# List of Restaurants wrt to meal
> http://localhost:9500/ourmenu?mealid=3
> http://localhost:9500/ourmenu?mealId=3&cityid=2

# Filter on basis of meal + foodtype
> http://localhost:9500/filter/1?foodId=1
> http://localhost:9500/filters/1?foodId=2

# Filter on basis of meal + cost
> http://localhost:9500/filter/1?lcost=1000&hcost=2000
> http://localhost:9500/filter/1?lcost=100&hcost=400&sort=-1
> http://localhost:9500/filters/1?lcost=100&hcost=400
> http://localhost:9500/filters/1?lcost=100&hcost=400&sort=1

* Page3
# Details of restaurant
> http://localhost:9500/details/19
<!-- >http://localhost:9500/details/63b6843cc4e03a72df544377 -->


# Menu wrt to restaurant
> http://localhost:9500/menu/1


* Page4
# Menu details (post)
> http://localhost:9500/menuItem
{
    "id":[1,2,3]
}

# Place order (POST)
> http://localhost:9500/placeOrder
{
    "_id": 7,
    "name": "Veer",
    "email": "Veer@gmail.com",
    "address": "B-62/6,Ahmedabad",
    "phone": 9010507010,
    "cost": 2500,
    "menuItem": [
        20,
        16,
        9
    ],
    "status": "Pending"
}

* Page 5
# List of all order
> http://localhost:9500/viewOrder

# List of all order wrt to email
> http://localhost:9500/viewOrder?email=Veer@gmail.com

# Update the order (PUT)
> http://localhost:9500/updateOrder/1
{
    "status":"Delivered",
    "bank_name":"City",
    "date": "07/01/2023"
}

# Delete order (Delete)
> http://localhost:9500/deleteOrder/63b9b7d376081dfbf875675f