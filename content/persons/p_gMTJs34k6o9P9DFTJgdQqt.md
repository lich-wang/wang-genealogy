---
schema: wang-person/v1
id: p_gMTJs34k6o9P9DFTJgdQqt
status: active
merged_into: null
display_name: 王鍾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zvy89z87SXJ64M8ujB7n5e
        subject_person_id: p_gMTJs34k6o9P9DFTJgdQqt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aqKBr52g8CEoAABe7ywvFo
          claim_id: c_zvy89z87SXJ64M8ujB7n5e
          source_id: s_fEc6oqhsAmZ1tNC3KpCKH6
          stance: supports
          locator: CBDB:264586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264586）
          source: &a1
            id: s_fEc6oqhsAmZ1tNC3KpCKH6
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 264586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264586&o=json
            external_identifier: CBDB:264586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1B8C18jZ33z75EEbXLNCqP
        subject_person_id: p_gMTJs34k6o9P9DFTJgdQqt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zFgN8CE8CjmRJmptjnmHFQ
          claim_id: c_1B8C18jZ33z75EEbXLNCqP
          source_id: s_fEc6oqhsAmZ1tNC3KpCKH6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾（CBDB 264586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264586&o=json)
