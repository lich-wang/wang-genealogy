---
schema: wang-person/v1
id: p_M77AZgTaU5fMaJ6D8JQxKp
status: active
merged_into: null
display_name: 王炳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ty2nWUrSF75XJpiN2DUEhG
        subject_person_id: p_M77AZgTaU5fMaJ6D8JQxKp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dZNMKf6EiS83KETPGGVSJj
          claim_id: c_Ty2nWUrSF75XJpiN2DUEhG
          source_id: s_7n1C8kLEzvWugU8DYjdn92
          stance: supports
          locator: CBDB:118697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118697）
          source: &a1
            id: s_7n1C8kLEzvWugU8DYjdn92
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 118697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118697&o=json
            external_identifier: CBDB:118697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_66V4iRFct6aqdDwPj99Kuy
        subject_person_id: p_M77AZgTaU5fMaJ6D8JQxKp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HxzUVCrn5DcR1acwzJee3G
          claim_id: c_66V4iRFct6aqdDwPj99Kuy
          source_id: s_7n1C8kLEzvWugU8DYjdn92
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
        id: c_tbX23WiISVdSB1lodwq1Kf
        subject_person_id: p_M77AZgTaU5fMaJ6D8JQxKp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VNMhpf6ADNYmHf6CEQi37x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_etzf9kCm133oUwdoHgcL-D
          claim_id: c_tbX23WiISVdSB1lodwq1Kf
          source_id: s_XQC6BQdY8WJTcNCopYBF3N
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2263：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XQC6BQdY8WJTcNCopYBF3N
            source_type: api_record
            title: 中国历代人物传记资料库：王桂英（CBDB 118696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118696&o=json
            external_identifier: CBDB:118696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VNMhpf6ADNYmHf6CEQi37x
        status: active
        display_name: 王桂英
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VNMhpf6ADNYmHf6CEQi37x | 王桂英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 118697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118697&o=json)
- [中国历代人物传记资料库：王桂英（CBDB 118696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118696&o=json)
