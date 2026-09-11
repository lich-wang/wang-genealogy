---
schema: wang-person/v1
id: p_cMgegQDACuJnSsTmWAJHpr
status: active
merged_into: null
display_name: 王瀛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4LZM7ijvDkS9nyiAtpWsxx
        subject_person_id: p_cMgegQDACuJnSsTmWAJHpr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1135FRf8U2RpyRy4Tvuz2T
          claim_id: c_4LZM7ijvDkS9nyiAtpWsxx
          source_id: s_wqPjeAUHViYe5jQoFHnLw4
          stance: supports
          locator: CBDB:232786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232786）
          source: &a1
            id: s_wqPjeAUHViYe5jQoFHnLw4
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 232786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232786&o=json
            external_identifier: CBDB:232786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DrTGCz3eBPBDoUehWgWE11
        subject_person_id: p_cMgegQDACuJnSsTmWAJHpr
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
        - id: cs_687Ah1cUyJKFN3qzKMZWjB
          claim_id: c_DrTGCz3eBPBDoUehWgWE11
          source_id: s_wqPjeAUHViYe5jQoFHnLw4
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
        id: c_7Gy-2xTHsgWmhpY0eitlJ-
        subject_person_id: p_cMgegQDACuJnSsTmWAJHpr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gEPN4Y1sSEhqz6ktqB2iGE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSNHpZofngMZLfBoc759yU
          claim_id: c_7Gy-2xTHsgWmhpY0eitlJ-
          source_id: s_wqPjeAUHViYe5jQoFHnLw4
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gEPN4Y1sSEhqz6ktqB2iGE
        status: active
        display_name: 王所用
        merged_into_person_id: null
  other: []
---

# 王瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gEPN4Y1sSEhqz6ktqB2iGE | 王所用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀛（CBDB 232786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232786&o=json)
