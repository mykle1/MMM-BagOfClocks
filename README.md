## MMM-BagOfClocks

* Just a bag of clocks. They are what they are.
* Not customizable much.

## Examples

Type1 ![](images/1.png) Type2 ![](images/2.png)

Type3 ![](images/3.png) Type4 ![](images/4.png)

Type5 ![](images/5.png) Type6 ![](images/6.png)

Type7 ![](images/7.png) Type8 ![](images/8.png)

Type9 ![](images/9.png)

Type10 ![](images/10.png)

## Multiple instances

* For you nutcase clock lovers

![](images/11.png)


## Installation

* `git clone https://github.com/mykle1/MMM-BagOfClocks` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

```
{
disabled: false,
module: 'MMM-BagOfClocks',
position: 'bottom center',
config: {
  city:  "USA_NewYork",  // "USA_NewYork", "America%2FNew_York" when type is 10
  type: "2", // 1-10. If type is "10", city format = "America%2FNew_York"
  animationSpeed: 3000,
  updateInterval: 60 * 60 * 1000,
}
},
```

## Trouble finding your city?

* Seek me out on the forum and I'll be glad to help you
