---
schema: wang-person/v1
id: p_GAhwHBL32MHPKrLBBb94dh
status: active
merged_into: null
display_name: 王可使
cbdb_id: 318734
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FfHvheJkL8YJU4vcKDk1QB
        subject_person_id: p_GAhwHBL32MHPKrLBBb94dh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可使，明人物。嘉靖三十二年進士，籍贯平鄉。（中国历代人物传记资料库 CBDB 318734）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pNdmy6JbXRmYBeP4aqwSOK
          claim_id: c_FfHvheJkL8YJU4vcKDk1QB
          source_id: s_84zv2XFr5C8SEEsxQKF2oi
          stance: supports
          locator: CBDB:318734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_84zv2XFr5C8SEEsxQKF2oi
            source_type: api_record
            title: 中国历代人物传记资料库：王可使（CBDB 318734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318734&o=json
            external_identifier: CBDB:318734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMsoE7b1AQ5pzWT3QMgKKS
        subject_person_id: p_GAhwHBL32MHPKrLBBb94dh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可使
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mn1gHhA4Zz2PVgGWiYgGSh
          claim_id: c_MMsoE7b1AQ5pzWT3QMgKKS
          source_id: s_84zv2XFr5C8SEEsxQKF2oi
          stance: supports
          locator: CBDB:318734
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gekqdQxrr00-l_S-Ao9Fbb
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GAhwHBL32MHPKrLBBb94dh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5abcZ5U1i4XSX1XLVLrZN
          claim_id: c_gekqdQxrr00-l_S-Ao9Fbb
          source_id: s_XdM15zwEdeImkQzS1RQLxU
          stance: supports
          locator: CBDB：兄弟 王可信（204413）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王可使 与 王可信 为同胞（CBDB 记「兄」），王可信 之父／母即 王可使 之父／母。
          source:
            id: s_XdM15zwEdeImkQzS1RQLxU
            source_type: api_record
            title: 中国历代人物传记资料库：王可使（CBDB 318734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318734&o=json
            external_identifier: CBDB:318734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YaWmd84uDmuR4z7SAP4Eam
        status: active
        display_name: 王崇德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-uBCy-22G4jRpbrpXQTDkc
        subject_person_id: p_GAhwHBL32MHPKrLBBb94dh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ctmr1QXgwKxOjdMGhn3H0S
          claim_id: c_-uBCy-22G4jRpbrpXQTDkc
          source_id: s_XdM15zwEdeImkQzS1RQLxU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204413 王可信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XdM15zwEdeImkQzS1RQLxU
            source_type: api_record
            title: 中国历代人物传记资料库：王可使（CBDB 318734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318734&o=json
            external_identifier: CBDB:318734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cDtAvQGzuVZRFeJxenEh2g
        status: active
        display_name: 王可信
        merged_into_person_id: null
---

# 王可使

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王可使，明人物。嘉靖三十二年進士，籍贯平鄉。（中国历代人物传记资料库 CBDB 318734） | accepted |
| name.primary | 王可使 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YaWmd84uDmuR4z7SAP4Eam | 王崇德 | accepted |
| other | p_cDtAvQGzuVZRFeJxenEh2g | 王可信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可使（CBDB 318734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318734&o=json)
