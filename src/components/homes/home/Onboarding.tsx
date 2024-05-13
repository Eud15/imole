"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import arrow_circle from "@/assets/svg/arrow-circle.svg";
import onboarding_img_1 from "@/assets/images/onboarding/slide-1.png";
import onboarding_img_2 from "@/assets/images/onboarding/slide-2.png";
import onboarding_img_3 from "@/assets/images/onboarding/slide-3.png";
import onboarding_img_4 from "@/assets/images/onboarding/welcome.png";

const onboarding_data = [
	{
		id: 1,
		image: onboarding_img_1,
		title: "Best travel destinations in the world",
		description:
			"Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id semiru forigive you.",
	},
	{
		id: 2,
		image: onboarding_img_2,
		title: "Best travel destinations in the world",
		description:
			"Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id semiru forigive you.",
	},
	{
		id: 3,
		image: onboarding_img_3,
		title: "Best travel destinations in the world",
		description:
			"Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id semiru forigive you.",
	},
	{
		id: 4,
		image: onboarding_img_4,
		title: "Best travel destinations in the world",
		description:
			"Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id semiru forigive you.",
	},
];

const Onboarding = () => {
	return (
		<>
			<section className="onboarding">
				<Swiper className="swiper onboarding-swiper">
					{onboarding_data.map((item, i) => (
						<SwiperSlide key={i} className="swiper-slide">
							<div className="image position-relative">
								<Image
									src={item.image}
									alt="Slide"
									className="w-100 h-100 object-fit-cover"
								/>
							</div>
							<div className="content text-center">
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								{i === 3 ? (
									<>
										<Link
											href="/signin"
											className="btn-primary btn-get-started"
										>
											Get Started
										</Link>
										<h6>
											Do not have an account?{" "}
											<Link href="/signup">Register</Link>
										</h6>
									</>
								) : null}
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="slider-footer">
					<div className="row align-items-center">
						<div className="col-6">
							<button type="button" className="skip-btn">
								<Image src={arrow_circle} alt="Arrow" />
								Skip
							</button>
						</div>
						<div className="col-6">
							<div className="custom-pagination swiper-pagination"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Onboarding;
