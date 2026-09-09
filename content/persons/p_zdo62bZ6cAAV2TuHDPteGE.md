---
schema: wang-person/v1
id: p_zdo62bZ6cAAV2TuHDPteGE
status: active
merged_into: null
display_name: 王雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EWvFQxSLxQGHPrC9JseDra
        subject_person_id: p_zdo62bZ6cAAV2TuHDPteGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s5B5jMiwr7yXCcPt8MyCFK
          claim_id: c_EWvFQxSLxQGHPrC9JseDra
          source_id: s_wvUbPVsmS3Zj4sJHLismgF
          stance: supports
          locator: CBDB:574435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574435）
          source: &a1
            id: s_wvUbPVsmS3Zj4sJHLismgF
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 574435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574435&o=json
            external_identifier: CBDB:574435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QAHGmFH1F97TC1bRvkUMSk
        subject_person_id: p_zdo62bZ6cAAV2TuHDPteGE
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
        - id: cs_tLEti6wAVGA7GENjF7eC1C
          claim_id: c_QAHGmFH1F97TC1bRvkUMSk
          source_id: s_wvUbPVsmS3Zj4sJHLismgF
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

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 574435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574435&o=json)
