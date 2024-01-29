"use client";
import { useSubscriptionModal } from "@/lib/providers/subscription-modal-provider";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useSupabaseUser } from "@/lib/providers/supabase-user-provider";
import { Button } from "../ui/button";
import Loader from "./loader";
import { Price } from "@/lib/supabase/supabase.types";
import { formatPrice } from "@/lib/utils";

const SubscriptionModal = () => {
  const products: any = [];
  const { open, setOpen } = useSubscriptionModal();
  const { subscription, user } = useSupabaseUser();
  const [isLoading, setIsLoading] = useState(false);

  const onClickContinue = async (price: Price) => {};
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {subscription?.status === "active" ? (
        <DialogContent>Already on a paid plan!</DialogContent>
      ) : (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to a Pro Plan</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            To access Pro features you need to have a paid plan.
          </DialogDescription>
          {products.length
            ? products.map((product) => (
                <div
                  className=" flex justify-between items-center"
                  key={product.id}
                >
                  {product.prices?.map((price) => (
                    <React.Fragment key={price.id}>
                      <b className="text-3xl text-foreground">
                        {formatPrice(price)} / <small>{price.interval}</small>
                      </b>
                      <Button
                        onClick={() => onClickContinue(price)}
                        disabled={isLoading}
                      >
                        {isLoading ? <Loader /> : "Upgrade ✨"}
                      </Button>
                    </React.Fragment>
                  ))}
                </div>
              ))
            : ""}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default SubscriptionModal;
