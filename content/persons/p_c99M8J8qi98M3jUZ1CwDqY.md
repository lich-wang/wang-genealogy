---
schema: wang-person/v1
id: p_c99M8J8qi98M3jUZ1CwDqY
status: active
merged_into: null
display_name: 王葆心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ptw1TxK7cypsn4NCyLqjyB
        subject_person_id: p_c99M8J8qi98M3jUZ1CwDqY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rbHUJV3t84GhQLjXauqSdT
          claim_id: c_ptw1TxK7cypsn4NCyLqjyB
          source_id: s_Fr42PZfbWdwccNeCMK6LZC
          stance: supports
          locator: CBDB:640132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640132）
          source: &a1
            id: s_Fr42PZfbWdwccNeCMK6LZC
            source_type: api_record
            title: 中国历代人物传记资料库：王葆心（CBDB 640132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640132&o=json
            external_identifier: CBDB:640132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Exg19DrKTiFQJ55yZ51nXt
        subject_person_id: p_c99M8J8qi98M3jUZ1CwDqY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PYEi3h5yHwGk4PN8478vcY
          claim_id: c_Exg19DrKTiFQJ55yZ51nXt
          source_id: s_Fr42PZfbWdwccNeCMK6LZC
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

# 王葆心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆心 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葆心（CBDB 640132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640132&o=json)
