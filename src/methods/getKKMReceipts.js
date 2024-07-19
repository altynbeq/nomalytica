const url = '/api/ut_zhezkazgan/hs/sales-kkm-receipts-list/GetSalesReceipts';
const username = 'Алтынбек';
const password = '5521';

// Encode credentials to Base64 using TextEncoder
const encoder = new TextEncoder();
const credentials = `${username}:${password}`;
const utf8Credentials = encoder.encode(credentials);

// Function to convert ArrayBuffer to Base64
function base64ArrayBuffer(arrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

const encodedCredentials = base64ArrayBuffer(utf8Credentials);

export async function getKKMReceipts(){
    console.log("Sending request for kkm data");
    const response  = await fetch(url, 
        {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${encodedCredentials}`
            }
        }
    );
    
    if (!response.ok) {
      console.error('Error fetching KKM list');
      throw new Error('Network response was not ok');
    }
    console.log("KKMResponse", response);
    const data = await response.json();
    console.log("KKMDAATAAA", data);
    return data;
}