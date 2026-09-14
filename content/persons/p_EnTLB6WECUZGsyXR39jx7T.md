---
schema: wang-person/v1
id: p_EnTLB6WECUZGsyXR39jx7T
status: active
merged_into: null
display_name: 王伯壽
cbdb_id: 305353
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UpZ7sG4FLGGxRm34jyH1fs
        subject_person_id: p_EnTLB6WECUZGsyXR39jx7T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯壽，明人物。嘉靖二十三年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 305353）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jVPNAZEZEtmYkbuaJD-euz
          claim_id: c_UpZ7sG4FLGGxRm34jyH1fs
          source_id: s_LyWUC7KCFPxCDKHMWm9ccY
          stance: supports
          locator: CBDB:305353
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LyWUC7KCFPxCDKHMWm9ccY
            source_type: api_record
            title: 中国历代人物传记资料库：王伯壽（CBDB 305353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305353&o=json
            external_identifier: CBDB:305353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aPo48tq1dD91VYFEweAakW
        subject_person_id: p_EnTLB6WECUZGsyXR39jx7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hwiJxbwtXhAEo6c3oSH5Ub
          claim_id: c_aPo48tq1dD91VYFEweAakW
          source_id: s_LyWUC7KCFPxCDKHMWm9ccY
          stance: supports
          locator: CBDB:305353
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7UrI89oJe8Qb4HQeTbsWuJ
        subject_person_id: p_Wu57BG14u9G1YdRM7UC1bb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnTLB6WECUZGsyXR39jx7T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJ97WxveA_-9Dnb8giZaiA
          claim_id: c_7UrI89oJe8Qb4HQeTbsWuJ
          source_id: s_x3ASsSxEnQgqmcv7h-FPIY
          stance: supports
          locator: CBDB：兄弟 王之臣（203483）之父／母 王尚
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯壽 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王伯壽 之父／母。
          source:
            id: s_x3ASsSxEnQgqmcv7h-FPIY
            source_type: api_record
            title: 中国历代人物传记资料库：王伯壽（CBDB 305353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305353&o=json
            external_identifier: CBDB:305353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wu57BG14u9G1YdRM7UC1bb
        status: active
        display_name: 王尚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_R7JtsRJmt4RavAOo-pSRQf
        subject_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EnTLB6WECUZGsyXR39jx7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RufKmkIMoG6-_vEPVqnenL
          claim_id: c_R7JtsRJmt4RavAOo-pSRQf
          source_id: s_x3ASsSxEnQgqmcv7h-FPIY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203483 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x3ASsSxEnQgqmcv7h-FPIY
            source_type: api_record
            title: 中国历代人物传记资料库：王伯壽（CBDB 305353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305353&o=json
            external_identifier: CBDB:305353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1w2vyLJVVJajHeDaWVG8Nu
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王伯壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯壽，明人物。嘉靖二十三年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 305353） | accepted |
| name.primary | 王伯壽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wu57BG14u9G1YdRM7UC1bb | 王尚 | accepted |
| other | p_1w2vyLJVVJajHeDaWVG8Nu | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯壽（CBDB 305353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305353&o=json)
