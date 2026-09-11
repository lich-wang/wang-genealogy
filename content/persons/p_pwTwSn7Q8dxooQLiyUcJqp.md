---
schema: wang-person/v1
id: p_pwTwSn7Q8dxooQLiyUcJqp
status: active
merged_into: null
display_name: 王儼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Dou1ME8MW9gc4SMXDsRTp
        subject_person_id: p_pwTwSn7Q8dxooQLiyUcJqp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TiSmM6FXEdDLEZWsrTf1W2
          claim_id: c_1Dou1ME8MW9gc4SMXDsRTp
          source_id: s_DLSsfCWRHHeM7Vd2YWHdEQ
          stance: supports
          locator: CBDB:460136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460136）
          source: &a1
            id: s_DLSsfCWRHHeM7Vd2YWHdEQ
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 460136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460136&o=json
            external_identifier: CBDB:460136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YaeSfhYUbam3ZA7hgoD7e7
        subject_person_id: p_pwTwSn7Q8dxooQLiyUcJqp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 460136）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6M5ZopgnvWWQJybvxWq_x3
          claim_id: c_YaeSfhYUbam3ZA7hgoD7e7
          source_id: s_DLSsfCWRHHeM7Vd2YWHdEQ
          stance: supports
          locator: CBDB:460136
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

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 460136） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 460136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460136&o=json)
