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
						<h3 className="main-title">Vidéo</h3>
					</div>
				</section>

				<section className="details-body">
					<section className="d-flex align-items-center gap-8 details-title">
						<div className="flex-grow">
							<h3>Transcription</h3>
							
						</div>
						
					</section>

					<section className="details-info pt-32 pb-16">
						
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac
							leo lorem nisl. Viverra vulputate sodales quis et dui, lacus.
							Iaculis eu egestas leo egestas vel. Ultrices ut magna nulla
							facilisi commodo enim, orci feugiat pharetra. Id sagittis,
							ullamcorper turpis ultrices platea pharetra.
						</p>
					</section>

					
				
				</section>

				<section className="details-footer d-flex align-items-center justify-content-between gap-8 w-100">
					<p>
						Fon <span></span>
					</p>
					<Link href="/checkout-vacation">Doubler</Link>
				</section>
			</main>
		</>
	);
};

export default VacationDetails;
