---
schema: wang-person/v1
id: p_N5kbg3euLXxpkZM8MisDtX
status: active
merged_into: null
display_name: 王慎
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_htiPujdoPs6uVAzXDFTEvf
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎（卒于931年），唐人物。CBDB 记录其曾任州長史。中国历代人物传记资料库（CBDB）以人物编号 175411 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_s9hjUyQ3PQVNPvsz7NEC9C
          claim_id: c_htiPujdoPs6uVAzXDFTEvf
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_eA2-lDajWJ2o3qyRkifh8k
          claim_id: c_htiPujdoPs6uVAzXDFTEvf
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: CBDB:175411
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DnzxPJSxn6augdKjyhv6mF
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 931年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0931-01-01
            latest: 0931-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T1aQoLPnqYi6SNaht31ygt
          claim_id: c_DnzxPJSxn6augdKjyhv6mF
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aKywsu2uKc9Fk13qYftp4u
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DoiD3Pw5US5dkYK6zwnFqp
          claim_id: c_aKywsu2uKc9Fk13qYftp4u
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: Q45658047
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_gQxYgwYbpR9eMp28vHFVto
          claim_id: c_aKywsu2uKc9Fk13qYftp4u
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: Q45658047
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k7AXuFrQodxaHv5gxDksZd
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N5kbg3euLXxpkZM8MisDtX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LSnSfoTGhhavZBcjyt3QMQ
          claim_id: c_k7AXuFrQodxaHv5gxDksZd
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
        - id: cs_mJQSoqNHrK7n2va6GuA4Cc
          claim_id: c_k7AXuFrQodxaHv5gxDksZd
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_5DTWVxT1YJDMsoC3fR6Fst
          claim_id: c_k7AXuFrQodxaHv5gxDksZd
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_zU8a1hceKJKtHpBeLZ1MDe
          claim_id: c_k7AXuFrQodxaHv5gxDksZd
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
      object_person:
        id: p_EfKCuLgqrSjtEomjPoc4j2
        status: active
        display_name: 王知蕴
        merged_into_person_id: null
  children:
    - claim:
        id: c_qyuKaG1th1EUBQZTcnc9Cs
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6CVrjVUbmy69XzKCAP5upP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_78ecsQTEuB6wgDkbGsCU5d
          claim_id: c_qyuKaG1th1EUBQZTcnc9Cs
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_Q6baHs9eCqPomHc8bECyu2
          claim_id: c_qyuKaG1th1EUBQZTcnc9Cs
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
        - id: cs_zsVKMDmhZf9ymWq5z4Wj2z
          claim_id: c_qyuKaG1th1EUBQZTcnc9Cs
          source_id: s_vTFBucCLLBe7JeiUG2mYXX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vTFBucCLLBe7JeiUG2mYXX
            source_type: api_record
            title: 维基数据：王章（Q45658107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658107
            external_identifier: Q45658107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
        - id: cs_UxXEh1sPoCzPkY9HHX1xL5
          claim_id: c_qyuKaG1th1EUBQZTcnc9Cs
          source_id: s_ofPnrB6Mzby8M4z1CNU2gQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ofPnrB6Mzby8M4z1CNU2gQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王章（175412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175412&o=json
            external_identifier: CBDB:175412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.776Z
            metadata_json: null
      object_person:
        id: p_6CVrjVUbmy69XzKCAP5upP
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_DwSMR1F3yWc6qJ1xEmuNG8
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KJXqqDdNPW4RGS64UuXPoQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GzUNKDRegC3tcXKtHHU6nY
          claim_id: c_DwSMR1F3yWc6qJ1xEmuNG8
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
        - id: cs_isgCcjnJ9kD9MwaDFA4qNm
          claim_id: c_DwSMR1F3yWc6qJ1xEmuNG8
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_KmHKWJn91iCHoxm17d7F63
          claim_id: c_DwSMR1F3yWc6qJ1xEmuNG8
          source_id: s_QzGv652HdHZWP8Ys6BgoYX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QzGv652HdHZWP8Ys6BgoYX
            source_type: api_record
            title: 维基数据：王融（Q45658168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658168
            external_identifier: Q45658168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
        - id: cs_ArTkBD6MBkEX6ha1D2uAQH
          claim_id: c_DwSMR1F3yWc6qJ1xEmuNG8
          source_id: s_a2S5JUFb43zC9J3GnE1VPF
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_a2S5JUFb43zC9J3GnE1VPF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王融（175413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175413&o=json
            external_identifier: CBDB:175413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.946Z
            metadata_json: null
      object_person:
        id: p_KJXqqDdNPW4RGS64UuXPoQ
        status: active
        display_name: 王融
        merged_into_person_id: null
    - claim:
        id: c_5UJkkE1GdPvNuiWknMKJtH
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bfEBDBNd4qw8v9nS3Hx2fX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fZiMiHj5FDJVWFKCTze3qv
          claim_id: c_5UJkkE1GdPvNuiWknMKJtH
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_xvkfrY9MCKcE2Agy7Fib78
          claim_id: c_5UJkkE1GdPvNuiWknMKJtH
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
        - id: cs_E7eEa2BjVUaJHCtyLHFz9x
          claim_id: c_5UJkkE1GdPvNuiWknMKJtH
          source_id: s_F3SibBTvZHGkqyNZaneBpj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_F3SibBTvZHGkqyNZaneBpj
            source_type: api_record
            title: 维基数据：王彦范（Q45658226）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658226
            external_identifier: Q45658226
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
        - id: cs_7MJS1jRmNjAJUT3Bi8K8BM
          claim_id: c_5UJkkE1GdPvNuiWknMKJtH
          source_id: s_x3hnSCk9PkRWs8kuJnFL6X
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x3hnSCk9PkRWs8kuJnFL6X
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥範（175414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175414&o=json
            external_identifier: CBDB:175414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.951Z
            metadata_json: null
      object_person:
        id: p_bfEBDBNd4qw8v9nS3Hx2fX
        status: active
        display_name: 王彦范
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慎（卒于931年），唐人物。CBDB 记录其曾任州長史。中国历代人物传记资料库（CBDB）以人物编号 175411 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 931年 | accepted |
| name.primary | 王慎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EfKCuLgqrSjtEomjPoc4j2 | 王知蕴 | accepted |
| children | p_6CVrjVUbmy69XzKCAP5upP | 王章 | accepted |
| children | p_KJXqqDdNPW4RGS64UuXPoQ | 王融 | accepted |
| children | p_bfEBDBNd4qw8v9nS3Hx2fX | 王彦范 | accepted |

## 外部来源

- [维基数据：王融（Q45658168）](https://www.wikidata.org/wiki/Q45658168)
- [维基数据：王慎（Q45658047）](https://www.wikidata.org/wiki/Q45658047)
- [维基数据：王彦范（Q45658226）](https://www.wikidata.org/wiki/Q45658226)
- [维基数据：王章（Q45658107）](https://www.wikidata.org/wiki/Q45658107)
- [维基数据：王知蕴（Q45450093）](https://www.wikidata.org/wiki/Q45450093)
- [CBDB 中国历代人物传记资料库：王融（175413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175413&o=json)
- [CBDB 中国历代人物传记资料库：王慎（175411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json)
- [CBDB 中国历代人物传记资料库：王彥範（175414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175414&o=json)
- [CBDB 中国历代人物传记资料库：王章（175412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175412&o=json)
- [CBDB 中国历代人物传记资料库：王知蘊（145209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json)
