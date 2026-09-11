---
schema: wang-person/v1
id: p_7XYKZZs5tfbPzp9jGRLjrJ
status: active
merged_into: null
display_name: 王泳森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K8BGdLsNhN4bywRUhV5sT6
        subject_person_id: p_7XYKZZs5tfbPzp9jGRLjrJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泳森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WP3GxDx1ANuvd5Yp1TBuT8
          claim_id: c_K8BGdLsNhN4bywRUhV5sT6
          source_id: s_2RjbdqPv7S5F8e6QmPCUuF
          stance: supports
          locator: CBDB:639082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639082）
          source: &a1
            id: s_2RjbdqPv7S5F8e6QmPCUuF
            source_type: api_record
            title: 中国历代人物传记资料库：王泳森（CBDB 639082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639082&o=json
            external_identifier: CBDB:639082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i5TFLqNDGBy7f3yYQXFzz5
        subject_person_id: p_7XYKZZs5tfbPzp9jGRLjrJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泳森，清人物。籍贯黃州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 639082）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KH0pSt7I_bv3gsC-c_nfs_
          claim_id: c_i5TFLqNDGBy7f3yYQXFzz5
          source_id: s_2RjbdqPv7S5F8e6QmPCUuF
          stance: supports
          locator: CBDB:639082
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王泳森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泳森 | accepted |
| bio.summary | 王泳森，清人物。籍贯黃州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 639082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泳森（CBDB 639082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639082&o=json)
