import React from 'react'
import millify from 'millify';
import { Typography,Row,Col,Statistic } from 'antd';
import { Link } from 'react-router-dom';
const {Title} =Typography;
const HomePage = () => {
    return (
        <>
           <Title level={2} className='heading'>Global Crypto stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total cryptocurrencies' value='5'/></Col>
                <Col span={12}><Statistic title='Total exchanges' value='5'/></Col>
                <Col span={12}><Statistic title='Total Market cap' value='5'/></Col>
                <Col span={12}><Statistic title='Total 24h volume' value='5'/></Col>
                <Col span={12}><Statistic title='Total Market' value='5'/></Col>
                
            </Row>
        </>
                
    )
}

export default HomePage

