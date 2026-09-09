---
schema: wang-person/v1
id: p_MperEVEq2J313w4A6mm4wY
status: active
merged_into: null
display_name: 王應昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_axz6AGqB7YWCDeqstA8NMT
        subject_person_id: p_MperEVEq2J313w4A6mm4wY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W3nj4DGMKiW6iiwmJSvX7L
          claim_id: c_axz6AGqB7YWCDeqstA8NMT
          source_id: s_GgS17F8UNpaCP8G82G7XHY
          stance: supports
          locator: CBDB:637987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637987）
          source: &a1
            id: s_GgS17F8UNpaCP8G82G7XHY
            source_type: api_record
            title: 中国历代人物传记资料库：王應昇（CBDB 637987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637987&o=json
            external_identifier: CBDB:637987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkBAPA8NvBQ656ukF45gYg
        subject_person_id: p_MperEVEq2J313w4A6mm4wY
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
        - id: cs_v5DH5MwaiEp5ztPutXFAT7
          claim_id: c_EkBAPA8NvBQ656ukF45gYg
          source_id: s_GgS17F8UNpaCP8G82G7XHY
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

# 王應昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應昇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應昇（CBDB 637987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637987&o=json)
