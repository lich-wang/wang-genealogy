---
schema: wang-person/v1
id: p_YhQdL9W3hbyh6iSy4bBDfB
status: active
merged_into: null
display_name: 王琛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oBkVYsFKMBaYLi7HaUFvJX
        subject_person_id: p_YhQdL9W3hbyh6iSy4bBDfB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7k359jboPpS8AQi4XAk74A
          claim_id: c_oBkVYsFKMBaYLi7HaUFvJX
          source_id: s_31f85X6C4bmpHaj1kjLyfC
          stance: supports
          locator: CBDB:244024
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244024）
          source: &a1
            id: s_31f85X6C4bmpHaj1kjLyfC
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 244024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244024&o=json
            external_identifier: CBDB:244024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WawAkyHySCvDFRVC5BwiBU
        subject_person_id: p_YhQdL9W3hbyh6iSy4bBDfB
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
        - id: cs_kJEYR2SrNLaLWY2Qp7f6QE
          claim_id: c_WawAkyHySCvDFRVC5BwiBU
          source_id: s_31f85X6C4bmpHaj1kjLyfC
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
  descendants:
    - claim:
        id: c_9IsTPA2mYVNUb5lxJVIAS_
        subject_person_id: p_YhQdL9W3hbyh6iSy4bBDfB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ykuxM95igZmZbRb9W_uXW5
          claim_id: c_9IsTPA2mYVNUb5lxJVIAS_
          source_id: s_31f85X6C4bmpHaj1kjLyfC
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8P5PCH5aTQeZpUfSAM9z5q
        status: active
        display_name: 王儼
        merged_into_person_id: null
  other: []
---

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_8P5PCH5aTQeZpUfSAM9z5q | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 244024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244024&o=json)
