---
schema: wang-person/v1
id: p_pBNZiURNhTvnzH774UY4Jb
status: active
merged_into: null
display_name: 王玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MmpWCvKQ2xjSDZKX74QA1v
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QFtRM2SWe2Dojz2P6H57Vt
          claim_id: c_MmpWCvKQ2xjSDZKX74QA1v
          source_id: s_H4kgRTdbTVdJtFNPuG4pBb
          stance: supports
          locator: CBDB:298281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298281）
          source: &a1
            id: s_H4kgRTdbTVdJtFNPuG4pBb
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 298281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298281&o=json
            external_identifier: CBDB:298281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jKPkW7QgALBBetKzrCDTgS
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
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
        - id: cs_SJvF91VmLqAiHZXaiPDSE1
          claim_id: c_jKPkW7QgALBBetKzrCDTgS
          source_id: s_H4kgRTdbTVdJtFNPuG4pBb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3q4B5wHp8u0fs_tr8HNQbF
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bz3NvJQD52xRNlA8rTUl0l
          claim_id: c_3q4B5wHp8u0fs_tr8HNQbF
          source_id: s_H4kgRTdbTVdJtFNPuG4pBb
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UjZpJ3nna6WnKHPp7DAt53
        status: active
        display_name: 王三聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UjZpJ3nna6WnKHPp7DAt53 | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 298281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298281&o=json)
