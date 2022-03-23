import React from 'react'
import { Container } from './styles'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'


export const Dashboard: React.FC = () => {

  const options = [
    {value: 'Hélio', label: 'Hélio'},
    {value: 'Tainara', label: 'Tainara'},
    {value: 'Pitter', label: 'Pitter'}
  ]

  return (

    <Container>
      <ContentHeader title="Dashboard" lineColor="white">
          <SelectInput options={options} />
      </ContentHeader>
    </Container>
        
      
  )
}

export default Dashboard
