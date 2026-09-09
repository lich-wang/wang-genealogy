---
schema: wang-person/v1
id: p_dHZC3EZ3ECRTV8RLzJtHuV
status: active
merged_into: null
display_name: 王矩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6S1y1H7kDcBWBHVJJv6ns
        subject_person_id: p_dHZC3EZ3ECRTV8RLzJtHuV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王矩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_537Cto8B9DF7SK8yP3K4A9
          claim_id: c_e6S1y1H7kDcBWBHVJJv6ns
          source_id: s_5s32gXNt1LKDKSS177a7JW
          stance: supports
          locator: CBDB:24349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24349）
          source: &a1
            id: s_5s32gXNt1LKDKSS177a7JW
            source_type: api_record
            title: 中国历代人物传记资料库：王矩（CBDB 24349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24349&o=json
            external_identifier: CBDB:24349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yUBoT8LHnTmFE5TMLQndAC
        subject_person_id: p_dHZC3EZ3ECRTV8RLzJtHuV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQkLht5QKdjtrvptWubKXk
          claim_id: c_yUBoT8LHnTmFE5TMLQndAC
          source_id: s_5s32gXNt1LKDKSS177a7JW
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

# 王矩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王矩 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王矩（CBDB 24349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24349&o=json)
