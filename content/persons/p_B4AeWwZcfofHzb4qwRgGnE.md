---
schema: wang-person/v1
id: p_B4AeWwZcfofHzb4qwRgGnE
status: active
merged_into: null
display_name: 王炳章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3r2Qmsz5pQ4RyakgbAc16T
        subject_person_id: p_B4AeWwZcfofHzb4qwRgGnE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_23StAQVtqq6EG3f9BjmCJo
          claim_id: c_3r2Qmsz5pQ4RyakgbAc16T
          source_id: s_NCAAdowHDiXEN13Rr2kEiF
          stance: supports
          locator: CBDB:343896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343896）
          source: &a1
            id: s_NCAAdowHDiXEN13Rr2kEiF
            source_type: api_record
            title: 中国历代人物传记资料库：王炳章（CBDB 343896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343896&o=json
            external_identifier: CBDB:343896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rtcU89KuZG9PVuW35GLnfT
        subject_person_id: p_B4AeWwZcfofHzb4qwRgGnE
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
        - id: cs_fBqdNyGeU57iYbBvN2eFsx
          claim_id: c_rtcU89KuZG9PVuW35GLnfT
          source_id: s_NCAAdowHDiXEN13Rr2kEiF
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

# 王炳章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳章 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳章（CBDB 343896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343896&o=json)
