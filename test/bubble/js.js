$(document).ready(function () {
    var bubbleChart = new d3.svg.BubbleChart({
      supportResponsive: true,
      //container: => use @default
      size: 600,
      //viewBoxSize: => use @default
      innerRadius: 600 / 3.5,
      //outerRadius: => use @default
      radiusMin: 50,
      //radiusMax: use @default
      //intersectDelta: use @default
      //intersectInc: use @default
      //circleColor: use @default
      data: {
        items: [
            
            {text:  "pesoneto", count:"67(g)"},
            {text:  "pesobruto", count:"80(g)"},
            {text:  "energia", count:"25(kcal"},
            {text:  "energia", count:"104(kj)"},
            {text:  "proteína", count:"1.5(g)"},
            {text:  "lípidos", count:"0.5(g)"},
            {text:  "carbohidratos", count:"3.6(g)"},
            {text:  "fibra", count:"1.1(g)"},
            
            
          ],
     
        eval: function (item) {return item.count;},
        classed: function (item) {return item.text.split(" ").join("");}
      },
      plugins: [
        {
          name: "central-click",
          options: {
            text: "(See more detail)",
            style: {
              "font-size": "12px",
              "font-style": "italic",
              "font-family": "Source Sans Pro, sans-serif",
              //"font-weight": "700",
              "text-anchor": "middle",
              "fill": "white"
            },
            attr: {dy: "65px"},
            centralClick: function() {
              alert("Here is more details!!");
            }
          }
        },
        {
          name: "lines",
          options: {
            format: [
              {// Line #0
                textField: "count",
                classed: {count: true},
                style: {
                  "font-size": "28px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "white"
                },
                attr: {
                  dy: "0px",
                  x: function (d) {return d.cx;},
                  y: function (d) {return d.cy;}
                }
              },
              {// Line #1
                textField: "text",
                classed: {text: true},
                style: {
                  "font-size": "14px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "white"
                },
                attr: {
                  dy: "20px",
                  x: function (d) {return d.cx;},
                  y: function (d) {return d.cy;}
                }
              }
            ],
            centralFormat: [
              {// Line #0
                style: {"font-size": "50px"},
                attr: {}
              },
              {// Line #1
                style: {"font-size": "30px"},
                attr: {dy: "40px"}
              }
            ]
          }
        }]
    });
  });