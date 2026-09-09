---
schema: wang-person/v1
id: p_ELnzf6At4ka2nXv5Dv9bf8
status: active
merged_into: null
display_name: 王問臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rQ3Yw5GJremoW1435566Lv
        subject_person_id: p_ELnzf6At4ka2nXv5Dv9bf8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qV6MaCG15NqXpxUMKpxAgf
          claim_id: c_rQ3Yw5GJremoW1435566Lv
          source_id: s_v1dANyy3jXJUYz8rPXzQpv
          stance: supports
          locator: CBDB:465218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465218）
          source: &a1
            id: s_v1dANyy3jXJUYz8rPXzQpv
            source_type: api_record
            title: 中国历代人物传记资料库：王問臣（CBDB 465218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465218&o=json
            external_identifier: CBDB:465218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sWMeeHxp5HhjNTYoEDhRZw
        subject_person_id: p_ELnzf6At4ka2nXv5Dv9bf8
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
        - id: cs_dC3xw45rQEB3CsZ6Kv8b4H
          claim_id: c_sWMeeHxp5HhjNTYoEDhRZw
          source_id: s_v1dANyy3jXJUYz8rPXzQpv
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

# 王問臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王問臣（CBDB 465218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465218&o=json)
