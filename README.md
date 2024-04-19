# News Geek

This is a React web application that fetches news from various sources using the NewsAPI. It provides users with daily news updates from different categories such as technology, sports, entertainment, etc.

## Features

- Fetches latest news from NewsAPI.
- Allows users to select news categories.
- Displays news articles with images and brief descriptions.
- Provides infinite scrolling for seamless news browsing.
- Responsive design for optimal viewing on different devices.

## Installation

1. Clone the repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd newsgeeks
   ```

3. Install dependencies using npm or yarn:

   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Create a `.env` file in the root directory of the project and add your NewsAPI key:

   ```
   REACT_APP_NEWS_API_KEY=your_news_api_key_here
   ```

   You can obtain a NewsAPI key by signing up on [NewsAPI.org](https://newsapi.org/).

5. Start the development server:

   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

6. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

- Upon opening the app, you'll see the latest news articles fetched from NewsAPI.
- Use the category dropdown menu to select different news categories such as technology, sports, entertainment, etc.
- Scroll down to load more news articles automatically using infinite scrolling.
- Click on any news article to read the full article on the source website.

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- NewsAPI

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/improvement`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

