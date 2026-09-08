---
schema: wang-person/v1
id: p_dsZ9D4HHH9UmkFqhLKnw63
status: active
merged_into: null
display_name: 王方士
cbdb_id: 175351
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NgWRALHKRhfKtHzFvRZ573
        subject_person_id: p_dsZ9D4HHH9UmkFqhLKnw63
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方士（卒于696年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175351 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Bc2E7hxD2uDF62SEFk63Ad
          claim_id: c_NgWRALHKRhfKtHzFvRZ573
          source_id: s_FcKQpQvysfYb6pcxQyoQ2t
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FcKQpQvysfYb6pcxQyoQ2t
            source_type: api_record
            title: 维基数据：王方士（Q45654633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654633
            external_identifier: Q45654633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_3NMQWh7nOUrLAW5EWP93y8
          claim_id: c_NgWRALHKRhfKtHzFvRZ573
          source_id: s_e7qm5956MWrxEjvfS5tepx
          stance: supports
          locator: CBDB:175351
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_e7qm5956MWrxEjvfS5tepx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方士（175351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175351&o=json
            external_identifier: CBDB:175351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.762Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QLZAeW4hNNt82bgVhNFjEd
        subject_person_id: p_dsZ9D4HHH9UmkFqhLKnw63
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 696年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0696-01-01
            latest: 0696-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n5tUHNQXf1eMNjbunrr2T4
          claim_id: c_QLZAeW4hNNt82bgVhNFjEd
          source_id: s_FcKQpQvysfYb6pcxQyoQ2t
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FcKQpQvysfYb6pcxQyoQ2t
            source_type: api_record
            title: 维基数据：王方士（Q45654633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654633
            external_identifier: Q45654633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TNByth6qcGb9BVg2kLqhYS
        subject_person_id: p_dsZ9D4HHH9UmkFqhLKnw63
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方士
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ewEYhVZpPfPPvoiJtJN3Qn
          claim_id: c_TNByth6qcGb9BVg2kLqhYS
          source_id: s_FcKQpQvysfYb6pcxQyoQ2t
          stance: supports
          locator: Q45654633
          quotation: null
          interpretation_note: null
          source:
            id: s_FcKQpQvysfYb6pcxQyoQ2t
            source_type: api_record
            title: 维基数据：王方士（Q45654633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654633
            external_identifier: Q45654633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_fs4avE6odKR3NL3Brc28zS
          claim_id: c_TNByth6qcGb9BVg2kLqhYS
          source_id: s_e7qm5956MWrxEjvfS5tepx
          stance: supports
          locator: Q45654633
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jjUECKDxJjACFQCC5T44GJ
        subject_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dsZ9D4HHH9UmkFqhLKnw63
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E2TqtoTsff8eTQaFJpGKtC
          claim_id: c_jjUECKDxJjACFQCC5T44GJ
          source_id: s_j6jdwhiGJQo39kTF1QVLj8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_j6jdwhiGJQo39kTF1QVLj8
            source_type: api_record
            title: 维基数据：王弘让（Q45623145）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623145
            external_identifier: Q45623145
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:06.357Z
            metadata_json: null
        - id: cs_jnxcpcfZQtrcFDrnoAHRxV
          claim_id: c_jjUECKDxJjACFQCC5T44GJ
          source_id: s_HKQLtTg4KcjMFuMBCVru2Q
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HKQLtTg4KcjMFuMBCVru2Q
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘讓（154136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154136&o=json
            external_identifier: CBDB:154136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:06.507Z
            metadata_json: null
        - id: cs_y53m4Co8m1oUofU15z7zjC
          claim_id: c_jjUECKDxJjACFQCC5T44GJ
          source_id: s_FcKQpQvysfYb6pcxQyoQ2t
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FcKQpQvysfYb6pcxQyoQ2t
            source_type: api_record
            title: 维基数据：王方士（Q45654633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654633
            external_identifier: Q45654633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_MKbS6Ej8LQi9Yw5QeEd1Hb
          claim_id: c_jjUECKDxJjACFQCC5T44GJ
          source_id: s_e7qm5956MWrxEjvfS5tepx
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_e7qm5956MWrxEjvfS5tepx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方士（175351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175351&o=json
            external_identifier: CBDB:175351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.762Z
            metadata_json: null
      object_person:
        id: p_Ghms3xa2yCWnMb7o2tgKE4
        status: active
        display_name: 王弘让
        merged_into_person_id: null
  children:
    - claim:
        id: c_rjrQFcr876GcGQRLHv9Twf
        subject_person_id: p_dsZ9D4HHH9UmkFqhLKnw63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_55jrV83n918oL71cYM575F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Gzi6QBxvy9qpg8WYCRumrk
          claim_id: c_rjrQFcr876GcGQRLHv9Twf
          source_id: s_e7qm5956MWrxEjvfS5tepx
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_e7qm5956MWrxEjvfS5tepx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方士（175351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175351&o=json
            external_identifier: CBDB:175351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.762Z
            metadata_json: null
        - id: cs_hcK2cHHbFAgzeKN88e6FNA
          claim_id: c_rjrQFcr876GcGQRLHv9Twf
          source_id: s_FcKQpQvysfYb6pcxQyoQ2t
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FcKQpQvysfYb6pcxQyoQ2t
            source_type: api_record
            title: 维基数据：王方士（Q45654633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654633
            external_identifier: Q45654633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_4yUdeV3wc2woFZHBbsigsd
          claim_id: c_rjrQFcr876GcGQRLHv9Twf
          source_id: s_T8raVJHSnhnJXS5b9KKQrU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_T8raVJHSnhnJXS5b9KKQrU
            source_type: api_record
            title: 维基数据：王崇礼（Q45654694）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654694
            external_identifier: Q45654694
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_CtpuxkHw1yiyPCn3AVkxzq
          claim_id: c_rjrQFcr876GcGQRLHv9Twf
          source_id: s_KquKmZ9tNa8t83PfHDu3wU
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_KquKmZ9tNa8t83PfHDu3wU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王崇禮（175352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175352&o=json
            external_identifier: CBDB:175352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.827Z
            metadata_json: null
      object_person:
        id: p_55jrV83n918oL71cYM575F
        status: active
        display_name: 王崇礼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王方士（卒于696年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175351 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 696年 | accepted |
| name.primary | 王方士 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ghms3xa2yCWnMb7o2tgKE4 | 王弘让 | accepted |
| children | p_55jrV83n918oL71cYM575F | 王崇礼 | accepted |

## 外部来源

- [维基数据：王崇礼（Q45654694）](https://www.wikidata.org/wiki/Q45654694)
- [维基数据：王方士（Q45654633）](https://www.wikidata.org/wiki/Q45654633)
- [维基数据：王弘让（Q45623145）](https://www.wikidata.org/wiki/Q45623145)
- [CBDB 中国历代人物传记资料库：王崇禮（175352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175352&o=json)
- [CBDB 中国历代人物传记资料库：王方士（175351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175351&o=json)
- [CBDB 中国历代人物传记资料库：王弘讓（154136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154136&o=json)
