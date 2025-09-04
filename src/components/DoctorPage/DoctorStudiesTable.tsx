// import React, { useState } from 'react';
// import { FaEnvelope } from 'react-icons/fa';
// import { FiLink, FiFileText, FiImage, FiEye, FiSearch, FiRefreshCw, FiInfo } from 'react-icons/fi';
// import { BsInfoCircle } from 'react-icons/bs';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import PatientReport from './PatientReport';

// function PatientRowActions() {
//   const [showReport, setShowReport] = useState(false);

//   if (showReport) {
//     return (
//       <td colSpan={6} className="p-4 bg-white">
//         <PatientReport onBack={() => setShowReport(false)} />
//       </td>
//     );
//   }
// }

// interface Study {
//   orderId: string;
//   patientName: string;
//   gender: string;
//   study: string;
//   modality: string;
//   assignedTo: string;
//   status: 'pending' | 'active' | 'completed';
//   priority: 'ROUTINE' | 'NORMAL' | 'URGENT';
// }

// const studiesData: Study[] = [
//   {
//     orderId: '34e27dd850fa',
//     patientName: 'MALLA BINDU',
//     gender: 'F',
//     study: 'Extremities (MSK)',
//     modality: 'MRI',
//     assignedTo: 'Telerad Providers',
//     status: 'completed',
//     priority: 'ROUTINE'
//   },
//   {
//     orderId: 'E2138ae25e8a',
//     patientName: 'JINCY',
//     gender: 'F',
//     study: 'Extremities (MSK)',
//     modality: 'MRI',
//     assignedTo: 'Dr Gopinath',
//     status: 'completed',
//     priority: 'URGENT'
//   },
//   {
//     orderId: 'Baa41f844d57',
//     patientName: 'RAM PRASAD 45/M',
//     gender: 'M',
//     study: 'Chest',
//     modality: 'CT',
//     assignedTo: 'Dr Gopinath',
//     status: 'completed',
//     priority: 'URGENT'
//   },
//   {
//     orderId: '4cf869248293',
//     patientName: 'KASTURI',
//     gender: 'F',
//     study: 'Brain (Plain Study)',
//     modality: 'CT',
//     assignedTo: 'Select',
//     status: 'active',
//     priority: 'ROUTINE'
//   },
//   {
//     orderId: '97bfca30510',
//     patientName: 'PRATHAM 4 MONTHS',
//     gender: 'M',
//     study: 'Radiograph',
//     modality: 'XRay',
//     assignedTo: 'Select',
//     status: 'active',
//     priority: 'NORMAL'
//   },
//   {
//     orderId: 'pending001',
//     patientName: 'JOHN DOE',
//     gender: 'M',
//     study: 'Brain (Plain Study)',
//     modality: 'CT',
//     assignedTo: 'Unassigned',
//     status: 'pending',
//     priority: 'URGENT'
//   },
//   {
//     orderId: 'pending002',
//     patientName: 'JANE SMITH',
//     gender: 'F',
//     study: 'Chest X-Ray',
//     modality: 'XRay',
//     assignedTo: 'Unassigned',
//     status: 'pending',
//     priority: 'NORMAL'
//   },
//   {
//     orderId: 'pending003',
//     patientName: 'MIKE JOHNSON',
//     gender: 'M',
//     study: 'Abdominal CT',
//     modality: 'CT',
//     assignedTo: 'Unassigned',
//     status: 'pending',
//     priority: 'ROUTINE'
//   }
// ];

// interface DoctorStudiesTableProps {
//   statusFilter: 'pending' | 'active' | 'completed';
//   title: string;
// }

// const DoctorStudiesTable: React.FC<DoctorStudiesTableProps> = ({ statusFilter, title }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   // Doctor names for dropdown
//   const doctorNames = [
//     'Dr. Gopinath',
//     'Dr. Prem Kumar',
//     'Dr. Sarah Johnson',
//     'Dr. Michael Chen',
//     'Dr. Priya Sharma',
//     'Dr. Arvind Menon',
//     'Telerad Providers',
//     'Quest Teleradiology Solutions'
//   ];

//   const filteredData = studiesData.filter(study => {
//     // Status filter
//     if (study.status !== statusFilter) return false;

//     // Text search filter
//     const matchesSearch = searchTerm === '' || 
//       study.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       study.orderId.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesSearch;
//   });

//   const handleSearch = () => {
//     // Search functionality is already handled by the filteredData logic above
//   };

//   const handleRefresh = () => {
//     setSearchTerm('');
//     setStartDate('');
//     setEndDate('');
//   };

//   const handleViewStudy = () => {
//     window.open('https://viewer.ohif.org/viewer?StudyInstanceUIDs=2.16.840.1.114362.1.11972228.22789312658.616067305.306.2', '_blank');
//   };

//   const handleActionClick = (action: string) => {
//     // Replace with actual URLs based on your requirements
//     const actionUrls = {
//       email: 'mailto:example@email.com',
//       lock: '/secure-access',
//       edit: '/edit-study',
//       view: '/view-details',
//     };
    
//     if (actionUrls[action as keyof typeof actionUrls]) {
//       window.open(actionUrls[action as keyof typeof actionUrls], '_blank');
//     }
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'active':
//         return 'bg-blue-100 text-blue-800';
//       case 'completed':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="px-6 py-4 border-b border-medical-gray-200">
//         <div className="flex items-center mb-4">
//           <div className="w-6 h-6 bg-medical-gray-200 rounded mr-3"></div>
//           <h2 className="text-lg font-medium text-medical-gray-700">{title}</h2>
//         </div>
//         <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between w-full">
//           <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
//             <div className="flex flex-col">
//               <label className="text-xs text-medical-gray-600 mb-1">Search</label>
//               <div className="relative w-full max-w-md">
//                 <Input
//                   type="text"
//                   placeholder="Search by Order Id, Patient Name"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-4 pr-16 h-10 border-medical-gray-300 w-[400px] min-w-full"
//                 />
//                 <Button
//                   variant="default"
//                   size="sm"
//                   className="absolute right-2 top-1 h-8 px-3 bg-medical-blue hover:bg-medical-blue-dark"
//                 >
//                   <FiSearch className="w-4 h-4" />
//                   <span className="ml-1 hidden sm:inline">Search</span>
//                 </Button>
//               </div>
//             </div>
//             <div className="flex gap-2 items-center">
//               <div className="flex flex-col">
//                 <label className="text-xs text-medical-gray-600 mb-1">Start Date</label>
//                 <Input
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   className="h-10 w-40 border-medical-gray-300"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="text-xs text-medical-gray-600 mb-1">End Date</label>
//                 <Input
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   className="h-10 w-40 border-medical-gray-300"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="h-4 mb-1"></div>
//                 <Button
//                   variant="default"
//                   size="sm"
//                   onClick={handleSearch}
//                   className="h-10 px-3 bg-medical-blue hover:bg-medical-blue-dark"
//                 >
//                   <FiSearch className="w-4 h-4" />
//                   <span className="ml-1 hidden sm:inline">Search</span>
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-end w-full lg:w-auto ">
//             <div className="h-4 mb-1"></div>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleRefresh}
//               className="h-10 px-3  text-medical-gray-600 text-white bg-medical-blue hover:bg-medical-blue-dark"
//             >
//               <FiRefreshCw className="w-4 h-4 "/>
//               <span className="ml-1 hidden sm:inline">Refresh</span>
//             </Button>
//           </div>
//         </div>
//       </div>
     
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200 table-fixed">
//             <thead className="bg-medical-gray-50">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Order ID</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Patient Name</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Gender</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Study</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Modality</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Assigned To</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Status</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Priority</th>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">
//                   <div className="flex justify-center space-x-1">
//                     <span className="px-2 flex items-center justify-center"><FaEnvelope className="w-4 h-4" /></span>
//                     <span className="px-2 flex items-center justify-center"><FiLink className="w-4 h-4" /></span>
//                     <span className="px-2 flex items-center justify-center"><FiFileText className="w-4 h-4" /></span>
//                     <span className="px-2 flex items-center justify-center"><BsInfoCircle className="w-4 h-4" /></span>
//                   </div>
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider">Action</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-medical-gray-200">
//               {filteredData.map((study) => (
//                 <tr key={study.orderId} className="hover:bg-medical-gray-50">
//                   <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-blue font-medium border-r border-medical-gray-200">{study.orderId}</td>
//                   <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">{study.patientName}</td>
//                   <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">{study.gender}</td>
//                   <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-blue border-r border-medical-gray-200">{study.study}</td>
//                   <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">{study.modality}</td>
//                   {/* <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">
//                     {statusFilter === 'pending' ? (
//                       <Select>
//                         <SelectTrigger className="h-8 w-full text-sm border-medical-gray-300">
//                           <SelectValue placeholder={study.assignedTo} />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {doctorNames.map((doctor) => (
//                             <SelectItem key={doctor} value={doctor}>
//                               {doctor}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     ) : (
//                       study.assignedTo
//                     )}
//                   </td> */}
// <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">
//   {doctorNames[0]}
// </td>


//                   <td className="px-4 py-4 whitespace-nowrap border-r border-medical-gray-200">
//                     <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(study.status)}`}>
//                       {study.status.toUpperCase()}
//                     </span>
//                   </td>
//                   <td className="px-4 py-4 whitespace-nowrap border-r border-medical-gray-200">
//                     <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${study.priority === 'URGENT' ? 'bg-red-100 text-red-800' : study.priority === 'NORMAL' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>{study.priority}</span>
//                   </td>
//                   {/* <td className="px-4 py-4 whitespace-nowrap text-sm border-r border-medical-gray-200">
//                     <div className="flex justify-center bg-white rounded overflow-hidden space-x-1">
//                       <button className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded" title="Email"><FaEnvelope className="w-4 h-4" /></button>
//                       <button className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded" title="Lock"><FiLink className="w-4 h-4" /></button>
//                       <button onClick={() => setActiveTab("Report")} className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded" title="Edit"><FiFileText className="w-4 h-4" /></button>
//                       <button className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-200 p-1 focus:outline-none rounded" title="View Details"><BsInfoCircle className="w-4 h-4" /></button>
//                     </div>
//                   </td> */}





//     <td className="px-4 py-4 whitespace-nowrap text-sm border-r border-medical-gray-200">
//       <div className="flex justify-center bg-white rounded overflow-hidden space-x-1">
//         <button
//           className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded"
//           title="Email"
//         >
//           <FaEnvelope className="w-4 h-4" />
//         </button>

//         <button
//           className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded"
//           title="Lock"
//         >
//           <FiLink className="w-4 h-4" />
//         </button>

//         {/* EDIT BUTTON — opens PatientReport */}
//         <button
//           onClick={() => setShowReport(true)}
//           className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded"
//           title="Edit"
//         >
//           <FiFileText className="w-4 h-4" />
//         </button>
//         <button
//           className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-200 p-1 focus:outline-none rounded"
//           title="View Details"
//         >
//           <BsInfoCircle className="w-4 h-4" />
//         </button>
//       </div>
//     </td>
                 
               
                  
//                   <td className="px-4 py-2 text-sm">
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="text-white bg-medical-blue hover:bg-medical-blue-dark flex items-center gap-1"
//                       onClick={() => handleViewStudy(study.orderId)}
//                     >
//                       <FiEye className="h-4 w-4" />
//                       <span>Viewer</span>
//                     </Button>
//                   </td>
//                 </tr>
                
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorStudiesTable;





import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FiLink, FiFileText, FiImage, FiEye, FiSearch, FiRefreshCw, FiInfo } from 'react-icons/fi';
import { BsInfoCircle } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PatientReport, { PatientInfo } from './PatientReport';

interface Study {
  orderId: string;
  patientName: string;
  gender: string;
  study: string;
  modality: string;
  assignedTo: string;
  status: 'pending' | 'active' | 'completed';
  priority: 'ROUTINE' | 'NORMAL' | 'URGENT';
}

const studiesData: Study[] = [
  {
    orderId: '34e27dd850fa',
    patientName: 'MALLA BINDU',
    gender: 'F',
    study: 'Extremities (MSK)',
    modality: 'MRI',
    assignedTo: 'Telerad Providers',
    status: 'completed',
    priority: 'ROUTINE'
  },
  {
    orderId: 'E2138ae25e8a',
    patientName: 'JINCY',
    gender: 'F',
    study: 'Extremities (MSK)',
    modality: 'MRI',
    assignedTo: 'Dr Gopinath',
    status: 'completed',
    priority: 'URGENT'
  },
  {
    orderId: 'Baa41f844d57',
    patientName: 'RAM PRASAD 45/M',
    gender: 'M',
    study: 'Chest',
    modality: 'CT',
    assignedTo: 'Dr Gopinath',
    status: 'completed',
    priority: 'URGENT'
  },
  {
    orderId: '4cf869248293',
    patientName: 'KASTURI',
    gender: 'F',
    study: 'Brain (Plain Study)',
    modality: 'CT',
    assignedTo: 'Select',
    status: 'active',
    priority: 'ROUTINE'
  },
  {
    orderId: '97bfca30510',
    patientName: 'PRATHAM 4 MONTHS',
    gender: 'M',
    study: 'Radiograph',
    modality: 'XRay',
    assignedTo: 'Select',
    status: 'active',
    priority: 'NORMAL'
  },
  {
    orderId: 'pending001',
    patientName: 'JOHN DOE',
    gender: 'M',
    study: 'Brain (Plain Study)',
    modality: 'CT',
    assignedTo: 'Unassigned',
    status: 'pending',
    priority: 'URGENT'
  },
  {
    orderId: 'pending002',
    patientName: 'JANE SMITH',
    gender: 'F',
    study: 'Chest X-Ray',
    modality: 'XRay',
    assignedTo: 'Unassigned',
    status: 'pending',
    priority: 'NORMAL'
  },
  {
    orderId: 'pending003',
    patientName: 'MIKE JOHNSON',
    gender: 'M',
    study: 'Abdominal CT',
    modality: 'CT',
    assignedTo: 'Unassigned',
    status: 'pending',
    priority: 'ROUTINE'
  }
];

interface DoctorStudiesTableProps {
  statusFilter: 'pending' | 'active' | 'completed';
  title: string;
}

const DoctorStudiesTable: React.FC<DoctorStudiesTableProps> = ({ statusFilter, title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Which study's report is currently open (orderId), null means none.
  const [openReportOrderId, setOpenReportOrderId] = useState<string | null>(null);

  // Doctor names for dropdown
  const doctorNames = [
    'Dr. Gopinath',
    'Dr. Prem Kumar',
    'Dr. Sarah Johnson',
    'Dr. Michael Chen',
    'Dr. Priya Sharma',
    'Dr. Arvind Menon',
    'Telerad Providers',
    'Quest Teleradiology Solutions'
  ];

  const filteredData = studiesData.filter(study => {
    // Status filter
    if (study.status !== statusFilter) return false;

    // Text search filter
    const matchesSearch = searchTerm === '' ||
      study.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.orderId.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const handleSearch = () => {
    // no-op because filtering is live (keeps your existing UI)
  };

  const handleRefresh = () => {
    setSearchTerm('');
    setStartDate('');
    setEndDate('');
    setOpenReportOrderId(null);
  };

  const handleViewStudy = (orderId?: string) => {
    // If you want to open specific viewer per study, use orderId to build URL.
    window.open('https://viewer.ohif.org/viewer?StudyInstanceUIDs=2.16.840.1.114362.1.11972228.22789312658.616067305.306.2', '_blank');
  };

  const handleActionClick = (action: string) => {
    const actionUrls = {
      email: 'mailto:example@email.com',
      lock: '/secure-access',
      edit: '/edit-study',
      view: '/view-details',
    };

    if (actionUrls[action as keyof typeof actionUrls]) {
      window.open(actionUrls[action as keyof typeof actionUrls], '_blank');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // columns count to use for colSpan when showing expanded report row
  const TOTAL_TABLE_COLUMNS = 11; // adjust if you add/remove columns

  return (
    <div className="w-full">
      <div className="px-6 py-4 border-b border-medical-gray-200">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-medical-gray-200 rounded mr-3"></div>
          <h2 className="text-lg font-medium text-medical-gray-700">{title}</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between w-full">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex flex-col">
              <label className="text-xs text-medical-gray-600 mb-1">Search</label>
              <div className="relative w-full max-w-md">
                <Input
                  type="text"
                  placeholder="Search by Order Id, Patient Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-4 pr-16 h-10 border-medical-gray-300 w-[400px] min-w-full"
                />
                <Button
                  variant="default"
                  size="sm"
                  className="absolute right-2 top-1 h-8 px-3 bg-medical-blue hover:bg-medical-blue-dark"
                  onClick={handleSearch}
                >
                  <FiSearch className="w-4 h-4" />
                  <span className="ml-1 hidden sm:inline">Search</span>
                </Button>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <label className="text-xs text-medical-gray-600 mb-1">Start Date</label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="h-10 w-40 border-medical-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-medical-gray-600 mb-1">End Date</label>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="h-10 w-40 border-medical-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <div className="h-4 mb-1"></div>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleSearch}
                  className="h-10 px-3 bg-medical-blue hover:bg-medical-blue-dark"
                >
                  <FiSearch className="w-4 h-4" />
                  <span className="ml-1 hidden sm:inline">Search</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end w-full lg:w-auto ">
            <div className="h-4 mb-1"></div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              className="h-10 px-3  text-medical-gray-600 text-white bg-medical-blue hover:bg-medical-blue-dark"
            >
              <FiRefreshCw className="w-4 h-4 "/>
              <span className="ml-1 hidden sm:inline">Refresh</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-fixed">
            <thead className="bg-medical-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Order ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Patient Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Gender</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Study</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Modality</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Assigned To</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">Priority</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-medical-gray-500 uppercase tracking-wider border-r border-medical-gray-200">
                  <div className="flex justify-center space-x-1">
                    <span className="px-2 flex items-center justify-center"><FaEnvelope className="w-4 h-4" /></span>
                    <span className="px-2 flex items-center justify-center"><FiLink className="w-4 h-4" /></span>
                    <span className="px-2 flex items-center justify-center"><FiFileText className="w-4 h-4" /></span>
                    <span className="px-2 flex items-center justify-center"><BsInfoCircle className="w-4 h-4" /></span>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-medical-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-medical-gray-200">
              {filteredData.map((study) => (
                <React.Fragment key={study.orderId}>
                  <tr className="hover:bg-medical-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-blue font-medium border-r border-medical-gray-200">{study.orderId}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">{study.patientName}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">{study.gender}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-blue border-r border-medical-gray-200">{study.study}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">{study.modality}</td>

                    {/* assignedTo placeholder kept identical to your original */}
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-medical-gray-700 border-r border-medical-gray-200">
                      {doctorNames[0]}
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap border-r border-medical-gray-200">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(study.status)}`}>
                        {study.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap border-r border-medical-gray-200">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${study.priority === 'URGENT' ? 'bg-red-100 text-red-800' : study.priority === 'NORMAL' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>{study.priority}</span>
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap text-sm border-r border-medical-gray-200">
                      <div className="flex justify-center bg-white rounded overflow-hidden space-x-1">
                        <button className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded" title="Email"><FaEnvelope className="w-4 h-4" /></button>
                        <button className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded" title="Lock"><FiLink className="w-4 h-4" /></button>
                        <button
                          onClick={() => {
                            // toggle: if clicking same row, close it; otherwise open the clicked row
                            setOpenReportOrderId(prev => prev === study.orderId ? null : study.orderId);
                            // scrolling or focus logic could be added here if you wish
                          }}
                          className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-100 p-1 focus:outline-none rounded"
                          title="Edit"
                        >
                          <FiFileText className="w-4 h-4" />
                        </button>
                        <button className="px-2 flex items-center justify-center text-gray-600 hover:bg-medical-gray-200 p-1 focus:outline-none rounded" title="View Details"><BsInfoCircle className="w-4 h-4" /></button>
                      </div>
                    </td>

                    <td className="px-4 py-2 text-sm">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white bg-medical-blue hover:bg-medical-blue-dark flex items-center gap-1"
                        onClick={() => handleViewStudy(study.orderId)}
                      >
                        <FiEye className="h-4 w-4" />
                        <span>Viewer</span>
                      </Button>
                    </td>
                  </tr>

                  {/* Expanded report row: shown when openReportOrderId === study.orderId */}
                  {openReportOrderId === study.orderId && (
                    <tr className="bg-white">
                      <td colSpan={TOTAL_TABLE_COLUMNS} className="p-4 border-t">
                        <PatientReport
                          patient={{
                            name: study.patientName,
                            id: study.orderId,
                            gender: study.gender,
                            study: study.study,
                            referringDoctor: "Test",
                            patientType: "Outpatient",
                            ageDOB: "",
                            modality: study.modality,
                            date: "Mar 23, 2017",
                          } as PatientInfo}
                          onBack={() => setOpenReportOrderId(null)}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorStudiesTable;
