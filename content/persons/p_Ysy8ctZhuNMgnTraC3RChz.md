---
schema: wang-person/v1
id: p_Ysy8ctZhuNMgnTraC3RChz
status: active
merged_into: null
display_name: 王宣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tf7QwDUBF9NYaJBEF9Xz65
        subject_person_id: p_Ysy8ctZhuNMgnTraC3RChz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X3auYYYpNJdE5r2yso2naB
          claim_id: c_tf7QwDUBF9NYaJBEF9Xz65
          source_id: s_XCU8FT3dxTVrZy2s8EXQTi
          stance: supports
          locator: CBDB:227995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227995）
          source: &a1
            id: s_XCU8FT3dxTVrZy2s8EXQTi
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 227995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227995&o=json
            external_identifier: CBDB:227995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KRYDFHr8vJPgL3zk6ERfEa
        subject_person_id: p_Ysy8ctZhuNMgnTraC3RChz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣，明人物。成化二年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 227995）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__Vn3rXJvFPaEGEaobkLU0w
          claim_id: c_KRYDFHr8vJPgL3zk6ERfEa
          source_id: s_XCU8FT3dxTVrZy2s8EXQTi
          stance: supports
          locator: CBDB:227995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VutCKp5ORaeCoiEbaUmCxA
        subject_person_id: p_aQkyWCSC3KokRarHEM1c8Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ysy8ctZhuNMgnTraC3RChz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kV1dLO2WSSVKwuM4BH-dlF
          claim_id: c_VutCKp5ORaeCoiEbaUmCxA
          source_id: s_GX0syHM6m3kugxNL-ZxWSy
          stance: supports
          locator: CBDB：兄弟 王輔（212648）之父／母 王聰
          quotation: null
          interpretation_note: 由兄弟关系推断：王宣 与 王輔 为同胞（CBDB 记「弟」），王輔 之父／母即 王宣 之父／母。
          source:
            id: s_GX0syHM6m3kugxNL-ZxWSy
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 227995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227995&o=json
            external_identifier: CBDB:227995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aQkyWCSC3KokRarHEM1c8Q
        status: active
        display_name: 王聰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WFmEgssY-5VcpUqSvtsu8f
        subject_person_id: p_Ysy8ctZhuNMgnTraC3RChz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gYCzF6vom9uRciu3ySukCo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ne4oBsqHbNg6qsjsj1YmEB
          claim_id: c_WFmEgssY-5VcpUqSvtsu8f
          source_id: s_GX0syHM6m3kugxNL-ZxWSy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 212648 王輔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GX0syHM6m3kugxNL-ZxWSy
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 227995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227995&o=json
            external_identifier: CBDB:227995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gYCzF6vom9uRciu3ySukCo
        status: active
        display_name: 王輔
        merged_into_person_id: null
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | 王宣，明人物。成化二年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 227995） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aQkyWCSC3KokRarHEM1c8Q | 王聰 | accepted |
| other | p_gYCzF6vom9uRciu3ySukCo | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 227995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227995&o=json)
