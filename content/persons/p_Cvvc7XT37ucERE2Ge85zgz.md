---
schema: wang-person/v1
id: p_Cvvc7XT37ucERE2Ge85zgz
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6zM3NX58C2zv4DJjz6J5rW
        subject_person_id: p_Cvvc7XT37ucERE2Ge85zgz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hVKhypzmfszd58bXZV8AWW
          claim_id: c_6zM3NX58C2zv4DJjz6J5rW
          source_id: s_Hp1ak12sSQsiKzSY54voHR
          stance: supports
          locator: CBDB:67770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67770）
          source: &a1
            id: s_Hp1ak12sSQsiKzSY54voHR
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 67770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67770&o=json
            external_identifier: CBDB:67770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B5txvdjfK3v8CZMDK2KbVV
        subject_person_id: p_Cvvc7XT37ucERE2Ge85zgz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。籍贯餘姚州，曾任兵部郎中、參議。（中国历代人物传记资料库 CBDB 67770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TnAunzi1WezDQnAfWtj_pp
          claim_id: c_B5txvdjfK3v8CZMDK2KbVV
          source_id: s_Hp1ak12sSQsiKzSY54voHR
          stance: supports
          locator: CBDB:67770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_AZJ6Od8S739Np4Te5yuIsg
        subject_person_id: p_Cvvc7XT37ucERE2Ge85zgz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ntpLcPKNCQwT9YMyz5R3QJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PsUXG_CSpF0lOOdcx2R7JV
          claim_id: c_AZJ6Od8S739Np4Te5yuIsg
          source_id: s_Hp1ak12sSQsiKzSY54voHR
          stance: supports
          locator: 紹興府志:八十卷，lgid=316468：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ntpLcPKNCQwT9YMyz5R3QJ
        status: active
        display_name: 王彥達
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。籍贯餘姚州，曾任兵部郎中、參議。（中国历代人物传记资料库 CBDB 67770） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ntpLcPKNCQwT9YMyz5R3QJ | 王彥達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 67770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67770&o=json)
