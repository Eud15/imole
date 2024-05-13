import Link from "next/link";
import React from "react";

const InfoArea = () => {
	return (
		<>
			<section className="info d-flex align-items-start justify-content-between pb-12">
				<div className="d-flex align-items-center justify-content-between gap-14">
					<div className="image shrink-0 rounded-full overflow-hidden">
						<img
							src="/assets/images/home/avatar.png"
							alt="avatar"
							className="w-100 h-100 object-fit-cover"
						/>
					</div>
					<div>
						<h3>Hi, Andy</h3>
						<p className="d-flex align-items-center gap-04">
							<img src="/assets/svg/map-marker.svg" alt="icon" />
							Netherlands
						</p>
					</div>
				</div>

				<ul className="d-flex align-items-center gap-16">
					<li>
						<Link
							href="/notification"
							className="d-flex align-items-center justify-content-center rounded-full position-relative"
						>
							<img src="/assets/svg/bell-black.svg" alt="icon" />
							<span className="dot"></span>
						</Link>
					</li>
					<li>
						<Link
							href="/message"
							className="d-flex align-items-center justify-content-center rounded-full position-relative"
						>
							<img src="/assets/svg/message-square-dots.svg" alt="icon" />
							<span className="dot"></span>
						</Link>
					</li>
				</ul>
			</section>
		</>
	);
};

export default InfoArea;
