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
						<h3 className="main-title">Vidéo</h3>
					</div>
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
