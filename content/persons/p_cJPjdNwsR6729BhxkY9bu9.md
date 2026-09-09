---
schema: wang-person/v1
id: p_cJPjdNwsR6729BhxkY9bu9
status: active
merged_into: null
display_name: 王撫民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EAVLnYzMwJLysmcL3Km2Bs
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H7deTNYoUmQv5vhWkEx4qK
          claim_id: c_EAVLnYzMwJLysmcL3Km2Bs
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: CBDB:210428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210428）
          source: &a1
            id: s_fX2NiBK6X1E4F19HSQV43o
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 210428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json
            external_identifier: CBDB:210428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPn953nJHptgc7KCTo1b9d
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
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
        - id: cs_BW9qA5VrNtS3z8FQMaR6iz
          claim_id: c_gPn953nJHptgc7KCTo1b9d
          source_id: s_fX2NiBK6X1E4F19HSQV43o
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

# 王撫民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫民 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 210428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json)
