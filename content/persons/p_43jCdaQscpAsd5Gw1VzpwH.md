---
schema: wang-person/v1
id: p_43jCdaQscpAsd5Gw1VzpwH
status: active
merged_into: null
display_name: 王宸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QjC429zeDxHL3Cp4bm2pCb
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C2LV5TeGKtPt9FYA2oKvvs
          claim_id: c_QjC429zeDxHL3Cp4bm2pCb
          source_id: s_2fQdgU9EJNAPTPZq3DVYTA
          stance: supports
          locator: CBDB:260073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260073）
          source: &a1
            id: s_2fQdgU9EJNAPTPZq3DVYTA
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 260073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260073&o=json
            external_identifier: CBDB:260073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LQ6f2gSG2UK2Q1THFDnANX
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
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
        - id: cs_ypA32Gy2LozgnhhvyGcS9K
          claim_id: c_LQ6f2gSG2UK2Q1THFDnANX
          source_id: s_2fQdgU9EJNAPTPZq3DVYTA
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
        id: c_aU4PJY8iQaLcrrAfdmnUjH
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bv-tIBscsy886eKyvQB9Of
          claim_id: c_aU4PJY8iQaLcrrAfdmnUjH
          source_id: s_2fQdgU9EJNAPTPZq3DVYTA
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6nEkGFMvqFS2nrjxSDZLbY
        status: active
        display_name: 王洧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6nEkGFMvqFS2nrjxSDZLbY | 王洧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 260073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260073&o=json)
