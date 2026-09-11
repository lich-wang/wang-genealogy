---
schema: wang-person/v1
id: p_6Gg8iGSgGr3S6qEitAvCqZ
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uASEmvQzS46kT4X8iyvrLt
        subject_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oHPHFwAWsfTShPLmUEKMGZ
          claim_id: c_uASEmvQzS46kT4X8iyvrLt
          source_id: s_EDAR71GKiVBtQ9XHGXTeMe
          stance: supports
          locator: CBDB:200180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200180）
          source: &a1
            id: s_EDAR71GKiVBtQ9XHGXTeMe
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 200180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200180&o=json
            external_identifier: CBDB:200180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_owAAc3Qca61XFipQ1T9A4K
        subject_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1370年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4Y1wio5aTWGoyDto9VZnX
          claim_id: c_owAAc3Qca61XFipQ1T9A4K
          source_id: s_EDAR71GKiVBtQ9XHGXTeMe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s22p3xD4HTVBTxEPsbGZMu
        subject_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
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
        - id: cs_Zbx2wgYvi3avhxRBeCg6zP
          claim_id: c_s22p3xD4HTVBTxEPsbGZMu
          source_id: s_EDAR71GKiVBtQ9XHGXTeMe
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
        id: c_NB9c6CYYK_LGDwMEfHr2R1
        subject_person_id: p_TE83LvMQ2327xyiTcM2LFF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o-2HyFjwgWEivEsuUPX-zj
          claim_id: c_NB9c6CYYK_LGDwMEfHr2R1
          source_id: s_EDAR71GKiVBtQ9XHGXTeMe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TE83LvMQ2327xyiTcM2LFF
        status: active
        display_name: 王勝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__P5_wABqDKkWBpGORsT4AB
        subject_person_id: p_rEB5DmBZbyXKxLzhqJfXn4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sEbnVGI0vbjr1fO60pg1QD
          claim_id: c__P5_wABqDKkWBpGORsT4AB
          source_id: s_EDAR71GKiVBtQ9XHGXTeMe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rEB5DmBZbyXKxLzhqJfXn4
        status: active
        display_name: 王谷堡
        merged_into_person_id: null
    - claim:
        id: c_cn3mUn4226UhrV2BOnlRmQ
        subject_person_id: p_d5sjQXxXxUwPFvxWCDybzP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ayq7pwaM3tiFwMUyqv2UL
          claim_id: c_cn3mUn4226UhrV2BOnlRmQ
          source_id: s_EDAR71GKiVBtQ9XHGXTeMe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d5sjQXxXxUwPFvxWCDybzP
        status: active
        display_name: 王景春
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| birth.date | 1370年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TE83LvMQ2327xyiTcM2LFF | 王勝 | accepted |
| ancestors | p_rEB5DmBZbyXKxLzhqJfXn4 | 王谷堡 | accepted |
| ancestors | p_d5sjQXxXxUwPFvxWCDybzP | 王景春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 200180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200180&o=json)
