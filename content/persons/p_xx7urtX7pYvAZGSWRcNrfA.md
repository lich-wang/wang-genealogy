---
schema: wang-person/v1
id: p_xx7urtX7pYvAZGSWRcNrfA
status: active
merged_into: null
display_name: 王松
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3jY2u1XFWuQmUpnkP3jF1
        subject_person_id: p_xx7urtX7pYvAZGSWRcNrfA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ys1otwDg3P7XGb4zmcK1Mb
          claim_id: c_P3jY2u1XFWuQmUpnkP3jF1
          source_id: s_Wp8oGL96RGNN6E1sF2X6Y4
          stance: supports
          locator: CBDB:343324
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343324）
          source: &a1
            id: s_Wp8oGL96RGNN6E1sF2X6Y4
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 343324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343324&o=json
            external_identifier: CBDB:343324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_beVHrhK4AWGfqxfy7LNZnh
        subject_person_id: p_xx7urtX7pYvAZGSWRcNrfA
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
        - id: cs_MJpS5PEgQx6TEpqLjU5mg9
          claim_id: c_beVHrhK4AWGfqxfy7LNZnh
          source_id: s_Wp8oGL96RGNN6E1sF2X6Y4
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

# 王松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松（CBDB 343324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343324&o=json)
