import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fibonacci = (num) => {
    let a = 0, b = 1, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }

app.get('/fibonacci', function (req, res) {
    const position = parseInt(req.query.position);

    if(!('position' in req.query)) return res.status(500).send('missing position')    
    if(isNaN(position)) return res.status(500).send('invalid position')

    res.send("" + fibonacci(position));
  });

export default app;