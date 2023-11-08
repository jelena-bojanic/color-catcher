# color-catcher

Color catcher is npm package for browser which extracts the colors that occur most number of times in an image.
As input paramters it accepts:

<b>imageURL</b> - path to the loaded image
<br/>
<b>n</b> - number representing first n most frequent colors from the image 
<br/>
<b>blurFactor</b> -  how much you want to blur the image. The more image is blurred the less precised function is. (optional)

<h2>Install</h2>

```
npm install color-catcher
```

<h2>Usage</h2>

```
import { getMostFrequentColors } from "color-catcher";
const imageSrc = require('./assets');

 const data = await getMostFrequentColors({
      imageURL: url,
      n: 1,
      blurFactor: 0,
    })
```
