---
schema: wang-person/v1
id: p_MUyNC9ZvMkgEFJsdGCwHzj
status: active
merged_into: null
display_name: 王廷玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LLh2bCD5C122wGFH7fNp1v
        subject_person_id: p_MUyNC9ZvMkgEFJsdGCwHzj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vQmFGxSqKnnaycY2ESu9bY
          claim_id: c_LLh2bCD5C122wGFH7fNp1v
          source_id: s_5k5eEX5nikaMw4xrSvUCbe
          stance: supports
          locator: CBDB:384615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384615）
          source: &a1
            id: s_5k5eEX5nikaMw4xrSvUCbe
            source_type: api_record
            title: 中国历代人物传记资料库：王廷玉（CBDB 384615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384615&o=json
            external_identifier: CBDB:384615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M8B2VbjMAK4wCNFm8682ZC
        subject_person_id: p_MUyNC9ZvMkgEFJsdGCwHzj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kB2qikbkaBvw189i9aKsNG
          claim_id: c_M8B2VbjMAK4wCNFm8682ZC
          source_id: s_5k5eEX5nikaMw4xrSvUCbe
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

# 王廷玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷玉 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷玉（CBDB 384615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384615&o=json)
