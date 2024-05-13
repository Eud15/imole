"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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
						className="w-100 img-fluid"
					/>

					<div className="page-title">
						<button
							onClick={handleBack}
							type="button"
							className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
						</button>
						<h3 className="main-title">Vacation Details</h3>
					</div>
				</section>

				<section className="details-body">
					<section className="d-flex align-items-center gap-8 details-title">
						<div className="flex-grow">
							<h3>Taj Mahal</h3>
							<ul className="d-flex align-items-center gap-8">
								<li className="d-flex align-items-center gap-04">
									<img src="/assets/svg/map-marker.svg" alt="icon" />
									<p>Uttar Pradesh, India</p>
								</li>
								<li className="d-flex align-items-center gap-04">
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
									<p>
										<span>4.4</span> (41 Reviews)
									</p>
								</li>
							</ul>
						</div>
						<span className="d-flex align-items-center justify-content-center rounded-full shrink-0">
							<img src="/assets/svg/heart-red-light.svg" alt="" />
						</span>
					</section>

					<section className="details-info pt-32 pb-16">
						<div className="title">
							<h4>Details</h4>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac
							leo lorem nisl. Viverra vulputate sodales quis et dui, lacus.
							Iaculis eu egestas leo egestas vel. Ultrices ut magna nulla
							facilisi commodo enim, orci feugiat pharetra. Id sagittis,
							ullamcorper turpis ultrices platea pharetra.
						</p>
					</section>

					<section className="guide py-16">
						<div className="title">
							<h4>Tour Guide</h4>
						</div>

						<div className="d-flex gap-24 all-cards scrollbar-hidden">
							<Link
								href="/guide-profile"
								className="d-flex gap-16 item w-fit shrink-0"
							>
								<div className="image position-relative shrink-0">
									<img
										src="/assets/images/home/guide-3.png"
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
										src="/assets/images/home/guide-4.png"
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

					<section className="reviews py-16">
						<div className="title d-flex align-items-center justify-content-between">
							<h4 className="shrink-0">On Budget Tour</h4>
							<Link href="/review" className="shrink-0 d-inline-block">
								See All
							</Link>
						</div>

						<div className="review-card d-flex gap-16">
							<div className="shrink-0 image overflow-hidden rounded-full">
								<img
									src="/assets/images/details/avatar-1.png"
									alt="Avatar"
									className="img-fluid w-100"
								/>
							</div>

							<div className="flex-grow">
								<div className="d-flex align-items-center justify-content-between">
									<h4>Jhone Kenoady</h4>
									<span className="d-inline-block">23 Nov 2022</span>
								</div>
								<ul className="d-flex align-items-center gap-8">
									<li>
										<img src="/assets/svg/star-yellow.svg" alt="icon" />
									</li>
									<li>
										<img src="/assets/svg/star-yellow.svg" alt="icon" />
									</li>
									<li>
										<img src="/assets/svg/star-yellow.svg" alt="icon" />
									</li>
									<li>
										<img src="/assets/svg/star-yellow.svg" alt="icon" />
									</li>
									<li>
										<img src="/assets/svg/star-yellow.svg" alt="icon" />
									</li>
								</ul>
								<p>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>
						</div>
					</section>

					<section className="details-location pt-16">
						<div className="title">
							<h4>Location</h4>
						</div>

						<div className="overflow-hidden radius-16 map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846588.5514550178!2d-118.35899906676545!3d34.01855672774309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1701149305360!5m2!1sen!2sbd"
								style={{ border: 0 }}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</section>
				</section>

				<section className="details-footer d-flex align-items-center justify-content-between gap-8 w-100">
					<p>
						$32 <span>/Person</span>
					</p>
					<Link href="/checkout-vacation">Book Now</Link>
				</section>
			</main>
		</>
	);
};

export default VacationDetails;
