import React from 'react'
import "./PriceCard2.css"
import NavBar from './NavBar'

function PriceCard2({data}) {
    return (
        <>
<NavBar />
<section class="pricing py-5">

  <div class="container">
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Pricing</h1>
      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>
    
    <div class="row">
    {data.map((x)=>{
        return (
      <div class="card2 col-lg-4">
        <div class="card mb-5 mb-lg-0">
            <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{x.freeornot}</h5>
            <h6 class="card-price text-center">{x.price}<span class="period">{x.month}</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{x.userType}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{x.storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{x.projectType}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{x.access}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{x.projects}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{x.support}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{x.domain}
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{x.reports}</li>
            </ul>
        
            <div class="d-grid">
              <a href="#" class="priceBtn btn btn-dark text-uppercase">Buy now</a>
                  
            </div>
        </div>
        
        </div>
      </div>
      )
    })}

      </div>
    
      </div>
   
</section>
            
        </>
    )
}

export default PriceCard2
