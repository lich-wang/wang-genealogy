---
schema: wang-person/v1
id: p_PB54fKtWogxrd5jPZzWXJX
status: active
merged_into: null
display_name: 王韞秀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LAjJoygowQ3sSbyAXYjVnu
        subject_person_id: p_PB54fKtWogxrd5jPZzWXJX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韞秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sqveN58dbA9HtgSTy9bbed
          claim_id: c_LAjJoygowQ3sSbyAXYjVnu
          source_id: s_PULUgomGFma6CpuLg9g71M
          stance: supports
          locator: CBDB:30053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30053）
          source: &a1
            id: s_PULUgomGFma6CpuLg9g71M
            source_type: api_record
            title: 中国历代人物传记资料库：王韞秀（CBDB 30053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30053&o=json
            external_identifier: CBDB:30053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tQ6osabHkmVspSFbJhmwTE
        subject_person_id: p_PB54fKtWogxrd5jPZzWXJX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韞秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GT_VE5uiM3Mri3ksflscTC
          claim_id: c_tQ6osabHkmVspSFbJhmwTE
          source_id: s_PULUgomGFma6CpuLg9g71M
          stance: supports
          locator: CBDB:30053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_2dWicKUDsAHUdhehLJdT4y
        status: active
        display_name: 王振翽
        merged_into_person_id: null
  children:
    - claim:
        id: c_OIVO-KaFCUgjGPyga9YlcN
        subject_person_id: p_PB54fKtWogxrd5jPZzWXJX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PMi3bypr16uBkb92kMogt8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dLhr8rS7lpVzWGy2f9PF1U
          claim_id: c_OIVO-KaFCUgjGPyga9YlcN
          source_id: s_wKT5eqAFJ_i9xmddwlxQt9
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30053）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_wKT5eqAFJ_i9xmddwlxQt9
            source_type: api_record
            title: 中国历代人物传记资料库：王夏（CBDB 30054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30054&o=json
            external_identifier: CBDB:30054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PMi3bypr16uBkb92kMogt8
        status: active
        display_name: 王夏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韞秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韞秀 | accepted |
| bio.summary | 王韞秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2dWicKUDsAHUdhehLJdT4y | 王振翽 | accepted |
| children | p_PMi3bypr16uBkb92kMogt8 | 王夏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夏（CBDB 30054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30054&o=json)
- [中国历代人物传记资料库：王韞秀（CBDB 30053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30053&o=json)
