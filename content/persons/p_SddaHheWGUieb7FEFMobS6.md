---
schema: wang-person/v1
id: p_SddaHheWGUieb7FEFMobS6
status: active
merged_into: null
display_name: 王用畢
cbdb_id: 213305
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d8LLKpMqsVsrbHbViH2oVP
        subject_person_id: p_SddaHheWGUieb7FEFMobS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用畢，明人物。萬曆二年進士，籍贯濟南衛。（中国历代人物传记资料库 CBDB 213305）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_km68C1uXrvmuyJCZFA5sk4
          claim_id: c_d8LLKpMqsVsrbHbViH2oVP
          source_id: s_3E29Grs6cfvNZ6Am6yKe14
          stance: supports
          locator: CBDB:213305
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3E29Grs6cfvNZ6Am6yKe14
            source_type: api_record
            title: 中国历代人物传记资料库：王用畢（CBDB 213305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json
            external_identifier: CBDB:213305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9EBu1HSJHU4VrKwx1u235w
        subject_person_id: p_SddaHheWGUieb7FEFMobS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用畢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4EQRxFS1yNc2i2qkGSbmKK
          claim_id: c_9EBu1HSJHU4VrKwx1u235w
          source_id: s_3E29Grs6cfvNZ6Am6yKe14
          stance: supports
          locator: CBDB:213305
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8fuhpnfsyDP9u8GTUoVl8R
        subject_person_id: p_Nmqd5S7jpjuKcCBWFdU9w5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SddaHheWGUieb7FEFMobS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FiBjqaU6iQYzf9oJNcUEmV
          claim_id: c_8fuhpnfsyDP9u8GTUoVl8R
          source_id: s_HJHf_iZoiqcl-mqME5U3jf
          stance: supports
          locator: CBDB：兄弟 王見賓（206099）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王用畢 与 王見賓 为同胞（CBDB 记「弟」），王見賓 之父／母即 王用畢 之父／母。
          source:
            id: s_HJHf_iZoiqcl-mqME5U3jf
            source_type: api_record
            title: 中国历代人物传记资料库：王用畢（CBDB 213305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json
            external_identifier: CBDB:213305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nmqd5S7jpjuKcCBWFdU9w5
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FCrTZxJjDeTCuxlKX8jCFa
        subject_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SddaHheWGUieb7FEFMobS6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJ-4PGZMEHsWvReDMdcQsK
          claim_id: c_FCrTZxJjDeTCuxlKX8jCFa
          source_id: s_HJHf_iZoiqcl-mqME5U3jf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206099 王見賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HJHf_iZoiqcl-mqME5U3jf
            source_type: api_record
            title: 中国历代人物传记资料库：王用畢（CBDB 213305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json
            external_identifier: CBDB:213305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BDGbLxvCTFWSUvdwVPuxPV
        status: active
        display_name: 王見賓
        merged_into_person_id: null
---

# 王用畢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用畢，明人物。萬曆二年進士，籍贯濟南衛。（中国历代人物传记资料库 CBDB 213305） | accepted |
| name.primary | 王用畢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Nmqd5S7jpjuKcCBWFdU9w5 | 王儒 | accepted |
| other | p_BDGbLxvCTFWSUvdwVPuxPV | 王見賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用畢（CBDB 213305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json)
