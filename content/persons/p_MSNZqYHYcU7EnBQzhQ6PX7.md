---
schema: wang-person/v1
id: p_MSNZqYHYcU7EnBQzhQ6PX7
status: active
merged_into: null
display_name: 王一藝
cbdb_id: 337568
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ECZ33FDKtCmTgDQ1Mbb3hF
        subject_person_id: p_MSNZqYHYcU7EnBQzhQ6PX7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一藝，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337568）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_J0mbt2qQdJakCuhu75mFVK
          claim_id: c_ECZ33FDKtCmTgDQ1Mbb3hF
          source_id: s_RwwoYvDj9HXq8ydnuHVh33
          stance: supports
          locator: CBDB:337568
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RwwoYvDj9HXq8ydnuHVh33
            source_type: api_record
            title: 中国历代人物传记资料库：王一藝（CBDB 337568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337568&o=json
            external_identifier: CBDB:337568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sxMmpvd8LYGyoE9jNN8EeK
        subject_person_id: p_MSNZqYHYcU7EnBQzhQ6PX7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一藝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_d2zUXyea1wRcW4NDLBcHzV
          claim_id: c_sxMmpvd8LYGyoE9jNN8EeK
          source_id: s_RwwoYvDj9HXq8ydnuHVh33
          stance: supports
          locator: CBDB:337568
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LEz8YLsj7HdDOOsT7ZUacs
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MSNZqYHYcU7EnBQzhQ6PX7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRmRL7PsVASO0y9UpSFuz2
          claim_id: c_LEz8YLsj7HdDOOsT7ZUacs
          source_id: s_JjfjWrzp_WqQF30x63cX0d
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一藝 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一藝 之父／母。
          source:
            id: s_JjfjWrzp_WqQF30x63cX0d
            source_type: api_record
            title: 中国历代人物传记资料库：王一藝（CBDB 337568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337568&o=json
            external_identifier: CBDB:337568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uWARgTHwHotCqXAXAieGV4
        status: active
        display_name: 王世芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_M6IImeTd5ciS6uiHcsvOqh
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MSNZqYHYcU7EnBQzhQ6PX7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_34ntvZ1agExegPuCTO5XFo
          claim_id: c_M6IImeTd5ciS6uiHcsvOqh
          source_id: s_JjfjWrzp_WqQF30x63cX0d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205728 王一誠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JjfjWrzp_WqQF30x63cX0d
            source_type: api_record
            title: 中国历代人物传记资料库：王一藝（CBDB 337568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337568&o=json
            external_identifier: CBDB:337568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2CCGS25AmJvxKtCikhBKeQ
        status: active
        display_name: 王一誠
        merged_into_person_id: null
---

# 王一藝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一藝，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337568） | accepted |
| name.primary | 王一藝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uWARgTHwHotCqXAXAieGV4 | 王世芳 | accepted |
| other | p_2CCGS25AmJvxKtCikhBKeQ | 王一誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一藝（CBDB 337568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337568&o=json)
