---
schema: wang-person/v1
id: p_wX9XG93A4Hfpm2XgRSMMJr
status: active
merged_into: null
display_name: 王性
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vBPU9jQZBtvEwWWsqzH69p
        subject_person_id: p_wX9XG93A4Hfpm2XgRSMMJr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王性
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uo2cD62EZQmm74udmBEiuR
          claim_id: c_vBPU9jQZBtvEwWWsqzH69p
          source_id: s_LrT2F9fCPQMeF6ErbqbZ5S
          stance: supports
          locator: CBDB:510168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510168）
          source: &a1
            id: s_LrT2F9fCPQMeF6ErbqbZ5S
            source_type: api_record
            title: 中国历代人物传记资料库：王性（CBDB 510168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510168&o=json
            external_identifier: CBDB:510168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hWcoCWRQ9vkxQYMTyor1Ne
        subject_person_id: p_wX9XG93A4Hfpm2XgRSMMJr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王性，明人物。曾任典史。（中国历代人物传记资料库 CBDB 510168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lmEke3pEKNtkJ92XJ6sgz8
          claim_id: c_hWcoCWRQ9vkxQYMTyor1Ne
          source_id: s_LrT2F9fCPQMeF6ErbqbZ5S
          stance: supports
          locator: CBDB:510168
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

# 王性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王性 | accepted |
| bio.summary | 王性，明人物。曾任典史。（中国历代人物传记资料库 CBDB 510168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王性（CBDB 510168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510168&o=json)
