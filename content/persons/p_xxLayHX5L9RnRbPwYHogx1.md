---
schema: wang-person/v1
id: p_xxLayHX5L9RnRbPwYHogx1
status: active
merged_into: null
display_name: 王俅
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r4BLqS2v6FNxDT6tiaDnEa
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dfwASF4SWQKovEkCMBruvF
          claim_id: c_r4BLqS2v6FNxDT6tiaDnEa
          source_id: s_EQJRyvPMAxNA3cYQXqTYJo
          stance: supports
          locator: CBDB:276674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276674）
          source: &a1
            id: s_EQJRyvPMAxNA3cYQXqTYJo
            source_type: api_record
            title: 中国历代人物传记资料库：王俅（CBDB 276674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276674&o=json
            external_identifier: CBDB:276674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58Nuh9QCNUFFhy8RpFHFTo
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俅，明人物。正德六年進士，籍贯南昌府。（中国历代人物传记资料库 CBDB 276674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_97dWEVRGu1LClUFZlxU3nt
          claim_id: c_58Nuh9QCNUFFhy8RpFHFTo
          source_id: s_EQJRyvPMAxNA3cYQXqTYJo
          stance: supports
          locator: CBDB:276674
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_G4CiOrIEltCcaHxOgKmxBx
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RoNELI8BfzcRcjuFjAlHtP
          claim_id: c_G4CiOrIEltCcaHxOgKmxBx
          source_id: s_EQJRyvPMAxNA3cYQXqTYJo
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TdY8PeNMMQnspsGSLcC9h4
        status: active
        display_name: 王思
        merged_into_person_id: null
    - claim:
        id: c_tD9NtL1gXCcXP1i-E3JfG0
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4shoAc4qHJ5329427rx5b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oxPvyq8MKJ1VBuLpbAXhR8
          claim_id: c_tD9NtL1gXCcXP1i-E3JfG0
          source_id: s_VDC71PssuexVRoyHCMLz3C
          stance: supports
          locator: CBDB：兄弟 王思（68065）之父／母 王俅
          quotation: null
          interpretation_note: 由兄弟关系推断：王愈 与 王思 为同胞（CBDB 记「弟」），王思 之父／母即 王愈 之父／母。
          source:
            id: s_VDC71PssuexVRoyHCMLz3C
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 276679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276679&o=json
            external_identifier: CBDB:276679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C4shoAc4qHJ5329427rx5b
        status: active
        display_name: 王愈
        merged_into_person_id: null
    - claim:
        id: c_geXA8NE20zbvrfKHJt4VPK
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FAXJ6DNVB5NHE6gKQWA9CY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sk4uaRe7GU88BwDl3tdW5I
          claim_id: c_geXA8NE20zbvrfKHJt4VPK
          source_id: s_pmpiZwbkPwJMScFWHoOCO-
          stance: supports
          locator: CBDB：兄弟 王思（68065）之父／母 王俅
          quotation: null
          interpretation_note: 由兄弟关系推断：王恭 与 王思 为同胞（CBDB 记「弟」），王思 之父／母即 王恭 之父／母。
          source:
            id: s_pmpiZwbkPwJMScFWHoOCO-
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 276680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276680&o=json
            external_identifier: CBDB:276680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FAXJ6DNVB5NHE6gKQWA9CY
        status: active
        display_name: 王恭
        merged_into_person_id: null
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
        id: p_LKFAPuqapZYpaeD4VhMWGk
        status: active
        display_name: 王悊
        merged_into_person_id: null
    - claim:
        id: c_oDAfq3uOLKEXhU9-p40CLr
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_neRfUEdYzFNxwdJeq7qkRq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-b9ObjlwJyb5rFfJ2z2IqK
          claim_id: c_oDAfq3uOLKEXhU9-p40CLr
          source_id: s_a73Hg-vR5s6aU8pkRhNOOE
          stance: supports
          locator: CBDB：兄弟 王思（68065）之父／母 王俅
          quotation: null
          interpretation_note: 由兄弟关系推断：王愚 与 王思 为同胞（CBDB 记「弟」），王思 之父／母即 王愚 之父／母。
          source:
            id: s_a73Hg-vR5s6aU8pkRhNOOE
            source_type: api_record
            title: 中国历代人物传记资料库：王愚（CBDB 276681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276681&o=json
            external_identifier: CBDB:276681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_neRfUEdYzFNxwdJeq7qkRq
        status: active
        display_name: 王愚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俅 | accepted |
| bio.summary | 王俅，明人物。正德六年進士，籍贯南昌府。（中国历代人物传记资料库 CBDB 276674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TdY8PeNMMQnspsGSLcC9h4 | 王思 | accepted |
| children | p_C4shoAc4qHJ5329427rx5b | 王愈 | accepted |
| children | p_FAXJ6DNVB5NHE6gKQWA9CY | 王恭 | accepted |
| children | p_LKFAPuqapZYpaeD4VhMWGk | 王悊 | accepted |
| children | p_neRfUEdYzFNxwdJeq7qkRq | 王愚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 276680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276680&o=json)
- [中国历代人物传记资料库：王俅（CBDB 276674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276674&o=json)
- [中国历代人物传记资料库：王愚（CBDB 276681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276681&o=json)
- [中国历代人物传记资料库：王愈（CBDB 276679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276679&o=json)
- [中国历代人物传记资料库：王悊（CBDB 276682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276682&o=json)
