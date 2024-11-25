import { Droplet,User,Hand } from "lucide-react";

const TopStats=()=>{
    return(
        <div className="grid grid-cols-4 gap-6 mb-8">
        {/* Donors */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
            <Droplet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">200</h3>
            <p className="text-gray-500">Donors</p>
          </div>
        </div>

        {/* Volunteers */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">200</h3>
            <p className="text-gray-500">Volunteers</p>
          </div>
        </div>

        {/* Volunteer Requests */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
            <Hand className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">20</h3>
            <p className="text-gray-500">Volunteer requests</p>
          </div>
        </div>
      </div>
    )
}

export default TopStats;