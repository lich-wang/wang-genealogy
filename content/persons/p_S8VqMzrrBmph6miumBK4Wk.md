---
schema: wang-person/v1
id: p_S8VqMzrrBmph6miumBK4Wk
status: active
merged_into: null
display_name: 王澤民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hkWFb5eeZMa3LBobA3tPmk
        subject_person_id: p_S8VqMzrrBmph6miumBK4Wk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPMAwywSortdMJjjC6NvLc
          claim_id: c_hkWFb5eeZMa3LBobA3tPmk
          source_id: s_yeDJohyrB3MKcQqAsDjZdg
          stance: supports
          locator: CBDB:302956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302956）
          source: &a1
            id: s_yeDJohyrB3MKcQqAsDjZdg
            source_type: api_record
            title: 中国历代人物传记资料库：王澤民（CBDB 302956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302956&o=json
            external_identifier: CBDB:302956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_snC88THyqb8A28CCMdzsLT
        subject_person_id: p_S8VqMzrrBmph6miumBK4Wk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤民，明人物。嘉靖二十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 302956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y81ITZM3wDEC0kONToCNz3
          claim_id: c_snC88THyqb8A28CCMdzsLT
          source_id: s_yeDJohyrB3MKcQqAsDjZdg
          stance: supports
          locator: CBDB:302956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MJQH7ZrWjjD67rJQIZRfXL
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S8VqMzrrBmph6miumBK4Wk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YgSfC4bE6I7-KPXVYwdZok
          claim_id: c_MJQH7ZrWjjD67rJQIZRfXL
          source_id: s_wLaD7bioi_5sSiJ2hJV-C3
          stance: supports
          locator: CBDB：兄弟 王撫民（203316）之父／母 王佑
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤民 与 王撫民 为同胞（CBDB 记「兄」），王撫民 之父／母即 王澤民 之父／母。
          source:
            id: s_wLaD7bioi_5sSiJ2hJV-C3
            source_type: api_record
            title: 中国历代人物传记资料库：王澤民（CBDB 302956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302956&o=json
            external_identifier: CBDB:302956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_icxXq3mTNniLra2C3qpkmV
        status: active
        display_name: 王佑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WQu6TGrzijv8z36-zJD1Nz
        subject_person_id: p_S8VqMzrrBmph6miumBK4Wk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oAz7efBckshZtK3fw1g51W
          claim_id: c_WQu6TGrzijv8z36-zJD1Nz
          source_id: s_wLaD7bioi_5sSiJ2hJV-C3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203316 王撫民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wLaD7bioi_5sSiJ2hJV-C3
            source_type: api_record
            title: 中国历代人物传记资料库：王澤民（CBDB 302956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302956&o=json
            external_identifier: CBDB:302956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hYn35dM9vxJfRx8fWZf7jx
        status: active
        display_name: 王撫民
        merged_into_person_id: null
---

# 王澤民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤民 | accepted |
| bio.summary | 王澤民，明人物。嘉靖二十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 302956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_icxXq3mTNniLra2C3qpkmV | 王佑 | accepted |
| other | p_hYn35dM9vxJfRx8fWZf7jx | 王撫民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤民（CBDB 302956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302956&o=json)
