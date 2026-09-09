---
schema: wang-person/v1
id: p_iC2LMm2r1PH816QULpx83x
status: active
merged_into: null
display_name: 王愷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h1G1yCBd9zC87j5fwPN99i
        subject_person_id: p_iC2LMm2r1PH816QULpx83x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1gJB5bJ7as8uxiav1GKLaX
          claim_id: c_h1G1yCBd9zC87j5fwPN99i
          source_id: s_dAZshWLSiskxDPuLNoEjvp
          stance: supports
          locator: CBDB:67812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67812）
          source: &a1
            id: s_dAZshWLSiskxDPuLNoEjvp
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 67812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67812&o=json
            external_identifier: CBDB:67812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LYDUnb4usyrC1XyRgxCAf4
        subject_person_id: p_iC2LMm2r1PH816QULpx83x
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
        - id: cs_mVT1zLcoPvQp98Jq9CunVf
          claim_id: c_LYDUnb4usyrC1XyRgxCAf4
          source_id: s_dAZshWLSiskxDPuLNoEjvp
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

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 67812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67812&o=json)
