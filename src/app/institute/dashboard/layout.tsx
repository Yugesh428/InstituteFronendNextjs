import Dashboard from "@/lib/component/dashboard/dashboard"


function InstituteDashboardLayout({children}:Readonly<{children : React.ReactNode}>){
    return(
        <Dashboard>
            {children}
        </Dashboard>
    )
}


export default InstituteDashboardLayout