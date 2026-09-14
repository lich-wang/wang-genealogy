---
schema: wang-person/v1
id: p_kUx3oCAAhxc2diNZfU7tJD
status: active
merged_into: null
display_name: 王懋
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JoFDDGHdHzdUmQJbcnzz22
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FVLHJZk9Bth4fFrydr5dq5
          claim_id: c_JoFDDGHdHzdUmQJbcnzz22
          source_id: s_SgYXqxgG56Zin1o12rba5z
          stance: supports
          locator: CBDB:242723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242723）
          source: &a1
            id: s_SgYXqxgG56Zin1o12rba5z
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 242723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242723&o=json
            external_identifier: CBDB:242723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ADqc1b825kybV6NmjGzga7
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋，明人物。成化五年進士，籍贯宜興，曾任教諭。（中国历代人物传记资料库 CBDB 242723）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a5ect2xD0vIPLnrr4kUTvh
          claim_id: c_ADqc1b825kybV6NmjGzga7
          source_id: s_SgYXqxgG56Zin1o12rba5z
          stance: supports
          locator: CBDB:242723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Eo-_at73z0UGEZsEgg39ed
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_peHrYdss4DG3Q61Kgik3ci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tKtgXrZbjCzUYPrLmRIWG0
          claim_id: c_Eo-_at73z0UGEZsEgg39ed
          source_id: s_SgYXqxgG56Zin1o12rba5z
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_peHrYdss4DG3Q61Kgik3ci
        status: active
        display_name: 王纓
        merged_into_person_id: null
    - claim:
        id: c_7u5QwZW6tZX0gsvlHhoxnC
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1T2cH1bL7Nhy7JGdKvC4vh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CqHCWXqzszy3_3TRlb-hp-
          claim_id: c_7u5QwZW6tZX0gsvlHhoxnC
          source_id: s_ugPGC-tonXu94pljqm4mdI
          stance: supports
          locator: CBDB：兄弟 王纓（199281）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王繪 与 王纓 为同胞（CBDB 记「兄」），王纓 之父／母即 王繪 之父／母。
          source:
            id: s_ugPGC-tonXu94pljqm4mdI
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 242732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242732&o=json
            external_identifier: CBDB:242732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1T2cH1bL7Nhy7JGdKvC4vh
        status: active
        display_name: 王繪
        merged_into_person_id: null
    - claim:
        id: c_yirBX4cyaJ6gPq602eE0OJ
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P4tRTiNaHH24iCaqBBi6RC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WdjoWNcRs-alPOugMxauqs
          claim_id: c_yirBX4cyaJ6gPq602eE0OJ
          source_id: s_WA-baDLv0_Z9czLwQ-HdZg
          stance: supports
          locator: CBDB：兄弟 王纓（199281）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王約 与 王纓 为同胞（CBDB 记「兄」），王纓 之父／母即 王約 之父／母。
          source:
            id: s_WA-baDLv0_Z9czLwQ-HdZg
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 242729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242729&o=json
            external_identifier: CBDB:242729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P4tRTiNaHH24iCaqBBi6RC
        status: active
        display_name: 王約
        merged_into_person_id: null
    - claim:
        id: c_585Msx1wSbG133HLgW_ap0
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UDMV4U4rJ5Mjn7kpeFjqhq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kBN1UaiTFOX6lR4Z5GIcvT
          claim_id: c_585Msx1wSbG133HLgW_ap0
          source_id: s_EZHOYvyCYhiBnHby4UFmVX
          stance: supports
          locator: CBDB：兄弟 王纓（199281）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王緝 与 王纓 为同胞（CBDB 记「兄」），王纓 之父／母即 王緝 之父／母。
          source:
            id: s_EZHOYvyCYhiBnHby4UFmVX
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 242731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242731&o=json
            external_identifier: CBDB:242731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UDMV4U4rJ5Mjn7kpeFjqhq
        status: active
        display_name: 王緝
        merged_into_person_id: null
    - claim:
        id: c_tXRNJ0SCY99lJN4R2N2kCg
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o7i1v3KfD5vqkuWXYQV2DD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gpnBiFAqDZGfbF9J5BjprV
          claim_id: c_tXRNJ0SCY99lJN4R2N2kCg
          source_id: s_c7BvjzR3uFGFUN5174DkU7
          stance: supports
          locator: CBDB：兄弟 王纓（199281）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王繹 与 王纓 为同胞（CBDB 记「弟」），王纓 之父／母即 王繹 之父／母。
          source:
            id: s_c7BvjzR3uFGFUN5174DkU7
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 242728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242728&o=json
            external_identifier: CBDB:242728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o7i1v3KfD5vqkuWXYQV2DD
        status: active
        display_name: 王繹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | 王懋，明人物。成化五年進士，籍贯宜興，曾任教諭。（中国历代人物传记资料库 CBDB 242723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_peHrYdss4DG3Q61Kgik3ci | 王纓 | accepted |
| children | p_1T2cH1bL7Nhy7JGdKvC4vh | 王繪 | accepted |
| children | p_P4tRTiNaHH24iCaqBBi6RC | 王約 | accepted |
| children | p_UDMV4U4rJ5Mjn7kpeFjqhq | 王緝 | accepted |
| children | p_o7i1v3KfD5vqkuWXYQV2DD | 王繹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繪（CBDB 242732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242732&o=json)
- [中国历代人物传记资料库：王緝（CBDB 242731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242731&o=json)
- [中国历代人物传记资料库：王懋（CBDB 242723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242723&o=json)
- [中国历代人物传记资料库：王繹（CBDB 242728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242728&o=json)
- [中国历代人物传记资料库：王約（CBDB 242729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242729&o=json)
