---
schema: wang-person/v1
id: p_Jx21u1oXQ28VVY59JcdfLz
status: active
merged_into: null
display_name: 王彪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xrA4Ap9Kp2oF6Lo2kQJkLG
        subject_person_id: p_Jx21u1oXQ28VVY59JcdfLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T5kx7E46BLGzaKNVXEaMZx
          claim_id: c_xrA4Ap9Kp2oF6Lo2kQJkLG
          source_id: s_8Ku9BBmyJf7jLLivaYHvdG
          stance: supports
          locator: CBDB:247201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247201）
          source: &a1
            id: s_8Ku9BBmyJf7jLLivaYHvdG
            source_type: api_record
            title: 中国历代人物传记资料库：王彪（CBDB 247201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247201&o=json
            external_identifier: CBDB:247201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NuwKBf6r25DFyQA8nQd9qy
        subject_person_id: p_Jx21u1oXQ28VVY59JcdfLz
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
        - id: cs_HcmhXPzLM3L31N8hEv8dnE
          claim_id: c_NuwKBf6r25DFyQA8nQd9qy
          source_id: s_8Ku9BBmyJf7jLLivaYHvdG
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
        id: c_WUIxyYbZs0txqV5fQpSoRr
        subject_person_id: p_Jx21u1oXQ28VVY59JcdfLz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SiRDDsb57pG6VTfrkJRXut
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EA7D-uhQXvWNEBCb495_eU
          claim_id: c_WUIxyYbZs0txqV5fQpSoRr
          source_id: s_8Ku9BBmyJf7jLLivaYHvdG
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SiRDDsb57pG6VTfrkJRXut
        status: active
        display_name: 王紳
        merged_into_person_id: null
  other: []
---

# 王彪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_SiRDDsb57pG6VTfrkJRXut | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彪（CBDB 247201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247201&o=json)
