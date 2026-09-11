---
schema: wang-person/v1
id: p_V1ZMPrtz1sG8UXheeR3bTy
status: active
merged_into: null
display_name: 王開基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QQQ8wiPQmuN9zNMcdsqq7u
        subject_person_id: p_V1ZMPrtz1sG8UXheeR3bTy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X13ULbN1hLUyAcoD3ongFb
          claim_id: c_QQQ8wiPQmuN9zNMcdsqq7u
          source_id: s_RgYS5M8DWTQYD73C6DjxD4
          stance: supports
          locator: CBDB:492727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492727）
          source: &a1
            id: s_RgYS5M8DWTQYD73C6DjxD4
            source_type: api_record
            title: 中国历代人物传记资料库：王開基（CBDB 492727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492727&o=json
            external_identifier: CBDB:492727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QB2P4Lky7ieeyrBv8HW9mo
        subject_person_id: p_V1ZMPrtz1sG8UXheeR3bTy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開基，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 492727）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cyoRPMON4tKey1w4iK3PE6
          claim_id: c_QB2P4Lky7ieeyrBv8HW9mo
          source_id: s_RgYS5M8DWTQYD73C6DjxD4
          stance: supports
          locator: CBDB:492727
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

# 王開基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開基 | accepted |
| bio.summary | 王開基，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 492727） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開基（CBDB 492727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492727&o=json)
