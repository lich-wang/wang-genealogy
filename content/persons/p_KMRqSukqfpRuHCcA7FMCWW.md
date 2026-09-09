---
schema: wang-person/v1
id: p_KMRqSukqfpRuHCcA7FMCWW
status: active
merged_into: null
display_name: 王璋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eXabzgMGfY5HJ87kXq3Ng7
        subject_person_id: p_KMRqSukqfpRuHCcA7FMCWW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kj3aMY7ZreDCbDM3KAWKDU
          claim_id: c_eXabzgMGfY5HJ87kXq3Ng7
          source_id: s_knFQ5XEQEmw7iNdE9CNiQb
          stance: supports
          locator: CBDB:265499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265499）
          source: &a1
            id: s_knFQ5XEQEmw7iNdE9CNiQb
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 265499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265499&o=json
            external_identifier: CBDB:265499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yqD9T5AFZqqUseHZjM1Vu7
        subject_person_id: p_KMRqSukqfpRuHCcA7FMCWW
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
        - id: cs_3dugHNZvFUbWv2NyVqspB1
          claim_id: c_yqD9T5AFZqqUseHZjM1Vu7
          source_id: s_knFQ5XEQEmw7iNdE9CNiQb
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

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璋（CBDB 265499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265499&o=json)
