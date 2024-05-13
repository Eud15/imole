"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ChatArea = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			<main className="chat">
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Richar Kandowen</h3>
					<div className="dropdown">
						<button
							type="button"
							onClick={() => handleOpen()}
							className={`more-btn d-flex align-items-center justify-content-center rounded-full ${
								open ? "show" : ""
							}`}
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img src="/assets/svg/more.svg" alt="arrow" />
						</button>

						<ul
							className={`dropdown-menu ${open ? "show" : ""}`}
							style={{
								position: "absolute",
								inset: "0px 0px auto auto",
								margin: "0px",
								transform: "translate(-35px, 50px)",
							}}
						>
							<li>
								<Link className="dropdown-item" href="/audio-call">
									<img src="/assets/svg/voice-call.svg" alt="call" />
									Voice Call
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="/video-call">
									<img src="/assets/svg/video-call.svg" alt="video" />
									Video Call
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<section className="inbox px-24">
					<ul>
						<li className="left d-flex gap-12">
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
									Lorem ipsum dolor sit et, consectetur adipiscing.
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
						</li>

						<li className="right d-flex flex-row-reverse gap-12">
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
									Lorem ipsum dolor sit et, consectetur adipiscing.
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
						</li>

						<li className="left d-flex gap-12">
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
									Lorem ipsum dolor sit et, consectetur adipiscing.
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
						</li>

						<li className="left d-flex gap-12">
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
									Lorem ipsum dolor sit et, consectetur adipiscing.
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
						</li>

						<li className="right d-flex flex-row-reverse gap-12">
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
									Lorem ipsum dolor sit et, consectetur adipiscing.
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
						</li>
						<li className="left d-flex gap-12">
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
									Lorem ipsum dolor sit et, consectetur adipiscing.
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
						</li>

						<li className="right d-flex flex-row-reverse gap-12">
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
									Lorem ipsum dolor sit et, consectetur adipiscing.
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
						</li>
					</ul>
				</section>

				<section className="type-msg">
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="d-flex align-items-center gap-8 type-main">
							<label htmlFor="input-file" className="input-file-label shrink-0">
								<input type="file" id="input-file" />
								<span className="d-flex align-items-center justify-content-center rounded-full">
									<img src="/assets/svg/paperclip.svg" alt="icon" />
								</span>
							</label>

							<input
								type="text"
								placeholder="Message"
								className="flex-grow input-msg"
							/>

							<button
								type="button"
								className="d-flex align-items-center justify-content-center rounded-full shrink-0"
							>
								<img src="/assets/svg/send.svg" alt="icon" />
							</button>
						</div>
					</form>
				</section>
			</main>
		</>
	);
};

export default ChatArea;
