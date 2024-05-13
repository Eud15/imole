"use client";

import { useRouter } from "next/navigation";
import React from "react";

const TicketDetail = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="ticket-detail">
				<div className="page-title">
					<button
						onClick={handleBack}
						type="button"
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Detail Ticket</h3>
				</div>

				<div className="details-body">
					<div className="invoice-number d-flex align-items-center justify-content-between pb-20">
						<p>INV1273436347</p>
						<span>Will Come</span>
					</div>

					<section className="order-card py-12">
						<div className="item d-flex align-items-center gap-16 w-100">
							<div className="image shrink-0 overflow-hidden radius-8">
								<img
									src="/assets/images/booking/loc-3.png"
									alt="Place"
									className="img-fluid w-100 h-100 object-fit-cover"
								/>
							</div>

							<div className="content flex-grow">
								<h4>The Lalit New Delhi</h4>
								<p className="d-flex align-items-center gap-04 location mt-04">
									<img src="/assets/svg/map-marker.svg" alt="icon" />
									Uttar Pradesh, India
								</p>
								<p className="rating d-flex align-items-center gap-04 mt-16">
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
									4.4 <span>(41)</span>
								</p>
							</div>
						</div>
					</section>

					<section className="customer-info py-12">
						<div className="title mb-16">
							<h4>Customer Info</h4>
						</div>

						<ul>
							<li className="d-flex align-items-center justify-content-between">
								<p>Name</p>
								<p>Andy Lexian</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Email</p>
								<p>example@mail.com</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Payment</p>
								<p>Mastercard</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Status</p>
								<p className="success">Success</p>
							</li>
						</ul>
					</section>

					<section className="customer-info pt-12 pb-24">
						<div className="title mb-16">
							<h4>Order Info</h4>
						</div>

						<ul>
							<li className="d-flex align-items-center justify-content-between">
								<p>length of stay</p>
								<p>3 days 2 nights</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Check In</p>
								<p>June 12, 2022</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Check Out</p>
								<p>June 14, 2022</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Type Room</p>
								<p>Presidential Suite</p>
							</li>
						</ul>
					</section>

					<div className="price border-t d-flex align-items-center justify-content-between pt-24 pb-12">
						<p>Total</p>
						<p>
							<span>$320</span>
						</p>
					</div>

					<div className="price d-flex align-items-center justify-content-between py-12">
						<p>Code Promo</p>
						<p>
							<span>HEZORKS</span>
						</p>
					</div>

					<div className="price promo-price border-b pb-24 promo-price d-flex align-items-center justify-content-between pt-12 pb-24">
						<p>Promo</p>
						<p>
							<span>-$20</span>
						</p>
					</div>

					<div className="price d-flex align-items-center justify-content-between pt-24">
						<p>Total Pay</p>
						<p>
							<span>$300</span>
						</p>
					</div>

					<div className="download-btn mt-64">
						<button type="button" className="btn-primary">
							Download PDF
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default TicketDetail;
