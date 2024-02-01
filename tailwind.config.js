/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize : {
      xsf :['10px' , {
        lineHeight :" 1" ,
        fontWeight : "400"
      }] , 
      sf : ['12px' , {
        lineHeight :" 1" ,
        fontWeight : "400"
      }],
      bf : ['15px' , {
        lineHeight :" 1" ,
        fontWeight : "500"
      }],
      mf : ['18px' , {
        lineHeight :"1" ,
        fontWeight : "500"
      }],
      xf : ['22px' , {
        lineHeight :" 1" ,
        fontWeight : "600"
      }] ,
      xxf : ['24px' , {
        lineHeight :" 2",
        fontWeight : "600"
      } ], 
      tf : ['28px' , {
        lineHeight :" 2",
        fontWeight : "600"
      } ],
      xtf :['33px' , {
        lineHeight : "2",
        fontWeight : "600"
      }] 
    },
    extend: {
      colors : {
        primary : "#0489d6" , 
        secondary : "#bababa" ,
        balck : "#141414",
        gray : "rgb(100 116 139)" 
      } 
    }
  },
  plugins: [],
}

