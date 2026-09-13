---
schema: wang-person/v1
id: p_B4RSjRcsjwCrbFVWJKmGQY
status: active
merged_into: null
display_name: 王予爵
cbdb_id: 413788
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eak7WxM4bpVhbgJMyVp31i
        subject_person_id: p_B4RSjRcsjwCrbFVWJKmGQY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予爵，史料所见人物。本项目依据《中国历代人物传记资料库：王予爵（CBDB 413788）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_9e-OAFep7DuXBHTuMrlj9d
          claim_id: c_eak7WxM4bpVhbgJMyVp31i
          source_id: s_kGBLm98PCy3rq8qrLwQ4zZ
          stance: supports
          locator: CBDB:413788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_kGBLm98PCy3rq8qrLwQ4zZ
            source_type: api_record
            title: 中国历代人物传记资料库：王予爵（CBDB 413788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413788&o=json
            external_identifier: CBDB:413788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:23.724Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gP3HBMTwrZxQmenLeZi98F
        subject_person_id: p_B4RSjRcsjwCrbFVWJKmGQY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MWVQcDX37tXoAz1jvi767Y
          claim_id: c_gP3HBMTwrZxQmenLeZi98F
          source_id: s_kGBLm98PCy3rq8qrLwQ4zZ
          stance: supports
          locator: CBDB:413788
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4901-5000）｜历史性依据：CBDB 朝代 = 明
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

# 王予爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王予爵，史料所见人物。本项目依据《中国历代人物传记资料库：王予爵（CBDB 413788）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王予爵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王予爵（CBDB 413788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413788&o=json)
