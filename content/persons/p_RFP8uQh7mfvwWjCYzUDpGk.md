---
schema: wang-person/v1
id: p_RFP8uQh7mfvwWjCYzUDpGk
status: active
merged_into: null
display_name: 王凝
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s7BzNBiFyg25Es7T6xGtJG
        subject_person_id: p_RFP8uQh7mfvwWjCYzUDpGk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XcfFxCFdjHwkhA4KcVNJGh
          claim_id: c_s7BzNBiFyg25Es7T6xGtJG
          source_id: s_YxvCSTLfZ81cxYycJn7o2g
          stance: supports
          locator: CBDB:126821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126821）
          source: &a1
            id: s_YxvCSTLfZ81cxYycJn7o2g
            source_type: api_record
            title: 中国历代人物传记资料库：王凝（CBDB 126821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126821&o=json
            external_identifier: CBDB:126821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fPnyZFF8PNoUwS4ZB4uPyz
        subject_person_id: p_RFP8uQh7mfvwWjCYzUDpGk
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
        - id: cs_X8RRBBBMPuSrXx5J7s1Vmc
          claim_id: c_fPnyZFF8PNoUwS4ZB4uPyz
          source_id: s_YxvCSTLfZ81cxYycJn7o2g
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
        id: c_imbc8wXY-Acdo7ZlL448Zw
        subject_person_id: p_uAAyHX7RHTcurCnZEtd77T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RFP8uQh7mfvwWjCYzUDpGk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZmPOByn0J3Rwwaby5UkgTS
          claim_id: c_imbc8wXY-Acdo7ZlL448Zw
          source_id: s_ub5aLpvzEMBT7H8FNMbH5e
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第二甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ub5aLpvzEMBT7H8FNMbH5e
            source_type: api_record
            title: 中国历代人物传记资料库：王麒（CBDB 319424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319424&o=json
            external_identifier: CBDB:319424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uAAyHX7RHTcurCnZEtd77T
        status: active
        display_name: 王麒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jR0Igh735LizkC50dlGim5
        subject_person_id: p_12QVqUWNEpNLYLoMQszsiR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RFP8uQh7mfvwWjCYzUDpGk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bX9dsN9EMXYKUxE7YA2se
          claim_id: c_jR0Igh735LizkC50dlGim5
          source_id: s_o2xNQ2SH9zMqEEydR3Q8f4
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第二甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o2xNQ2SH9zMqEEydR3Q8f4
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 319423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319423&o=json
            external_identifier: CBDB:319423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_12QVqUWNEpNLYLoMQszsiR
        status: active
        display_name: 王澄
        merged_into_person_id: null
    - claim:
        id: c_f-a1feiV8l7SEqj7o0UtD1
        subject_person_id: p_fznWZRL5czpnWgy7C3qMCB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RFP8uQh7mfvwWjCYzUDpGk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AVPgK-IFdkL6Z4LUgBP0lJ
          claim_id: c_f-a1feiV8l7SEqj7o0UtD1
          source_id: s_ndNjsut8yMkEQ26BZa4gDx
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第二甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ndNjsut8yMkEQ26BZa4gDx
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 319422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319422&o=json
            external_identifier: CBDB:319422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fznWZRL5czpnWgy7C3qMCB
        status: active
        display_name: 王迪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uAAyHX7RHTcurCnZEtd77T | 王麒 | accepted |
| ancestors | p_12QVqUWNEpNLYLoMQszsiR | 王澄 | accepted |
| ancestors | p_fznWZRL5czpnWgy7C3qMCB | 王迪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 319423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319423&o=json)
- [中国历代人物传记资料库：王迪（CBDB 319422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319422&o=json)
- [中国历代人物传记资料库：王凝（CBDB 126821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126821&o=json)
- [中国历代人物传记资料库：王麒（CBDB 319424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319424&o=json)
