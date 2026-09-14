---
schema: wang-person/v1
id: p_2dWicKUDsAHUdhehLJdT4y
status: active
merged_into: null
display_name: 王振翽
cbdb_id: 30052
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DN45rruRizkmY5gs9a7SAQ
        subject_person_id: p_2dWicKUDsAHUdhehLJdT4y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振翽，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_f3OPIsOYS8pafaO9paZOD6
          claim_id: c_DN45rruRizkmY5gs9a7SAQ
          source_id: s_mEChuo28fJbeQxd4UX5VVm
          stance: supports
          locator: CBDB:30052
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mEChuo28fJbeQxd4UX5VVm
            source_type: api_record
            title: 中国历代人物传记资料库：王振翽（CBDB 30052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30052&o=json
            external_identifier: CBDB:30052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d2K2A6HCeMvEBm5uoAK8FK
        subject_person_id: p_2dWicKUDsAHUdhehLJdT4y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振翽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_grAHmEwmhwT3ayLYbu4J8J
          claim_id: c_d2K2A6HCeMvEBm5uoAK8FK
          source_id: s_mEChuo28fJbeQxd4UX5VVm
          stance: supports
          locator: CBDB:30052
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5J-TBEvFJ9cqCVL_hD7cpk
        subject_person_id: p_cA8W3HE8oaRDDK95zAZk3W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2dWicKUDsAHUdhehLJdT4y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gTTohngOUFzSKuxK9eT_LT
          claim_id: c_5J-TBEvFJ9cqCVL_hD7cpk
          source_id: s_i7hOFVZVMZVu4bf8KTd9jW
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30034）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_i7hOFVZVMZVu4bf8KTd9jW
            source_type: api_record
            title: 中国历代人物传记资料库：王振翽（CBDB 30052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30052&o=json
            external_identifier: CBDB:30052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cA8W3HE8oaRDDK95zAZk3W
        status: active
        display_name: 王詢
        merged_into_person_id: null
  children:
    - claim:
        id: c_quRAHjzpPSziP6dkDTIeSd
        subject_person_id: p_2dWicKUDsAHUdhehLJdT4y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PB54fKtWogxrd5jPZzWXJX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z36FzN7ivf_X_er0lEeQnM
          claim_id: c_quRAHjzpPSziP6dkDTIeSd
          source_id: s_SEpLKOQYGy7WNcepwwfHDo
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30052）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_SEpLKOQYGy7WNcepwwfHDo
            source_type: api_record
            title: 中国历代人物传记资料库：王韞秀（CBDB 30053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30053&o=json
            external_identifier: CBDB:30053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PB54fKtWogxrd5jPZzWXJX
        status: active
        display_name: 王韞秀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王振翽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王振翽，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30052） | accepted |
| name.primary | 王振翽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cA8W3HE8oaRDDK95zAZk3W | 王詢 | accepted |
| children | p_PB54fKtWogxrd5jPZzWXJX | 王韞秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韞秀（CBDB 30053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30053&o=json)
- [中国历代人物传记资料库：王振翽（CBDB 30052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30052&o=json)
