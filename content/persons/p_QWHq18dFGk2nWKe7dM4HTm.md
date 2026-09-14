---
schema: wang-person/v1
id: p_QWHq18dFGk2nWKe7dM4HTm
status: active
merged_into: null
display_name: 王根
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BPprZP3k4bLQQGENRwBd3S
        subject_person_id: p_QWHq18dFGk2nWKe7dM4HTm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王根
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c4pw3q9hAEDYv1kdAXfaDL
          claim_id: c_BPprZP3k4bLQQGENRwBd3S
          source_id: s_QqbCcAdnyK3Sxj36XVRkht
          stance: supports
          locator: CBDB:260171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260171）
          source: &a1
            id: s_QqbCcAdnyK3Sxj36XVRkht
            source_type: api_record
            title: 中国历代人物传记资料库：王根（CBDB 260171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260171&o=json
            external_identifier: CBDB:260171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFBz7c8VUv66dBjvbRWZuj
        subject_person_id: p_QWHq18dFGk2nWKe7dM4HTm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王根，明人物。成化二十三年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 260171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cs0NMZ335huuSXVWaVuzVU
          claim_id: c_TFBz7c8VUv66dBjvbRWZuj
          source_id: s_QqbCcAdnyK3Sxj36XVRkht
          stance: supports
          locator: CBDB:260171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7VIoTC-gZ5kUHSx4dURDsA
        subject_person_id: p_bGA9f5CTCFCRJmcWcUEGyG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QWHq18dFGk2nWKe7dM4HTm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RlUdrJzGNgh2G98qxP-fyd
          claim_id: c_7VIoTC-gZ5kUHSx4dURDsA
          source_id: s_odhU9vEq_udJGvc3ShiE2u
          stance: supports
          locator: CBDB：兄弟 王啟（126669）之父／母 王本
          quotation: null
          interpretation_note: 由兄弟关系推断：王根 与 王啟 为同胞（CBDB 记「兄」），王啟 之父／母即 王根 之父／母。
          source:
            id: s_odhU9vEq_udJGvc3ShiE2u
            source_type: api_record
            title: 中国历代人物传记资料库：王根（CBDB 260171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260171&o=json
            external_identifier: CBDB:260171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bGA9f5CTCFCRJmcWcUEGyG
        status: active
        display_name: 王本
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sp2w0-3Yd95DI9cu8BgHq5
        subject_person_id: p_QWHq18dFGk2nWKe7dM4HTm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_poFLtomFA5hIDlwFW77Fmu
          claim_id: c_sp2w0-3Yd95DI9cu8BgHq5
          source_id: s_odhU9vEq_udJGvc3ShiE2u
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126669 王啟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_odhU9vEq_udJGvc3ShiE2u
            source_type: api_record
            title: 中国历代人物传记资料库：王根（CBDB 260171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260171&o=json
            external_identifier: CBDB:260171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y8c9Xt6HZtEueH7Ywuv2af
        status: active
        display_name: 王啟
        merged_into_person_id: null
---

# 王根

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王根 | accepted |
| bio.summary | 王根，明人物。成化二十三年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 260171） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bGA9f5CTCFCRJmcWcUEGyG | 王本 | accepted |
| other | p_Y8c9Xt6HZtEueH7Ywuv2af | 王啟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王根（CBDB 260171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260171&o=json)
