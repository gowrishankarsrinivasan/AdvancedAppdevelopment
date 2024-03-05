package com.britishenglishcertificate.gowrishankar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.britishenglishcertificate.gowrishankar.model.Payment;

public interface PaymentDataRepo extends JpaRepository<Payment, String> {

}