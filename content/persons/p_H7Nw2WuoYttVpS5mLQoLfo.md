---
schema: wang-person/v1
id: p_H7Nw2WuoYttVpS5mLQoLfo
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Gp4pWWZnFsemGFf6uospF
        subject_person_id: p_H7Nw2WuoYttVpS5mLQoLfo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xMLUvkLMTvPxTBB1kx1Kkv
          claim_id: c_4Gp4pWWZnFsemGFf6uospF
          source_id: s_VyQLMLb79x4cL13F7Xsnwe
          stance: supports
          locator: CBDB:71225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71225）
          source: &a1
            id: s_VyQLMLb79x4cL13F7Xsnwe
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 71225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71225&o=json
            external_identifier: CBDB:71225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3RYYVn51YFw3sXypBh8tcA
        subject_person_id: p_H7Nw2WuoYttVpS5mLQoLfo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1690年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6kBYxMjRydJsy1Z9SEied
          claim_id: c_3RYYVn51YFw3sXypBh8tcA
          source_id: s_VyQLMLb79x4cL13F7Xsnwe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wnBU8z49YQjYcpvNvBD9K1
        subject_person_id: p_H7Nw2WuoYttVpS5mLQoLfo
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
        - id: cs_29H3MZKfejF6FYX7Mb5dgg
          claim_id: c_wnBU8z49YQjYcpvNvBD9K1
          source_id: s_VyQLMLb79x4cL13F7Xsnwe
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

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| birth.date | 1690年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 71225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71225&o=json)
