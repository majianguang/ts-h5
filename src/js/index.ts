import '../style/index.css'
import '../style/test.less';
import * as $ from 'jquery'
class Shape {
    area: number;
    color: string;
    constructor(name: string, width: number, height: number) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
    }

    addNewDom = (title: string) => {
        $(".root").append("<span>" + title + "</span>");
        return "true"
    }
}

var square = new Shape("square", 30, 30);
console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Color of Shape: ' + square.color);
console.log(square.addNewDom("test jquery append"));

