// import { TwitterApi } from 'twitter-api-v2';
// import { NextApiRequest, NextApiResponse } from 'next';

// type Trend = {
//   name: string;
//   tweet_volume: number | null;
//   // Ajoutez ici d'autres propriétés si nécessaire
// };

// type TrendsResponse = {
//   trends: Trend[];
//   as_of: string;
//   created_at: string;
//   locations: Array<{ name: string; woeid: number }>;
// };

// // Créez une instance de TwitterApi avec les tokens d'accès utilisateur
// const client = new TwitterApi({
//   appKey: process.env.TWITTER_API_KEY  as string,
//   appSecret: process.env.TWITTER_API_SECRET  as string,
//   accessToken: process.env.TWITTER_ACCESS_TOKEN  as string,
//   accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET  as string,
// }).readWrite;



// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     // Récupérer les tendances pour une région spécifique, par exemple, la France a le WOEID 23424819
//     const trends = await client.v1.get('trends/place', { id: 23424819 });
//     res.status(200).json(trends);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching trends' });
//   }
// };