import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { findPersonByUserName } from '../../store/people/thunks';
import { selectPerson, selectPeopleIsLoading } from '../../store/people/selectors';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const PersonBio = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const isLoading = useSelector(selectPeopleIsLoading);

  useEffect(() => {
    dispatch(findPersonByUserName(params.username));
  }, []);

  if (isLoading || !person) return <div>Loading ...</div>;

  const experiences = person.experiences
    .map(({ name, category }, index) => <li key={`experience-${index}`}>{name} - {category}</li>);

  const strengths = person.strengths
    .map(({ name }, index) => <li key={`strength-${index}`}>{name} </li>);

  const interests = person.interests
    .map((interest, index) => <li key={`interest-${index}`}>{interest} </li>);

  const languages = person.languages
    .map((language, index) => <li key={`language-${index}`}>{language} </li>);

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={3}>
            <Card
              title='Bio'
              style={{ width: 240 }}
              cover={<img alt={person.name} src={person.picture} />}
            >
              <Meta title={person.name} description={person.professionalHeadline} />
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Experiences" bordered={false}>
              <ul> {experiences} </ul>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Strengths" bordered={false}>
              <ul> {strengths} </ul>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Interests" bordered={false}>
              <ul> {interests} </ul>
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

export default PersonBio;
