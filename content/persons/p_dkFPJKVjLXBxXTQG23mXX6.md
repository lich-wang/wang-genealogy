---
schema: wang-person/v1
id: p_dkFPJKVjLXBxXTQG23mXX6
status: active
merged_into: null
display_name: 王輅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gjJPDprb7ELdU2XFFpMTHN
        subject_person_id: p_dkFPJKVjLXBxXTQG23mXX6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oscyDx7oi8iFWjY7DtjDrA
          claim_id: c_gjJPDprb7ELdU2XFFpMTHN
          source_id: s_zGx4r3C8AxeNXM2ivMa1Nk
          stance: supports
          locator: CBDB:575004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575004）
          source: &a1
            id: s_zGx4r3C8AxeNXM2ivMa1Nk
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 575004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575004&o=json
            external_identifier: CBDB:575004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rsBDpDz4cdHKxkcTzYBfJK
        subject_person_id: p_dkFPJKVjLXBxXTQG23mXX6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅，明人物。籍贯公安，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任州別駕。（中国历代人物传记资料库 CBDB 575004）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MCQJbLc5BAXSig6mLD0c8Z
          claim_id: c_rsBDpDz4cdHKxkcTzYBfJK
          source_id: s_zGx4r3C8AxeNXM2ivMa1Nk
          stance: supports
          locator: CBDB:575004
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| bio.summary | 王輅，明人物。籍贯公安，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任州別駕。（中国历代人物传记资料库 CBDB 575004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 575004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575004&o=json)
