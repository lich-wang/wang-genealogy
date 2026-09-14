---
schema: wang-person/v1
id: p_KRx9f8uEzGo8ayLUHUrw9A
status: active
merged_into: null
display_name: 王瓚
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9EahDH2DPcv5Z5VU1j6UPj
        subject_person_id: p_KRx9f8uEzGo8ayLUHUrw9A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jPWZfsamsEPV5UEVvzKZWM
          claim_id: c_9EahDH2DPcv5Z5VU1j6UPj
          source_id: s_4qJYMRoJgAeBmAo3wr6cJr
          stance: supports
          locator: CBDB:278791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278791）
          source: &a1
            id: s_4qJYMRoJgAeBmAo3wr6cJr
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 278791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278791&o=json
            external_identifier: CBDB:278791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5UUn1L4BVdfCHg46QoekP3
        subject_person_id: p_KRx9f8uEzGo8ayLUHUrw9A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。正德六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 278791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xps3hu0PxwfSmlV3BsLJ0O
          claim_id: c_5UUn1L4BVdfCHg46QoekP3
          source_id: s_4qJYMRoJgAeBmAo3wr6cJr
          stance: supports
          locator: CBDB:278791
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CwXVFBItmgLAcDG-uHSSkH
        subject_person_id: p_KRx9f8uEzGo8ayLUHUrw9A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p2u5fBzApZQm_BXdfLwwTn
          claim_id: c_CwXVFBItmgLAcDG-uHSSkH
          source_id: s_xjN2TJXyA6Vs3DyR5m6myd
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xjN2TJXyA6Vs3DyR5m6myd
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 126621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126621&o=json
            external_identifier: CBDB:126621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kAYn8y3iQCatmSJGkXFLhh
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_5urQts0U_OXvq9Vqa04ZxR
        subject_person_id: p_KRx9f8uEzGo8ayLUHUrw9A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EEpiY34JsRWFPzmN6wDe2r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C6stQMrRQvXrzxEnWP7swG
          claim_id: c_5urQts0U_OXvq9Vqa04ZxR
          source_id: s_lq6cGl-jCDnLMHYo3LYzTj
          stance: supports
          locator: CBDB：兄弟 王紀（126621）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王統 与 王紀 为同胞（CBDB 记「兄」），王紀 之父／母即 王統 之父／母。
          source:
            id: s_lq6cGl-jCDnLMHYo3LYzTj
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 278798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278798&o=json
            external_identifier: CBDB:278798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EEpiY34JsRWFPzmN6wDe2r
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_2gKnXeTn9iL8V_Dm-4gE0I
        subject_person_id: p_KRx9f8uEzGo8ayLUHUrw9A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GpFvn1cUkCVDoyNh28ZYD8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7irmohb9U_UX7Xw3eXAle
          claim_id: c_2gKnXeTn9iL8V_Dm-4gE0I
          source_id: s_Bd8lLl-u8bxrYr6pRh-MWs
          stance: supports
          locator: CBDB：兄弟 王紀（126621）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王沂 与 王紀 为同胞（CBDB 记「弟」），王紀 之父／母即 王沂 之父／母。
          source:
            id: s_Bd8lLl-u8bxrYr6pRh-MWs
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 278796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278796&o=json
            external_identifier: CBDB:278796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GpFvn1cUkCVDoyNh28ZYD8
        status: active
        display_name: 王沂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。正德六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 278791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kAYn8y3iQCatmSJGkXFLhh | 王紀 | accepted |
| children | p_EEpiY34JsRWFPzmN6wDe2r | 王統 | accepted |
| children | p_GpFvn1cUkCVDoyNh28ZYD8 | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 126621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126621&o=json)
- [中国历代人物传记资料库：王統（CBDB 278798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278798&o=json)
- [中国历代人物传记资料库：王沂（CBDB 278796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278796&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 278791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278791&o=json)
