import React from 'react'
import { Container } from 'react-bootstrap'
import Forms from './Form'
import Content from './Content'
const Containers = () => {
  return (
    <Container className='home'>
    <h6 className='text-center p-1 text-info my-2'>Directory of universities around the world</h6>
       
    <Forms/>
    <Content/>
    </Container>
  )
}

export default Containers