import React  from 'react';
import { Divider } from 'antd';
import axios from "axios";  // 설치 후 import

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const App: React.FC = () => {
  axios.get("http://finance.naver.com/item/item_right_ajax.nhn?type=recent&code=005930&page=1")
  .then(response => {      // .then : 응답(상태코드200~300미만)성공시
     console.log(response);
  })
  .catch(error => {
     console.log(error);
  });
  // const invocation = new XMLHttpRequest();
  // const url = 'http://bar.other/resources/credentialed-content/';
  // invocation.open('GET', url, true);
  // invocation.withCredentials = true;
  // // invocation.onreadystatechange = handler;
  // invocation.send();

  // const URL = 'https://snowdeer.com/menu/getMenuList.do?type=2'




  return (
    <div className="App">
      <Divider>🔧쿵⛏️쾅🔨쿵⛏️쾅🔧</Divider>
      <p>
        열심히 개발중입니다!
      </p>
      <Divider orientation="left">Left Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="right">Right Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider>😂😈😀😎</Divider>
      <HighchartsReact
        highcharts={Highcharts}
        options={ {
        
        }}
      />
      {
        
      }
    </div>
  );
}

export default App;
//https://finance.naver.com/item/fchart.nhn?code=005930
//시가 https://finance.naver.com/item/item_right_ajax.nhn?type=recent&code=005930&page=1
//차트 https://fchart.stock.naver.com/siseJson.nhn?symbol=005930&requestType=1&startTime=20200416&endTime=20210109&timeframe=day



//https://react.vlpt.us/using-typescript/02-ts-react-basic.html

