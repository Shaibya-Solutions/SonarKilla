import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tour } from "@/data/data";
import { sendWhatsappBookingViaLink } from "@/lib/utils";
import { toast } from "sonner";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Card className='overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
      <div className='relative h-56'>
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className='object-cover'
        />
        <div className='absolute top-2 left-2 bg-orange-400 text-white text-xs font-light px-6 py-1 rounded-md'>
          Featured
        </div>
      </div>
      <CardContent className='px-6 flex flex-col justify-between flex-grow'>
        <div className='text-center border-b-2 border-gray-800 pb-4 mb-4'>
          <h3 className='font-bold text-xl mb-2'>{tour.title}</h3>
          <p className='text-gray-600 text-md font-light mb-4'>
            {tour.description}
          </p>
          <p className='text-gray-600 text-sm'>{tour.longDescription}</p>
        </div>
        {/* <div className='flex items-center gap-2 text-sm text-gray-500 mb-2'>
          <Calendar className='h-4 w-4' />
          
        </div> */}

        {/* <div className='flex items-center gap-2 text-sm text-gray-500 mb-4'>
          <Users className='h-4 w-4' />
        </div> */}
        <div className='bg-orange-100 border-gray-300 border-2 rounded-2xl w-full px-6 py-4 text-black text-sm mb-4 flex flex-col items-center justify-center gap-2'>
          <div className='border-b-2 border-gray-300 pb-1 mb-1'>
            Tour Type: Customizable <span>{tour.duration}</span>
          </div>
          <div className='flex flex-wrap w-full items-center justify-between'>
            <div>
              <span className='text-sm'>₹ price on request</span>
            </div>
            <Button
              onClick={() => {
                toast.success("Redirecting to WhatsApp...\nIf you are using whatsapp desktop, you have to copy the message and send it manually.");
                sendWhatsappBookingViaLink(tour.title);
              }}
              className='bg-orange-400 hover:bg-orange-600 text-white rounded-lg opacity-85 px-6'
            >
              Send Enquiry
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
