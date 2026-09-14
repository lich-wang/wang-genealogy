---
schema: wang-person/v1
id: p_GpQKQxT9zUBFQw4vdP3nNA
status: active
merged_into: null
display_name: 王宗淵
cbdb_id: 305712
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SM1S4kZ4TFjPfK3FWzaX8j
        subject_person_id: p_GpQKQxT9zUBFQw4vdP3nNA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗淵，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305712）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AnUmW6uufLB5oIi22bE1QC
          claim_id: c_SM1S4kZ4TFjPfK3FWzaX8j
          source_id: s_zJPN4baMF63DZq11BZWiJB
          stance: supports
          locator: CBDB:305712
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zJPN4baMF63DZq11BZWiJB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淵（CBDB 305712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305712&o=json
            external_identifier: CBDB:305712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9veiHrVsLjap7oWLPLKx6Y
        subject_person_id: p_GpQKQxT9zUBFQw4vdP3nNA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RSF87HYHNaLMaNvSA3tJt2
          claim_id: c_9veiHrVsLjap7oWLPLKx6Y
          source_id: s_zJPN4baMF63DZq11BZWiJB
          stance: supports
          locator: CBDB:305712
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_swnRtv9VMr6zuMMw_Rfazg
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GpQKQxT9zUBFQw4vdP3nNA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35ciKV4diewOOrx8G9ITmn
          claim_id: c_swnRtv9VMr6zuMMw_Rfazg
          source_id: s_bY-k51yH56EGmkFDYjvf5l
          stance: supports
          locator: CBDB：兄弟 王宗沐（35065）之父／母 王训
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗淵 与 王宗沐 为同胞（CBDB 记「弟」），王宗沐 之父／母即 王宗淵 之父／母。
          source:
            id: s_bY-k51yH56EGmkFDYjvf5l
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淵（CBDB 305712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305712&o=json
            external_identifier: CBDB:305712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        status: active
        display_name: 王训
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uobWWYmE9YR816pE03SLIO
        subject_person_id: p_GpQKQxT9zUBFQw4vdP3nNA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_trUE1ub3cUR7dMLX7JC1NK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PURBq1zY8pC-iVW09-A_qr
          claim_id: c_uobWWYmE9YR816pE03SLIO
          source_id: s_bY-k51yH56EGmkFDYjvf5l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 35065 王宗沐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bY-k51yH56EGmkFDYjvf5l
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淵（CBDB 305712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305712&o=json
            external_identifier: CBDB:305712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_trUE1ub3cUR7dMLX7JC1NK
        status: active
        display_name: 王宗沐
        merged_into_person_id: null
---

# 王宗淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗淵，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305712） | accepted |
| name.primary | 王宗淵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aZ1ZKEEFmDKA3BH7yDPbwn | 王训 | accepted |
| other | p_trUE1ub3cUR7dMLX7JC1NK | 王宗沐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗淵（CBDB 305712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305712&o=json)
