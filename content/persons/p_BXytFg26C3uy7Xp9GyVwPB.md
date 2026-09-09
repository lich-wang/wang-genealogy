---
schema: wang-person/v1
id: p_BXytFg26C3uy7Xp9GyVwPB
status: active
merged_into: null
display_name: 王珠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SgjkCNGhYMBc99q2F91srK
        subject_person_id: p_BXytFg26C3uy7Xp9GyVwPB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7MHXvKALeVKoPBEeAaBJ76
          claim_id: c_SgjkCNGhYMBc99q2F91srK
          source_id: s_2xz8kDP2GC81hgBTsrJrE6
          stance: supports
          locator: CBDB:38288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38288）
          source: &a1
            id: s_2xz8kDP2GC81hgBTsrJrE6
            source_type: api_record
            title: 中国历代人物传记资料库：王珠（CBDB 38288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38288&o=json
            external_identifier: CBDB:38288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZkVSEv54Z6Kg1Q8rEsF9ew
        subject_person_id: p_BXytFg26C3uy7Xp9GyVwPB
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
        - id: cs_9TqHEACptKzufLHocEX74q
          claim_id: c_ZkVSEv54Z6Kg1Q8rEsF9ew
          source_id: s_2xz8kDP2GC81hgBTsrJrE6
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

# 王珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珠 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珠（CBDB 38288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38288&o=json)
