---
schema: wang-person/v1
id: p_BcHjCnBmUqxH1kjEZVA1YV
status: active
merged_into: null
display_name: 王惠寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8NrSSSLK2hfVNz8j5vL2L
        subject_person_id: p_BcHjCnBmUqxH1kjEZVA1YV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7UJg7pCbKfn8rdPCNhrEm9
          claim_id: c_z8NrSSSLK2hfVNz8j5vL2L
          source_id: s_eGPLDQ7KLE5jJjDXUZ9vfb
          stance: supports
          locator: CBDB:637896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637896）
          source: &a1
            id: s_eGPLDQ7KLE5jJjDXUZ9vfb
            source_type: api_record
            title: 中国历代人物传记资料库：王惠寶（CBDB 637896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637896&o=json
            external_identifier: CBDB:637896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WfABdivefhVci3s3yXgBV3
        subject_person_id: p_BcHjCnBmUqxH1kjEZVA1YV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠寶，清人物。籍贯會稽，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637896）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6ebg0RqbCXDLZ0cUOc5LMG
          claim_id: c_WfABdivefhVci3s3yXgBV3
          source_id: s_eGPLDQ7KLE5jJjDXUZ9vfb
          stance: supports
          locator: CBDB:637896
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

# 王惠寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠寶 | accepted |
| bio.summary | 王惠寶，清人物。籍贯會稽，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠寶（CBDB 637896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637896&o=json)
