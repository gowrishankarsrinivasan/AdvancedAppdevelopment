package com.britishenglishcertificate.gowrishankar.service.impl;

import org.springframework.stereotype.Service;

import com.britishenglishcertificate.gowrishankar.dto.request.PaymentRequestDTO;
import com.britishenglishcertificate.gowrishankar.dto.response.PaymentResponseDTO;
import com.britishenglishcertificate.gowrishankar.model.Payment;
import com.britishenglishcertificate.gowrishankar.repository.PaymentRepo;
import com.britishenglishcertificate.gowrishankar.service.PaymentService;

import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepo paymentRepo;

    public PaymentServiceImpl(PaymentRepo paymentRepo) {
        this.paymentRepo = paymentRepo;
    }

    @Override
    public String savePayment(PaymentRequestDTO request) {
        var payData = Payment.builder()
                .card_holder_name(request.getCard_holder_name())
                .card_number(request.getCard_number())
                .date(request.getDate())
                .email_address(request.getEmail_address())
                .ccv_code(request.getCcv_code())
                .expiry_date(request.getExpiry_date()).build();
        paymentRepo.save(payData);
        return "saved";
    }

    @Override
    public List<PaymentResponseDTO> getAllPayments() {

        throw new UnsupportedOperationException("Unimplemented method 'getAllPayments'");
    }

    @Override
    public PaymentResponseDTO getPaymentById(String id) {
        throw new UnsupportedOperationException("Unimplemented method 'getPaymentById'");
    }
}
