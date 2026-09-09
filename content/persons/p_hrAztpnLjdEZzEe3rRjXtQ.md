---
schema: wang-person/v1
id: p_hrAztpnLjdEZzEe3rRjXtQ
status: active
merged_into: null
display_name: 王里
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CZKCoh1LGyP155dnJ2AiZs
        subject_person_id: p_hrAztpnLjdEZzEe3rRjXtQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王里
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MMQhry3RXWFK5K6Q9Pe4WP
          claim_id: c_CZKCoh1LGyP155dnJ2AiZs
          source_id: s_Yn88g9ukxUcx1KQE7SNXWv
          stance: supports
          locator: CBDB:291707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291707）
          source: &a1
            id: s_Yn88g9ukxUcx1KQE7SNXWv
            source_type: api_record
            title: 中国历代人物传记资料库：王里（CBDB 291707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291707&o=json
            external_identifier: CBDB:291707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cJ3Qe3sZfAQLXSJrKMxbvJ
        subject_person_id: p_hrAztpnLjdEZzEe3rRjXtQ
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
        - id: cs_P5P2qRJ4rm5tkE1TLV5qyf
          claim_id: c_cJ3Qe3sZfAQLXSJrKMxbvJ
          source_id: s_Yn88g9ukxUcx1KQE7SNXWv
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

# 王里

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王里 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王里（CBDB 291707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291707&o=json)
