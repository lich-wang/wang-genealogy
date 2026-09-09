---
schema: wang-person/v1
id: p_nRcMz2seT6EHfF2neQtxKh
status: active
merged_into: null
display_name: 王五兒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cBgfhy9fq4kEUFHi4Y8w9s
        subject_person_id: p_nRcMz2seT6EHfF2neQtxKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王五兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJzLJa6BLSaYSFyt9fNFQo
          claim_id: c_cBgfhy9fq4kEUFHi4Y8w9s
          source_id: s_b8x7t32mtUK5habPXcFPNA
          stance: supports
          locator: CBDB:696169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696169）
          source: &a1
            id: s_b8x7t32mtUK5habPXcFPNA
            source_type: api_record
            title: 中国历代人物传记资料库：王五兒（CBDB 696169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696169&o=json
            external_identifier: CBDB:696169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sQv4TFAEs37RqkCU9Z3YPp
        subject_person_id: p_nRcMz2seT6EHfF2neQtxKh
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
        - id: cs_hE7a7f9AqADhqtsMq7Zt2d
          claim_id: c_sQv4TFAEs37RqkCU9Z3YPp
          source_id: s_b8x7t32mtUK5habPXcFPNA
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

# 王五兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王五兒 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王五兒（CBDB 696169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696169&o=json)
