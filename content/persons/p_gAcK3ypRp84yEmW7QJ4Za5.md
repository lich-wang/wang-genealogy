---
schema: wang-person/v1
id: p_gAcK3ypRp84yEmW7QJ4Za5
status: active
merged_into: null
display_name: 王讓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JYFLXuDB8t43tdSRS3ZUmi
        subject_person_id: p_gAcK3ypRp84yEmW7QJ4Za5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PeByMk897csMWWd23qDUeJ
          claim_id: c_JYFLXuDB8t43tdSRS3ZUmi
          source_id: s_k5zdC1PSmK6tDj8yMHQMuC
          stance: supports
          locator: CBDB:310879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310879）
          source: &a1
            id: s_k5zdC1PSmK6tDj8yMHQMuC
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 310879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310879&o=json
            external_identifier: CBDB:310879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_knuAN9ozt4a8TCj1STdfd6
        subject_person_id: p_gAcK3ypRp84yEmW7QJ4Za5
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
        - id: cs_Mvkdgw7Yz7YjjjCJxiNXXG
          claim_id: c_knuAN9ozt4a8TCj1STdfd6
          source_id: s_k5zdC1PSmK6tDj8yMHQMuC
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
        id: c_dmI-xS9LU6v_SWM4pmn1bX
        subject_person_id: p_gAcK3ypRp84yEmW7QJ4Za5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uMoYvHtHcYSbRrJYWwDGUq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I7GrVHpKs0hkCUu6FO3IeW
          claim_id: c_dmI-xS9LU6v_SWM4pmn1bX
          source_id: s_k5zdC1PSmK6tDj8yMHQMuC
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百三十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uMoYvHtHcYSbRrJYWwDGUq
        status: active
        display_name: 王陳策
        merged_into_person_id: null
  other: []
---

# 王讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_uMoYvHtHcYSbRrJYWwDGUq | 王陳策 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讓（CBDB 310879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310879&o=json)
