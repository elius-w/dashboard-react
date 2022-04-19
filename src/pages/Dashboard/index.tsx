import React,{useState, useMemo} from 'react'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import { Container, Content} from './styles'

import WalletBox from '../../components/WalletBox'

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'

export const Dashboard: React.FC = () => {

  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
  const [yearSelected, setYearsSelected] = useState<number>(new Date().getFullYear() )

  const options = [
    {value: 'Hélio', label: 'Hélio'},
    {value: 'Tainara', label: 'Tainara'},
    {value: 'Pitter', label: 'Pitter'}
  ]

  const years = useMemo(() =>{
    let uniqueYears: number[] = [];


    ([...expenses, ...gains]).forEach((item: { date: string | number | Date })=> {
          const date = new Date(item.date)            
          const year = date.getFullYear()             

          if(!uniqueYears.includes(year)){
            uniqueYears.push(year)
          }           

      })

      return uniqueYears.map( year => {
        return{
          value: year,
          label: year,  
        }
      })

},[])

const months = useMemo(() =>{    
  return listOfMonths.map((month, index) => {
    return{
      value: index + 1,
      label: month,  
    }

  })    
  
},[])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number (month)
      setMonthSelected(parseMonth)
    } catch (error) {
      throw new Error ('invalid month value. Is accept 0 - 24.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number (year)
      setYearsSelected(parseYear)
    } catch (error) {
      throw new Error ('invalid year value. Is accept integer numbers')
    }
  }

  return (

    <Container>
      <ContentHeader title="Dashboard" lineColor="white">
      <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected}/>
      <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected}/>
     
      </ContentHeader>

      <Content>
        <WalletBox 
        title="Saldo"
        color="#4E41F0"
        amount={150.00}
        footerlabel="atualizado com base nas entradas e saidas"
        icon="dolar"
        
        />

        <WalletBox 
        title="Entradas"
        color="#F7931B"
        amount={5000.00}
        footerlabel="atualizado com base nas entradas e saidas"
        icon="arrowUp"
        
        />

        <WalletBox 
        title="Saídas"
        color="#E44C4E"
        amount={4850.00}
        footerlabel="atualizado com base nas entradas e saidas"
        icon="arrowDown"
        
        />

      </Content>
    </Container>
        
      
  )
}

export default Dashboard
function forEach(arg0: (item: any) => void): any {
  throw new Error('Function not implemented.')
}

function setMonthSelected(parseMonth: number) {
  throw new Error('Function not implemented.')
}

function setYearsSelected(parseYear: number) {
  throw new Error('Function not implemented.')
}

