---
schema: wang-person/v1
id: p_D13YWU3jLVG79WyyHfTQHB
status: active
merged_into: null
display_name: 王象良
cbdb_id: 211366
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NLxnEFJ4dsSz1sqyeh4m7i
        subject_person_id: p_D13YWU3jLVG79WyyHfTQHB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象良，明人物。隆慶五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 211366）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sdwasZay3KKDsDGE0TVb2Q
          claim_id: c_NLxnEFJ4dsSz1sqyeh4m7i
          source_id: s_aqwm97ab4ZXaefuuSVYGeL
          stance: supports
          locator: CBDB:211366
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aqwm97ab4ZXaefuuSVYGeL
            source_type: api_record
            title: 中国历代人物传记资料库：王象良（CBDB 211366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211366&o=json
            external_identifier: CBDB:211366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKMM7w4gtMdmYqXX2EQbaB
        subject_person_id: p_D13YWU3jLVG79WyyHfTQHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v9Z8GSENSYZC4GRHwPsrP6
          claim_id: c_rKMM7w4gtMdmYqXX2EQbaB
          source_id: s_aqwm97ab4ZXaefuuSVYGeL
          stance: supports
          locator: CBDB:211366
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7Kwyd694ueV1axn4Tffc03
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_D13YWU3jLVG79WyyHfTQHB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8VpeFXBYMZmrEtqCUxdOz
          claim_id: c_7Kwyd694ueV1axn4Tffc03
          source_id: s_GZeUHhxV3ywjLX_gSGkTqt
          stance: supports
          locator: CBDB：兄弟 王象乾（65764）之父／母 王之垣
          quotation: null
          interpretation_note: 由兄弟关系推断：王象良 与 王象乾 为同胞（CBDB 记「兄」），王象乾 之父／母即 王象良 之父／母。
          source:
            id: s_GZeUHhxV3ywjLX_gSGkTqt
            source_type: api_record
            title: 中国历代人物传记资料库：王象良（CBDB 211366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211366&o=json
            external_identifier: CBDB:211366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eS-55-sSGyUh7khYz9S1jx
        subject_person_id: p_D13YWU3jLVG79WyyHfTQHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__cwHOycT02aP1mI1GLkB6A
          claim_id: c_eS-55-sSGyUh7khYz9S1jx
          source_id: s_GZeUHhxV3ywjLX_gSGkTqt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 65764 王象乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GZeUHhxV3ywjLX_gSGkTqt
            source_type: api_record
            title: 中国历代人物传记资料库：王象良（CBDB 211366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211366&o=json
            external_identifier: CBDB:211366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
---

# 王象良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象良，明人物。隆慶五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 211366） | accepted |
| name.primary | 王象良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| other | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象良（CBDB 211366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211366&o=json)
