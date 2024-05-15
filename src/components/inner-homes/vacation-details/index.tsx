"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/layouts/footers/Footer";
import React from "react";

const VacationDetails = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="details vacation-details">
				<section className="banner position-relative">
					<img
						src="/assets/images/details/banner-1.png"
						alt="Banner"
						className="w-full img-fluid"
					/>

<section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card mb-3">
          <img src="https://i3.ytimg.com/vi/jJPMnTXl63E/hqdefault.jpg" alt="YouTube video thumbnail" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">
              Powfu - death bed &lpar;coffee for your head&rpar;
              &lpar;Official Video&rpar; ft. beabadoobee
            </h5>
          
            <p className="card-text">
            
            </p>
            <form id="form-player" onsubmit="return false;">
              <div className="form-group mb-0">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button className="btn btn-primary" type="button">
                      <span className="fas fa-play"></span></button>
                    <div className="input-group-text bg-transparent">
                      <small>00:11 / 02:54</small>
                    </div>
                   
                  </div>
                
                  <div className="input-group-append flex-fill">
                    <div className="input-group-text flex-fill bg-transparent border-left-0">
                      <input type="range" className="custom-range" min="0" max="100" value="0" />
                    </div>
                    <button className="btn btn-secondary" type="button" data-toggle="tooltip" data-placement="right" title="Loop">
                      <span className="fas fa-sync-alt"></span></button>
                  </div>
                  
                </div>
               
              </div>
            
            </form>
          
          </div>
      
        </div>
      
      </div>
    
    </div>
   
  </div>

</section>
				</section>

				

				<section className="details-footer d-flex align-items-center justify-content-between gap-12 w-100">
					<p>
						Fon <span></span>
					</p>
					<Link href="/checkout-vacation">Doubler</Link>
				</section>
				
			</main>
			<Footer />
			
		</>
	);
};

export default VacationDetails;
