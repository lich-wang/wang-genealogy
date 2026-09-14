---
schema: wang-person/v1
id: p_iR6ghYs4fGeWgymwd4mhPE
status: active
merged_into: null
display_name: 王胤明
cbdb_id: 281437
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N5Hu9g4k5QMxeY8S7XJ8Aq
        subject_person_id: p_iR6ghYs4fGeWgymwd4mhPE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤明，明人物。正德十二年進士，籍贯中牟。（中国历代人物传记资料库 CBDB 281437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__tLdgdygXxtTGB4lqZedqW
          claim_id: c_N5Hu9g4k5QMxeY8S7XJ8Aq
          source_id: s_aE1Y5dW5g36q2h7T2mQQQh
          stance: supports
          locator: CBDB:281437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aE1Y5dW5g36q2h7T2mQQQh
            source_type: api_record
            title: 中国历代人物传记资料库：王胤明（CBDB 281437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281437&o=json
            external_identifier: CBDB:281437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FrqQE7BnE33BcvSqDgTVKg
        subject_person_id: p_iR6ghYs4fGeWgymwd4mhPE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6ocege2ME4XCExF3QwoHr9
          claim_id: c_FrqQE7BnE33BcvSqDgTVKg
          source_id: s_aE1Y5dW5g36q2h7T2mQQQh
          stance: supports
          locator: CBDB:281437
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tdwk-Hwb1RYhzjhu8761KB
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iR6ghYs4fGeWgymwd4mhPE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8NoHUPsazU4YY2b0-8DUB6
          claim_id: c_Tdwk-Hwb1RYhzjhu8761KB
          source_id: s_ns2RMEEq5aPQ0uF_SrTpkh
          stance: supports
          locator: CBDB：兄弟 王胤賢（201978）之父／母 王汝清
          quotation: null
          interpretation_note: 由兄弟关系推断：王胤明 与 王胤賢 为同胞（CBDB 记「兄」），王胤賢 之父／母即 王胤明 之父／母。
          source:
            id: s_ns2RMEEq5aPQ0uF_SrTpkh
            source_type: api_record
            title: 中国历代人物传记资料库：王胤明（CBDB 281437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281437&o=json
            external_identifier: CBDB:281437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tHYCzriS6LnJ4HHGiVfcHQ
        status: active
        display_name: 王汝清
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VLT-ND0dHhZpxFIOX1X-rv
        subject_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iR6ghYs4fGeWgymwd4mhPE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jCbz7FKR_8iEqXDGP2mZK8
          claim_id: c_VLT-ND0dHhZpxFIOX1X-rv
          source_id: s_ns2RMEEq5aPQ0uF_SrTpkh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201978 王胤賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ns2RMEEq5aPQ0uF_SrTpkh
            source_type: api_record
            title: 中国历代人物传记资料库：王胤明（CBDB 281437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281437&o=json
            external_identifier: CBDB:281437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FbvUfnrJsMZAACE7dBpnUs
        status: active
        display_name: 王胤賢
        merged_into_person_id: null
---

# 王胤明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胤明，明人物。正德十二年進士，籍贯中牟。（中国历代人物传记资料库 CBDB 281437） | accepted |
| name.primary | 王胤明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tHYCzriS6LnJ4HHGiVfcHQ | 王汝清 | accepted |
| other | p_FbvUfnrJsMZAACE7dBpnUs | 王胤賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王胤明（CBDB 281437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281437&o=json)
