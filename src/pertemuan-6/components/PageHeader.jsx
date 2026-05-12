export default function PageHeader() {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold	Ukuran besar untuk title.">
                    Dashboard
                </span>
                <div id="breadcrumb-links" className="text-3xl font-semibold	Ukuran besar untuk title.">
                    <span id="breadcrumb-home" className="text-3xl font-semibold	Ukuran besar untuk title.">Dashboard</span>
                    <span id="breadcrumb-separator" className="text-3xl font-semibold	Ukuran besar untuk title.">/</span>
                    <span id="breadcrumb-current" className="text-3xl font-semibold	Ukuran besar untuk title.">Order List</span>
                </div>
            </div>
            <div id="action-button">
                <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg">
		                Add Button
		            </button>
            </div>
        </div>
    );
}