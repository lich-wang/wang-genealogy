---
schema: wang-person/v1
id: p_UR19nK7p5Hbb32WZDK4P5R
status: active
merged_into: null
display_name: 王邦直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qJP7YDfAtDbpWhtbgZ6SHG
        subject_person_id: p_UR19nK7p5Hbb32WZDK4P5R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sBt1v25kmJcLEDw6f1bGBk
          claim_id: c_qJP7YDfAtDbpWhtbgZ6SHG
          source_id: s_dLAEN3Eubu1ur98rQxNotH
          stance: supports
          locator: CBDB:499681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499681）
          source: &a1
            id: s_dLAEN3Eubu1ur98rQxNotH
            source_type: api_record
            title: 中国历代人物传记资料库：王邦直（CBDB 499681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499681&o=json
            external_identifier: CBDB:499681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BMpsjXxS7xfyvVWxU5RUoh
        subject_person_id: p_UR19nK7p5Hbb32WZDK4P5R
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
        - id: cs_ZJ1eKTLm2w5zyeU5NiTr49
          claim_id: c_BMpsjXxS7xfyvVWxU5RUoh
          source_id: s_dLAEN3Eubu1ur98rQxNotH
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

# 王邦直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦直 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦直（CBDB 499681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499681&o=json)
