---
schema: wang-person/v1
id: p_2x1kEfTy9Rrf9vMAC4nm4e
status: active
merged_into: null
display_name: 孫氏
revision: 5
cbdb_id: 36923
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4GMj9sHSzWEY_g7fXpv-wI
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏（1093—1130），宋人物。籍贯巢縣，入仕封贈。（中国历代人物传记资料库 CBDB 36923）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fi85eCVbITLUxXn7C8E9uO
          claim_id: c_4GMj9sHSzWEY_g7fXpv-wI
          source_id: s_6Q8GQFF56bS9Qa_TDRMPLz
          stance: supports
          locator: CBDB:36923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6Q8GQFF56bS9Qa_TDRMPLz
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王之道妻)（CBDB 36923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36923&o=json
            external_identifier: CBDB:36923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dqoqpWmZg4-y7rnsjrbv2D
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13YmR30_EWwSIGaM3RVRfK
          claim_id: c_dqoqpWmZg4-y7rnsjrbv2D
          source_id: s_6Q8GQFF56bS9Qa_TDRMPLz
          stance: supports
          locator: CBDB:36923
          quotation: null
          interpretation_note: CBDB 明确记录的王之道配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ftqkPrRJBgYizOvrqgc80B
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_D7uG7jT88CSyD64SMPeLTu
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VAGcbAowrv_OOzoP_4rqB5
          claim_id: c_ftqkPrRJBgYizOvrqgc80B
          source_id: s_nTXozS7p11gmVwOgnUi3Js
          stance: supports
          locator: CBDB 亲属：母（KinPerson 36923）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_nTXozS7p11gmVwOgnUi3Js
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 36925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36925&o=json
            external_identifier: CBDB:36925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D7uG7jT88CSyD64SMPeLTu
        status: active
        display_name: 王蘧
        merged_into_person_id: null
    - claim:
        id: c_aGrEUTcBFf1mdB61aGY6x_
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_Z6GDXea2kdcJroYajoX1dr
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8MFbUL-EhfhQhLCby8GjyX
          claim_id: c_aGrEUTcBFf1mdB61aGY6x_
          source_id: s_x4eQ23EVa9yw2zJ8xcOm4b
          stance: supports
          locator: CBDB 亲属：母（KinPerson 36923）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_x4eQ23EVa9yw2zJ8xcOm4b
            source_type: api_record
            title: 中国历代人物传记资料库：王薳（CBDB 36928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36928&o=json
            external_identifier: CBDB:36928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z6GDXea2kdcJroYajoX1dr
        status: active
        display_name: 王薳
        merged_into_person_id: null
    - claim:
        id: c_6xxHbGwcYixv7gyrldCc7v
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_vYCsSRXMz6GnVh5uA4fCjd
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aRhxTmCBNRKxMXEfVxBvSc
          claim_id: c_6xxHbGwcYixv7gyrldCc7v
          source_id: s_IUYd_CBWkMOBeQ-zNt4hTw
          stance: supports
          locator: CBDB 亲属：母（KinPerson 36923）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_IUYd_CBWkMOBeQ-zNt4hTw
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 36926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36926&o=json
            external_identifier: CBDB:36926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vYCsSRXMz6GnVh5uA4fCjd
        status: active
        display_name: 王邁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EIza0Oo6BlY9LGANfvUSwv
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qrUeQ_F23he-aUnG2p_qcO
          claim_id: c_EIza0Oo6BlY9LGANfvUSwv
          source_id: s_6Q8GQFF56bS9Qa_TDRMPLz
          stance: supports
          locator: CBDB 双向互证（妻子 孫氏(王之道妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孫氏（1093—1130），宋人物。籍贯巢縣，入仕封贈。（中国历代人物传记资料库 CBDB 36923） | accepted |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_D7uG7jT88CSyD64SMPeLTu | 王蘧 | accepted |
| children | p_Z6GDXea2kdcJroYajoX1dr | 王薳 | accepted |
| children | p_vYCsSRXMz6GnVh5uA4fCjd | 王邁 | accepted |
| spouses | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王之道妻)（CBDB 36923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36923&o=json)
- [中国历代人物传记资料库：王邁（CBDB 36926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36926&o=json)
- [中国历代人物传记资料库：王蘧（CBDB 36925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36925&o=json)
- [中国历代人物传记资料库：王薳（CBDB 36928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36928&o=json)
