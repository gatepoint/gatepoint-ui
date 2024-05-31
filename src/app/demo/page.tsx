"use client";

export default function Demo() {
    const callAPI = async () => {
		try {
			const res = await fetch(
				`http://localhost:8081/api/v1/token`
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

    return (
		<div>
			<main>
				<button onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	);
}
