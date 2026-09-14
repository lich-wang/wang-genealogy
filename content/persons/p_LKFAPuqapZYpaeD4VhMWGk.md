---
schema: wang-person/v1
id: p_LKFAPuqapZYpaeD4VhMWGk
status: active
merged_into: null
display_name: 王悊
cbdb_id: 276682
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2X8ZuZxMdM86cE5ufnKxru
        subject_person_id: p_LKFAPuqapZYpaeD4VhMWGk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悊，明人物。正德六年進士，籍贯南昌府。（中国历代人物传记资料库 CBDB 276682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KerEmtaE6crZniiXSQ7rZB
          claim_id: c_2X8ZuZxMdM86cE5ufnKxru
          source_id: s_Cjrv34tVGXV219kt7hRXYZ
          stance: supports
          locator: CBDB:276682
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Cjrv34tVGXV219kt7hRXYZ
            source_type: api_record
            title: 中国历代人物传记资料库：王悊（CBDB 276682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276682&o=json
            external_identifier: CBDB:276682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2kiz8V7Yzg65Ycju48Fx1F
        subject_person_id: p_LKFAPuqapZYpaeD4VhMWGk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_prSJV4h4CNdF2WWRoPQApY
          claim_id: c_2kiz8V7Yzg65Ycju48Fx1F
          source_id: s_Cjrv34tVGXV219kt7hRXYZ
          stance: supports
          locator: CBDB:276682
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q2o_ycuO4odpIBLAHbNvT9
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LKFAPuqapZYpaeD4VhMWGk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tj3ZC2I-YcCD3omizUk-K3
          claim_id: c_Q2o_ycuO4odpIBLAHbNvT9
          source_id: s_takkWWWCbfBYNdTq-TxnC9
          stance: supports
          locator: CBDB：兄弟 王思（68065）之父／母 王俅
          quotation: null
          interpretation_note: 由兄弟关系推断：王悊 与 王思 为同胞（CBDB 记「兄」），王思 之父／母即 王悊 之父／母。
          source:
            id: s_takkWWWCbfBYNdTq-TxnC9
            source_type: api_record
            title: 中国历代人物传记资料库：王悊（CBDB 276682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276682&o=json
            external_identifier: CBDB:276682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xxLayHX5L9RnRbPwYHogx1
        status: active
        display_name: 王俅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AWGLkI9hJZvppjQwWMCPjg
        subject_person_id: p_LKFAPuqapZYpaeD4VhMWGk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gXb3gz7_Ics0svG8oPLt_2
          claim_id: c_AWGLkI9hJZvppjQwWMCPjg
          source_id: s_takkWWWCbfBYNdTq-TxnC9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68065 王思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_takkWWWCbfBYNdTq-TxnC9
            source_type: api_record
            title: 中国历代人物传记资料库：王悊（CBDB 276682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276682&o=json
            external_identifier: CBDB:276682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdY8PeNMMQnspsGSLcC9h4
        status: active
        display_name: 王思
        merged_into_person_id: null
---

# 王悊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王悊，明人物。正德六年進士，籍贯南昌府。（中国历代人物传记资料库 CBDB 276682） | accepted |
| name.primary | 王悊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xxLayHX5L9RnRbPwYHogx1 | 王俅 | accepted |
| other | p_TdY8PeNMMQnspsGSLcC9h4 | 王思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王悊（CBDB 276682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276682&o=json)
