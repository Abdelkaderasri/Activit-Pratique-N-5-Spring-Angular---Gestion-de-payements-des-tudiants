package org.gestion.backend.repositories;

import org.gestion.backend.entities.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Page<Student> findByFiliere(String filiere, Pageable pageable);
    @Query("Select s from Student s where lower(s.firstName) like lower(concat('%',:keyword,'%')) or lower(s.lastName) like lower(concat('%',:keyword,'%')) ")
    Page<Student> getStudents(@RequestParam ("keyword") String keyword, Pageable pageable);
    Student findByCode(String code);
    Student findByEmail(String email);
}
