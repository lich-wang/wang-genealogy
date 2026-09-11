---
schema: wang-person/v1
id: p_417zhfm5ZNXhM1P5NbFe5r
status: active
merged_into: null
display_name: 王詁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uy1nKJPudtYZhM8GhPbJTU
        subject_person_id: p_417zhfm5ZNXhM1P5NbFe5r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YVwu67LYpbmXstN2f3NTce
          claim_id: c_Uy1nKJPudtYZhM8GhPbJTU
          source_id: s_Mq7Wmu715YuLUoMU3F5sGs
          stance: supports
          locator: CBDB:330518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330518）
          source: &a1
            id: s_Mq7Wmu715YuLUoMU3F5sGs
            source_type: api_record
            title: 中国历代人物传记资料库：王詁（CBDB 330518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330518&o=json
            external_identifier: CBDB:330518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q9YdDCTnJyJEJiLM6Ab13b
        subject_person_id: p_417zhfm5ZNXhM1P5NbFe5r
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
        - id: cs_9w3geD41FkXPvKA9PN9vQx
          claim_id: c_q9YdDCTnJyJEJiLM6Ab13b
          source_id: s_Mq7Wmu715YuLUoMU3F5sGs
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
        id: c_X2aiKxpfsflPj_G_a0NCzV
        subject_person_id: p_417zhfm5ZNXhM1P5NbFe5r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Pp-G8mff20WUYjpHhUx6O
          claim_id: c_X2aiKxpfsflPj_G_a0NCzV
          source_id: s_Mq7Wmu715YuLUoMU3F5sGs
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hwqZhRmhj6vWvdBxFiX9dy
        status: active
        display_name: 王執禮
        merged_into_person_id: null
  other: []
---

# 王詁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hwqZhRmhj6vWvdBxFiX9dy | 王執禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詁（CBDB 330518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330518&o=json)
