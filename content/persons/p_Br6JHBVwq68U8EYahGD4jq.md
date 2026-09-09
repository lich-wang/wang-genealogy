---
schema: wang-person/v1
id: p_Br6JHBVwq68U8EYahGD4jq
status: active
merged_into: null
display_name: 王用文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WC4ffWC1gmHi3TvU65eFQA
        subject_person_id: p_Br6JHBVwq68U8EYahGD4jq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7aAk9sWybyPp7BxdGhoP3f
          claim_id: c_WC4ffWC1gmHi3TvU65eFQA
          source_id: s_rPGq7Ze91sKKzKx3ToU9U7
          stance: supports
          locator: CBDB:492993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492993）
          source: &a1
            id: s_rPGq7Ze91sKKzKx3ToU9U7
            source_type: api_record
            title: 中国历代人物传记资料库：王用文（CBDB 492993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492993&o=json
            external_identifier: CBDB:492993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dxLXu6drRtPix4s5zMwprD
        subject_person_id: p_Br6JHBVwq68U8EYahGD4jq
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
        - id: cs_hdsktnWJEw25MapLZxvFRd
          claim_id: c_dxLXu6drRtPix4s5zMwprD
          source_id: s_rPGq7Ze91sKKzKx3ToU9U7
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

# 王用文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用文（CBDB 492993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492993&o=json)
