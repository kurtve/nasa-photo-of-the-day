import React from "react";

const Button = (props) => {

	return (
		<div onClick={() => props.handler(props.name)} className={props.class}>
			<code>{props.char}</code>
		</div>
	);

};

export default Button;
