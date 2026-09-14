---
schema: wang-person/v1
id: p_uLU6voA3oKZDYf6mokns6L
status: active
merged_into: null
display_name: 王發秀
cbdb_id: 30064
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uM42HCSK9PKq5tReMqSTc6
        subject_person_id: p_uLU6voA3oKZDYf6mokns6L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30064）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eiF7jS9Jky-Shy9BXZ4cuQ
          claim_id: c_uM42HCSK9PKq5tReMqSTc6
          source_id: s_A2UtsMvMHbdz7GRUKq9skJ
          stance: supports
          locator: CBDB:30064
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A2UtsMvMHbdz7GRUKq9skJ
            source_type: api_record
            title: 中国历代人物传记资料库：王發秀（CBDB 30064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30064&o=json
            external_identifier: CBDB:30064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J86hmnLs7gS13H785mzopn
        subject_person_id: p_uLU6voA3oKZDYf6mokns6L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DtNHbz84HcD5j2PT7A1z6m
          claim_id: c_J86hmnLs7gS13H785mzopn
          source_id: s_A2UtsMvMHbdz7GRUKq9skJ
          stance: supports
          locator: CBDB:30064
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WZujjNSu5bsPEyc9s9KbBb
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uLU6voA3oKZDYf6mokns6L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sfwzcRgvqvkMPTi59Ahefx
          claim_id: c_WZujjNSu5bsPEyc9s9KbBb
          source_id: s_VKcG0XQTEbCoW1NRUXgiVa
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30048）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_VKcG0XQTEbCoW1NRUXgiVa
            source_type: api_record
            title: 中国历代人物传记资料库：王發秀（CBDB 30064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30064&o=json
            external_identifier: CBDB:30064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rtn4knLShMzCHnFn2QERef
        status: active
        display_name: 王振聲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王發秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王發秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30064） | accepted |
| name.primary | 王發秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rtn4knLShMzCHnFn2QERef | 王振聲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王發秀（CBDB 30064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30064&o=json)
