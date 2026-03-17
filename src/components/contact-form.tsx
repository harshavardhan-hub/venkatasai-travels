"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const date = formData.get("date") as string;
    const busType = formData.get("busType") as string;
    const passengers = formData.get("passengers") as string;
    const pickup = formData.get("pickup") as string;
    const destination = formData.get("destination") as string;
    const details = formData.get("details") as string;

    const webhookUrl = "https://discord.com/api/webhooks/1483444509701312702/afWgKANTwGJckkDWA5k0ka9qUjDy7_tIavZ9nARFAlDfp-9CrzG0-oe36z4AGP6yCsjz";

    const embed = {
      title: "🚍 New Booking Inquiry",
      color: 13215820, // Gold color
      fields: [
        { name: "👤 Name", value: name, inline: true },
        { name: "📞 Phone", value: phone, inline: true },
        { name: "✉️ Email", value: email || "Not provided", inline: true },
        { name: "📅 Travel Date", value: date, inline: true },
        { name: "🚌 Bus Type", value: busType, inline: true },
        { name: "👥 Passengers", value: passengers, inline: true },
        { name: "📍 Pickup", value: pickup, inline: true },
        { name: "🎯 Destination", value: destination, inline: true },
        { name: "📝 Additional Details", value: details || "None provided" }
      ],
      timestamp: new Date().toISOString()
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
      });

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your request. Please try contacting us directly via phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-cream/90 ml-1">Full Name *</label>
          <Input name="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-cream/90 ml-1">Phone Number *</label>
          <Input name="phone" type="tel" placeholder="+91 98765 43210" required />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-cream/90 ml-1">Email (Optional)</label>
          <Input name="email" type="email" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-cream/90 ml-1">Travel Date *</label>
          <Input name="date" type="date" required className="text-cream" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-cream/90 ml-1">Bus Type Required *</label>
          <select name="busType" className="flex h-12 w-full rounded-md border border-gold/30 bg-deep-navy px-4 py-2 text-sm text-cream shadow-sm transition-all focus-within:border-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold appearance-none cursor-pointer">
            <option value="14-Seat Mini Bus">14-Seat Mini Bus</option>
            <option value="18-Seat Mini Bus">18-Seat Mini Bus</option>
            <option value="30-Seat Medium Bus">30-Seat Medium Bus</option>
            <option value="40-Seat Semi Deluxe">40-Seat Semi Deluxe</option>
            <option value="50-Seat Push Back">50-Seat Push Back</option>
            <option value="4K Audio Video Luxury Coach">4K Audio Video Luxury Coach</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-cream/90 ml-1">No. of Passengers *</label>
          <Input name="passengers" type="number" min="1" placeholder="Ex: 25" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-cream/90 ml-1">Pickup Location *</label>
          <Input name="pickup" placeholder="Anantapur" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-cream/90 ml-1">Destination *</label>
          <Input name="destination" placeholder="Tirupati" required />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-cream/90 ml-1">Special Requirements or Tour Details</label>
        <Textarea name="details" placeholder="Tell us more about your trip, preferred timing, luggage details..." />
      </div>

      <Button type="submit" variant="gold" size="lg" disabled={isSubmitting || isSuccess} className="w-full text-lg py-6 h-auto mt-4 transition-all">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" /> Sending...
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle2 className="mr-2 w-5 h-5" /> Request Sent Successfully!
          </>
        ) : (
          <>
            Request Booking <Send className="ml-2 w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  );
}
