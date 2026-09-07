---
schema: wang-person/v1
id: p_NQbvRb1nM7Q9W6mBE1QPGm
status: active
merged_into: null
display_name: 王晏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1TVVzWuMriQKtX6eNTLX6U
        subject_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏（卒于733年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任州倉曹參軍。中国历代人物传记资料库（CBDB）以人物编号 175372 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CwAj9fMxbyKKWQbX3p57TD
          claim_id: c_1TVVzWuMriQKtX6eNTLX6U
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_n-fF9ceZ2QwUI7RkEQcFXS
          claim_id: c_1TVVzWuMriQKtX6eNTLX6U
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: CBDB:175372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1GvDnEMNFL7bVjG46Cxc2S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏（175372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json
            external_identifier: CBDB:175372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.794Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HfQU92BweKwYE3hsh8TC2x
        subject_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 733年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0733-01-01
            latest: 0733-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T5ULT3Xpd7maoE3Z5qwYbE
          claim_id: c_HfQU92BweKwYE3hsh8TC2x
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_skHzPS31XxcYaeXqo5BS3Y
        subject_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J31ydacE1sqLs96sSS1CYn
          claim_id: c_skHzPS31XxcYaeXqo5BS3Y
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: Q45655886
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_kQTR8YGKKUREjK7gQyiepN
          claim_id: c_skHzPS31XxcYaeXqo5BS3Y
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: Q45655886
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZPHJuau838tHjpHkKv96HP
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N3aZebsAc7N64PhaW7KQzK
          claim_id: c_ZPHJuau838tHjpHkKv96HP
          source_id: s_PEi5PX3u187bT4kpf14tBk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PEi5PX3u187bT4kpf14tBk
            source_type: api_record
            title: 维基数据：王方则（Q45654812）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654812
            external_identifier: Q45654812
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.609Z
            metadata_json: null
        - id: cs_f3s9H4b479pp5g8tbVAJdM
          claim_id: c_ZPHJuau838tHjpHkKv96HP
          source_id: s_h2mefce4DJDBc45VEYT8g6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_h2mefce4DJDBc45VEYT8g6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方則（175354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175354&o=json
            external_identifier: CBDB:175354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.773Z
            metadata_json: null
        - id: cs_gHR9NWFy9PeuAVQHFdLYFr
          claim_id: c_ZPHJuau838tHjpHkKv96HP
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_f7DftW6Gqg61vDSpJegdHQ
          claim_id: c_ZPHJuau838tHjpHkKv96HP
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1GvDnEMNFL7bVjG46Cxc2S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏（175372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json
            external_identifier: CBDB:175372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.794Z
            metadata_json: null
      object_person:
        id: p_QAy8esGqXh4jpJu14jC2nj
        status: active
        display_name: 王方则
        merged_into_person_id: null
  children:
    - claim:
        id: c_6fKJJbt3tn7h4YPg6z126s
        subject_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_buYMfghtxSv1VkKD3QBKDW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FugpDGGEi9E2PfRBfJmXAi
          claim_id: c_6fKJJbt3tn7h4YPg6z126s
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1GvDnEMNFL7bVjG46Cxc2S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏（175372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json
            external_identifier: CBDB:175372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.794Z
            metadata_json: null
        - id: cs_ahyN7UMTfHLYjbyKhw2Zzb
          claim_id: c_6fKJJbt3tn7h4YPg6z126s
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_TuP6PFMHB5AaM8xvsfH2Wy
          claim_id: c_6fKJJbt3tn7h4YPg6z126s
          source_id: s_TgTgk71aegjZHEnJ9iMaPB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TgTgk71aegjZHEnJ9iMaPB
            source_type: api_record
            title: 维基数据：王安期（Q45655946）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655946
            external_identifier: Q45655946
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.306Z
            metadata_json: null
        - id: cs_FrrnysT9HgPRTwn3v6KJNE
          claim_id: c_6fKJJbt3tn7h4YPg6z126s
          source_id: s_ryLGg4cWixbLmQJbEtTJMP
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ryLGg4cWixbLmQJbEtTJMP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安期（175373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175373&o=json
            external_identifier: CBDB:175373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.454Z
            metadata_json: null
      object_person:
        id: p_buYMfghtxSv1VkKD3QBKDW
        status: active
        display_name: 王安期
        merged_into_person_id: null
    - claim:
        id: c_fT8VJBt3q1AVGK27A4KUL7
        subject_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xQgm5Xc54SJxf3Gpfe37YB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_F6naZgUmX6LK4GKPGDCrx5
          claim_id: c_fT8VJBt3q1AVGK27A4KUL7
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1GvDnEMNFL7bVjG46Cxc2S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏（175372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json
            external_identifier: CBDB:175372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.794Z
            metadata_json: null
        - id: cs_vLYt66r8Uj2ERJDRz5DgJY
          claim_id: c_fT8VJBt3q1AVGK27A4KUL7
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_sHzstai5v86ykLT4a4xm66
          claim_id: c_fT8VJBt3q1AVGK27A4KUL7
          source_id: s_Gp1154XhD6svMzG7v43K87
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp1154XhD6svMzG7v43K87
            source_type: api_record
            title: 维基数据：王佺期（Q45656006）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656006
            external_identifier: Q45656006
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.306Z
            metadata_json: null
        - id: cs_H2EHK7sJ3XN6XB9VKMEdPa
          claim_id: c_fT8VJBt3q1AVGK27A4KUL7
          source_id: s_fFddpiWE7Psfv9MJgCcYuW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_fFddpiWE7Psfv9MJgCcYuW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佺期（175374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175374&o=json
            external_identifier: CBDB:175374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.486Z
            metadata_json: null
      object_person:
        id: p_xQgm5Xc54SJxf3Gpfe37YB
        status: active
        display_name: 王佺期
        merged_into_person_id: null
    - claim:
        id: c_aXsgj5BH2p5NexcsHMUkX1
        subject_person_id: p_NQbvRb1nM7Q9W6mBE1QPGm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VjBPyVeFWxRXxTkvsVvTMd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CEy1qR1JsPo31652F144wn
          claim_id: c_aXsgj5BH2p5NexcsHMUkX1
          source_id: s_1GvDnEMNFL7bVjG46Cxc2S
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1GvDnEMNFL7bVjG46Cxc2S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏（175372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json
            external_identifier: CBDB:175372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.794Z
            metadata_json: null
        - id: cs_JvgvviHAFgrz36AAYCP1F2
          claim_id: c_aXsgj5BH2p5NexcsHMUkX1
          source_id: s_NsDg765wETB2ibwwY2Lj5e
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsDg765wETB2ibwwY2Lj5e
            source_type: api_record
            title: 维基数据：王晏（Q45655886）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655886
            external_identifier: Q45655886
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_F9H3A2RgiNDmEuX7KR5Kjr
          claim_id: c_aXsgj5BH2p5NexcsHMUkX1
          source_id: s_F7LRKvQvj59CogBUA8wF5a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_F7LRKvQvj59CogBUA8wF5a
            source_type: api_record
            title: 维基数据：王荣期（Q45656066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656066
            external_identifier: Q45656066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
        - id: cs_jW64BMu9N1mXR35E7bNgJ5
          claim_id: c_aXsgj5BH2p5NexcsHMUkX1
          source_id: s_2yx6MuB715hMAjcUFaqfU1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2yx6MuB715hMAjcUFaqfU1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王榮期（175375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175375&o=json
            external_identifier: CBDB:175375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.461Z
            metadata_json: null
      object_person:
        id: p_VjBPyVeFWxRXxTkvsVvTMd
        status: active
        display_name: 王荣期
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晏（卒于733年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任州倉曹參軍。中国历代人物传记资料库（CBDB）以人物编号 175372 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 733年 | accepted |
| name.primary | 王晏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QAy8esGqXh4jpJu14jC2nj | 王方则 | accepted |
| children | p_buYMfghtxSv1VkKD3QBKDW | 王安期 | accepted |
| children | p_xQgm5Xc54SJxf3Gpfe37YB | 王佺期 | accepted |
| children | p_VjBPyVeFWxRXxTkvsVvTMd | 王荣期 | accepted |

## 外部来源

- [维基数据：王安期（Q45655946）](https://www.wikidata.org/wiki/Q45655946)
- [维基数据：王方则（Q45654812）](https://www.wikidata.org/wiki/Q45654812)
- [维基数据：王佺期（Q45656006）](https://www.wikidata.org/wiki/Q45656006)
- [维基数据：王荣期（Q45656066）](https://www.wikidata.org/wiki/Q45656066)
- [维基数据：王晏（Q45655886）](https://www.wikidata.org/wiki/Q45655886)
- [CBDB 中国历代人物传记资料库：王安期（175373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175373&o=json)
- [CBDB 中国历代人物传记资料库：王方則（175354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175354&o=json)
- [CBDB 中国历代人物传记资料库：王佺期（175374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175374&o=json)
- [CBDB 中国历代人物传记资料库：王榮期（175375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175375&o=json)
- [CBDB 中国历代人物传记资料库：王晏（175372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175372&o=json)
