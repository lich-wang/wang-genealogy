---
schema: wang-person/v1
id: p_gE3QbBN9fCD2PUuxgRRX1T
status: active
merged_into: null
display_name: 王庭詩
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yvt5w3RGU6BeNtaKpPHXBL
        subject_person_id: p_gE3QbBN9fCD2PUuxgRRX1T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m8mDEXXY6FWBYDFDtrSKHw
          claim_id: c_yvt5w3RGU6BeNtaKpPHXBL
          source_id: s_2Xurucp8ZAjKH91SWyJsHk
          stance: supports
          locator: CBDB:218642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（218642）
          source: &a1
            id: s_2Xurucp8ZAjKH91SWyJsHk
            source_type: api_record
            title: 中国历代人物传记资料库：王庭詩（CBDB 218642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218642&o=json
            external_identifier: CBDB:218642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZLBqB6UHfDFG8kJt9LMAtD
        subject_person_id: p_gE3QbBN9fCD2PUuxgRRX1T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭詩，明人物。萬曆八年進士，籍贯華州，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 218642）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ebo6Ho3C1zXpYBQl6jbT94
          claim_id: c_ZLBqB6UHfDFG8kJt9LMAtD
          source_id: s_2Xurucp8ZAjKH91SWyJsHk
          stance: supports
          locator: CBDB:218642
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MQbv3Yt2zWWAVmhag-CYKK
        subject_person_id: p_tdX8aT3u5znQ3z4tHKtVu8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gE3QbBN9fCD2PUuxgRRX1T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x5UeFwMkqgmzaXKM19DKrG
          claim_id: c_MQbv3Yt2zWWAVmhag-CYKK
          source_id: s_ebgxPuInHfu4IzmJvZhOyc
          stance: supports
          locator: CBDB：兄弟 王庭譔（126634）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王庭詩 与 王庭譔 为同胞（CBDB 记「弟」），王庭譔 之父／母即 王庭詩 之父／母。
          source:
            id: s_ebgxPuInHfu4IzmJvZhOyc
            source_type: api_record
            title: 中国历代人物传记资料库：王庭詩（CBDB 218642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218642&o=json
            external_identifier: CBDB:218642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tdX8aT3u5znQ3z4tHKtVu8
        status: active
        display_name: 王吉兆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_t5sRT7DyZLXY9rbOQNimiP
        subject_person_id: p_9KoQkJpzmuFGWSKkeqbZoc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gE3QbBN9fCD2PUuxgRRX1T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFt99oN9sPcjfFRZ6nvB0F
          claim_id: c_t5sRT7DyZLXY9rbOQNimiP
          source_id: s_ebgxPuInHfu4IzmJvZhOyc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126634 王庭譔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ebgxPuInHfu4IzmJvZhOyc
            source_type: api_record
            title: 中国历代人物传记资料库：王庭詩（CBDB 218642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218642&o=json
            external_identifier: CBDB:218642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9KoQkJpzmuFGWSKkeqbZoc
        status: active
        display_name: 王庭譔
        merged_into_person_id: null
    - claim:
        id: c_mySUbZQo8SUDxzMl_x0slm
        subject_person_id: p_BehY6enP6cGJBMEXqAzGFc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gE3QbBN9fCD2PUuxgRRX1T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7NKTb1InWlW00dc3wl7Ut0
          claim_id: c_mySUbZQo8SUDxzMl_x0slm
          source_id: s_ebgxPuInHfu4IzmJvZhOyc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206637 王庭諭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ebgxPuInHfu4IzmJvZhOyc
            source_type: api_record
            title: 中国历代人物传记资料库：王庭詩（CBDB 218642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218642&o=json
            external_identifier: CBDB:218642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BehY6enP6cGJBMEXqAzGFc
        status: active
        display_name: 王庭諭
        merged_into_person_id: null
---

# 王庭詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭詩 | accepted |
| bio.summary | 王庭詩，明人物。萬曆八年進士，籍贯華州，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 218642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tdX8aT3u5znQ3z4tHKtVu8 | 王吉兆 | accepted |
| other | p_9KoQkJpzmuFGWSKkeqbZoc | 王庭譔 | accepted |
| other | p_BehY6enP6cGJBMEXqAzGFc | 王庭諭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭詩（CBDB 218642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218642&o=json)
