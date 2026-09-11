---
schema: wang-person/v1
id: p_Zy4JKwVK16gSxzJ6T1Zyf2
status: active
merged_into: null
display_name: 王建昌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rgi31nKDbTktCcvym4fvRc
        subject_person_id: p_Zy4JKwVK16gSxzJ6T1Zyf2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jS74GWBxu2dAyzkF8wkuFB
          claim_id: c_rgi31nKDbTktCcvym4fvRc
          source_id: s_keq4rPc5FvLPRjAuqfv6vQ
          stance: supports
          locator: CBDB:327255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327255）
          source: &a1
            id: s_keq4rPc5FvLPRjAuqfv6vQ
            source_type: api_record
            title: 中国历代人物传记资料库：王建昌（CBDB 327255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327255&o=json
            external_identifier: CBDB:327255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_32zZ8A4T6KQagWNhyUbLnh
        subject_person_id: p_Zy4JKwVK16gSxzJ6T1Zyf2
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
        - id: cs_KkvWUvH8PS19nEunrSUhzF
          claim_id: c_32zZ8A4T6KQagWNhyUbLnh
          source_id: s_keq4rPc5FvLPRjAuqfv6vQ
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
        id: c_OKeKkIQPnFvOKqgAPSJpmY
        subject_person_id: p_Zy4JKwVK16gSxzJ6T1Zyf2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tdH923W47W8dKqdDiYNAZ8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fTSeiYEyGkMDJJlIlMdjTB
          claim_id: c_OKeKkIQPnFvOKqgAPSJpmY
          source_id: s_keq4rPc5FvLPRjAuqfv6vQ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tdH923W47W8dKqdDiYNAZ8
        status: active
        display_name: 王楨
        merged_into_person_id: null
  other: []
---

# 王建昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建昌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tdH923W47W8dKqdDiYNAZ8 | 王楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建昌（CBDB 327255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327255&o=json)
