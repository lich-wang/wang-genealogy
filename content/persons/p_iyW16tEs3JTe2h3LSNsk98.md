---
schema: wang-person/v1
id: p_iyW16tEs3JTe2h3LSNsk98
status: active
merged_into: null
display_name: 王智
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HW3VrsFAE83Nmh4Fx9cuYK
        subject_person_id: p_iyW16tEs3JTe2h3LSNsk98
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a2e5qt8cC3jh47BPGDXu1F
          claim_id: c_HW3VrsFAE83Nmh4Fx9cuYK
          source_id: s_aj7rnmX5g8x43sAKM8uXuQ
          stance: supports
          locator: CBDB:336270
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336270）
          source: &a1
            id: s_aj7rnmX5g8x43sAKM8uXuQ
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 336270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336270&o=json
            external_identifier: CBDB:336270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.476Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ChdJeqynaZg3sauAmD7rdq
        subject_person_id: p_iyW16tEs3JTe2h3LSNsk98
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
        - id: cs_5guo3cRjXwG765vwcTa164
          claim_id: c_ChdJeqynaZg3sauAmD7rdq
          source_id: s_aj7rnmX5g8x43sAKM8uXuQ
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

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王智（CBDB 336270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336270&o=json)
