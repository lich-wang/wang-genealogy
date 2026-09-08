---
schema: wang-person/v1
id: p_qhr63u6HvGLzGzcHEvaWtZ
status: active
merged_into: null
display_name: 王用之
cbdb_id: 18553
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VeCQGGhjLUamUaFwm1VZkt
        subject_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用之，宋人物。CBDB 记录其籍贯记录为臨川，入仕记录为封贈，曾任國公、防禦使。中国历代人物传记资料库（CBDB）以人物编号 18553 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_sotAYM53NkedCp7KtNX7jG
          claim_id: c_VeCQGGhjLUamUaFwm1VZkt
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_ajoegKosCS55O91_hifPVd
          claim_id: c_VeCQGGhjLUamUaFwm1VZkt
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: CBDB:18553
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LrA22XDDddYBd3Xpe9DPJ1
        subject_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_o2GLFDmpmQoqgCF4AGJ1r1
          claim_id: c_LrA22XDDddYBd3Xpe9DPJ1
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: Q45389721
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_smhSr8fWXVFf9uk9WK2e1m
          claim_id: c_LrA22XDDddYBd3Xpe9DPJ1
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: Q45389721
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zD79Juzt3HzbbXExM7NgxM
        subject_person_id: p_U5JQDU5J5YYRKaCvpa53pZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_35QFKfx85i3nAWQ3kqdmAL
          claim_id: c_zD79Juzt3HzbbXExM7NgxM
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_5hW95bouu5ZEDEvq6Yrb41
          claim_id: c_zD79Juzt3HzbbXExM7NgxM
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
        - id: cs_BDRpnRAcXxZK5p4PgAyoJR
          claim_id: c_zD79Juzt3HzbbXExM7NgxM
          source_id: s_KqabcMCYghjh4BxLMBFcZP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KqabcMCYghjh4BxLMBFcZP
            source_type: api_record
            title: 维基数据：王明（Q45389716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389716
            external_identifier: Q45389716
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.732Z
            metadata_json: null
        - id: cs_CWA2eHN433gFXAhRt6ympX
          claim_id: c_zD79Juzt3HzbbXExM7NgxM
          source_id: s_r1DEUtGRws9a3wk7bfrEBS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_r1DEUtGRws9a3wk7bfrEBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（18552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json
            external_identifier: CBDB:18552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.915Z
            metadata_json: null
      object_person:
        id: p_U5JQDU5J5YYRKaCvpa53pZ
        status: active
        display_name: 王明
        merged_into_person_id: null
  children:
    - claim:
        id: c_KDydhWyyxBQVCfbLmJMgyF
        subject_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TCJasuo9M43ytz26ea5oSn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5wcnEwYyGR4dGkx1v9ScQX
          claim_id: c_KDydhWyyxBQVCfbLmJMgyF
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_ciD5hTMGHAHeyM7KFNe7WZ
          claim_id: c_KDydhWyyxBQVCfbLmJMgyF
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_UVye4rBe8GZTnr8BsNvmLu
          claim_id: c_KDydhWyyxBQVCfbLmJMgyF
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_FYMACmSCCeD79bYUHSydHk
          claim_id: c_KDydhWyyxBQVCfbLmJMgyF
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
      object_person:
        id: p_TCJasuo9M43ytz26ea5oSn
        status: active
        display_name: 王益
        merged_into_person_id: null
    - claim:
        id: c_dEhhpaXsEBW23ALJBG1KeA
        subject_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6tMkj2CL26omtHy9xNmzsR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_P1zVm4MYS5MMsWdnftLESJ
          claim_id: c_dEhhpaXsEBW23ALJBG1KeA
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_nXDAH6ZnQKbTG1deXziPGn
          claim_id: c_dEhhpaXsEBW23ALJBG1KeA
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：五子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
        - id: cs_XMLG6vz6qeLWfJQJASYB1E
          claim_id: c_dEhhpaXsEBW23ALJBG1KeA
          source_id: s_xHjZH9uaiSs1Y3gZRpHfZV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xHjZH9uaiSs1Y3gZRpHfZV
            source_type: api_record
            title: 维基数据：王孟（Q45389725）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389725
            external_identifier: Q45389725
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.733Z
            metadata_json: null
        - id: cs_aRb8hjPVY81YC42KSc3o3s
          claim_id: c_dEhhpaXsEBW23ALJBG1KeA
          source_id: s_ZNjq99n8DMYP51AJQv4FQe
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ZNjq99n8DMYP51AJQv4FQe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孟（18554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18554&o=json
            external_identifier: CBDB:18554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.917Z
            metadata_json: null
      object_person:
        id: p_6tMkj2CL26omtHy9xNmzsR
        status: active
        display_name: 王孟
        merged_into_person_id: null
    - claim:
        id: c_tuYLm3gv9Mvh8g8aXbRAKZ
        subject_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VHFY4whfwcoTnJ8AtLo19j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QMX974fYctHcwcyYqHGG4V
          claim_id: c_tuYLm3gv9Mvh8g8aXbRAKZ
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
        - id: cs_j53TM4cNXaRzGyp7Yuf8yR
          claim_id: c_tuYLm3gv9Mvh8g8aXbRAKZ
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_7o59m6QDqV9a4NoPUj89VV
          claim_id: c_tuYLm3gv9Mvh8g8aXbRAKZ
          source_id: s_493CPhcJdFGczoi1HNVAJQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_493CPhcJdFGczoi1HNVAJQ
            source_type: api_record
            title: 维基数据：王II（Q45411362）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45411362
            external_identifier: Q45411362
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:06.504Z
            metadata_json: null
        - id: cs_KEwwwKfYQgCX2ArG3JidQW
          claim_id: c_tuYLm3gv9Mvh8g8aXbRAKZ
          source_id: s_hPSD1MyEF6LB8rbEsrQX4M
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_hPSD1MyEF6LB8rbEsrQX4M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王II（27111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27111&o=json
            external_identifier: CBDB:27111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:06.685Z
            metadata_json: null
      object_person:
        id: p_VHFY4whfwcoTnJ8AtLo19j
        status: active
        display_name: 王II
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TWM2yxJMDPwVwSSbZKP8L5
        subject_person_id: p_ayDBbENQJQKZToA3G7hGQm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_HKnrsXXCHo3s3hsWz1xfFC
          claim_id: c_TWM2yxJMDPwVwSSbZKP8L5
          source_id: s_ZAbz2BGqkU8KTFc8tUrYq4
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZAbz2BGqkU8KTFc8tUrYq4
            source_type: api_record
            title: 维基数据：谢氏（Q45364634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364634
            external_identifier: Q45364634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:15.741Z
            metadata_json: null
        - id: cs_NpFHSSLgTFWkB7P4AyW5gA
          claim_id: c_TWM2yxJMDPwVwSSbZKP8L5
          source_id: s_9pBeLoowJaNiChuJLaFPPm
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_9pBeLoowJaNiChuJLaFPPm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：謝氏（5305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5305&o=json
            external_identifier: CBDB:5305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:15.877Z
            metadata_json: null
        - id: cs_QWQdPPnBN7wNqae5629B5t
          claim_id: c_TWM2yxJMDPwVwSSbZKP8L5
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_idENsnhci5hvdimEqc2H71
          claim_id: c_TWM2yxJMDPwVwSSbZKP8L5
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
      object_person:
        id: p_ayDBbENQJQKZToA3G7hGQm
        status: active
        display_name: 谢氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王用之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用之，宋人物。CBDB 记录其籍贯记录为臨川，入仕记录为封贈，曾任國公、防禦使。中国历代人物传记资料库（CBDB）以人物编号 18553 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王用之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_U5JQDU5J5YYRKaCvpa53pZ | 王明 | accepted |
| children | p_TCJasuo9M43ytz26ea5oSn | 王益 | accepted |
| children | p_6tMkj2CL26omtHy9xNmzsR | 王孟 | accepted |
| children | p_VHFY4whfwcoTnJ8AtLo19j | 王II | accepted |
| spouses | p_ayDBbENQJQKZToA3G7hGQm | 谢氏 | accepted |

## 外部来源

- [维基数据：王孟（Q45389725）](https://www.wikidata.org/wiki/Q45389725)
- [维基数据：王明（Q45389716）](https://www.wikidata.org/wiki/Q45389716)
- [维基数据：王用之（Q45389721）](https://www.wikidata.org/wiki/Q45389721)
- [维基数据：王II（Q45411362）](https://www.wikidata.org/wiki/Q45411362)
- [维基数据：谢氏（Q45364634）](https://www.wikidata.org/wiki/Q45364634)
- [維基數據：王益（Q45365249）](https://www.wikidata.org/wiki/Q45365249)
- [CBDB 中国历代人物传记资料库：王孟（18554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18554&o=json)
- [CBDB 中国历代人物传记资料库：王明（18552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json)
- [CBDB 中国历代人物传记资料库：王益（7082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json)
- [CBDB 中国历代人物传记资料库：王用之（18553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json)
- [CBDB 中国历代人物传记资料库：王II（27111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27111&o=json)
- [CBDB 中国历代人物传记资料库：謝氏（5305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5305&o=json)
