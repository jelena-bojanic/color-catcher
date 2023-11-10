# color-catcher

Color catcher is npm package for browser which extracts the colors that occur most number of times in an image.
As input paramters it accepts:

<b>imageURL</b> - path to the loaded image
<br/>
<b>n</b> - number representing first n most frequent colors from the image 
<br/>
<b>blurFactor</b> -  how much you want to blur the image. The more image is blurred the less precise function is. (optional)

Additionaly it provides functions to get different color palettes based on provided color:

- <b>getComplementaryPalette</b>
- <b>getMonochormaticPalette</b>
- <b>getTriadicPalette</b>
- <b>getTetradicPalette</b>

<h2>Install</h2>

```
npm install color-catcher
```

<h2>Usage</h2>

```
import { getMostFrequentColors } from "color-catcher";
const imageSrc = require('./assets');

 const colors = await getMostFrequentColors({
      imageURL: url,
      n: 1,
      blurFactor: 0,
    })
```

<h2>Output</h2>
Array of colors with the followed properties:

```
[
 {
     rgb: { r:number, g:number, b:number };
     hex: string;
     count: number;
     precentage: string;
 }
]
```

<h4>getComplementaryPalette</h4> 
- returns palette that contains complementary color for provided color.

```
const { palette } = getComplementaryPalette({ r:12, g:15, b:255})
```

<h4>getMonochormaticPalette</h4> 
- returns palettte that contains monochormatic colors for provided color.

```
const { palette } = getMonochormaticPalette({ r:12, g:15, b:255})
```

<h4>getTriadicPalette</h4> 
- returns palettte that contains triadic colors for provided color.

```
const { palette } = getTriadicPalette({ r:12, g:15, b:255})
```

<h4>getTetradicPalette</h4> 
- returns palettte that contains tetradic colors for provided color.

```
const { palette } = getTetradicPalette({ r:12, g:15, b:255})
```

<h2>Output</h2>
 Color palette , which is an array with the followed properties:

```
 [
      {
        rgb: { r:number, g:number, b:number };
        hex: string;
    }
 ]

```

![image](https://github.com/jelena-bojanic/color-catcher/assets/56951237/142afb70-2dd1-42ec-9855-cfb344d80f12)

