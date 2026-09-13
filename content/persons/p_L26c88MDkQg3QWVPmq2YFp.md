---
schema: wang-person/v1
id: p_L26c88MDkQg3QWVPmq2YFp
status: active
merged_into: null
display_name: 王铭
cbdb_id: 21996
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pb1w4aovux3QDDMN8C9wqK
        subject_person_id: p_L26c88MDkQg3QWVPmq2YFp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铭，宋人物。籍贯臨海。（中国历代人物传记资料库 CBDB 21996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_T2DVbGBo6EFz7i7hBohLwB
          claim_id: c_pb1w4aovux3QDDMN8C9wqK
          source_id: s_7Bm64mSYpntJtzaFQ4k91b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7Bm64mSYpntJtzaFQ4k91b
            source_type: api_record
            title: 维基数据：王铭（Q45401653）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401653
            external_identifier: Q45401653
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:19.862Z
            metadata_json: null
        - id: cs_IfYCsvEjhQob_VqU0nFEQ9
          claim_id: c_pb1w4aovux3QDDMN8C9wqK
          source_id: s_VTt4DiWSj2j363MveoxEiB
          stance: supports
          locator: CBDB:21996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VTt4DiWSj2j363MveoxEiB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銘（21996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21996&o=json
            external_identifier: CBDB:21996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:20.018Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iZ7MkeGKYGhA2UNQgStgbp
        subject_person_id: p_L26c88MDkQg3QWVPmq2YFp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cjip3EJFMbE5iAJTXVcEDK
          claim_id: c_iZ7MkeGKYGhA2UNQgStgbp
          source_id: s_7Bm64mSYpntJtzaFQ4k91b
          stance: supports
          locator: Q45401653
          quotation: null
          interpretation_note: null
          source:
            id: s_7Bm64mSYpntJtzaFQ4k91b
            source_type: api_record
            title: 维基数据：王铭（Q45401653）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401653
            external_identifier: Q45401653
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:19.862Z
            metadata_json: null
        - id: cs_jn4njhayuzNCjBCvRw8xTL
          claim_id: c_iZ7MkeGKYGhA2UNQgStgbp
          source_id: s_VTt4DiWSj2j363MveoxEiB
          stance: supports
          locator: Q45401653
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3gYKgBkACRGjiKZRMDMY4v
        subject_person_id: p_EWAx1K1Zcs56idxSXpA1ot
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_L26c88MDkQg3QWVPmq2YFp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Fw3T6G2zn43x2CmBHhc9U
          claim_id: c_3gYKgBkACRGjiKZRMDMY4v
          source_id: s_7Bm64mSYpntJtzaFQ4k91b
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7Bm64mSYpntJtzaFQ4k91b
            source_type: api_record
            title: 维基数据：王铭（Q45401653）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401653
            external_identifier: Q45401653
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:19.862Z
            metadata_json: null
        - id: cs_a6LmMzxaXMsfYFqQBtMWCC
          claim_id: c_3gYKgBkACRGjiKZRMDMY4v
          source_id: s_kh4vsvPos18srjSBh8r915
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kh4vsvPos18srjSBh8r915
            source_type: api_record
            title: 维基数据：王之望（Q16077412）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077412
            external_identifier: Q16077412
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:56.805Z
            metadata_json: null
        - id: cs_uhDyLzK6xygFRRB9Py7xGA
          claim_id: c_3gYKgBkACRGjiKZRMDMY4v
          source_id: s_bVAFY7MNcm3gZny5izDbqD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bVAFY7MNcm3gZny5izDbqD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之望（1787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json
            external_identifier: CBDB:1787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:10.266Z
            metadata_json: null
      object_person:
        id: p_EWAx1K1Zcs56idxSXpA1ot
        status: active
        display_name: 王之望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王铭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王铭，宋人物。籍贯臨海。（中国历代人物传记资料库 CBDB 21996） | accepted |
| name.primary | 王铭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EWAx1K1Zcs56idxSXpA1ot | 王之望 | accepted |

## 外部来源

- [维基数据：王铭（Q45401653）](https://www.wikidata.org/wiki/Q45401653)
- [维基数据：王之望（Q16077412）](https://www.wikidata.org/wiki/Q16077412)
- [CBDB 中国历代人物传记资料库：王銘（21996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21996&o=json)
- [CBDB 中国历代人物传记资料库：王之望（1787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json)
