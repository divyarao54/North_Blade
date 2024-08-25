import nepalCard from "../images/nepalCard.jpg";
import italyCard from "../images/italyCard.jpg";
import swissCard from "../images/swissCard.jpg";
import NepalPack from "../images/NepalPack.jpg";
import ItalyPack from "../images/ItalyPack.jpg";
import SwissPack from "../images/SwissPack.jpg";
import nepalCollage from "../images/nepalCollage.png";
import italyCollage from "../images/italyCollage.png";
import swissCollage from "../images/swissCollage.png";

const destinations = [
        {
            id: "1",
            name: "Nepal",
            hometext: "Explore the majestic Himalayas and immerse yourself in the rich cultural heritage of Nepal, where adventure and tranquility await.",
            homeimage: nepalCard,
            packimage: NepalPack,
            tagline: "The Heart of the Himalayas",
            card: ["Embark on an unforgettable journey to the Heart of the Himalayas - Nepal.", " Our Nepal Tour Package offers an authentic experience, immersing you in the rich heritage and stunning landscapes of this enchanting country."],
            packcollage: nepalCollage,
            days: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9"],
            itinerarytitles: ["Arrival in Kathmandu", "Kathmandu Sightseeing", "Drive to Pokhara", "Pokhara Exploration", "Drive to Chitwan National Park", "Chitwan National Park", "Return to Kathmandu", "Visit Lumbhini (Optional)", "Departure"],
            itineraryitems: [
                ["Arrive at Tribhuvan International Airport.", "Transfer to the hotel.", "Evening stroll in Thamel."], 
                ["Visit Swayambhunath (Monkey Temple) in the morning.", "Explore Pashupatinath Temple and Boudhanath Stupa.", "Tour Durbar Square and the old city.", "Overnight in Kathmandu."], 
                ["Scenic drive to Pokhara (approx. 6-7 hours).", "Evening boat ride on Phewa Lake.", "Overnight in Pokhara."], 
                ["Visit Davis Falls and Gupteshwor Cave.", "Experience paragliding or ultralight flight.", "Stroll around Lakeside area.", "Overnight in Pokhara."], 
                ["Morning drive to Chitwan National Park (approx. 4-5 hours).", "Check-in at the lodge.", "Evening Tharu cultural dance performance.", "Overnight in Chitwan."], 
                ["Morning jungle safari.", "Canoeing and bird watching.", "Visit the elephant breeding center.", "Overnight in Chitwan."], 
                ["Drive back to Kathmandu.", "Free time for shopping and relaxation.", "Overnight in Kathmandu."], 
                ["Early morning drive or flight to Lumbini.", "Visit Maya Devi Temple and monasteries.", "Return to Kathmandu.", "Overnight in Kathmandu."], 
                ["Transfer to Tribhuvan International Airport for departure."]
            ],
            booktext: "Embark on a journey of a lifetime to the Heart of the Himalayas with our exclusive Nepal Tour Package. From breathtaking landscapes to rich cultural heritage, experience the best of Nepal with us. Secure your adventure today!"
        },
        {
            id: "2",
            name: "Italy",
            hometext: "Experience the romance and history of Italy, from the ancient ruins of Rome to the picturesque canals of Venice and the rolling hills of Tuscany.",
            homeimage: italyCard,
            packimage: ItalyPack,
            tagline: "The Essence of La Dolce Vita",
            card: ["Discover the essence of La Dolce Vita with our Italy Tour Package.", " From iconic landmarks to hidden gems, experience the rich tapestry of history, art, and culinary delights that Italy has to offer."],
            packcollage: italyCollage,
            days: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
            itinerarytitles: ["Arrival in Rome", "Rome Sightseeing", "Rome to Florence", "Florence to Tuscany", "Florence to Venice", "Venice Exploration", "Venice to Milan", "Milan to Amalfi Coast", "Amalfi Coast Exploration", "Departure"],
            itineraryitems: [
                ["Arrive at Rome's Fiumicino Airport.", "Transfer to the hotel.", "Evening walk to the Spanish Steps and Trevi Fountain.", "Overnight in Rome."],
                ["Morning visit to the Colosseum and Roman Forum.", "Afternoon tour of the Vatican Museums, St. Peter's Basilica, and Sistine Chapel.", "Dinner in Trastevere.", "Overnight in Rome."],
                ["Take a morning train to Florence.", "Visit the Florence Cathedral (Duomo) and climb to the top.", "Explore the Uffizi Gallery.", "Dinner at a local trattoria.", "Overnight in Florence."],
                ["Morning visit to Palazzo Vecchio and Ponte Vecchio.", "Afternoon wine tasting tour in the Chianti region.", "Return to Florence for the evening.", "Overnight in Florence."],
                ["Take a morning train to Venice.", "Gondola ride through the canals.", "Visit St. Mark's Basilica and Doge's Palace.", "Dinner along the Grand Canal.", "Overnight in Venice."],
                ["Visit the Rialto Market in the morning.", "Afternoon excursion to the islands of Murano and Burano.", "Evening leisure time.", "Overnight in Venice."],
                ["Take a morning train to Milan.", "Visit the Milan Cathedral and Galleria Vittorio Emanuele II.", "Tour Santa Maria delle Grazie to see 'The Last Supper.'", "Evening at leisure.", "Overnight in Milan."],
                ["Take a morning train to Naples, then transfer to the Amalfi Coast.", "Visit the town of Positano.", "Enjoy the beach and scenic views.", "Overnight in Positano."],
                ["Visit Amalfi and Ravello.", "Afternoon visit to the ancient ruins of Pompeii.", "Return to Positano for the evening.", "Overnight in Positano."],
                ["Transfer to Naples International Airport for departure."],
            ],
            booktext: "Embark on a journey of a lifetime to the Heart of the Himalayas with our exclusive Nepal Tour Package. From breathtaking landscapes to rich cultural heritage, experience the best of Nepal with us. Secure your adventure today!"
        },
        {
            id: "3",
            name: "Switzerland",
            hometext: "Discover the breathtaking landscapes of Switzerland, with its pristine lakes, charming alpine villages, and world-class skiing and hiking.",
            homeimage: swissCard,
            packimage: SwissPack,
            tagline: "The Jewel of the Alps",
            card: ["Explore the Jewel of the Alps with our Switzerland Tour Package.", "Experience the stunning beauty of serene lakes, majestic mountains, and charming alpine villages."],
            packcollage: swissCollage,
            days: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12"],
            itinerarytitles: ["Arrival in Zurich", "Zurich to Lucerne", "Lucerne Exploration", "Lucerne to Interlaken", "Jungfraujoch Excursion", "Interlaken to Zermatt", "Zermatt Exploration", "Zermatt to Geneva", "Geneva Exploration", "Geneva to Montreux", "Montreux Exploration", "Departure"],
            itineraryitems: [
                ["Arrive at Zurich Airport.", "Transfer to the hotel.", "Explore Zurich Old Town (Altstadt) and visit the Swiss National Museum.", "Stroll along Bahnhofstrasse for shopping.", "Overnight in Zurich."], 
                ["Morning boat ride on Lake Zurich.", "Take a train to Lucerne.", "Walk across Chapel Bridge and visit the Lion Monument.", "Evening leisure time.", "Overnight in Lucerne"], 
                ["Take a boat trip on Lake Lucerne.", "Ride the cogwheel railway up Mount Pilatus.", "Enjoy the panoramic views and hiking trails.", "Overnight in Lucerne."], 
                ["Morning train to Interlaken.", "Explore the town and take a boat trip on Lake Thun.", "Evening at leisure.", "Overnight in Interlaken."], 
                ["Take a scenic train ride to Jungfraujoch, the “Top of Europe.”", "Explore the Ice Palace and Sphinx Observatory.", "Return to Interlaken in the evening.", "Overnight in Interlaken."], 
                ["Morning train to Zermatt.", "Explore the town and visit the Matterhorn Museum.", "Evening at leisure.", "Overnight in Zermatt."], 
                ["Take the Gornergrat Railway for views of the Matterhorn.", "Hike the trails around Zermatt.", "Optional skiing or snowboarding in the Matterhorn Glacier Paradise.", "Overnight in Zermatt."], 
                ["Morning train to Geneva.", "Tour the United Nations headquarters.", "Stroll around Lake Geneva and visit the Jet d'Eau.", "Overnight in Geneva."], 
                ["Visit the International Red Cross and Red Crescent Museum.", "Explore the Old Town and St. Pierre Cathedral.", "Evening at leisure.", "Overnight in Geneva."], 
                ["Morning train to Montreux.", "Walk along the Montreux Riviera.", "Visit Chillon Castle.", "Evening leisure time.", "Overnight in Montreux."], 
                ["Enjoy the Montreux Jazz Festival (if visiting in July).", "Take a scenic train ride on the GoldenPass Line.", "Return to Montreux for the evening.", "Overnight in Montreux."], 
                ["Transfer to Geneva Airport for departure."]
            ],
            booktext: "Embark on a journey of a lifetime to the Heart of the Himalayas with our exclusive Nepal Tour Package. From breathtaking landscapes to rich cultural heritage, experience the best of Nepal with us. Secure your adventure today!"
        }
];

export default destinations;

