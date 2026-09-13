---
schema: wang-person/v1
id: p_bK5L8kQGojpPS4vq64Eeqb
status: active
merged_into: null
display_name: 王湜
cbdb_id: 175631
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JSm2KPVHDNBnRCF38EoS3y
        subject_person_id: p_bK5L8kQGojpPS4vq64Eeqb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湜（卒于783年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175631）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_5trpBSGNwYBUtXwd6tsNvd
          claim_id: c_JSm2KPVHDNBnRCF38EoS3y
          source_id: s_6YhmMhKyS3Wqg3uyTb1kLd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6YhmMhKyS3Wqg3uyTb1kLd
            source_type: api_record
            title: 维基数据：王湜（Q45670066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670066
            external_identifier: Q45670066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
        - id: cs_6G_pGGcEImdvy_d9rQaUxE
          claim_id: c_JSm2KPVHDNBnRCF38EoS3y
          source_id: s_y6EyBW5ivP26jac44pB32y
          stance: supports
          locator: CBDB:175631
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y6EyBW5ivP26jac44pB32y
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王湜（175631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175631&o=json
            external_identifier: CBDB:175631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:54.375Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Knt34mEeiGP87dC6duJQ4B
        subject_person_id: p_bK5L8kQGojpPS4vq64Eeqb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6N7oLMUHC7fUzVCPa7NvUb
          claim_id: c_Knt34mEeiGP87dC6duJQ4B
          source_id: s_6YhmMhKyS3Wqg3uyTb1kLd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6YhmMhKyS3Wqg3uyTb1kLd
            source_type: api_record
            title: 维基数据：王湜（Q45670066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670066
            external_identifier: Q45670066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DUU8dV5MvjAtDKfr1U9HQM
        subject_person_id: p_bK5L8kQGojpPS4vq64Eeqb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GYQPV53xZb9KKC49kFyass
          claim_id: c_DUU8dV5MvjAtDKfr1U9HQM
          source_id: s_y6EyBW5ivP26jac44pB32y
          stance: supports
          locator: Q45670066
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_mkkKw1ovErBHWE4vWEhqJB
          claim_id: c_DUU8dV5MvjAtDKfr1U9HQM
          source_id: s_6YhmMhKyS3Wqg3uyTb1kLd
          stance: supports
          locator: Q45670066
          quotation: null
          interpretation_note: null
          source:
            id: s_6YhmMhKyS3Wqg3uyTb1kLd
            source_type: api_record
            title: 维基数据：王湜（Q45670066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670066
            external_identifier: Q45670066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A7i7fbGEWJ2H7JD2DRQnuJ
        subject_person_id: p_ekuHegWSELBqMS1r7Zus3F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bK5L8kQGojpPS4vq64Eeqb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9PRnosZUmtKok16PMg9QiL
          claim_id: c_A7i7fbGEWJ2H7JD2DRQnuJ
          source_id: s_TYq8ZZgnxdCp9nr5UphnHR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_TYq8ZZgnxdCp9nr5UphnHR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佋（175629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json
            external_identifier: CBDB:175629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:42.222Z
            metadata_json: null
        - id: cs_Eyg6CXd6fPD9NQw2vQE1uF
          claim_id: c_A7i7fbGEWJ2H7JD2DRQnuJ
          source_id: s_1FqjXbKPKZnqaQHDGpRWQV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1FqjXbKPKZnqaQHDGpRWQV
            source_type: api_record
            title: 维基数据：王佋（Q45669971）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669971
            external_identifier: Q45669971
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:42.039Z
            metadata_json: null
        - id: cs_CmTMemekdbfBnd4zs29LWG
          claim_id: c_A7i7fbGEWJ2H7JD2DRQnuJ
          source_id: s_6YhmMhKyS3Wqg3uyTb1kLd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6YhmMhKyS3Wqg3uyTb1kLd
            source_type: api_record
            title: 维基数据：王湜（Q45670066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670066
            external_identifier: Q45670066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
        - id: cs_CBnZxVsA6e4TZK9VXpZzKE
          claim_id: c_A7i7fbGEWJ2H7JD2DRQnuJ
          source_id: s_y6EyBW5ivP26jac44pB32y
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y6EyBW5ivP26jac44pB32y
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王湜（175631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175631&o=json
            external_identifier: CBDB:175631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:54.375Z
            metadata_json: null
      object_person:
        id: p_ekuHegWSELBqMS1r7Zus3F
        status: active
        display_name: 王佋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王湜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王湜（卒于783年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175631） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王湜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ekuHegWSELBqMS1r7Zus3F | 王佋 | accepted |

## 外部来源

- [维基数据：王湜（Q45670066）](https://www.wikidata.org/wiki/Q45670066)
- [维基数据：王佋（Q45669971）](https://www.wikidata.org/wiki/Q45669971)
- [CBDB 中国历代人物传记资料库：王湜（175631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175631&o=json)
- [CBDB 中国历代人物传记资料库：王佋（175629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175629&o=json)
