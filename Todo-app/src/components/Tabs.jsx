

export default function Tabs() {

    const tab = ["All", "Running", "Completed"]
  return (
    <nav className="flex gap-4 p-4">

        { tab.map((tab, index)=>{ 
            return ( 
                <button className="px-8 py-1 bg-gray-600 text-white rounded-md"
                     key={index}>
                    <h4>{tab} 
                      <span className="text-gray-300">(0)</span>
                    </h4>
                </button>
            )
         }) }
    </nav>
  )
}
