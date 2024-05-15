export default function CheckResultsComponent({startAgain, results}) {
    return (
        <>
            {
                results.map((result, idx) => {
                    return (
                        <div key={idx}>
                            <div>{result.name}------{result.outputValue}</div>
                            <br/>
                        </div>
                    )
                })
            }
            <button
                onClick={startAgain}
            >
                start again
            </button>
        </>
    )
}