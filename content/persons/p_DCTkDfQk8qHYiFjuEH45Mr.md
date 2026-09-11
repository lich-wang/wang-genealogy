---
schema: wang-person/v1
id: p_DCTkDfQk8qHYiFjuEH45Mr
status: active
merged_into: null
display_name: 王遂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GyBgQu1PMn5J9KE6ZAq3J2
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_23sKfDtP4ES69mdo4xUupS
          claim_id: c_GyBgQu1PMn5J9KE6ZAq3J2
          source_id: s_4z3F8MMmD2S1em5Hn7hH1H
          stance: supports
          locator: CBDB:12053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12053）
          source: &a1
            id: s_4z3F8MMmD2S1em5Hn7hH1H
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 12053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12053&o=json
            external_identifier: CBDB:12053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AircSDGDFvLvLLHUtc6X9Q
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
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
        - id: cs_CpdAZCvPAPQkECj4BhBFWE
          claim_id: c_AircSDGDFvLvLLHUtc6X9Q
          source_id: s_4z3F8MMmD2S1em5Hn7hH1H
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
  ancestors:
    - claim:
        id: c_XO8_GYeepXSmZ-d_VSLAK0
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVqCXVicYP0bCstTcSSyb0
          claim_id: c_XO8_GYeepXSmZ-d_VSLAK0
          source_id: s_4z3F8MMmD2S1em5Hn7hH1H
          stance: supports
          locator: 宋史：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f5uvxnPRT14yx91yn4yLGC
        status: active
        display_name: 王韶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遂 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_f5uvxnPRT14yx91yn4yLGC | 王韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遂（CBDB 12053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12053&o=json)
