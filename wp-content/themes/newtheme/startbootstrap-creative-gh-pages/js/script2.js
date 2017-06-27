


$.getScript('http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js',function(){
$.getScript('http://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.0/morris.min.js',function(){

      Morris.Donut({
        element: 'donut-example',
        data: [
         {label: "HTML", value: 90},
         {label: "Other", value: 10}
        ]
      });
      Morris.Donut({
        element: 'donut-CSS',
        data: [
         {label: "CSS", value: 90},
         {label: "Other", value: 10}
        ]
      });
      Morris.Donut({
          element: 'donut-javascript',
          data: [
           {label: "JAVASCRIPT", value: 75},
           {label: "Other", value: 25}
          ]
        });
        Morris.Donut({
            element: 'donut-mysql',
            data: [
             {label: "MYSQL", value: 80},
             {label: "Other", value: 20}
            ]
          });
          Morris.Donut({
            element: 'donut-php',
            data: [
             {label: "PHP", value: 75},
             {label: "Other", value: 25}
            ]
          });
});
});
