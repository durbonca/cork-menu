import React from "react"
import dataBeer from '../data/dataBeer';
import Product from './Product'

class Family extends React.Component {
    
    render (){
        
      return  <div className="container-fluid offset-md-3 col-md-6 mt-5 px-4">
                {dataBeer.map(function (dataBeer){
                    return <div>
                                <div className="row mt-5 d-flex">
                                    <div className="col bar"></div>
                                    <h3 className="col-auto text-center">{dataBeer.title}</h3>
                                    <div className="col bar"></div>
                                </div>
                                <Product product={dataBeer.products}/>
                            </div>
                })}

              </div> 
    }
}


export default Family