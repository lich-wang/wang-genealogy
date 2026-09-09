---
schema: wang-person/v1
id: p_GgvUisAVMvP1Y9KTvpT4fM
status: active
merged_into: null
display_name: 王祁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zbzQ8u46H9NBHEc9V6c9gK
        subject_person_id: p_GgvUisAVMvP1Y9KTvpT4fM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YbtNam449SxG3EPUCzZUMN
          claim_id: c_zbzQ8u46H9NBHEc9V6c9gK
          source_id: s_GcqKTHx7nk6UL8MkBiiF2e
          stance: supports
          locator: CBDB:39407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39407）
          source: &a1
            id: s_GcqKTHx7nk6UL8MkBiiF2e
            source_type: api_record
            title: 中国历代人物传记资料库：王祁（CBDB 39407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39407&o=json
            external_identifier: CBDB:39407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.609Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1U3qFCTEjkLxPM9ribisff
        subject_person_id: p_GgvUisAVMvP1Y9KTvpT4fM
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
        - id: cs_mAmdiX1VUk31LJMZYb2nnp
          claim_id: c_1U3qFCTEjkLxPM9ribisff
          source_id: s_GcqKTHx7nk6UL8MkBiiF2e
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

# 王祁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祁 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祁（CBDB 39407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39407&o=json)
