---
schema: wang-person/v1
id: p_u6xgK6aoanJfvpoEj1fuaY
status: active
merged_into: null
display_name: 王夢賢
cbdb_id: 313202
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eT5dm4M4nP7Uff36MycTKQ
        subject_person_id: p_u6xgK6aoanJfvpoEj1fuaY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢賢，明人物。嘉靖二十九年進士，籍贯祁州，曾任主簿。（中国历代人物传记资料库 CBDB 313202）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bCFi0WLH3ypSNVRUEv_Cm5
          claim_id: c_eT5dm4M4nP7Uff36MycTKQ
          source_id: s_ypwXKGxWsW1ZxujaXNXt67
          stance: supports
          locator: CBDB:313202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ypwXKGxWsW1ZxujaXNXt67
            source_type: api_record
            title: 中国历代人物传记资料库：王夢賢（CBDB 313202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313202&o=json
            external_identifier: CBDB:313202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QtzFuDtaQnjpSbY2jmyBhp
        subject_person_id: p_u6xgK6aoanJfvpoEj1fuaY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H6iooEd9sbP1NuDPfS7vXx
          claim_id: c_QtzFuDtaQnjpSbY2jmyBhp
          source_id: s_ypwXKGxWsW1ZxujaXNXt67
          stance: supports
          locator: CBDB:313202
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_87otU6arXkvduXf5eHPDmc
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u6xgK6aoanJfvpoEj1fuaY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G07xbtJvwsTut2ya422HZV
          claim_id: c_87otU6arXkvduXf5eHPDmc
          source_id: s_NTTAK9unuM-rKyjYapDvA4
          stance: supports
          locator: CBDB：兄弟 王用賢（204011）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢賢 与 王用賢 为同胞（CBDB 记「兄」），王用賢 之父／母即 王夢賢 之父／母。
          source:
            id: s_NTTAK9unuM-rKyjYapDvA4
            source_type: api_record
            title: 中国历代人物传记资料库：王夢賢（CBDB 313202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313202&o=json
            external_identifier: CBDB:313202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DFCRUSa4hCVBMPph3xEiW2
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_l_r-Qs6fJuOH9TeS3liTez
        subject_person_id: p_rkwUCxJkarsqGGHssHtTdk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u6xgK6aoanJfvpoEj1fuaY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDp2TV0cPnT7RY8HJs_rtK
          claim_id: c_l_r-Qs6fJuOH9TeS3liTez
          source_id: s_NTTAK9unuM-rKyjYapDvA4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204011 王用賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NTTAK9unuM-rKyjYapDvA4
            source_type: api_record
            title: 中国历代人物传记资料库：王夢賢（CBDB 313202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313202&o=json
            external_identifier: CBDB:313202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rkwUCxJkarsqGGHssHtTdk
        status: active
        display_name: 王用賢
        merged_into_person_id: null
---

# 王夢賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢賢，明人物。嘉靖二十九年進士，籍贯祁州，曾任主簿。（中国历代人物传记资料库 CBDB 313202） | accepted |
| name.primary | 王夢賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DFCRUSa4hCVBMPph3xEiW2 | 王瑤 | accepted |
| other | p_rkwUCxJkarsqGGHssHtTdk | 王用賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢賢（CBDB 313202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313202&o=json)
