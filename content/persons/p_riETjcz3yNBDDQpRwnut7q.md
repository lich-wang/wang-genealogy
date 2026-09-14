---
schema: wang-person/v1
id: p_riETjcz3yNBDDQpRwnut7q
status: active
merged_into: null
display_name: 王振翮
cbdb_id: 30050
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DczGWxgxd9rpaM3kJGAmpz
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王振翮，清人物。籍贯寶坻，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 30050）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5pNXPoNo9Cd2m1v80x-Lwt
          claim_id: c_DczGWxgxd9rpaM3kJGAmpz
          source_id: s_PMTgj13fx251DT13YCGCTk
          stance: supports
          locator: CBDB:30050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PMTgj13fx251DT13YCGCTk
            source_type: api_record
            title: 中国历代人物传记资料库：王振翮（CBDB 30050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30050&o=json
            external_identifier: CBDB:30050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NjTYNX4FwHFb73QUosg3Dh
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振翮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wAungGBBYuDpwiA9KFRgMJ
          claim_id: c_NjTYNX4FwHFb73QUosg3Dh
          source_id: s_PMTgj13fx251DT13YCGCTk
          stance: supports
          locator: CBDB:30050
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hYLw9ndWs8poNy21s__fg4
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5YwESF55gMUFR6rDE4fuhn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ie-i0IZd4FS4Knx5N49o65
          claim_id: c_hYLw9ndWs8poNy21s__fg4
          source_id: s_Y7XBsWTQlThmCLSShKnxEQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30050）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Y7XBsWTQlThmCLSShKnxEQ
            source_type: api_record
            title: 中国历代人物传记资料库：王松秀（CBDB 30062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30062&o=json
            external_identifier: CBDB:30062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5YwESF55gMUFR6rDE4fuhn
        status: active
        display_name: 王松秀
        merged_into_person_id: null
    - claim:
        id: c_IcbA_2pgV-2bHDxKwlKX3u
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PEyCMMv29eWgrzJvDCZK9V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZm9WOYGFErbXlo01tSU1k
          claim_id: c_IcbA_2pgV-2bHDxKwlKX3u
          source_id: s_kcILRbomnba0b_1Gpt8Csn
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30050）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kcILRbomnba0b_1Gpt8Csn
            source_type: api_record
            title: 中国历代人物传记资料库：王掄秀（CBDB 30059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30059&o=json
            external_identifier: CBDB:30059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PEyCMMv29eWgrzJvDCZK9V
        status: active
        display_name: 王掄秀
        merged_into_person_id: null
    - claim:
        id: c_VikkD8A_T28q2y_MEHDLvK
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h14kYmGUrknTR7oJP4DxFe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LcFhTfj3uSer6LnRSDCZVB
          claim_id: c_VikkD8A_T28q2y_MEHDLvK
          source_id: s_SzcfQGqDZprsA4JN6z3X8x
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30050）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_SzcfQGqDZprsA4JN6z3X8x
            source_type: api_record
            title: 中国历代人物传记资料库：王毓秀（CBDB 30061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30061&o=json
            external_identifier: CBDB:30061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h14kYmGUrknTR7oJP4DxFe
        status: active
        display_name: 王毓秀
        merged_into_person_id: null
    - claim:
        id: c_4gIpfl-2sSSMmuVAs9d-kg
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hxAYh5caHoSn4rdFwkXNpi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H87xB0vD8ZqsMDhyqEL2oo
          claim_id: c_4gIpfl-2sSSMmuVAs9d-kg
          source_id: s_l8-TRwFVkvbtyHERhpys2V
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30050）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_l8-TRwFVkvbtyHERhpys2V
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊秀（CBDB 30057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30057&o=json
            external_identifier: CBDB:30057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hxAYh5caHoSn4rdFwkXNpi
        status: active
        display_name: 王蘊秀
        merged_into_person_id: null
    - claim:
        id: c_7xXc6_kF5KidwYVKLlJfPv
        subject_person_id: p_riETjcz3yNBDDQpRwnut7q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_snyZYFn8QSvE9EYggGxWYn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yQfZj4wlqW2D2sFYeUCA7Q
          claim_id: c_7xXc6_kF5KidwYVKLlJfPv
          source_id: s_KuPwyz-BSS0CTFqzjsvXsi
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30050）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_KuPwyz-BSS0CTFqzjsvXsi
            source_type: api_record
            title: 中国历代人物传记资料库：王挺秀（CBDB 30055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30055&o=json
            external_identifier: CBDB:30055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_snyZYFn8QSvE9EYggGxWYn
        status: active
        display_name: 王挺秀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王振翮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王振翮，清人物。籍贯寶坻，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 30050） | accepted |
| name.primary | 王振翮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5YwESF55gMUFR6rDE4fuhn | 王松秀 | accepted |
| children | p_PEyCMMv29eWgrzJvDCZK9V | 王掄秀 | accepted |
| children | p_h14kYmGUrknTR7oJP4DxFe | 王毓秀 | accepted |
| children | p_hxAYh5caHoSn4rdFwkXNpi | 王蘊秀 | accepted |
| children | p_snyZYFn8QSvE9EYggGxWYn | 王挺秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王掄秀（CBDB 30059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30059&o=json)
- [中国历代人物传记资料库：王松秀（CBDB 30062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30062&o=json)
- [中国历代人物传记资料库：王挺秀（CBDB 30055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30055&o=json)
- [中国历代人物传记资料库：王毓秀（CBDB 30061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30061&o=json)
- [中国历代人物传记资料库：王蘊秀（CBDB 30057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30057&o=json)
- [中国历代人物传记资料库：王振翮（CBDB 30050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30050&o=json)
