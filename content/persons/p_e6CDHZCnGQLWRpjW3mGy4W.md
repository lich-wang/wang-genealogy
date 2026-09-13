---
schema: wang-person/v1
id: p_e6CDHZCnGQLWRpjW3mGy4W
status: active
merged_into: null
display_name: 王子文
cbdb_id: 175486
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N6imcVYpQhCQR5XFHk6y7n
        subject_person_id: p_e6CDHZCnGQLWRpjW3mGy4W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子文（卒于820年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_6T3Q5dn3bVsrR2PPG1mCZm
          claim_id: c_N6imcVYpQhCQR5XFHk6y7n
          source_id: s_BsdJdSP43GBd4RKLpqYYrP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BsdJdSP43GBd4RKLpqYYrP
            source_type: api_record
            title: 维基数据：王子文（Q45662517）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662517
            external_identifier: Q45662517
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.640Z
            metadata_json: null
        - id: cs_aayK-UIMJYl-VXR5EhO25h
          claim_id: c_N6imcVYpQhCQR5XFHk6y7n
          source_id: s_GFyLhXmLA1UJps3QnDhBxZ
          stance: supports
          locator: CBDB:175486
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GFyLhXmLA1UJps3QnDhBxZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子文（175486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175486&o=json
            external_identifier: CBDB:175486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.796Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JK4LJyA5B1p3Zw14tsSTPW
        subject_person_id: p_e6CDHZCnGQLWRpjW3mGy4W
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zc6NHwgbm7Mk2zTRTFt1rL
          claim_id: c_JK4LJyA5B1p3Zw14tsSTPW
          source_id: s_BsdJdSP43GBd4RKLpqYYrP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BsdJdSP43GBd4RKLpqYYrP
            source_type: api_record
            title: 维基数据：王子文（Q45662517）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662517
            external_identifier: Q45662517
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.640Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X9tNZQfD1QNv8yNAGPhMfP
        subject_person_id: p_e6CDHZCnGQLWRpjW3mGy4W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VnG8cfao9YpgCkaC4LFcZo
          claim_id: c_X9tNZQfD1QNv8yNAGPhMfP
          source_id: s_BsdJdSP43GBd4RKLpqYYrP
          stance: supports
          locator: Q45662517
          quotation: null
          interpretation_note: null
          source:
            id: s_BsdJdSP43GBd4RKLpqYYrP
            source_type: api_record
            title: 维基数据：王子文（Q45662517）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662517
            external_identifier: Q45662517
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.640Z
            metadata_json: null
        - id: cs_im8gCHBdowPbT84SNgQAit
          claim_id: c_X9tNZQfD1QNv8yNAGPhMfP
          source_id: s_GFyLhXmLA1UJps3QnDhBxZ
          stance: supports
          locator: Q45662517
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QxnH2CJP7HPGHn7u8tEVzE
        subject_person_id: p_Temqm8d7G2BX5AMhsUSsKe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6CDHZCnGQLWRpjW3mGy4W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UKTY7ZfN5nxCNXMFJVVBGT
          claim_id: c_QxnH2CJP7HPGHn7u8tEVzE
          source_id: s_g91cQTxn2A1Y9WJ81nRhWQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_g91cQTxn2A1Y9WJ81nRhWQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王淮（175485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json
            external_identifier: CBDB:175485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.829Z
            metadata_json: null
        - id: cs_q49JTfRGr98m4ECsDmwDj7
          claim_id: c_QxnH2CJP7HPGHn7u8tEVzE
          source_id: s_oP3nDo3PJy5MiFhowymRjU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oP3nDo3PJy5MiFhowymRjU
            source_type: api_record
            title: 维基数据：王淮（Q45662457）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662457
            external_identifier: Q45662457
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.665Z
            metadata_json: null
        - id: cs_SNdDvnk3Sjz1CmwUQLp21F
          claim_id: c_QxnH2CJP7HPGHn7u8tEVzE
          source_id: s_BsdJdSP43GBd4RKLpqYYrP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BsdJdSP43GBd4RKLpqYYrP
            source_type: api_record
            title: 维基数据：王子文（Q45662517）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662517
            external_identifier: Q45662517
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.640Z
            metadata_json: null
        - id: cs_8S8fuWuME4vQY28VcSZ9Jf
          claim_id: c_QxnH2CJP7HPGHn7u8tEVzE
          source_id: s_GFyLhXmLA1UJps3QnDhBxZ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_GFyLhXmLA1UJps3QnDhBxZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子文（175486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175486&o=json
            external_identifier: CBDB:175486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.796Z
            metadata_json: null
      object_person:
        id: p_Temqm8d7G2BX5AMhsUSsKe
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子文（卒于820年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175486） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王子文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Temqm8d7G2BX5AMhsUSsKe | 王淮 | accepted |

## 外部来源

- [维基数据：王淮（Q45662457）](https://www.wikidata.org/wiki/Q45662457)
- [维基数据：王子文（Q45662517）](https://www.wikidata.org/wiki/Q45662517)
- [CBDB 中国历代人物传记资料库：王淮（175485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175485&o=json)
- [CBDB 中国历代人物传记资料库：王子文（175486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175486&o=json)
