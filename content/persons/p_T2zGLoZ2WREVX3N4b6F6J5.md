---
schema: wang-person/v1
id: p_T2zGLoZ2WREVX3N4b6F6J5
status: active
merged_into: null
display_name: 王廕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dMsrN1GG8mM3wbNVgFZh3x
        subject_person_id: p_T2zGLoZ2WREVX3N4b6F6J5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nN6i4CvbMgvwE2kLFWeLd3
          claim_id: c_dMsrN1GG8mM3wbNVgFZh3x
          source_id: s_io4fErJSqJzKRe28V9BXe6
          stance: supports
          locator: CBDB:39085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39085）
          source: &a1
            id: s_io4fErJSqJzKRe28V9BXe6
            source_type: api_record
            title: 中国历代人物传记资料库：王廕（CBDB 39085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39085&o=json
            external_identifier: CBDB:39085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qP7UTG2y4z3BsHG2Sb7Z1u
        subject_person_id: p_T2zGLoZ2WREVX3N4b6F6J5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廕，宋人物。籍贯長溪，身份为行醫。（中国历代人物传记资料库 CBDB 39085）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qfdb51n1ifNidRl8Z_6Xbc
          claim_id: c_qP7UTG2y4z3BsHG2Sb7Z1u
          source_id: s_io4fErJSqJzKRe28V9BXe6
          stance: supports
          locator: CBDB:39085
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

# 王廕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廕 | accepted |
| bio.summary | 王廕，宋人物。籍贯長溪，身份为行醫。（中国历代人物传记资料库 CBDB 39085） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廕（CBDB 39085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39085&o=json)
