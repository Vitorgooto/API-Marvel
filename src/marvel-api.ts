import axios from 'axios';
import * as crypto from 'crypto-js';

const publicKey = '33629ec995bd0c53e2ace4ad706a5a6b';
const privateKey = '58ebf6407d226aff784362f059340c8455a61363';

const ts = new Date().getTime().toString();
const hash = crypto.MD5(ts + privateKey + publicKey).toString();

const baseURL = 'https://gateway.marvel.com/v1/public';
const characterId = '1009610'; 

async function getSpiderVerse() {
  try {
    const response = await axios.get(`${baseURL}/characters/${characterId}/comics`, {
      params: {
        ts: ts,
        apikey: publicKey,
        chash: hash,
        orderBy: '-onsaleDate', 
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error('Erro ao obter quadrinhos do Spider-Man:');
    return [];
  }
}


getSpiderVerse().then(comics => {
  console.log('Quadrinhos do Spider-Man:', comics);
});
