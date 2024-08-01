export async function fetchDealsFront(date){
    const webhookUrl = 'https://zhezkazgan-romantic.bitrix24.kz/rest/20509/7f0u8kwqgtgae2kw/crm.deal.list.json';

    let allDeals = [];
    let start = 0;
    const batchSize = 50; // Number of items to fetch per request
    
    try {
      while (true) {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            filter: {
              '>=DATE_CREATE': date.bitrixStartDate,
              '<=DATE_CREATE': date.bitrixEndDate,
              STAGE_ID: "WON"
            },
            select: [
              'ASSIGNED_BY_ID', 'BEGINDATE', 'CATEGORY_ID', 'CLOSED', 'CLOSEDATE', 'CONTACT_ID', 'CREATED_BY_ID',
              'CURRENCY_ID', 'DATE_CREATE', 'DATE_MODIFY', 'ID', 'IS_MANUAL_OPPORTUNITY', 'IS_NEW', 'IS_RECURRING',
              'IS_REPEATED_APPROACH', 'IS_RETURN_CUSTOMER', 'LAST_ACTIVITY_BY', 'LAST_ACTIVITY_TIME', 'LEAD_ID',
              'OPENED', 'OPPORTUNITY', 'PROBABILITY', 'STAGE_ID', 'STAGE_SEMANTIC_ID', 'TITLE', 'TYPE_ID'
            ],
            start: start,
            order: { "ID": "ASC" },
          })
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data.error) {
          console.error('Error fetching deals:', data.error);
          break;
        } else {
          allDeals = allDeals.concat(data.result);
          if (data.result.length < batchSize) {
            break;
          }
          start += batchSize;
        }
      }
      return allDeals;
    } catch (error) {
      console.error('Error fetching deals:', error);
      return []; // Return an empty array in case of error
    }
}