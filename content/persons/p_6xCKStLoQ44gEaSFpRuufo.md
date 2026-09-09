---
schema: wang-person/v1
id: p_6xCKStLoQ44gEaSFpRuufo
status: active
merged_into: null
display_name: 王朝瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8GyfcRPyiRQwMYyPgnSNPM
        subject_person_id: p_6xCKStLoQ44gEaSFpRuufo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_48vxSvJuu2d8vub7WAr4N8
          claim_id: c_8GyfcRPyiRQwMYyPgnSNPM
          source_id: s_YvvifVHj9btmUEEG4me1KZ
          stance: supports
          locator: CBDB:472152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472152）
          source: &a1
            id: s_YvvifVHj9btmUEEG4me1KZ
            source_type: api_record
            title: 中国历代人物传记资料库：王朝瑞（CBDB 472152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472152&o=json
            external_identifier: CBDB:472152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j4bstotDoA9Y3w6h2jM67Z
        subject_person_id: p_6xCKStLoQ44gEaSFpRuufo
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
        - id: cs_gR5wTU8XE5T4aXL1oeR5q1
          claim_id: c_j4bstotDoA9Y3w6h2jM67Z
          source_id: s_YvvifVHj9btmUEEG4me1KZ
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

# 王朝瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝瑞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝瑞（CBDB 472152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472152&o=json)
