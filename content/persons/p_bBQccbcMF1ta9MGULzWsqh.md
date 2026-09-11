---
schema: wang-person/v1
id: p_bBQccbcMF1ta9MGULzWsqh
status: active
merged_into: null
display_name: 王崑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NrKG74FXN4VFnkhhddkAs4
        subject_person_id: p_bBQccbcMF1ta9MGULzWsqh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1itEedcTaRZhawCo6cDKpn
          claim_id: c_NrKG74FXN4VFnkhhddkAs4
          source_id: s_Bn4mhJ5M3FW5W1qHRJSLK6
          stance: supports
          locator: CBDB:475348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475348）
          source: &a1
            id: s_Bn4mhJ5M3FW5W1qHRJSLK6
            source_type: api_record
            title: 中国历代人物传记资料库：王崑（CBDB 475348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475348&o=json
            external_identifier: CBDB:475348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gsyvpwdjFkYxm6LZ5bi7Fg
        subject_person_id: p_bBQccbcMF1ta9MGULzWsqh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 475348）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u0VMOXajrWZSfSfdJFDPbq
          claim_id: c_gsyvpwdjFkYxm6LZ5bi7Fg
          source_id: s_Bn4mhJ5M3FW5W1qHRJSLK6
          stance: supports
          locator: CBDB:475348
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

# 王崑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崑 | accepted |
| bio.summary | 王崑，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 475348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崑（CBDB 475348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475348&o=json)
