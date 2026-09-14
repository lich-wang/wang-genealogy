---
schema: wang-person/v1
id: p_Asi7vGi3PmsBGKLCMf9RtK
status: active
merged_into: null
display_name: 王家璽
cbdb_id: 333603
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m3poDJi1g9Q4wFXLvYb6XY
        subject_person_id: p_Asi7vGi3PmsBGKLCMf9RtK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家璽，明人物。隆慶二年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 333603）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_is6-PomzVvXMgiN1yr-YTU
          claim_id: c_m3poDJi1g9Q4wFXLvYb6XY
          source_id: s_swFMf5KxMWYiF4rFfNkB4Y
          stance: supports
          locator: CBDB:333603
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_swFMf5KxMWYiF4rFfNkB4Y
            source_type: api_record
            title: 中国历代人物传记资料库：王家璽（CBDB 333603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333603&o=json
            external_identifier: CBDB:333603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BDMoM2RxP3AzEgfvXQZsP8
        subject_person_id: p_Asi7vGi3PmsBGKLCMf9RtK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t9x9hwcy7oSF26YcXRkKGN
          claim_id: c_BDMoM2RxP3AzEgfvXQZsP8
          source_id: s_swFMf5KxMWYiF4rFfNkB4Y
          stance: supports
          locator: CBDB:333603
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wZLpmHOmL3kmiaQlmOfc7V
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Asi7vGi3PmsBGKLCMf9RtK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W7c_T7dqXTN-rntmyf1XOD
          claim_id: c_wZLpmHOmL3kmiaQlmOfc7V
          source_id: s_bykwhKyU8fTrz4eKznTt-_
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家璽 与 王家屛 为同胞（CBDB 记「兄」），王家屛 之父／母即 王家璽 之父／母。
          source:
            id: s_bykwhKyU8fTrz4eKznTt-_
            source_type: api_record
            title: 中国历代人物传记资料库：王家璽（CBDB 333603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333603&o=json
            external_identifier: CBDB:333603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wJnAf1dPfK6NuX3j1aUKFG
        status: active
        display_name: 王宪武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gQWXtHFhl4--60iM0hjxZ7
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Asi7vGi3PmsBGKLCMf9RtK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WcSJuwr2XoHGtdmP1RdoxM
          claim_id: c_gQWXtHFhl4--60iM0hjxZ7
          source_id: s_bykwhKyU8fTrz4eKznTt-_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bykwhKyU8fTrz4eKznTt-_
            source_type: api_record
            title: 中国历代人物传记资料库：王家璽（CBDB 333603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333603&o=json
            external_identifier: CBDB:333603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_92Q8Er9mM6EGgtSMmLeCqJ
        status: active
        display_name: 王家屛
        merged_into_person_id: null
---

# 王家璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家璽，明人物。隆慶二年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 333603） | accepted |
| name.primary | 王家璽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJnAf1dPfK6NuX3j1aUKFG | 王宪武 | accepted |
| other | p_92Q8Er9mM6EGgtSMmLeCqJ | 王家屛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家璽（CBDB 333603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333603&o=json)
