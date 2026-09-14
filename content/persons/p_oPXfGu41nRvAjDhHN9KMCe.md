---
schema: wang-person/v1
id: p_oPXfGu41nRvAjDhHN9KMCe
status: active
merged_into: null
display_name: 王某賢
cbdb_id: 292753
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o89mAW2T5KhL1hHGf6hsUB
        subject_person_id: p_oPXfGu41nRvAjDhHN9KMCe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292753）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_b2Yw_sZgpW_7QLLGWDWmhk
          claim_id: c_o89mAW2T5KhL1hHGf6hsUB
          source_id: s_XLEJmFwmkmvFKmqtfprGxW
          stance: supports
          locator: CBDB:292753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XLEJmFwmkmvFKmqtfprGxW
            source_type: api_record
            title: 中国历代人物传记资料库：王某賢（CBDB 292753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292753&o=json
            external_identifier: CBDB:292753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDqzuhdAHJpJ1zd4o1YwJ3
        subject_person_id: p_oPXfGu41nRvAjDhHN9KMCe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6z2Cy5BtJAkyerUitqifg9
          claim_id: c_nDqzuhdAHJpJ1zd4o1YwJ3
          source_id: s_XLEJmFwmkmvFKmqtfprGxW
          stance: supports
          locator: CBDB:292753
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2jkxOyp7SxcizVcxabTb26
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oPXfGu41nRvAjDhHN9KMCe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M8y3wsoVars2JqVheA0TT0
          claim_id: c_2jkxOyp7SxcizVcxabTb26
          source_id: s_UkRQa4UkVsR_Ure2UPD-IX
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王某賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王某賢 之父／母。
          source:
            id: s_UkRQa4UkVsR_Ure2UPD-IX
            source_type: api_record
            title: 中国历代人物传记资料库：王某賢（CBDB 292753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292753&o=json
            external_identifier: CBDB:292753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MfVeb7fgPLZUX4FfJniEs9
        status: active
        display_name: 王錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EJN2vtOBkhIMdtx-NsMKhO
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oPXfGu41nRvAjDhHN9KMCe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lrm6meIyqSd1KrpAN_gQk8
          claim_id: c_EJN2vtOBkhIMdtx-NsMKhO
          source_id: s_UkRQa4UkVsR_Ure2UPD-IX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UkRQa4UkVsR_Ure2UPD-IX
            source_type: api_record
            title: 中国历代人物传记资料库：王某賢（CBDB 292753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292753&o=json
            external_identifier: CBDB:292753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
---

# 王某賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292753） | accepted |
| name.primary | 王某賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MfVeb7fgPLZUX4FfJniEs9 | 王錫 | accepted |
| other | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王某賢（CBDB 292753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292753&o=json)
