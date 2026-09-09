---
schema: wang-person/v1
id: p_BNN7coXkHuRXneCHvrDRBq
status: active
merged_into: null
display_name: 王道南
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_93E1aFhQRWM14hMvkA8k5Q
        subject_person_id: p_BNN7coXkHuRXneCHvrDRBq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dczPs4d29au68s6iYj3X8X
          claim_id: c_93E1aFhQRWM14hMvkA8k5Q
          source_id: s_URU72s5S7bE4y815iKT86s
          stance: supports
          locator: CBDB:61046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61046）
          source: &a1
            id: s_URU72s5S7bE4y815iKT86s
            source_type: api_record
            title: 中国历代人物传记资料库：王道南（CBDB 61046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61046&o=json
            external_identifier: CBDB:61046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oaHuPVWJ2h4THUK9LCacAU
        subject_person_id: p_BNN7coXkHuRXneCHvrDRBq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5gh4CNdHN4e5tHXPn4hvdR
          claim_id: c_oaHuPVWJ2h4THUK9LCacAU
          source_id: s_URU72s5S7bE4y815iKT86s
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

# 王道南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道南 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道南（CBDB 61046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61046&o=json)
