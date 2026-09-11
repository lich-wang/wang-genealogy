---
schema: wang-person/v1
id: p_exCw5YgdQ8QY9mh1u6nLSd
status: active
merged_into: null
display_name: 王廷元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qWS99S8wY3Nz3C17YGjkV8
        subject_person_id: p_exCw5YgdQ8QY9mh1u6nLSd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pdPYb9uRL6x2XU2rYMX9CD
          claim_id: c_qWS99S8wY3Nz3C17YGjkV8
          source_id: s_Pc66FLRwL2cMe6hBex2q63
          stance: supports
          locator: CBDB:488291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488291）
          source: &a1
            id: s_Pc66FLRwL2cMe6hBex2q63
            source_type: api_record
            title: 中国历代人物传记资料库：王廷元（CBDB 488291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488291&o=json
            external_identifier: CBDB:488291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ShQnWWmCqjmaPwM3ozXDif
        subject_person_id: p_exCw5YgdQ8QY9mh1u6nLSd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷元，明人物。曾任儒學訓導。（中国历代人物传记资料库 CBDB 488291）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6nvSBGgGSenBz5cfg5zMgI
          claim_id: c_ShQnWWmCqjmaPwM3ozXDif
          source_id: s_Pc66FLRwL2cMe6hBex2q63
          stance: supports
          locator: CBDB:488291
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

# 王廷元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷元 | accepted |
| bio.summary | 王廷元，明人物。曾任儒學訓導。（中国历代人物传记资料库 CBDB 488291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷元（CBDB 488291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488291&o=json)
