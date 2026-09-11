---
schema: wang-person/v1
id: p_jC2G7GykFDabP8d82nEshE
status: active
merged_into: null
display_name: 王筵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S8oZx7Bw7DkHzUb4xrUn5M
        subject_person_id: p_jC2G7GykFDabP8d82nEshE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z9p6byBFdEd1ccLdvjRdkj
          claim_id: c_S8oZx7Bw7DkHzUb4xrUn5M
          source_id: s_3CoDPnWvfzB2DixGXuecM4
          stance: supports
          locator: CBDB:453551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453551）
          source: &a1
            id: s_3CoDPnWvfzB2DixGXuecM4
            source_type: api_record
            title: 中国历代人物传记资料库：王筵（CBDB 453551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453551&o=json
            external_identifier: CBDB:453551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ry8sTsRSBN35z24FD7eCFK
        subject_person_id: p_jC2G7GykFDabP8d82nEshE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筵，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 453551）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JGBhCcF1U0K0CGQCSSPn1m
          claim_id: c_ry8sTsRSBN35z24FD7eCFK
          source_id: s_3CoDPnWvfzB2DixGXuecM4
          stance: supports
          locator: CBDB:453551
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

# 王筵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筵 | accepted |
| bio.summary | 王筵，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 453551） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筵（CBDB 453551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453551&o=json)
