---
schema: wang-person/v1
id: p_maYRENQxzfRp4y47Nm1HV9
status: active
merged_into: null
display_name: 王棟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8GyM8s6Wj7M33cD2GfxSS4
        subject_person_id: p_maYRENQxzfRp4y47Nm1HV9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6nmjM8sJgS8EV5T3RFT31a
          claim_id: c_8GyM8s6Wj7M33cD2GfxSS4
          source_id: s_61JNk2CZYMxqcxHzS36gew
          stance: supports
          locator: CBDB:329699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329699）
          source: &a1
            id: s_61JNk2CZYMxqcxHzS36gew
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 329699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329699&o=json
            external_identifier: CBDB:329699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z4jWmXcb1tfNg7sG9raUz6
        subject_person_id: p_maYRENQxzfRp4y47Nm1HV9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nOymWxRsFA-v0zXSccWlhG
          claim_id: c_z4jWmXcb1tfNg7sG9raUz6
          source_id: s_61JNk2CZYMxqcxHzS36gew
          stance: supports
          locator: CBDB:329699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wX7OhII_tlfv1NTv_SpeW_
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_maYRENQxzfRp4y47Nm1HV9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_65k6FRsTQusNvzDV4qYPy_
          claim_id: c_wX7OhII_tlfv1NTv_SpeW_
          source_id: s_ycb0B_bh6bsgoWE8CSc0Tl
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王楣 为同胞（CBDB 记「弟」），王楣 之父／母即 王棟 之父／母。
          source:
            id: s_ycb0B_bh6bsgoWE8CSc0Tl
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 329699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329699&o=json
            external_identifier: CBDB:329699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YHFTAXms1Jyvocf8LFCxJZ
        status: active
        display_name: 王經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ae8UHnw5kS6L49ZHYHE49s
        subject_person_id: p_hoiRRCExCw4KSUTuvH17WP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_maYRENQxzfRp4y47Nm1HV9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o39EeCp3RHQR-wmQcUjiWx
          claim_id: c_Ae8UHnw5kS6L49ZHYHE49s
          source_id: s_ycb0B_bh6bsgoWE8CSc0Tl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205205 王楣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ycb0B_bh6bsgoWE8CSc0Tl
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 329699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329699&o=json
            external_identifier: CBDB:329699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hoiRRCExCw4KSUTuvH17WP
        status: active
        display_name: 王楣
        merged_into_person_id: null
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YHFTAXms1Jyvocf8LFCxJZ | 王經 | accepted |
| other | p_hoiRRCExCw4KSUTuvH17WP | 王楣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 329699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329699&o=json)
