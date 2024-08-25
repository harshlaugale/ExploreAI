/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
export const chatSession = model.startChat({
      generationConfig,
     history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100/night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/1000000/900000/890000/889600/889627/889627_102_c.jpg\",\n      \"geoCoordinates\": \"36.1699° N, 115.1424° W\",\n      \"rating\": 4.0,\n      \"description\": \"Located in the heart of Fremont Street, this casino hotel offers affordable rates and a lively atmosphere. It features a variety of restaurants, bars, and entertainment options.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80/night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/1000000/900000/890000/889600/889610/889610_102_c.jpg\",\n      \"geoCoordinates\": \"36.1073° N, 115.1722° W\",\n      \"rating\": 3.5,\n      \"description\": \"Known for its circus-themed entertainment and family-friendly atmosphere, Circus Circus offers a budget-friendly option with a large casino and numerous dining options.\"\n    },\n    {\n      \"hotelName\": \"The Golden Nugget\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$60-$120/night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/1000000/900000/890000/889500/889527/889527_102_c.jpg\",\n      \"geoCoordinates\": \"36.1696° N, 115.1401° W\",\n      \"rating\": 4.5,\n      \"description\": \"Located on Fremont Street, this hotel is known for its luxurious amenities, including a shark tank and a variety of dining and entertainment options.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"name\": \"Fremont Street Experience\",\n      \"details\": \"Walk the iconic Fremont Street Experience, a pedestrian mall with a giant video canopy showcasing light shows and live music. Take advantage of the free entertainment and enjoy the vibrant atmosphere.\",\n      \"imageUrl\": \"https://www.vegasexperience.com/images/Fremont-Street-Experience-Lights.jpg\",\n      \"geoCoordinates\": \"36.1699° N, 115.1424° W\",\n      \"ticketPricing\": \"Free\",\n      \"rating\": 4.5,\n      \"time\": \"Afternoon - Evening\"\n    },\n    \"day2\": {\n      \"name\": \"Hoover Dam & Lake Mead\",\n      \"details\": \"Take a day trip to the impressive Hoover Dam, a marvel of engineering, and explore the surrounding Lake Mead. You can enjoy scenic views, take a guided tour of the dam, and perhaps even rent a boat on the lake.\",\n      \"imageUrl\": \"https://www.nps.gov/media/photo/legacy/2010/6/26/1000091.jpg\",\n      \"geoCoordinates\": \"36.0264° N, 114.9920° W\",\n      \"ticketPricing\": \"$30 - $50 per person (for dam tour)\",\n      \"rating\": 4.8,\n      \"time\": \"Morning - Afternoon\"\n    },\n    \"day3\": {\n      \"name\": \"Bellagio Conservatory & Botanical Garden\",\n      \"details\": \"Visit the stunning Bellagio Conservatory & Botanical Garden, a free attraction featuring themed displays with vibrant flowers and sculptures. Enjoy the beauty and take some memorable photos.\",\n      \"imageUrl\": \"https://www.bellagio.com/content/dam/bellagio/attractions/conservatory-and-botanical-garden/bellagio-conservatory-botanical-garden-floral-display.jpg\",\n      \"geoCoordinates\": \"36.1146° N, 115.1728° W\",\n      \"ticketPricing\": \"Free\",\n      \"rating\": 4.6,\n      \"time\": \"Morning - Afternoon\"\n    }\n  }\n}\n```\n\n**Explanation:**\n\n* **Hotel Options:** Provides three budget-friendly hotels in Las Vegas with relevant details.\n* **Itinerary:** Suggests a three-day itinerary with specific activities and attractions:\n    * **Day 1:** Exploring Fremont Street Experience in the afternoon and evening.\n    * **Day 2:** A day trip to Hoover Dam and Lake Mead in the morning and afternoon.\n    * **Day 3:** Visiting the Bellagio Conservatory & Botanical Garden in the morning and afternoon.\n* **Place Details:** For each location, includes details such as name, description, image URL, geo-coordinates, ticket pricing, rating, and suggested time to visit.\n\n**Important Notes:**\n\n* This itinerary is a suggestion, and you can customize it based on your preferences and interests.\n* Be sure to check the specific opening hours and ticket prices for each location, as they may vary.\n* Las Vegas can get hot in the summer, so bring sunscreen, hats, and comfortable shoes.\n* Remember that there are many other free attractions and activities in Las Vegas, so don't hesitate to explore beyond the suggestions provided.\n* This itinerary focuses on budget-friendly options, so you can adjust it further based on your desired spending levels.\n\n**Enjoy your trip to Las Vegas!** \n"},
          ],
        },
      ],
    });
  
