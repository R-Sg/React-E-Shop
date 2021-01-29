import React from "react";


const HeaderTop = () => {

    const phone = "+91 82 69 10 3161"
    const mail = "rohit.bhati.96995@gmail.com"

    return (
        <>
    {/* <!--header--> */}
	<header id="header">
        {/* <!--header_top--> */}
		<div className="header_top">
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<div className="contactinfo">
							<ul className="nav nav-pills">
								<li><a href="#"><i className="fa fa-phone"></i> {phone}</a></li>
								<li><a href="#"><i className="fa fa-envelope"></i> {mail}</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        {/* <!--/header_top--> */}
        </header>
        </>
    )
}

export default HeaderTop