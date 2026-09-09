---
schema: wang-person/v1
id: p_aaG4XMh5FWsrwhpVgt87X9
status: active
merged_into: null
display_name: 王寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uKojoXVcc7XLTQ8X9Moz2M
        subject_person_id: p_aaG4XMh5FWsrwhpVgt87X9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SsXu66BT4Es6T5Wazy2buW
          claim_id: c_uKojoXVcc7XLTQ8X9Moz2M
          source_id: s_orLYST68REL2Crad6Gyv3f
          stance: supports
          locator: CBDB:452441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452441）
          source: &a1
            id: s_orLYST68REL2Crad6Gyv3f
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 452441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452441&o=json
            external_identifier: CBDB:452441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.341Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3HyuqYE731KuTibjPRn9Jo
        subject_person_id: p_aaG4XMh5FWsrwhpVgt87X9
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
        - id: cs_i3j5HMLoqov4GHuube8pLD
          claim_id: c_3HyuqYE731KuTibjPRn9Jo
          source_id: s_orLYST68REL2Crad6Gyv3f
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

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 452441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452441&o=json)
