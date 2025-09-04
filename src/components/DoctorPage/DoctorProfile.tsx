  import React, { useState } from 'react';
  import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit, FiSave, FiX } from 'react-icons/fi';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Textarea } from '@/components/ui/textarea';

  const DoctorProfile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@hospital.com',
      phone: '+1 (555) 123-4567',
      specialization: 'Radiology',
      department: 'Radiology Department',
      hospital: 'General Hospital',
      address: '123 Medical Center Dr, City, State 12345',
      experience: '8 years',
      education: 'MD - Medical School, 2015\nResidency - Radiology, 2019',
      bio: 'Experienced radiologist specializing in diagnostic imaging and interventional procedures. Committed to providing accurate and timely diagnostic services.'
    });

    const [tempProfile, setTempProfile] = useState(profile);

    const handleEdit = () => {
      setTempProfile(profile);
      setIsEditing(true);
    };

    const handleSave = () => {
      setProfile(tempProfile);
      setIsEditing(false);
    };

    const handleCancel = () => {
      setTempProfile(profile);
      setIsEditing(false);
    };

    const handleInputChange = (field: string, value: string) => {
      setTempProfile(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const stats = [
      { label: 'Total Cases', value: '1,234' },
      { label: 'Completed Cases', value: '1,156' },
      { label: 'Success Rate', value: '93.7%' },
      { label: 'Experience', value: '8 years' }
    ];

    return (
      <div className="w-full p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
            {!isEditing ? (
              <Button onClick={handleEdit} className="flex items-center space-x-2">
                <FiEdit className="w-4 h-4" />
                <span>Edit Profile</span>
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button onClick={handleSave} className="flex items-center space-x-2 bg-green-600 hover:bg-green-700">
                  <FiSave className="w-4 h-4" />
                  <span>Save</span>
                </Button>
                <Button onClick={handleCancel} variant="outline" className="flex items-center space-x-2">
                  <FiX className="w-4 h-4" />
                  <span>Cancel</span>
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUser className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
                <p className="text-gray-600">{profile.specialization}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FiMail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{profile.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{profile.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{profile.hospital}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Profile Information</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    {isEditing ? (
                      <Input
                        value={tempProfile.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    {isEditing ? (
                      <Input
                        value={tempProfile.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    {isEditing ? (
                      <Input
                        value={tempProfile.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                    {isEditing ? (
                      <Input
                        value={tempProfile.specialization}
                        onChange={(e) => handleInputChange('specialization', e.target.value)}
                        className="w-full"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.specialization}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    {isEditing ? (
                      <Input
                        value={tempProfile.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                        className="w-full"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.department}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hospital</label>
                    {isEditing ? (
                      <Input
                        value={tempProfile.hospital}
                        onChange={(e) => handleInputChange('hospital', e.target.value)}
                        className="w-full"
                      />
                    ) : (
                      <p className="text-gray-900">{profile.hospital}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  {isEditing ? (
                    <Input
                      value={tempProfile.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  {isEditing ? (
                    <Input
                      value={tempProfile.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.experience}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                  {isEditing ? (
                    <Textarea
                      value={tempProfile.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                      className="w-full"
                      rows={3}
                    />
                  ) : (
                    <p className="text-gray-900 whitespace-pre-line">{profile.education}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  {isEditing ? (
                    <Textarea
                      value={tempProfile.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      className="w-full"
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-900">{profile.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default DoctorProfile;
