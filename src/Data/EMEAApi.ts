const fetchPODataFromAPI = async (poNbr: string) => {
    const response = await fetch(`https://workflow-d-wroclaw-sh.mmm.com/EMEA_API/?ProcessOrderNbr=${poNbr}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export default fetchPODataFromAPI;