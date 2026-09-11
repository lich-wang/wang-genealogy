---
schema: wang-person/v1
id: p_cp9cyybo898tD93WCpAwvL
status: active
merged_into: null
display_name: 王文昌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rrq25j6VZgQ17EB15srpZ6
        subject_person_id: p_cp9cyybo898tD93WCpAwvL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ckFnFWUT4hzvuTYHX8WJH4
          claim_id: c_Rrq25j6VZgQ17EB15srpZ6
          source_id: s_T3oa95DKVx9qY8FtUAqEg6
          stance: supports
          locator: CBDB:269538
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269538）
          source: &a1
            id: s_T3oa95DKVx9qY8FtUAqEg6
            source_type: api_record
            title: 中国历代人物传记资料库：王文昌（CBDB 269538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269538&o=json
            external_identifier: CBDB:269538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WrEgCyj5q9wJFEVyHQaQxs
        subject_person_id: p_cp9cyybo898tD93WCpAwvL
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
        - id: cs_TKu3TzFABgUJx6U7aT1fuL
          claim_id: c_WrEgCyj5q9wJFEVyHQaQxs
          source_id: s_T3oa95DKVx9qY8FtUAqEg6
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
        id: c_9MdIecyFo1ssbNwjaCUS-P
        subject_person_id: p_cp9cyybo898tD93WCpAwvL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nzFXB9xGtrFNrjS_dHjyQ1
          claim_id: c_9MdIecyFo1ssbNwjaCUS-P
          source_id: s_T3oa95DKVx9qY8FtUAqEg6
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Yg7KAN2d9TocKbC2usfc4o
        status: active
        display_name: 王尚賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文昌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Yg7KAN2d9TocKbC2usfc4o | 王尚賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文昌（CBDB 269538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269538&o=json)
