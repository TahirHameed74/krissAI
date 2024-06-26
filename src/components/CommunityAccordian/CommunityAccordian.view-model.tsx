import { useCallback, useState } from "react";

function useCommunityViewModel() {
	const [show, setShow] = useState(false);

	const handleClick = useCallback(() => {
		setShow(!show);
	}, [show]);
	return {
		show,
		setShow,
		handleClick,
	};
}

export default useCommunityViewModel;
