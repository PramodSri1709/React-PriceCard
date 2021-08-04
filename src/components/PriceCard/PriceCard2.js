import React from "react";
import "./PriceCard2.css";
import NavBar from "../Navbar/NavBar";

function PriceCard2({ data, handleClick, subscribe }) {
  return (
    <>
      <NavBar />

      <section class="pricing py-5">
        <div class="container">
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Pricing</h1>
            <p class="lead">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It's built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>

          {subscribe ? (
            <div class="alert alert-primary" role="alert">
              <h4 class="alert-heading">You have subscribed successfully</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr></hr>
              <p class="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </div>
          ) : (
            ""
          )}

          <div class="row">
            {data.map((x) => {
              return (
                <div class="card2 col-lg-4">
                  <div class="card mb-5 mb-lg-0">
                    <div class="card-body">
                      <h5 class="card-title text-muted text-uppercase text-center">
                        {x.freeornot}
                      </h5>
                      <h6 class="card-price text-center">
                        {x.price}
                        <span class="period">{x.month}</span>
                      </h6>
                      <hr></hr>
                      <ul class="fa-ul">
                        <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          {x.userType}
                        </li>
                        <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          {x.storage}
                        </li>
                        <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          {x.projectType}
                        </li>
                        <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          {x.access}
                        </li>

                        {x.id === 2 || x.id === 3 ? <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          {x.projects }
                        </li> : <li class="text-muted">
                          <span class="fa-li">
                            <i class="fas fa-times"></i>
                          </span>
                          {x.projects}
                        </li>}
                        
                        {x.id === 2 || x.id === 3 ? <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          {x.support }
                        </li> : <li class="text-muted">
                          <span class="fa-li">
                            <i class="fas fa-times"></i>
                          </span>
                          {x.support}
                        </li>}

                        {x.id === 2 || x.id === 3 ? <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          {x.domain }
                        </li> : <li class="text-muted">
                          <span class="fa-li">
                            <i class="fas fa-times"></i>
                          </span>
                          {x.domain}
                        </li>}

                        {x.id === 2 ? <li class="text-muted">
                          <span class="fa-li">
                            <i class="fas fa-times"></i>
                          </span>
                          {x.reports}
                        </li> : x.id === 3 ? <li>
                          <span class="fa-li">
                            <i class="fas fa-check"></i>
                          </span>
                          {x.reports }
                        </li> : <li class="text-muted">
                          <span class="fa-li">
                            <i class="fas fa-times"></i>
                          </span>
                          {x.reports}
                        </li>}

                      </ul>

                      <div class="d-grid">
                        <button
                          class="priceBtn btn btn-primary text-uppercase"
                          onClick={handleClick}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default PriceCard2;
