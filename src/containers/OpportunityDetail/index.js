import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { findOpportunityById } from '../../store/opportunities/thunks';
import { selectOpportunity, selectOpportunitiesIsLoading } from '../../store/opportunities/selectors';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const OpportunityDetail = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const opportunity = useSelector(selectOpportunity);
  const isLoading = useSelector(selectOpportunitiesIsLoading);

  useEffect(() => {
    dispatch(findOpportunityById(params.id));
  }, []);

  if (isLoading || !opportunity) return <div>Loading ...</div>;

  const details = opportunity.details
    .map(({ code, content }, index) => <li key={`detail-${index}`}><span style={{ fontWeight: 'bold' }}>{code}</span>  : {content}</li>);

  const strengths = opportunity.strengths
    .map((strength, index) => <li key={`strength-${index}`}>{strength}</li>);

  const languages = opportunity.languages
    .map((language, index) => <li key={`language-${index}`}>{language} </li>);

  return (
    <>
      <Button type="link" onClick={() => history.goBack()}>Back</Button>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={4}>
            <Card title='Information'>
              <Meta title={`Status: ${opportunity.status}`} description={opportunity.objective} />
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Compensation" bordered={false}>
              <div>
                <span style={{ fontWeight: 'bold' }}>Max Amount:</span> {opportunity.compensation.maxAmount}
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Max Amount:</span> {opportunity.compensation.minAmount}
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Currency:</span> {opportunity.compensation.currency}
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Periodicity:</span> {opportunity.compensation.periodicity}
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Detail" bordered={false}>
              <ul> {details} </ul>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Strengths" bordered={false}>
              <ul> {strengths} </ul>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Languages" bordered={false}>
              <ul> {languages} </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OpportunityDetail;
