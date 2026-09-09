---
schema: wang-person/v1
id: p_1oC2qMk3qZtNNJEcLaYnhz
status: active
merged_into: null
display_name: 王汶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PPGmRajVcbJFSFrMBectnM
        subject_person_id: p_1oC2qMk3qZtNNJEcLaYnhz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QdDkc4ARo2RGrjE9ovRViA
          claim_id: c_PPGmRajVcbJFSFrMBectnM
          source_id: s_5GHnvLiEPe9GvE8cxarqQo
          stance: supports
          locator: CBDB:134165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134165）
          source: &a1
            id: s_5GHnvLiEPe9GvE8cxarqQo
            source_type: api_record
            title: 中国历代人物传记资料库：王汶（CBDB 134165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134165&o=json
            external_identifier: CBDB:134165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Srf96czuHDfm73L1DgNiLu
        subject_person_id: p_1oC2qMk3qZtNNJEcLaYnhz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rez5Hce33KokEjshJtkzPh
          claim_id: c_Srf96czuHDfm73L1DgNiLu
          source_id: s_5GHnvLiEPe9GvE8cxarqQo
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

# 王汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汶 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汶（CBDB 134165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134165&o=json)
