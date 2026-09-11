---
schema: wang-person/v1
id: p_ahkRscaUq7ZCw9E2CQMuKL
status: active
merged_into: null
display_name: 王南一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tQwwxNCziEXCbJmAXdXJ7
        subject_person_id: p_ahkRscaUq7ZCw9E2CQMuKL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fkQhbrbxV74nhxJyzVcbKx
          claim_id: c_5tQwwxNCziEXCbJmAXdXJ7
          source_id: s_Bi5BszFEC8hUxXWD4Pcn6U
          stance: supports
          locator: CBDB:97824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97824）
          source: &a1
            id: s_Bi5BszFEC8hUxXWD4Pcn6U
            source_type: api_record
            title: 中国历代人物传记资料库：王南一（CBDB 97824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97824&o=json
            external_identifier: CBDB:97824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DXL5ZPMVHW6vcobDtaygQK
        subject_person_id: p_ahkRscaUq7ZCw9E2CQMuKL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南一，宋人物。曾任教授、添差通判。（中国历代人物传记资料库 CBDB 97824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wD9o2lJABh-A157K8ubwa5
          claim_id: c_DXL5ZPMVHW6vcobDtaygQK
          source_id: s_Bi5BszFEC8hUxXWD4Pcn6U
          stance: supports
          locator: CBDB:97824
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

# 王南一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王南一 | accepted |
| bio.summary | 王南一，宋人物。曾任教授、添差通判。（中国历代人物传记资料库 CBDB 97824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王南一（CBDB 97824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97824&o=json)
