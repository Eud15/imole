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

				<section className="service py-12">
					<Link href="/service-location">
						<figure className="item text-center">
							<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
								<img
									src="/assets/images/home/airport.png"
									alt="airport"
									className="img-fluid backface-hidden"
								/>
							</div>
							<figcaption>Airport</figcaption>
						</figure>
					</Link>

					<Link href="/service-location">
						<figure className="item text-center">
							<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
								<img
									src="/assets/images/home/car-rental.png"
									alt="car"
									className="img-fluid backface-hidden"
								/>
							</div>
							<figcaption>Rental</figcaption>
						</figure>
					</Link>

					<Link href="/service-location">
						<figure className="item text-center">
							<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
								<img
									src="/assets/images/home/hotel.png"
									alt="hotel"
									className="img-fluid backface-hidden"
								/>
							</div>
							<figcaption>Hotel</figcaption>
						</figure>
					</Link>

					<figure
						className="item text-center"
						data-bs-toggle="modal"
						data-bs-target="#serviceModal"
					>
						<div
							onClick={() => setShowModal(!showModal)}
							className="image rounded-full d-flex align-items-center justify-content-center m-auto"
						>
							<img
								src="/assets/images/home/category.png"
								alt="category"
								className="img-fluid backface-hidden"
							/>
						</div>
						<figcaption>More</figcaption>
					</figure>
				</section>

				<section className="visited py-12">
					<div className="title d-flex align-items-center justify-content-between">
						<h2 className="shrink-0">Frequently visited</h2>
						<div className="custom-pagination visited-pagination"></div>
					</div>

					<Swiper
						loop={true}
						slidesPerView={2}
						spaceBetween={16}
						pagination={{
							el: ".visited-pagination",
							clickable: true,
						}}
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
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-red.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>Tahiti Beach</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										Polynesia, French
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(32)</span>
										</p>
									</div>
								</div>
							</Link>
						</SwiperSlide>

						<SwiperSlide className="swiper-slide place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-2.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-black.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>St. Lucia Mountain</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										South America
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(41)</span>
										</p>
									</div>
								</div>
							</Link>
						</SwiperSlide>

						<SwiperSlide className="swiper-slide place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-1.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-red.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>Tahiti Beach</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										Polynesia, French
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(32)</span>
										</p>
									</div>
								</div>
							</Link>
						</SwiperSlide>

						<SwiperSlide className="swiper-slide place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-2.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-black.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>St. Lucia Mountain</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										South America
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(41)</span>
										</p>
									</div>
								</div>
							</Link>
						</SwiperSlide>
					</Swiper>
				</section>

				<section className="guide py-12">
					<div className="title d-flex align-items-center justify-content-between">
						<h2 className="shrink-0">Tour Guide</h2>
						<Link href="/tour-guide" className="shrink-0 d-inline-block">
							See All
						</Link>
					</div>

					<div className="d-flex gap-24 all-cards scrollbar-hidden">
						<Link
							href="/guide-profile"
							className="d-flex gap-16 item w-fit shrink-0"
						>
							<div className="image position-relative shrink-0">
								<img
									src="/assets/images/home/guide-1.png"
									alt="guide"
									className="guide-img object-fit-cover img-fluid radius-12"
								/>
								<div className="rating d-flex align-items-center gap-04 w-fit">
									<img src="/assets/svg/star-yellow.svg" alt="Star" />
									<span className="d-inline-block">4.0</span>
								</div>
							</div>

							<div className="content">
								<h4>Emilia Ricardo</h4>
								<h5>$25 (1 Day)</h5>
								<p className="d-flex align-items-center gap-8 location">
									<img src="/assets/svg/map-black.svg" alt="icon" />
									Polynesia, French
								</p>
							</div>
						</Link>

						<Link
							href="/guide-profile"
							className="d-flex gap-16 item w-fit shrink-0"
						>
							<div className="image position-relative shrink-0">
								<img
									src="/assets/images/home/guide-2.png"
									alt="guide"
									className="guide-img object-fit-cover img-fluid radius-12"
								/>
								<div className="rating d-flex align-items-center gap-04 w-fit">
									<img src="/assets/svg/star-yellow.svg" alt="Star" />
									<span className="d-inline-block">4.0</span>
								</div>
							</div>

							<div className="content">
								<h4>Jonsky Alexia</h4>
								<h5>$30 (1 Day)</h5>
								<p className="d-flex align-items-center gap-8 location">
									<img src="/assets/svg/map-black.svg" alt="icon" />
									South America
								</p>
							</div>
						</Link>
					</div>
				</section>

				<section className="budget pt-12">
					<div className="title d-flex align-items-center justify-content-between">
						<h2 className="shrink-0">On Budget Tour</h2>
						<Link href="/hotels" className="shrink-0 d-inline-block">
							See All
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
										<h4>Ledadu Beach</h4>
										<h5>3 days 2 nights</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											Australia
										</p>
									</div>
									<p className="price">
										<span>$20</span>/Person
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
										<h4>Endigada Beach</h4>
										<h5>5 days 4 nights</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											Australia
										</p>
									</div>
									<p className="price">
										<span>$25</span>/Person
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
