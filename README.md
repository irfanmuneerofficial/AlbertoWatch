# Alberto Watches - Basic Version (HTML, CSS, JavaScript)

Single-page responsive website for Alberto Watch Company. Plain HTML5, CSS3 and JavaScript only: no frameworks, no build step.

## How to open
Double-click `index.html` (Chrome, Edge, Firefox or Safari). Internet is only needed for the Google Fonts; plain fonts are used offline.

## Files
```
index.html        page shell (header, menu, footer, popups)
css/style.css     all styling (dark theme, gold and ivory)
js/script.js      pages, menu, cart, search, login, ticker, visitor counter
data/data.js      data store in JSON format: watches, line-ups, technology, stores
assets/watches/   product photos (supplied material)
assets/logo/      supplied logo (original + dark-theme version)
```
To change prices, descriptions, categories or stores, edit `data/data.js`.

## Pages
Home, Men, Women, Unisex, All Watches, Line-ups (Luxury, Vintage, Eco-Drive, Designer), Technology, Gallery, Price List, Store Locator, Support, About Us, Contact Us, Site Map, Search.

## Requirement checklist
| Requirement | Where |
|---|---|
| Logo and decent colour combination at top | Header, supplied logo, gold / ivory on black |
| Menu: Products, Store Locator, Support, Technology | Main menu |
| Sections about types of watches and clocks, technology | Technology page, with matching watches under each movement |
| Info grouped by line-up (Luxury, Vintage ...) | Collections menu and filters |
| Click a line-up to see the complete list | `#lineup-luxury` etc. |
| Details in a popup window | Product popup with pictures, finishes and specifications |
| Price list for all watches | Price List page |
| Gallery for viewing different images | Gallery page with enlarge view |
| Site map, Gallery, About Us, Contact Us | Menu and footer |
| About Us / Contact Us with email, address, phone | About Us, Contact Us pages and footer |
| Scrolling ticker with date, time and location | Bottom bar (shows Karachi, Pakistan; adds the visitor's position if HTML5 geolocation is allowed) |
| Visitor count at top right beside the logo | Header |
| Menu changes colour on hover and after click | Menu links turn gold on hover and stay gold on the current page |
| Fade in / fade out for menus | Dropdown fades in and out; pages fade between views |
| Extras | Add to cart and checkout, search, sign in / create account, Men / Women / Unisex |

## Assumptions
- Prices are sample figures in Pakistani rupees (about 280 PKR per US dollar). Specifications are sample data.
- Contact details: DHA, Karachi, Pakistan, Jamahi@gmail.com, +923007656609. There is one boutique, in the Store Locator.
- Cart, login, orders, messages and the visitor count are saved in the browser (localStorage). There is no server and no real payment.
- Watches: Men 6, Women 8, Unisex 4. Line-ups follow the brands (Luxury = Rolex, Vintage = Bulova, Eco-Drive = Citizen, Designer = Michael Kors).
