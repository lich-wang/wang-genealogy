---
schema: wang-person/v1
id: p_SndNS7SKo4LPJ33mmLutFM
status: active
merged_into: null
display_name: 王理
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqG7qDofjiJSLqJjoNFFFw
        subject_person_id: p_SndNS7SKo4LPJ33mmLutFM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aAvbM73JpEwSC7CUcGax1v
          claim_id: c_qqG7qDofjiJSLqJjoNFFFw
          source_id: s_SX7GGNiMaFnu97rjq69KXh
          stance: supports
          locator: CBDB:478400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478400）
          source: &a1
            id: s_SX7GGNiMaFnu97rjq69KXh
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 478400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478400&o=json
            external_identifier: CBDB:478400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5PKyPqQfyZLEqNw3PDsFQh
        subject_person_id: p_SndNS7SKo4LPJ33mmLutFM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E8L17D6Qm8SBVjkAvDoRNJ
          claim_id: c_5PKyPqQfyZLEqNw3PDsFQh
          source_id: s_SX7GGNiMaFnu97rjq69KXh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 478400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478400&o=json)
