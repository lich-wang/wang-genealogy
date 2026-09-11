---
schema: wang-person/v1
id: p_ScLXmLf2o1TeTAygM8y8wC
status: active
merged_into: null
display_name: 王康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pnANBFDRERHipFjNoQUGyq
        subject_person_id: p_ScLXmLf2o1TeTAygM8y8wC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eTPQVc5ahgYCyHeLQyKi75
          claim_id: c_pnANBFDRERHipFjNoQUGyq
          source_id: s_qLqNXc8kPC6RTzGTTUNpXN
          stance: supports
          locator: CBDB:273640
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273640）
          source: &a1
            id: s_qLqNXc8kPC6RTzGTTUNpXN
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 273640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273640&o=json
            external_identifier: CBDB:273640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_82Sj4zupa92tgHueXbsSMt
        subject_person_id: p_ScLXmLf2o1TeTAygM8y8wC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 273640）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PbfOsBesEPhqst1SYcwt0U
          claim_id: c_82Sj4zupa92tgHueXbsSMt
          source_id: s_qLqNXc8kPC6RTzGTTUNpXN
          stance: supports
          locator: CBDB:273640
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| bio.summary | 王康，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 273640） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 273640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273640&o=json)
