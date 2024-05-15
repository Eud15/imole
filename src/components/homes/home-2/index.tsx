"use client";

import React, { useState } from "react";
import InfoArea from "./InfoArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Link from "next/link";
import ServiceModal from "@/modals/ServiceModal";
import { Swiper, SwiperSlide } from "swiper/react";

const Products = () => {
	const [showModal, setShowModal] = useState(false);

	if(typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	
	return (
		<>
			<main className="home">
				<HeaderOne />
				<InfoArea />

				<section className="search py-12">
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="form-inner w-100 d-flex align-items-center gap-8 radius-24">
							<img
								src="/assets/svg/search.svg"
								alt="search"
								className="shrink-0"
							/>
							<input
								type="search"
								className="input-search input-field"
								placeholder="Search..."
							/>
							<div className="filter shrink-0">
								<button
									type="button"
									className="d-flex align-items-center"
									data-bs-toggle="modal"
									data-bs-target="#filterModal"
								>
									<img src="/assets/svg/filter-black.svg" alt="filter" />
								</button>
							</div>
						</div>
					</form>
				</section>

				

				<section className="visited py-12">
					<div className="title d-flex align-items-center justify-content-between">
						<h2 className="shrink-0">Créer une vidéo</h2>
						<div className="custom-pagination visited-pagination"></div>
					</div>

					<Swiper
						
						className="swiper visited-swiper"
					>
						<SwiperSlide className="swiper-slide place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-1.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									 <input className="form-control" type="file" id="formFileMultiple" multiple></input>
									
								</div>
								
							</Link>
						</SwiperSlide>

					
					
					</Swiper>
				</section>

				

				<section className="budget pt-12">
					<div className="title d-flex align-items-center justify-content-between">
						<h2 className="shrink-0">Récents</h2>
						<Link href="/hotels" className="shrink-0 d-inline-block">
							Tout voir
						</Link>
					</div>

					<ul>
						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/budget-1.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Histoire de vie</h4>
										<h5>1à Janvier 2023</h5>
										<p className="d-flex align-items-center gap-8 location">
											
											Doublage
										</p>
									</div>
									<p className="price">
										<span>Doublage</span>
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/budget-2.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Projet Deux</h4>
										<h5>12 Juin 2022</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											Sous-titre
										</p>
									</div>
									<p className="price">
										<span>Sous-Titrage</span>
									</p>
								</div>
							</Link>
						</li>
					</ul>
				</section>
			</main>

			<ServiceModal setShowModal={setShowModal} showModal={showModal} />
		</>
	);
};

export default Products;
