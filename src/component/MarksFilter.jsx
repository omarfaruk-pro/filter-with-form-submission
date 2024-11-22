

export default function MarksFilter({handleMarksFilter, marks}) {
  return (
    <>
        <div>
            <select defaultValue="" className="select select-bordered w-full" onChange={(event) => handleMarksFilter(event)}>
                <option disabled>Filter by Result</option>
                <option value="">All</option>
                {
                    marks.map((mark) => (
                        <option key={mark} value={mark}>{mark}</option>
                    ))
                }
            </select>
        </div>
    </>
  )
}
