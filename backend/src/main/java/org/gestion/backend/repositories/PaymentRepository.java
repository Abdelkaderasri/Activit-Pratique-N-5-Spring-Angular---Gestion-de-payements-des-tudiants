package org.gestion.backend.repositories;

import org.gestion.backend.entities.Payment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long> {

    Page<Payment> findByType(String type, Pageable pageable);

    @Query("Select p from Payment p where lower(p.code) like lower(concat('%',:keyword,'%')) or lower(p.type) like lower(concat('%',:keyword,'%')) ")
    Page<Payment> getPayments(@RequestParam("keyword") String keyword, Pageable pageable);
    Page<Payment> findByStatus(String status, Pageable pageable);
    Page<Payment> findByStudentId(Long studentId, Pageable pageable);
}