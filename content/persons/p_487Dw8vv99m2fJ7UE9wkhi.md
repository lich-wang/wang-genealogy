---
schema: wang-person/v1
id: p_487Dw8vv99m2fJ7UE9wkhi
status: active
merged_into: null
display_name: 王淩英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3maAKEdF1aGDYxNz8Fm3gx
        subject_person_id: p_487Dw8vv99m2fJ7UE9wkhi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淩英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5kpeMjKvUFFZpHGTDAobci
          claim_id: c_3maAKEdF1aGDYxNz8Fm3gx
          source_id: s_aRQAtNPXGgz3SCemVjq3Ud
          stance: supports
          locator: CBDB:639119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639119）
          source: &a1
            id: s_aRQAtNPXGgz3SCemVjq3Ud
            source_type: api_record
            title: 中国历代人物传记资料库：王淩英（CBDB 639119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639119&o=json
            external_identifier: CBDB:639119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sL57bcp2M7QoELHCvMcP5a
        subject_person_id: p_487Dw8vv99m2fJ7UE9wkhi
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
        - id: cs_dKDVdGxMUF7DMkbQ4iSP89
          claim_id: c_sL57bcp2M7QoELHCvMcP5a
          source_id: s_aRQAtNPXGgz3SCemVjq3Ud
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

# 王淩英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淩英 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淩英（CBDB 639119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639119&o=json)
