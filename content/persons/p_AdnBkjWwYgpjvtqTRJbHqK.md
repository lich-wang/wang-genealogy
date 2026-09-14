---
schema: wang-person/v1
id: p_AdnBkjWwYgpjvtqTRJbHqK
status: active
merged_into: null
display_name: 王一恩
cbdb_id: 306157
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yDZP2uMDc73JkA5M2ZuVfB
        subject_person_id: p_AdnBkjWwYgpjvtqTRJbHqK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一恩，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_yEjhG_vGu6UdKMp_bFMnmP
          claim_id: c_yDZP2uMDc73JkA5M2ZuVfB
          source_id: s_q8gv5EJ1Ti14pu3XJQB2AZ
          stance: supports
          locator: CBDB:306157
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_q8gv5EJ1Ti14pu3XJQB2AZ
            source_type: api_record
            title: 中国历代人物传记资料库：王一恩（CBDB 306157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306157&o=json
            external_identifier: CBDB:306157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3nqyd36oJo5k11zUmLa2AC
        subject_person_id: p_AdnBkjWwYgpjvtqTRJbHqK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_asW7LhG2K9u9TgL1cEAEKa
          claim_id: c_3nqyd36oJo5k11zUmLa2AC
          source_id: s_q8gv5EJ1Ti14pu3XJQB2AZ
          stance: supports
          locator: CBDB:306157
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BOKmn3hqwww9CEJ--YdFz5
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AdnBkjWwYgpjvtqTRJbHqK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ym1pNGTO8M2wXYZnnMENG
          claim_id: c_BOKmn3hqwww9CEJ--YdFz5
          source_id: s_HHofTMNGp3DP7DV6Z4UILW
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一恩 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一恩 之父／母。
          source:
            id: s_HHofTMNGp3DP7DV6Z4UILW
            source_type: api_record
            title: 中国历代人物传记资料库：王一恩（CBDB 306157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306157&o=json
            external_identifier: CBDB:306157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_toP613bi74YEw4TLd3hMCu
        status: active
        display_name: 王遷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ureAWhl41FVXy9Ixw5HQkO
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AdnBkjWwYgpjvtqTRJbHqK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umvumjsNvzjwn8KA5xCjdP
          claim_id: c_ureAWhl41FVXy9Ixw5HQkO
          source_id: s_HHofTMNGp3DP7DV6Z4UILW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HHofTMNGp3DP7DV6Z4UILW
            source_type: api_record
            title: 中国历代人物传记资料库：王一恩（CBDB 306157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306157&o=json
            external_identifier: CBDB:306157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4epX45r9bJPqQLoodeDXss
        status: active
        display_name: 王一陽
        merged_into_person_id: null
---

# 王一恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一恩，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306157） | accepted |
| name.primary | 王一恩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_toP613bi74YEw4TLd3hMCu | 王遷 | accepted |
| other | p_4epX45r9bJPqQLoodeDXss | 王一陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一恩（CBDB 306157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306157&o=json)
