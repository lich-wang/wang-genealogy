---
schema: wang-person/v1
id: p_dMddXN9MM9RH4e355Y4XBH
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sfNw5s4K6zu9PnYvK9D2tG
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vK1mAbJCK7ooaaXGkRDF8y
          claim_id: c_sfNw5s4K6zu9PnYvK9D2tG
          source_id: s_uPdDXSM8huR9LUKmSpywQC
          stance: supports
          locator: CBDB:238510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238510）
          source: &a1
            id: s_uPdDXSM8huR9LUKmSpywQC
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 238510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238510&o=json
            external_identifier: CBDB:238510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fzqYbGQNQT2tBJWNaRGmMY
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
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
        - id: cs_dshPNyPsGHkFoXe9R7j6oA
          claim_id: c_fzqYbGQNQT2tBJWNaRGmMY
          source_id: s_uPdDXSM8huR9LUKmSpywQC
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 238510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238510&o=json)
