import React  from 'react';
import { Divider } from 'antd';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const App: React.FC = () => {
  return (
    <div className="App">
      <Divider>😂😈😀😎</Divider>
      <p>
        리액트&& 타입스크립트 프로젝트 
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
    </div>
  );
}

export default App;
//https://finance.naver.com/item/fchart.nhn?code=005930
//시가 https://finance.naver.com/item/item_right_ajax.nhn?type=recent&code=005930&page=1
//차트 https://fchart.stock.naver.com/siseJson.nhn?symbol=005930&requestType=1&startTime=20200416&endTime=20210109&timeframe=day



//https://react.vlpt.us/using-typescript/02-ts-react-basic.html

