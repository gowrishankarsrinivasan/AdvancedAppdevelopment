package com.britishenglishcertificate.gowrishankar.service;

import java.util.List;

import com.britishenglishcertificate.gowrishankar.dto.request.PaymentRequestDTO;
import com.britishenglishcertificate.gowrishankar.dto.response.PaymentResponseDTO;

public interface PaymentService {
    String savePayment(PaymentRequestDTO request);

    List<PaymentResponseDTO> getAllPayments();

    PaymentResponseDTO getPaymentById(String id);
}
