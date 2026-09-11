---
schema: wang-person/v1
id: p_NLVSsqFEALrqsyQdea698j
status: active
merged_into: null
display_name: 王匯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRLykavHrJ7bQy3HNLTK9B
        subject_person_id: p_NLVSsqFEALrqsyQdea698j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tL8UxcD7yuTGJRQcuHqcTn
          claim_id: c_oRLykavHrJ7bQy3HNLTK9B
          source_id: s_bEYsqw53yhQXTHCv1xJdf3
          stance: supports
          locator: CBDB:284253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284253）
          source: &a1
            id: s_bEYsqw53yhQXTHCv1xJdf3
            source_type: api_record
            title: 中国历代人物传记资料库：王匯（CBDB 284253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284253&o=json
            external_identifier: CBDB:284253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_thYYbBnpqCr8iBxRJ2oeiQ
        subject_person_id: p_NLVSsqFEALrqsyQdea698j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匯，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284253）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H_rWRNrJ1PEypbcWIkUxMo
          claim_id: c_thYYbBnpqCr8iBxRJ2oeiQ
          source_id: s_bEYsqw53yhQXTHCv1xJdf3
          stance: supports
          locator: CBDB:284253
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

# 王匯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王匯 | accepted |
| bio.summary | 王匯，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284253） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王匯（CBDB 284253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284253&o=json)
