"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import Image from "next/image";
import { motion } from "framer-motion";
import { Modal } from "./Modal";
const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/assets/images/g.png",
    "/assets/images/startup.png",
    "/assets/images/foundations.png",
    "/assets/images/science.png",
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
          >
            Certifications
          </motion.h1>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Carousel>
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="rounded-lg border-2"
                      width={400}
                      height={400} // Adjust the height as needed
                      objectFit="cover" // Ensures uniform scaling
                      onClick={() => openModal(src)}
                      objectPosition="center"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNext />
            </Carousel>
          </motion.div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <Image
              src={selectedImage || ""}
              alt="Full view"
              className="h-auto w-full"
              width={1000}
              height={1000}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
