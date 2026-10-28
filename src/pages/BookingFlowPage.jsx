import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, Calendar, Mountain, User, Phone, Mail, CreditCard, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, AlertCircle, Sparkles, Download, Printer } from 'lucide-react';
import { DEPARTURES, PACKAGES, BRAND } from '../data/yatraData';

export default function BookingFlowPage() {
  const [searchParams] = useSearchParams();

  // Current Step: 1 -> 6
  const [step, setStep] = useState(1);

  // Step 1: Departure
  const [selectedBatchId, setSelectedBatchId] = useState(1);

  // Step 2: Package & Passport
  const [selectedPackageId, setSelectedPackageId] = useState(1);
  const [passportType, setPassportType] = useState('INDIAN'); // 'INDIAN' | 'FOREIGN'

  // Step 3: Primary Contact & Travellers
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
  });

  const [travellers, setTravellers] = useState([
    {
      fullName: '',
      passportNumber: '',
      nationality: 'Indian',
      age: '',
      gender: 'MALE',
      dietaryPreference: 'VEGETARIAN',
      emergencyContactName: '',
      emergencyContactPhone: '',
    },
  ]);

  // Step 5: Payment Demo
  const [paymentMethod, setPaymentMethod] = useState('NET_BANKING');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [validationError, setValidationError] = useState('');

  // Handle URL pre-selection query parameters
  useEffect(() => {
    const batchParam = searchParams.get('batch');
    if (batchParam) {
      const bNum = parseInt(batchParam, 10);
      if (bNum >= 1 && bNum <= 8) {
        setSelectedBatchId(bNum);
      }
    }

    const pkgParam = searchParams.get('package');
    if (pkgParam) {
      const pNum = parseInt(pkgParam, 10);
      if (pNum >= 1 && pNum <= 3) {
        setSelectedPackageId(pNum);
      }
    }

    const passParam = searchParams.get('passport');
    if (passParam === 'FOREIGN') {
      setPassportType('FOREIGN');
    }
  }, [searchParams]);

  // Data lookups
  const currentDeparture = DEPARTURES.find((d) => d.batchNumber === selectedBatchId) || DEPARTURES[0];
  const currentPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0];

  // Financial calculations based on official brochure
  const travellerCount = travellers.length;
  let unitBasePrice = 0;
  let unitSupplement = 0;
  let gstPercentage = 0;

  if (passportType === 'INDIAN') {
    unitBasePrice = currentPackage.pricingTiers.indian.basePrice;
    gstPercentage = currentPackage.pricingTiers.indian.gstPercentage; // 5%
    unitSupplement = 0;
  } else {
    unitBasePrice = currentPackage.pricingTiers.foreign.basePrice; // 425,000 INR
    unitSupplement = currentPackage.pricingTiers.foreign.supplementUsd || 0;
    gstPercentage = 0;
  }

  const totalBase = unitBasePrice * travellerCount;
  const totalGst = (totalBase * gstPercentage) / 100;
  const totalSupplementUsd = unitSupplement * travellerCount;
  const depositRequiredInr = 25000 * travellerCount;
  const grandTotalInr = totalBase + totalGst;

  // Add / Remove Traveller
  const handleAddTraveller = () => {
    if (travellers.length < 6) {
      setTravellers([
        ...travellers,
        {
          fullName: '',
          passportNumber: '',
          nationality: passportType === 'INDIAN' ? 'Indian' : 'American',
          age: '',
          gender: 'MALE',
          dietaryPreference: 'VEGETARIAN',
          emergencyContactName: contactInfo.fullName,
          emergencyContactPhone: contactInfo.phone,
        },
      ]);
    }
  };

  const handleRemoveTraveller = (idx) => {
    if (travellers.length > 1) {
      setTravellers(travellers.filter((_, i) => i !== idx));
    }
  };

  const handleTravellerChange = (idx, field, val) => {
    const updated = [...travellers];
    updated[idx][field] = val;
    setTravellers(updated);
  };

  // Step 3 Validation
  const validateStep3 = () => {
    if (!contactInfo.fullName || !contactInfo.email || !contactInfo.phone) {
      setValidationError('Please complete the primary contact information.');
      return false;
    }

    for (let i = 0; i < travellers.length; i++) {
      const t = travellers[i];
      if (!t.fullName || !t.passportNumber || !t.age) {
        setValidationError(`Please fill out full name, passport number, and age for Traveller #${i + 1}.`);
        return false;
      }
    }

    setValidationError('');
    return true;
  };

  // Mock Payment Execution
  const handleSimulatePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setBookingRef(`SKY-2027-${randomCode}`);
      setIsProcessingPayment(false);
      setStep(6);
    }, 1200);
  };

  const stepsList = [
    { num: 1, title: 'Departure' },
    { num: 2, title: 'Package' },
    { num: 3, title: 'Travellers' },
    { num: 4, title: 'Review' },
    { num: 5, title: 'Payment' },
    { num: 6, title: 'Confirmed' },
  ];

  return (
    <div className="min-h-screen bg-ivory text-forest pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Booking Header */}
        <div className="text-center mb-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold block mb-1">
            BESPOKE PILGRIMAGE RESERVATION
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-forest font-light">
            Reserve Your Place for Kailash 2027
          </h1>
          <p className="text-xs text-stone mt-1 font-light">
            Step {step} of 6 · Official Yatra Registration Protocol
          </p>
        </div>

        {/* Progress Stepper Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between max-w-2xl mx-auto relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-ivory-dark -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-gold -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / (stepsList.length - 1)) * 100}%` }}
            />

            {stepsList.map((s) => {
              const isPast = step > s.num;
              const isCurrent = step === s.num;
              return (
                <div key={s.num} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold transition-all duration-300 ${
                      isPast
                        ? 'bg-forest text-gold ring-2 ring-gold'
                        : isCurrent
                        ? 'bg-gold text-evergreen ring-4 ring-gold/20 scale-110'
                        : 'bg-white border-2 border-stone-light/40 text-stone'
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4" /> : s.num}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-wider mt-1.5 hidden sm:block font-medium ${
                      isCurrent ? 'text-forest font-semibold' : 'text-stone'
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 1: Select Departure */}
        {step === 1 && (
          <div className="bg-white rounded-xl border border-gold-subtle p-6 sm:p-8 shadow-luxury-sm animate-fade-in">
            <div className="mb-6 pb-4 border-b border-forest-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="font-serif text-2xl text-forest font-medium">
                  Step 1: Select an Approved 2027 Departure Date
                </h2>
                <p className="text-xs text-stone font-light">
                  8 approved seasonal batches. Conforming with official brochure schedule.
                </p>
              </div>
              <span className="text-xs text-gold-dark font-medium">
                Capacity: 25 Yatris Per Batch
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {DEPARTURES.map((dep) => {
                const isSelected = selectedBatchId === dep.batchNumber;
                return (
                  <div
                    key={dep.batchNumber}
                    onClick={() => setSelectedBatchId(dep.batchNumber)}
                    className={`p-4 rounded-lg cursor-pointer border transition-all ${
                      isSelected
                        ? 'bg-forest text-ivory border-gold shadow-luxury-sm ring-1 ring-gold'
                        : 'bg-ivory/50 border-gold-subtle hover:border-gold text-forest'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${isSelected ? 'text-gold' : 'text-stone'}`}>
                        Batch {dep.batchNumber} {dep.isFullMoon ? '· Auspicious Purnima' : ''}
                      </span>
                      <span className={`text-xs font-semibold ${isSelected ? 'text-gold-light' : 'text-forest'}`}>
                        {dep.totalDays} Days
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-medium mb-1">
                      {dep.name}
                    </h3>
                    <p className={`text-xs mb-2 ${isSelected ? 'text-sage-light' : 'text-stone'}`}>
                      {dep.displayDates}
                    </p>

                    {dep.moonEvent && (
                      <span className={`inline-block text-[10px] px-2 py-0.5 rounded font-medium ${
                        isSelected ? 'bg-gold/20 text-gold-light' : 'bg-gold/15 text-gold-dark'
                      }`}>
                        {dep.moonEvent}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-forest-subtle">
              <span className="text-xs text-stone">
                Selected: <strong className="text-forest">{currentDeparture.name}</strong> ({currentDeparture.displayDates})
              </span>
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center space-x-2 bg-forest hover:bg-forest-light text-ivory px-6 py-3 rounded text-xs uppercase tracking-[0.16em] font-semibold shadow-luxury transition-all"
              >
                <span>Continue to Package Selection</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Select Package & Passport Type */}
        {step === 2 && (
          <div className="bg-white rounded-xl border border-gold-subtle p-6 sm:p-8 shadow-luxury-sm animate-fade-in">
            <div className="mb-6 pb-4 border-b border-forest-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="font-serif text-2xl text-forest font-medium">
                  Step 2: Select Your Preferred Route & Passport Type
                </h2>
                <p className="text-xs text-stone font-light">
                  Choose between Classic Overland or Flight routes. Dual-currency pricing applied automatically.
                </p>
              </div>

              {/* Passport switch */}
              <div className="flex items-center bg-ivory p-1 rounded-lg border border-gold-subtle">
                <button
                  type="button"
                  onClick={() => setPassportType('INDIAN')}
                  className={`px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-semibold ${
                    passportType === 'INDIAN' ? 'bg-forest text-ivory' : 'text-stone'
                  }`}
                >
                  Indian Passport
                </button>
                <button
                  type="button"
                  onClick={() => setPassportType('FOREIGN')}
                  className={`px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-semibold ${
                    passportType === 'FOREIGN' ? 'bg-forest text-ivory' : 'text-stone'
                  }`}
                >
                  Foreign / NRI
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {PACKAGES.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;
                let priceText = '';
                if (passportType === 'INDIAN') {
                  priceText = `₹${pkg.pricingTiers.indian.basePrice.toLocaleString('en-IN')}`;
                } else {
                  if (pkg.id === 1) priceText = `₹4,25,000`;
                  if (pkg.id === 2) priceText = `₹4,25,000 + $600 USD`;
                  if (pkg.id === 3) priceText = `₹4,25,000 + $1,200 USD`;
                }

                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`rounded-xl p-5 cursor-pointer border flex flex-col justify-between transition-all ${
                      isSelected
                        ? 'bg-forest text-ivory border-gold shadow-luxury ring-2 ring-gold'
                        : 'bg-ivory/50 border-gold-subtle hover:border-gold text-forest'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] uppercase tracking-wider block font-semibold ${isSelected ? 'text-gold' : 'text-stone'}`}>
                        {pkg.titleTag}
                      </span>
                      <h3 className="font-serif text-xl font-medium mt-1 mb-2">
                        {pkg.name}
                      </h3>
                      <div className={`p-3 rounded mb-3 text-xs ${isSelected ? 'bg-evergreen/80 border border-gold/30' : 'bg-white border border-gold-subtle'}`}>
                        <span className="block text-[10px] uppercase opacity-75">Tariff Per Yatri</span>
                        <span className={`font-serif text-xl font-semibold ${isSelected ? 'text-gold-light' : 'text-forest'}`}>
                          {priceText}
                        </span>
                        <span className="block text-[10px] opacity-80 mt-0.5">
                          {passportType === 'INDIAN' ? '+ 5% GST' : 'Non-resident tariff'}
                        </span>
                      </div>
                      <p className={`text-xs font-light leading-relaxed mb-4 ${isSelected ? 'text-sage-light' : 'text-stone'}`}>
                        {pkg.shortSummary}
                      </p>
                    </div>

                    <div className={`pt-3 border-t text-[11px] font-semibold uppercase tracking-wider flex items-center justify-between ${
                      isSelected ? 'border-gold/30 text-gold' : 'border-forest-subtle text-forest'
                    }`}>
                      <span>{isSelected ? 'Selected Route' : 'Click to Choose'}</span>
                      {isSelected && <Check className="w-4 h-4 text-gold" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-forest-subtle">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-stone hover:text-forest"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center space-x-2 bg-forest hover:bg-forest-light text-ivory px-6 py-3 rounded text-xs uppercase tracking-[0.16em] font-semibold shadow-luxury transition-all"
              >
                <span>Continue to Traveller Details</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Traveller Details */}
        {step === 3 && (
          <div className="bg-white rounded-xl border border-gold-subtle p-6 sm:p-8 shadow-luxury-sm animate-fade-in">
            <div className="mb-6 pb-4 border-b border-forest-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="font-serif text-2xl text-forest font-medium">
                  Step 3: Primary Contact & Pilgrim Particulars
                </h2>
                <p className="text-xs text-stone font-light">
                  Required for Chinese Embassy Group Visa clearance and TAR security permits.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-xs text-stone">Pilgrims in Booking:</span>
                <button
                  type="button"
                  onClick={handleAddTraveller}
                  className="px-3 py-1.5 bg-ivory rounded border border-gold-subtle text-forest text-xs uppercase tracking-wider font-semibold hover:border-gold"
                >
                  + Add Traveller
                </button>
              </div>
            </div>

            {validationError && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Primary Contact Section */}
            <div className="mb-8 p-5 rounded-lg bg-ivory border border-gold-subtle space-y-4">
              <h3 className="font-serif text-lg text-forest font-medium">
                Primary Contact Person (Booking Lead)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Name as per official ID"
                    value={contactInfo.fullName}
                    onChange={(e) => setContactInfo({ ...contactInfo, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-white border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="official@example.com"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-white border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-forest font-medium mb-1">
                    Mobile Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-white border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
            </div>

            {/* Individual Travellers */}
            <div className="space-y-6 mb-8">
              {travellers.map((traveller, idx) => (
                <div key={idx} className="p-5 rounded-lg border border-gold-subtle bg-white space-y-4 relative">
                  <div className="flex items-center justify-between pb-2 border-b border-forest-subtle">
                    <span className="font-serif text-base text-forest font-medium">
                      Traveller #{idx + 1} Particulars
                    </span>
                    {travellers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTraveller(idx)}
                        className="text-xs text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                        Full Name (As on Passport) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar Sharma"
                        value={traveller.fullName}
                        onChange={(e) => handleTravellerChange(idx, 'fullName', e.target.value)}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                        Passport Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Z1234567"
                        value={traveller.passportNumber}
                        onChange={(e) => handleTravellerChange(idx, 'passportNumber', e.target.value)}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest uppercase focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                        Age (Years) *
                      </label>
                      <input
                        type="number"
                        min="18"
                        max="70"
                        required
                        placeholder="18 - 70"
                        value={traveller.age}
                        onChange={(e) => handleTravellerChange(idx, 'age', e.target.value)}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                        Gender
                      </label>
                      <select
                        value={traveller.gender}
                        onChange={(e) => handleTravellerChange(idx, 'gender', e.target.value)}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      >
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                        Dietary Preference
                      </label>
                      <select
                        value={traveller.dietaryPreference}
                        onChange={(e) => handleTravellerChange(idx, 'dietaryPreference', e.target.value)}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      >
                        <option value="VEGETARIAN">Pure Vegetarian</option>
                        <option value="JAIN">Strict Jain (No root veg, onion, garlic)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-stone font-medium mb-1">
                        Emergency Contact Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Kin / Family Mobile"
                        value={traveller.emergencyContactPhone}
                        onChange={(e) => handleTravellerChange(idx, 'emergencyContactPhone', e.target.value)}
                        className="w-full px-3 py-2 rounded bg-ivory/50 border border-gold-subtle text-xs text-forest focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-forest-subtle">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-stone hover:text-forest"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => {
                  if (validateStep3()) {
                    setStep(4);
                  }
                }}
                className="inline-flex items-center space-x-2 bg-forest hover:bg-forest-light text-ivory px-6 py-3 rounded text-xs uppercase tracking-[0.16em] font-semibold shadow-luxury transition-all"
              >
                <span>Proceed to Booking Review</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Booking Review */}
        {step === 4 && (
          <div className="bg-white rounded-xl border border-gold-subtle p-6 sm:p-8 shadow-luxury-sm animate-fade-in">
            <div className="mb-6 pb-4 border-b border-forest-subtle">
              <h2 className="font-serif text-2xl text-forest font-medium">
                Step 4: Review Booking Summary & Charges
              </h2>
              <p className="text-xs text-stone font-light">
                Please verify all departure dates, package parameters, and pilgrim particulars before proceeding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Left: Journey Summary */}
              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-ivory border border-gold-subtle space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block">
                    Expedition Itinerary
                  </span>
                  <div>
                    <h4 className="font-serif text-xl text-forest font-medium">
                      {currentDeparture.name} ({currentDeparture.totalDays} Days)
                    </h4>
                    <p className="text-xs text-stone">
                      Dates: <strong className="text-forest">{currentDeparture.displayDates}</strong>
                    </p>
                    {currentDeparture.moonEvent && (
                      <span className="inline-block mt-1 text-[11px] text-gold-dark font-medium">
                        ✦ {currentDeparture.moonEvent}
                      </span>
                    )}
                  </div>

                  <div className="pt-2 border-t border-gold-subtle">
                    <span className="text-xs uppercase text-stone block">Selected Package:</span>
                    <span className="font-medium text-xs text-forest">{currentPackage.name}</span>
                    <span className="block text-[11px] text-stone mt-0.5">{currentPackage.transport}</span>
                  </div>

                  <div className="pt-2 border-t border-gold-subtle text-xs text-stone">
                    <span>Passport Category: </span>
                    <strong className="text-forest">{passportType === 'INDIAN' ? 'Indian National (INR)' : 'Foreign / NRI'}</strong>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-ivory border border-gold-subtle">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block mb-2">
                    Registered Travellers ({travellerCount})
                  </span>
                  <ul className="space-y-2 text-xs text-stone">
                    {travellers.map((t, i) => (
                      <li key={i} className="flex justify-between border-b border-gold-subtle/50 pb-1.5 last:border-b-0">
                        <span className="font-medium text-forest">{i + 1}. {t.fullName}</span>
                        <span>Pass: {t.passportNumber} · {t.dietaryPreference}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Financial Breakdown */}
              <div className="p-6 rounded-lg bg-forest text-ivory flex flex-col justify-between border border-gold">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block mb-2">
                    Official Brochure Billing
                  </span>
                  <h4 className="font-serif text-2xl text-ivory font-medium mb-4">
                    Financial Schedule
                  </h4>

                  <div className="space-y-2.5 text-xs text-sage-light">
                    <div className="flex justify-between">
                      <span>Base Yatra Fee ({travellerCount} × ₹{unitBasePrice.toLocaleString('en-IN')})</span>
                      <span className="text-ivory font-medium">₹{totalBase.toLocaleString('en-IN')}</span>
                    </div>

                    {passportType === 'INDIAN' && (
                      <div className="flex justify-between">
                        <span>GST @ 5%</span>
                        <span className="text-ivory font-medium">₹{totalGst.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    {passportType === 'FOREIGN' && totalSupplementUsd > 0 && (
                      <div className="flex justify-between text-gold-light">
                        <span>Air Sector Supplement ({travellerCount} × US${unitSupplement})</span>
                        <span className="font-medium">+ US$ {totalSupplementUsd.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-gold/30 flex justify-between text-sm font-serif">
                      <span className="text-ivory">Total Package Value</span>
                      <span className="text-gold-light font-bold text-lg">
                        ₹{grandTotalInr.toLocaleString('en-IN')}
                        {totalSupplementUsd > 0 ? ` + $${totalSupplementUsd}` : ''}
                      </span>
                    </div>
                  </div>

                  {/* Due Today for Confirmation */}
                  <div className="mt-6 p-4 rounded bg-evergreen/80 border border-gold/40">
                    <span className="text-[10px] uppercase tracking-widest text-gold block">
                      Initial Registration Deposit Due Today
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="font-serif text-2xl font-bold text-gold-shimmer">
                        ₹{depositRequiredInr.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-sage/80">(₹25,000 × {travellerCount} Yatris)</span>
                    </div>
                    <span className="text-[10px] text-sage/70 block mt-1">
                      Non-refundable registration fee. 50% seat confirmation payable upon allocation; balance 30 days prior.
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-sage/60 mt-4 pt-4 border-t border-gold/20">
                  Approved Cancellation Terms apply per Brochure Page 5/7.
                </div>
              </div>

            </div>

            <div className="flex items-center justify-between pt-4 border-t border-forest-subtle">
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-stone hover:text-forest"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => setStep(5)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-evergreen px-7 py-3 rounded text-xs uppercase tracking-[0.16em] font-semibold shadow-gold-glow hover:shadow-luxury transition-all"
              >
                <span>Proceed to Secure Deposit Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Payment (Prototype Demonstration Mode) */}
        {step === 5 && (
          <div className="bg-white rounded-xl border border-gold-subtle p-6 sm:p-8 shadow-luxury-sm animate-fade-in">
            {/* Demonstration Notice Banner */}
            <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Prototype Demonstration Mode</strong>
                <span>
                  This payment portal simulates the final gateway integration. No real card charges or monetary deductions will occur during this client prototype presentation.
                </span>
              </div>
            </div>

            <div className="mb-6 pb-4 border-b border-forest-subtle">
              <h2 className="font-serif text-2xl text-forest font-medium">
                Step 5: Deposit Payment Gateway Simulation
              </h2>
              <p className="text-xs text-stone font-light">
                Securing initial registration deposit of <strong className="text-forest">₹{depositRequiredInr.toLocaleString('en-IN')}</strong> for {travellerCount} yatri(s).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { id: 'NET_BANKING', label: 'Online Net Banking / RTGS', desc: 'HDFC, ICICI, SBI, Axis direct transfer' },
                { id: 'UPI_QR', label: 'UPI / Bharat QR', desc: 'Instant confirmation via Google Pay, PhonePe, BHIM' },
                { id: 'CARD', label: 'Debit / Credit Card (Visa, MC)', desc: 'Tokenized encrypted transaction' },
              ].map((m) => (
                <div
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`p-4 rounded-lg cursor-pointer border transition-all ${
                    paymentMethod === m.id
                      ? 'bg-forest text-ivory border-gold shadow-luxury-sm'
                      : 'bg-ivory/50 border-gold-subtle hover:border-gold text-forest'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <CreditCard className={`w-5 h-5 ${paymentMethod === m.id ? 'text-gold' : 'text-stone'}`} />
                    <input
                      type="radio"
                      checked={paymentMethod === m.id}
                      onChange={() => setPaymentMethod(m.id)}
                      className="accent-gold"
                    />
                  </div>
                  <h4 className="font-serif text-base font-medium mb-1">{m.label}</h4>
                  <p className={`text-xs ${paymentMethod === m.id ? 'text-sage-light' : 'text-stone'}`}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-ivory border border-gold-subtle text-xs text-stone mb-8 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>256-bit SSL Encrypted Sandbox Gateway Simulator</span>
              </div>
              <span className="font-semibold text-forest">Amount: ₹{depositRequiredInr.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-forest-subtle">
              <button
                onClick={() => setStep(4)}
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-stone hover:text-forest"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                disabled={isProcessingPayment}
                onClick={handleSimulatePayment}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-evergreen px-8 py-3.5 rounded text-xs uppercase tracking-[0.16em] font-semibold shadow-gold-glow hover:shadow-luxury transition-all disabled:opacity-50"
              >
                <span>{isProcessingPayment ? 'Processing Authorization...' : `Authorize ₹${depositRequiredInr.toLocaleString('en-IN')} Deposit`}</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: Confirmation Screen */}
        {step === 6 && (
          <div className="bg-white rounded-xl border border-gold p-8 sm:p-12 shadow-luxury text-center animate-fade-in relative overflow-hidden">
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold via-gold-shimmer to-gold" />

            <div className="w-16 h-16 rounded-full bg-forest text-gold flex items-center justify-center mx-auto mb-6 shadow-luxury">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
              RESERVATION ALLOCATED & RECORDED
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light mb-2">
              Pilgrimage Seat Secured
            </h2>

            <p className="text-xs text-stone max-w-md mx-auto mb-6 font-light">
              Your provisional booking for Kailash Mansarovar Parikrama 2027 has been successfully generated in the Shlloka Yatra system.
            </p>

            {/* Reference Badge */}
            <div className="inline-block p-4 rounded-xl bg-ivory border border-gold mb-8 text-left max-w-lg w-full">
              <div className="flex justify-between items-center pb-3 border-b border-gold-subtle text-xs mb-3">
                <span className="text-stone uppercase tracking-wider text-[10px]">Booking Reference</span>
                <span className="font-mono font-bold text-forest text-sm">{bookingRef}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-stone block text-[10px] uppercase">Batch</span>
                  <span className="font-medium text-forest">{currentDeparture.name}</span>
                </div>
                <div>
                  <span className="text-stone block text-[10px] uppercase">Dates</span>
                  <span className="font-medium text-forest">{currentDeparture.displayDates}</span>
                </div>
                <div>
                  <span className="text-stone block text-[10px] uppercase">Package</span>
                  <span className="font-medium text-forest">{currentPackage.name.split('—')[0]}</span>
                </div>
                <div>
                  <span className="text-stone block text-[10px] uppercase">Status</span>
                  <span className="font-semibold text-emerald-800">Deposit Secured (Demo)</span>
                </div>
              </div>
            </div>

            {/* Next Steps Briefing */}
            <div className="max-w-lg mx-auto text-left p-5 rounded-lg bg-sage/20 border border-sage/40 mb-8 space-y-2 text-xs text-stone">
              <strong className="text-forest block uppercase tracking-wider text-[11px]">
                Expedition Next Steps:
              </strong>
              <p>1. Our Kathmandu visa concierge will email the Tibet Permit Documentation Guide to <strong className="text-forest">{contactInfo.email}</strong>.</p>
              <p>2. Please prepare color passport scans with 6+ months validity from departure.</p>
              <p>3. Medical fitness clearance forms must be certified 60 days before travel.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center space-x-2 bg-ivory hover:bg-ivory-dark text-forest border border-gold/40 px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <Printer className="w-4 h-4 text-gold" />
                <span>Print Confirmation Summary</span>
              </button>

              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-forest hover:bg-forest-light text-ivory px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

