/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Share2, MessageSquare, AlertCircle, CheckCircle2, Calendar, ShieldCheck, Trash2, Clock } from 'lucide-react';
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
  
  const colors = ['#16827D', '#D8CEB8', '#203429', '#C24E38', '#28A5A0', '#9D3B24'];
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
    <section id="booking" className="relative bg-bg-azure py-20 lg:py-28 overflow-hidden border-t border-bronze-light/20">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-turquoise-brand/5 blur-3xl pointer-events-none"></div>
 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Double Block Structure */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-transparent border border-bronze-light/45 shadow-none grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Dark Block Narrative */}
          <div className="bg-navy-dark p-8 md:p-12 text-white md:col-span-5 flex flex-col justify-between text-left space-y-12 relative overflow-hidden">
            {/* Fine decorative grid inside the dark block */}
            <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none"></div>
            
            {/* Top Heading */}
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-black tracking-widest text-turquoise-light uppercase block">
                PRECISION CARE
              </span>
              <h2 className="font-serif text-3.5xl lg:text-4.5xl font-medium tracking-tight leading-tight">
                Begin Your <br />
                <span className="italic font-light text-turquoise-light">Transformation</span>
              </h2>
              <p className="text-xs leading-relaxed text-gray-400 font-medium">
                Connect with our certified clinical care coordinators to schedule your personalized precision longevity assessment.
              </p>
            </div>

            {/* Quick Contact Info Items */}
            <div className="space-y-6 relative z-10">
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-bronze-light">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black tracking-widest text-bronze-light uppercase">Call coordinator</div>
                  <a href="tel:+919900012345" className="text-sm font-bold hover:text-turquoise-light transition-colors">
                    +91 99000 12345
                  </a>
                </div>
              </div>
 
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-bronze-light">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black tracking-widest text-bronze-light uppercase">Email coordinates</div>
                  <a href="mailto:care@shivashakthi.com" className="text-sm font-bold hover:text-turquoise-light transition-colors">
                    care@shivashakthi.com
                  </a>
                </div>
              </div>
 
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-bronze-light">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black tracking-widest text-bronze-light uppercase">SHIVA SHAKTHI HEALTH</div>
                  <p className="text-xs text-white/80 leading-relaxed font-medium">
                    45, Precision Lane, Bangalore, India
                  </p>
                </div>
              </div>

            </div>

            {/* Link Sharing tools strip */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/5 relative z-10">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="Share">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="Chat">
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Form Container */}
          <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-center relative bg-transparent border-t md:border-t-0 md:border-l border-bronze-light/30">
            
            <AnimatePresence mode="wait">
              {success ? (
                /* Submission Success Feedback Overlay with Celebratory Particle Bursts & Pulsing glow */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center space-y-6 py-6 relative overflow-visible"
                >
                  
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
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shadow-inner border border-emerald-100"
                    >
                      <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                    </motion.div>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-navy-dark">Transformation Request Received!</h3>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                      We have successfully captured your precision longevity profile. A Shiva Shakthi clinical cell coordinator will contact you shortly to review diagnostic prerequisites.
                    </p>
                  </div>

                  {/* Captured data printout */}
                  <div className="relative z-10 mx-auto max-w-xs rounded-2xl bg-bg-azure p-4 text-left border border-bronze-light/30 text-xs text-navy-dark/80 space-y-2.5 shadow-none">
                    <div><strong>Full Name:</strong> {formData.fullName}</div>
                    <div><strong>Pre-assessment Contact:</strong> {formData.phone}</div>
                    <div><strong>Requested Slot:</strong> {new Date(formData.preferredDateTime).toLocaleString()}</div>
                    <div className="flex items-center gap-1.5 text-turquoise-brand font-bold text-[9px] tracking-widest pt-2 border-t border-bronze-light/20 uppercase">
                      <ShieldCheck className="h-4 w-4" /> Secure Protocol Standard
                    </div>
                  </div>
 
                  <div className="pt-2 relative z-10">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleReset}
                      className="rounded-full bg-orange-vitality px-8 py-3 text-xs font-black uppercase tracking-widest text-white shadow-md shadow-turquoise-brand/10 hover:bg-turquoise-light transition cursor-pointer"
                    >
                      SUBMIT NEW ENROLLMENT
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                /* Intake Booking Form fields */
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmission} 
                  className="space-y-5 text-left"
                >
                  {initialCenterName && (
                    <div className="bg-turquoise-brand/10 text-turquoise-brand rounded-xl px-4 py-2.5 text-[11px] font-extrabold flex items-center gap-2 border border-turquoise-brand/20">
                      <ShieldCheck className="h-4 w-4 text-turquoise-brand" /> Requested Center: {initialCenterName}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black tracking-widest text-turquoise-brand uppercase block">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full rounded-xl border bg-bg-azure/20 px-4 py-2.5 text-sm text-navy-dark placeholder-navy-dark/40 focus:border-turquoise-brand focus:bg-transparent focus:outline-none transition-all duration-300 ${errors.fullName ? 'border-red-500' : 'border-bronze-light/50 focus:shadow-[0_0_10px_rgba(22,130,125,0.06)]'}`}
                      />
                      {errors.fullName && <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.fullName}</p>}
                    </div>
 
                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black tracking-widest text-turquoise-brand uppercase block">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full rounded-xl border bg-bg-azure/20 px-4 py-2.5 text-sm text-navy-dark placeholder-navy-dark/40 focus:border-turquoise-brand focus:bg-transparent focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-bronze-light/50 focus:shadow-[0_0_10px_rgba(22,130,125,0.06)]'}`}
                      />
                      {errors.email && <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.email}</p>}
                    </div>
 
                  </div>
 
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
                    
                    {/* Phone number complex select+input setup */}
                    <div className="space-y-1.5 sm:col-span-6">
                      <label className="text-[10px] font-black tracking-widest text-turquoise-brand uppercase block">
                        PHONE NUMBER
                      </label>
                      <div className="flex rounded-xl overflow-hidden border border-bronze-light/50 bg-bg-azure/20 focus-within:border-turquoise-brand focus-within:shadow-[0_0_10px_rgba(22,130,125,0.06)] transition-all duration-300">
                        <span className="flex items-center px-3 text-xs font-bold text-navy-dark/60 border-r border-bronze-light/20 bg-bg-azure/50">
                          +91
                        </span>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="98765 43210"
                          className="w-full bg-transparent px-3 py-2.5 text-sm text-navy-dark placeholder-navy-dark/40 focus:outline-none inline-block font-sans"
                        />
                      </div>
                      {errors.phone && <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.phone}</p>}
                    </div>
 
                    {/* Age */}
                    <div className="space-y-1.5 sm:col-span-3">
                      <label className="text-[10px] font-black tracking-widest text-turquoise-brand uppercase block">
                        AGE
                      </label>
                      <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="28"
                        className={`w-full rounded-xl border bg-bg-azure/20 px-4 py-2.5 text-sm text-navy-dark placeholder-navy-dark/40 focus:border-turquoise-brand focus:bg-transparent focus:outline-none transition-all duration-300 ${errors.age ? 'border-red-500' : 'border-bronze-light/50 focus:shadow-[0_0_10px_rgba(22,130,125,0.06)]'}`}
                      />
                      {errors.age && <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.age}</p>}
                    </div>
 
                    {/* Sex */}
                    <div className="space-y-1.5 sm:col-span-3">
                      <label className="text-[10px] font-black tracking-widest text-turquoise-brand uppercase block">
                        SEX
                      </label>
                      <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border bg-bg-azure/20 px-4 py-3 text-xs text-navy-dark font-bold focus:border-turquoise-brand focus:bg-transparent focus:outline-none transition-all duration-300 cursor-pointer ${errors.sex ? 'border-red-500' : 'border-bronze-light/50 focus:shadow-[0_0_10px_rgba(22,130,125,0.06)]'}`}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.sex && <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.sex}</p>}
                    </div>
 
                  </div>
 
                  {/* Date & Time Selection */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black tracking-widest text-turquoise-brand uppercase block">
                      PREFERRED DATE & TIME
                    </label>
                    <input
                      type="datetime-local"
                      name="preferredDateTime"
                      value={formData.preferredDateTime}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border bg-bg-azure/20 px-4 py-2.5 text-sm text-navy-dark/70 font-bold focus:border-turquoise-brand focus:bg-transparent focus:outline-none transition-all duration-300 cursor-pointer ${errors.preferredDateTime ? 'border-red-500' : 'border-bronze-light/50 focus:shadow-[0_0_10px_rgba(22,130,125,0.06)]'}`}
                    />
                    {errors.preferredDateTime && <p className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="h-3.5 w-3.5 shrink-0" /> {errors.preferredDateTime}</p>}
                  </div>
 
                  {/* Request CTAs Button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                      className="w-full rounded-full bg-orange-vitality py-4 text-xs font-black tracking-widest uppercase text-white shadow-lg shadow-turquoise-brand/15 transition-all hover:bg-turquoise-light disabled:bg-gray-400 disabled:shadow-none cursor-pointer"
                    >
                      {isSubmitting ? 'SECURED REGISTRATION ACTIVE...' : 'REQUEST MY CONSULTATION'}
                    </motion.button>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Active Bookings List */}
        <AnimatePresence>
          {appointments.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-16 mx-auto max-w-5xl text-left"
            >
              <div className="mb-8 border-b border-bronze-light/30 pb-4">
                <h3 className="font-serif text-2xl font-medium text-navy-dark flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-turquoise-brand" />
                  My Scheduled <span className="italic font-light text-turquoise-brand">Consultations</span>
                </h3>
                <p className="text-[10px] text-navy-dark/60 font-extrabold tracking-widest uppercase mt-1">
                  Your locally stored assessment bookings (stored in this browser session)
                </p>
              </div>
              
              <motion.div 
                layout 
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                <AnimatePresence mode="popLayout">
                  {appointments.map((app) => (
                    <motion.div
                      key={app.id}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 450, damping: 28 }}
                      className="bg-transparent border border-bronze-light/45 rounded-3xl p-6 shadow-none flex flex-col justify-between text-left space-y-5 hover:shadow-[0_10px_30px_rgba(32,52,41,0.03)] hover:border-turquoise-brand/35 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1.5">
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-turquoise-brand/10 px-2.5 py-1 text-[9px] font-extrabold text-turquoise-brand uppercase border border-turquoise-brand/20">
                            <ShieldCheck className="h-3 w-3 text-turquoise-brand" />
                            {app.careCenter}
                          </div>
                          <h4 className="text-lg font-bold text-navy-dark font-sans">{app.fullName}</h4>
                          <p className="text-[10px] text-navy-dark/60 font-extrabold uppercase tracking-wider font-sans">
                            Age: {app.age} | Sex: {app.sex}
                          </p>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleCancelBooking(app.id)}
                          className="text-[#9D3B24]/60 hover:text-[#9D3B24] rounded-xl p-2 hover:bg-[#9D3B24]/5 border border-transparent hover:border-[#9D3B24]/20 transition-all cursor-pointer"
                          title="Cancel Consultation"
                        >
                          <Trash2 className="h-4.5 w-4.5" />
                        </motion.button>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-bronze-light/20 text-xs font-bold text-navy-dark/75">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-orange-vitality" />
                          <span>{new Date(app.preferredDateTime).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-turquoise-brand" />
                          <span>{new Date(app.preferredDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
