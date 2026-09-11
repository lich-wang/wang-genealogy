---
schema: wang-person/v1
id: p_3j4bJSuSt5rj7UTEa3SeQ5
status: active
merged_into: null
display_name: 王言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h1CQvu9w4scAD4VUffjmgR
        subject_person_id: p_3j4bJSuSt5rj7UTEa3SeQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FABMcBnGNBLFXsoKcTGZcK
          claim_id: c_h1CQvu9w4scAD4VUffjmgR
          source_id: s_AdDAqL8R87fE3j3p8w8FAp
          stance: supports
          locator: CBDB:573432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573432）
          source: &a1
            id: s_AdDAqL8R87fE3j3p8w8FAp
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 573432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573432&o=json
            external_identifier: CBDB:573432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cwN6y4W4hgcPKNsoAbTN6D
        subject_person_id: p_3j4bJSuSt5rj7UTEa3SeQ5
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
        - id: cs_yJcCwg3C3o4kw29HMzyx3y
          claim_id: c_cwN6y4W4hgcPKNsoAbTN6D
          source_id: s_AdDAqL8R87fE3j3p8w8FAp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IUrFtUeZT_f8Qs4vo9DCR9
        subject_person_id: p_dMA1nwQeFTeJRp3X2vCesa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3j4bJSuSt5rj7UTEa3SeQ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KfIKIvXPL3pSL8iRVXS-Uf
          claim_id: c_IUrFtUeZT_f8Qs4vo9DCR9
          source_id: s_AdDAqL8R87fE3j3p8w8FAp
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，10：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dMA1nwQeFTeJRp3X2vCesa
        status: active
        display_name: 王安
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dMA1nwQeFTeJRp3X2vCesa | 王安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 573432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573432&o=json)
