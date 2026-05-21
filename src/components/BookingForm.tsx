/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Share2, MessageSquare, AlertCircle, CheckCircle2, Calendar, User, ShieldCheck, Trash2, Clock } from 'lucide-react';
import { BookingFormInput } from '../types';

interface StoredAppointment extends BookingFormInput {
  id: string;
  careCenter?: string;
  createdAt: string;
}

interface BookingFormProps {
  initialCenterName?: string;
}

// Generate randomized particle presets for celebration burst
const particles = Array.from({ length: 28 }).map((_, i) => {
  const angle = (i * 360) / 28 + (Math.random() * 10 - 5);
  const distance = 70 + Math.random() * 100;
  // Calculate polar coordinates
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * distance;
  const y = Math.sin(rad) * distance;
  
  const colors = ['#2FB7B1', '#F97316', '#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#EC4899'];
  const color = colors[i % colors.length];
  const size = 6 + Math.random() * 8;
  const isCircle = Math.random() > 0.55;
  const delay = Math.random() * 0.15;
  const rotation = Math.random() * 360;

  return { id: i, x, y, color, size, isCircle, delay, rotation };
});

const particleVariants = {
  hidden: { scale: 0, x: 0, y: 0, opacity: 0, rotate: 0 },
  visible: (p: typeof particles[0]) => ({
    scale: [0, 1.2, 1, 0.6, 0],
    x: [0, p.x * 0.9, p.x, p.x],
    y: [0, p.y * 0.9, p.y + 40, p.y + 70], // slight gravity fall effect
    opacity: [0, 1, 1, 0.7, 0],
    rotate: [0, p.rotation / 2, p.rotation, p.rotation * 1.5],
    transition: {
      duration: 1.8,
      delay: p.delay,
      ease: [0.1, 0.8, 0.3, 1]
    }
  })
};

const checkIconVariants = {
  hidden: { scale: 0, rotate: -60 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: 'spring', 
      stiffness: 180, 
      damping: 12,
      delay: 0.1
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.4, 1.6],
    opacity: [0.5, 0.2, 0],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeOut"
    }
  }
};

export default function BookingForm({ initialCenterName = '' }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormInput>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    sex: '',
    preferredDateTime: ''
  });
  
  const [errors, setErrors] = useState<Partial<BookingFormInput>>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [appointments, setAppointments] = useState<StoredAppointment[]>(() => {
    try {
      const saved = localStorage.getItem('shivashakthi_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Remove individual error as user types
    if (errors[name as keyof BookingFormInput]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    const incomingErrors: Partial<BookingFormInput> = {};
    if (!formData.fullName.trim()) incomingErrors.fullName = 'Please state your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) incomingErrors.email = 'Please state a valid email.';
    if (!formData.phone.trim() || formData.phone.length < 8) incomingErrors.phone = 'Valid phone is required.';
    if (!formData.age.trim() || isNaN(Number(formData.age))) incomingErrors.age = 'State a valid age.';
    if (!formData.sex) incomingErrors.sex = 'Please choose option.';
    if (!formData.preferredDateTime) incomingErrors.preferredDateTime = 'Preferred schedule date is required.';

    if (Object.keys(incomingErrors).length > 0) {
      setErrors(incomingErrors);
      return;
    }

    setIsSubmitting(true);
    // Mimic API delay
    setTimeout(() => {
      const newBooking: StoredAppointment = {
        ...formData,
        id: Math.random().toString(36).substring(2, 9),
        careCenter: initialCenterName || 'General Consultation',
        createdAt: new Date().toISOString()
      };
      
      const updated = [newBooking, ...appointments];
      setAppointments(updated);
      try {
        localStorage.setItem('shivashakthi_bookings', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save booking to localStorage', err);
      }

      setIsSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  const handleCancelBooking = (id: string) => {
    const updated = appointments.filter(app => app.id !== id);
    setAppointments(updated);
    try {
      localStorage.setItem('shivashakthi_bookings', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to update bookings in localStorage', err);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      sex: '',
      preferredDateTime: ''
    });
    setSuccess(false);
  };

  return (
    <section id="booking" className="bg-bg-azure py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Double Block Structure */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy-dark/5 grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Dark Block Narrative */}
          <div className="bg-navy-dark p-8 text-white md:col-span-5 flex flex-col justify-between text-left space-y-12">
            
            {/* Top Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4.5xl leading-tight">
                Begin Your <br />
                Transformation
              </h2>
              <p className="text-xs leading-relaxed text-gray-300">
                Connect with our certified clinical care coordinators to schedule your personalized precision longevity assessment.
              </p>
            </div>

            {/* Quick Contact Info Items */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-turquoise-brand">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#2FB7B1] uppercase">Call coordinator</div>
                  <a href="tel:+919900012345" className="text-sm font-semibold hover:text-turquoise-brand transition">
                    +91 99000 12345
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-turquoise-brand">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#2FB7B1] uppercase">Email coordinates</div>
                  <a href="mailto:care@shivashakthi.com" className="text-sm font-semibold hover:text-turquoise-brand transition">
                    care@shivashakthi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-turquoise-brand">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black tracking-widest text-[#2FB7B1] uppercase">VIBRANT SANCTUARY</div>
                  <p className="text-xs text-gray-300 leading-snug">
                    45, Precision Lane, Bangalore, India
                  </p>
                </div>
              </div>

            </div>

            {/* Link Sharing tools strip */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:text-white transition">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:text-white transition">
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Form Container */}
          <div className="p-8 md:col-span-7 flex flex-col justify-center relative bg-white">
            
            {success ? (
              /* Submission Success Feedback Overlay with Celebratory Particle Bursts & Pulsing glow */
              <div className="text-center space-y-6 py-8 animate-in fade-in zoom-in-95 duration-200 relative overflow-visible">
                
                {/* Confetti Explosion Canvas overlay */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible z-20">
                  {particles.map((p) => (
                    <motion.div
                      key={p.id}
                      custom={p}
                      initial="hidden"
                      animate="visible"
                      variants={particleVariants}
                      className="absolute"
                      style={{
                        backgroundColor: p.color,
                        width: p.size,
                        height: p.size,
                        borderRadius: p.isCircle ? '50%' : '2px',
                        transformOrigin: 'center center',
                      }}
                    />
                  ))}
                </div>

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                  {/* Pulsing glow circles under the icon */}
                  <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className="absolute h-14 w-14 rounded-full bg-emerald-300/30 z-0"
                  />
                  <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className="absolute h-20 w-20 rounded-full bg-emerald-100/20 z-0"
                    style={{ animationDelay: '0.6s' }}
                  />
                  
                  <motion.div 
                    variants={checkIconVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shadow-inner"
                  >
                    <CheckCircle2 className="h-10 w-10 animate-bounce" style={{ animationDuration: '3s' }} />
                  </motion.div>
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="text-2xl font-black text-navy-dark">Transformation Request Received!</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    We have successfully captured your precision longevity profile. A Shiva Shakthi clinical cell coordinator will contact you shortly to review diagnostic prerequisites.
                  </p>
                </div>

                {/* Captured data printout */}
                <div className="relative z-10 mx-auto max-w-xs rounded-2xl bg-gray-50 p-4 text-left border border-gray-100 text-xs text-gray-600 space-y-2">
                  <div><strong>Full Name:</strong> {formData.fullName}</div>
                  <div><strong>Pre-assessment Contact:</strong> {formData.phone}</div>
                  <div><strong>Requested Slot:</strong> {new Date(formData.preferredDateTime).toLocaleString()}</div>
                  <div className="flex items-center gap-1.5 text-turquoise-brand font-bold text-[10px] tracking-wider pt-2 border-t border-gray-200 uppercase">
                    <ShieldCheck className="h-4 w-4" /> Secure Protocol Standard
                  </div>
                </div>

                <div className="pt-2 relative z-10">
                  <button
                    onClick={handleReset}
                    className="rounded-full bg-orange-vitality px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-orange-600 transition"
                  >
                    SUBMIT NEW ENROLLMENT
                  </button>
                </div>
              </div>
            ) : (
              /* Intake Booking Form fields */
              <form onSubmit={handleFormSubmission} className="space-y-5 text-left">
                {initialCenterName && (
                  <div className="bg-[#E0F7F6] text-[#006A66] rounded-xl px-4 py-2 text-xs font-bold flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> Requested Center: {initialCenterName}
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-2xs font-extrabold tracking-widest text-[#006A66] uppercase">
                      FULL NAME
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full rounded-xl border bg-gray-50/50 px-4 py-2.5 text-sm text-navy-dark focus:border-turquoise-brand focus:bg-white focus:outline-none transition ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`}
                      />
                    </div>
                    {errors.fullName && <p className="text-[10px] font-bold text-red-500 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.fullName}</p>}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="text-2xs font-extrabold tracking-widest text-[#006A66] uppercase">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-2.5 text-sm text-navy-dark focus:border-turquoise-brand focus:bg-white focus:outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                    />
                    {errors.email && <p className="text-[10px] font-bold text-red-500 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.email}</p>}
                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
                  
                  {/* Phone number complex select+input setup */}
                  <div className="space-y-1 sm:col-span-6">
                    <label className="text-2xs font-extrabold tracking-widest text-[#006A66] uppercase">
                      PHONE NUMBER
                    </label>
                    <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-gray-50/50">
                      <span className="flex items-center px-3 text-xs font-bold text-gray-500 border-r border-gray-200 bg-gray-100">
                        +91
                      </span>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="98765 43210"
                        className={`w-full bg-transparent px-3 py-2.5 text-sm text-navy-dark focus:bg-white focus:outline-none transition inline-block`}
                      />
                    </div>
                    {errors.phone && <p className="text-[10px] font-bold text-red-500 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.phone}</p>}
                  </div>

                  {/* Age */}
                  <div className="space-y-1 sm:col-span-3">
                    <label className="text-2xs font-extrabold tracking-widest text-[#006A66] uppercase">
                      AGE
                    </label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Age"
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-2.5 text-sm text-navy-dark focus:border-turquoise-brand focus:bg-white focus:outline-none transition ${errors.age ? 'border-red-500' : 'border-gray-200'}`}
                    />
                    {errors.age && <p className="text-[10px] font-bold text-red-500 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.age}</p>}
                  </div>

                  {/* Sex */}
                  <div className="space-y-1 sm:col-span-3">
                    <label className="text-2xs font-extrabold tracking-widest text-[#006A66] uppercase">
                      SEX
                    </label>
                    <select
                      name="sex"
                      value={formData.sex}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-xs text-navy-dark font-semibold focus:border-turquoise-brand focus:bg-white focus:outline-none transition ${errors.sex ? 'border-red-500' : 'border-gray-200'}`}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.sex && <p className="text-[10px] font-bold text-red-500 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.sex}</p>}
                  </div>

                </div>

                {/* Date & Time Selection */}
                <div className="space-y-1">
                  <label className="text-2xs font-extrabold tracking-widest text-[#006A66] uppercase">
                    PREFERRED DATE & TIME
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      name="preferredDateTime"
                      value={formData.preferredDateTime}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-gray-50/50 px-4 py-2.5 text-sm text-gray-700 font-semibold focus:border-turquoise-brand focus:bg-white focus:outline-none transition ${errors.preferredDateTime ? 'border-red-500' : 'border-gray-200'}`}
                    />
                  </div>
                  {errors.preferredDateTime && <p className="text-[10px] font-bold text-red-500 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.preferredDateTime}</p>}
                </div>

                {/* Request CTAs Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-orange-vitality py-4 text-xs font-black tracking-widest uppercase text-white shadow-lg shadow-orange-500/20 transition hover:scale-101 hover:bg-orange-600 disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'SECURED REGISTRATION ACTIVE...' : 'REQUEST MY CONSULTATION'}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

        {/* Active Bookings List */}
        {appointments.length > 0 && (
          <div className="mt-12 mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="mb-6 text-left">
              <h3 className="text-xl font-bold text-navy-dark flex items-center gap-2">
                <Calendar className="h-5 w-5 text-turquoise-brand" />
                My Scheduled Consultations
              </h3>
              <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase mt-1">
                Your locally stored assessment bookings (stored in this browser)
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {appointments.map((app) => (
                <div key={app.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between text-left space-y-4 hover:shadow-md transition">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F7F6] px-2.5 py-0.5 text-[10px] font-bold text-[#006A66] uppercase">
                        <ShieldCheck className="h-3 w-3" />
                        {app.careCenter}
                      </div>
                      <h4 className="text-base font-bold text-navy-dark">{app.fullName}</h4>
                      <p className="text-2xs text-gray-500 font-semibold uppercase">
                        Age: {app.age} | Sex: {app.sex}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleCancelBooking(app.id)}
                      className="text-gray-400 hover:text-red-500 rounded-lg p-1.5 hover:bg-red-50 transition cursor-pointer"
                      title="Cancel Consultation"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-xs font-semibold text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-orange-vitality" />
                      <span>{new Date(app.preferredDateTime).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-turquoise-brand" />
                      <span>{new Date(app.preferredDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
