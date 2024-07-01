const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const dataPath = path.join(process.cwd(), 'data.json');
    fs.writeFile(dataPath, JSON.stringify(req.body, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: 'Error writing data' });
      } else {
        res.status(200).json({ message: 'Data saved successfully' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
