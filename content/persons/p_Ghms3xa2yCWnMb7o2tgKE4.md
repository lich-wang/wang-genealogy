---
schema: wang-person/v1
id: p_Ghms3xa2yCWnMb7o2tgKE4
status: active
merged_into: null
display_name: 王弘让
cbdb_id: 154136
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NYfw5sb2PjVq5Pz5EWaD1T
        subject_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘让，隋人物。CBDB 记录其籍贯记录为京兆府，曾任中書舍人。中国历代人物传记资料库（CBDB）以人物编号 154136 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NxT1VevvQpksMS4H6mQteP
          claim_id: c_NYfw5sb2PjVq5Pz5EWaD1T
          source_id: s_j6jdwhiGJQo39kTF1QVLj8
          stance: supports
          locator: null
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
        - id: cs_eL8B1mE7czwVFgY0-SHBTK
          claim_id: c_NYfw5sb2PjVq5Pz5EWaD1T
          source_id: s_HKQLtTg4KcjMFuMBCVru2Q
          stance: supports
          locator: CBDB:154136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qGE3s6cKhQ9c3bZEdy8J7o
        subject_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘让
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_21EebDT2AF5LZZgmaCDMgm
          claim_id: c_qGE3s6cKhQ9c3bZEdy8J7o
          source_id: s_j6jdwhiGJQo39kTF1QVLj8
          stance: supports
          locator: Q45623145
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
        - id: cs_2cSDDzoDKZYUqUNExVxd1H
          claim_id: c_qGE3s6cKhQ9c3bZEdy8J7o
          source_id: s_HKQLtTg4KcjMFuMBCVru2Q
          stance: supports
          locator: Q45623145
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mKcB8aKdjrS8LK41hKUGZQ
        subject_person_id: p_XCeFwG9tJ3CxQQZAaDRPw2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EQK83aTb8zKp4m7XcjJaic
          claim_id: c_mKcB8aKdjrS8LK41hKUGZQ
          source_id: s_Wac8zdUyM6Acgp31ubAQga
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Wac8zdUyM6Acgp31ubAQga
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼒（154143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154143&o=json
            external_identifier: CBDB:154143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.601Z
            metadata_json: null
        - id: cs_cteGPXE7HbSRkHXiwjKNcu
          claim_id: c_mKcB8aKdjrS8LK41hKUGZQ
          source_id: s_H38AfivXbhKVQWcQyxqL5W
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_H38AfivXbhKVQWcQyxqL5W
            source_type: api_record
            title: 维基数据：王鼒（Q45566627）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45566627
            external_identifier: Q45566627
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_L1DjfNZegyTxzFSkViFvij
          claim_id: c_mKcB8aKdjrS8LK41hKUGZQ
          source_id: s_j6jdwhiGJQo39kTF1QVLj8
          stance: supports
          locator: P22（父）
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
        - id: cs_xTpqaQsZ9Fq5eKpq8cFGoG
          claim_id: c_mKcB8aKdjrS8LK41hKUGZQ
          source_id: s_HKQLtTg4KcjMFuMBCVru2Q
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_XCeFwG9tJ3CxQQZAaDRPw2
        status: active
        display_name: 王鼒
        merged_into_person_id: null
  children:
    - claim:
        id: c_Qj1xuJv9H6hve6fdK9QfBv
        subject_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jiAmGN2EU14hovVHTxwSz4
          claim_id: c_Qj1xuJv9H6hve6fdK9QfBv
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
        - id: cs_AKkKNSyMMuTNuypHo1fgGc
          claim_id: c_Qj1xuJv9H6hve6fdK9QfBv
          source_id: s_dW2Bb8p5tn4ffUPCY1ANMp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_dW2Bb8p5tn4ffUPCY1ANMp
            source_type: api_record
            title: 维基数据：王方泰（Q45623207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623207
            external_identifier: Q45623207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_QG6QFGFUcaved39Hv3dD33
          claim_id: c_Qj1xuJv9H6hve6fdK9QfBv
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_RQFRb7ZkfNHmmspp2wmJ84
        status: active
        display_name: 王方泰
        merged_into_person_id: null
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
        id: p_dsZ9D4HHH9UmkFqhLKnw63
        status: active
        display_name: 王方士
        merged_into_person_id: null
    - claim:
        id: c_KRHQg6EU4yNvwLnxXEdjq4
        subject_person_id: p_Ghms3xa2yCWnMb7o2tgKE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QAy8esGqXh4jpJu14jC2nj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ivE2aCQaF1HNcb8wQ1z4a7
          claim_id: c_KRHQg6EU4yNvwLnxXEdjq4
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
        - id: cs_srLcXJUz285sJ2fZ6BJDRD
          claim_id: c_KRHQg6EU4yNvwLnxXEdjq4
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
        - id: cs_WT96nJkU76WUxtHKab4nCj
          claim_id: c_KRHQg6EU4yNvwLnxXEdjq4
          source_id: s_PEi5PX3u187bT4kpf14tBk
          stance: supports
          locator: P22（父）
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
        - id: cs_tpugU3PbXyrnw6BTMjSkDx
          claim_id: c_KRHQg6EU4yNvwLnxXEdjq4
          source_id: s_h2mefce4DJDBc45VEYT8g6
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_QAy8esGqXh4jpJu14jC2nj
        status: active
        display_name: 王方则
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘让

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘让，隋人物。CBDB 记录其籍贯记录为京兆府，曾任中書舍人。中国历代人物传记资料库（CBDB）以人物编号 154136 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王弘让 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XCeFwG9tJ3CxQQZAaDRPw2 | 王鼒 | accepted |
| children | p_RQFRb7ZkfNHmmspp2wmJ84 | 王方泰 | accepted |
| children | p_dsZ9D4HHH9UmkFqhLKnw63 | 王方士 | accepted |
| children | p_QAy8esGqXh4jpJu14jC2nj | 王方则 | accepted |

## 外部来源

- [维基数据：王方士（Q45654633）](https://www.wikidata.org/wiki/Q45654633)
- [维基数据：王方泰（Q45623207）](https://www.wikidata.org/wiki/Q45623207)
- [维基数据：王方则（Q45654812）](https://www.wikidata.org/wiki/Q45654812)
- [维基数据：王弘让（Q45623145）](https://www.wikidata.org/wiki/Q45623145)
- [维基数据：王鼒（Q45566627）](https://www.wikidata.org/wiki/Q45566627)
- [CBDB 中国历代人物传记资料库：王方士（175351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175351&o=json)
- [CBDB 中国历代人物传记资料库：王方泰（154137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json)
- [CBDB 中国历代人物传记资料库：王方則（175354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175354&o=json)
- [CBDB 中国历代人物传记资料库：王弘讓（154136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154136&o=json)
- [CBDB 中国历代人物传记资料库：王鼒（154143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154143&o=json)
