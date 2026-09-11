---
schema: wang-person/v1
id: p_irWDFMafnZM9qjjASKyihG
status: active
merged_into: null
display_name: 王繼曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rhKdaajN1Ugs8xYqczvG7i
        subject_person_id: p_irWDFMafnZM9qjjASKyihG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hTdXDdcpDN28fjut5qnWt3
          claim_id: c_rhKdaajN1Ugs8xYqczvG7i
          source_id: s_Gj9VzCZH1YrLLTpKEzH2bW
          stance: supports
          locator: CBDB:490711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490711）
          source: &a1
            id: s_Gj9VzCZH1YrLLTpKEzH2bW
            source_type: api_record
            title: 中国历代人物传记资料库：王繼曾（CBDB 490711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490711&o=json
            external_identifier: CBDB:490711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wBfP1QMx543Un8x42YkJWz
        subject_person_id: p_irWDFMafnZM9qjjASKyihG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼曾，明人物。曾任典史。（中国历代人物传记资料库 CBDB 490711）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CLX8j8HVUV_JxIL5Pk7Sfi
          claim_id: c_wBfP1QMx543Un8x42YkJWz
          source_id: s_Gj9VzCZH1YrLLTpKEzH2bW
          stance: supports
          locator: CBDB:490711
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

# 王繼曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼曾 | accepted |
| bio.summary | 王繼曾，明人物。曾任典史。（中国历代人物传记资料库 CBDB 490711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼曾（CBDB 490711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490711&o=json)
