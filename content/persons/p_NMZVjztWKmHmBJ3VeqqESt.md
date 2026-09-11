---
schema: wang-person/v1
id: p_NMZVjztWKmHmBJ3VeqqESt
status: active
merged_into: null
display_name: 王遜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_67o46c7PcD9npJmYczhM8D
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7DyutBi7fB2T6J8y3cFmv2
          claim_id: c_67o46c7PcD9npJmYczhM8D
          source_id: s_xAEVe87o3biD33g4CLb25Y
          stance: supports
          locator: CBDB:214400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214400）
          source: &a1
            id: s_xAEVe87o3biD33g4CLb25Y
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 214400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214400&o=json
            external_identifier: CBDB:214400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CwXNu1DsGLAPFJGSKnimL7
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
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
        - id: cs_ZnjLX42UoJUSgxWJVTyQUK
          claim_id: c_CwXNu1DsGLAPFJGSKnimL7
          source_id: s_xAEVe87o3biD33g4CLb25Y
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
        id: c_ujeiQU1mGhPXS11WrbzFFP
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yvTmrClVjv0u7dbzQVqN02
          claim_id: c_ujeiQU1mGhPXS11WrbzFFP
          source_id: s_xAEVe87o3biD33g4CLb25Y
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D1pWDsHWNd5wRUwygKh8wV
        status: active
        display_name: 王三餘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_D1pWDsHWNd5wRUwygKh8wV | 王三餘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遜（CBDB 214400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214400&o=json)
