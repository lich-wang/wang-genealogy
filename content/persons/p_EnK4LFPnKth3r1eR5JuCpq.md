---
schema: wang-person/v1
id: p_EnK4LFPnKth3r1eR5JuCpq
status: active
merged_into: null
display_name: 王念兹
cbdb_id: 236485
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LrzMj1Zk23QDsAPZahpYrc
        subject_person_id: p_EnK4LFPnKth3r1eR5JuCpq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念兹，明人物。籍贯武進，入仕庠生。（中国历代人物传记资料库 CBDB 236485）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nJTy_mjaWyVP7WQ7KBg_qU
          claim_id: c_LrzMj1Zk23QDsAPZahpYrc
          source_id: s_1kNkbPwsShBm787H8mRGnb
          stance: supports
          locator: CBDB:236485
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1kNkbPwsShBm787H8mRGnb
            source_type: api_record
            title: 中国历代人物传记资料库：王念兹（CBDB 236485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236485&o=json
            external_identifier: CBDB:236485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xpk1G3jJ13YdBXGdgF1Xvh
        subject_person_id: p_EnK4LFPnKth3r1eR5JuCpq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念兹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LE8AFZTvdSBLMQu7VRDmS9
          claim_id: c_xpk1G3jJ13YdBXGdgF1Xvh
          source_id: s_1kNkbPwsShBm787H8mRGnb
          stance: supports
          locator: CBDB:236485
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rHIRbjoFrqdwQqJyjL6i-C
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnK4LFPnKth3r1eR5JuCpq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WCaSgPTk33VkG0r9AfUMbW
          claim_id: c_rHIRbjoFrqdwQqJyjL6i-C
          source_id: s_-15ftZYb0WOTCAvKMCOvSh
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王念兹 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王念兹 之父／母。
          source:
            id: s_-15ftZYb0WOTCAvKMCOvSh
            source_type: api_record
            title: 中国历代人物传记资料库：王念兹（CBDB 236485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236485&o=json
            external_identifier: CBDB:236485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_H9IZ1_yJTV8gtp0mOgsXS2
        subject_person_id: p_EnK4LFPnKth3r1eR5JuCpq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tajf_52EU0jtKB6pYMNCQx
          claim_id: c_H9IZ1_yJTV8gtp0mOgsXS2
          source_id: s_-15ftZYb0WOTCAvKMCOvSh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-15ftZYb0WOTCAvKMCOvSh
            source_type: api_record
            title: 中国历代人物传记资料库：王念兹（CBDB 236485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236485&o=json
            external_identifier: CBDB:236485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
---

# 王念兹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王念兹，明人物。籍贯武進，入仕庠生。（中国历代人物传记资料库 CBDB 236485） | accepted |
| name.primary | 王念兹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| other | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王念兹（CBDB 236485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236485&o=json)
