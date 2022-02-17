import React from 'react'
import styled from 'styled-components' 
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"
        />
        <Section

        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"    
        
        />
        <Section
            title="Model 3"
            description="Order online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"
        />
        <Section
            title="Model X"
            description="Order online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"
        />
        <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee "
            backgroundImg="solar-panel.jpg"
            leftButtonText="Order Now"
            rightButtonText="Learn more"
        />
        <Section
            title="Solar For New Roofs"
            description=" Solar Roof Cost Less than New Root"
            backgroundImg="solar-roof.jpg"
            leftButtonText="Order Now"
            rightButtonText="Learn more"
        />
        <Section
            title="Accessories"
            description="Order online for Touchless Delivery"
            backgroundImg="accessories.jpg"
            leftButtonText="Shop Now"
            rightButtonText=""
        />
        
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`