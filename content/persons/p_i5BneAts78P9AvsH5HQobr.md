---
schema: wang-person/v1
id: p_i5BneAts78P9AvsH5HQobr
status: active
merged_into: null
display_name: 王府
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_769CJCfWujXJAVDnaCbDP6
        subject_person_id: p_i5BneAts78P9AvsH5HQobr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王府
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Mx1HhtAFdD2k8jmYqMWmC
          claim_id: c_769CJCfWujXJAVDnaCbDP6
          source_id: s_Hm6yQVPyGH6kBGEMPtsVLG
          stance: supports
          locator: CBDB:212089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212089）
          source: &a1
            id: s_Hm6yQVPyGH6kBGEMPtsVLG
            source_type: api_record
            title: 中国历代人物传记资料库：王府（CBDB 212089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json
            external_identifier: CBDB:212089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xxW7y5AJread1Ep4v2K1hz
        subject_person_id: p_i5BneAts78P9AvsH5HQobr
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
        - id: cs_Yg2BbyXMU5pyWAm3gqgtSL
          claim_id: c_xxW7y5AJread1Ep4v2K1hz
          source_id: s_Hm6yQVPyGH6kBGEMPtsVLG
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

# 王府

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王府 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王府（CBDB 212089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json)
