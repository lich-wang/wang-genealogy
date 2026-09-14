---
schema: wang-person/v1
id: p_dCEZT1WezjPdG9Xoa6Z9bp
status: active
merged_into: null
display_name: 王璣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cpmhqcBDg495Q1EMhXyBa1
        subject_person_id: p_dCEZT1WezjPdG9Xoa6Z9bp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Tzpd8FqZ6qu79aZZDKRKM
          claim_id: c_cpmhqcBDg495Q1EMhXyBa1
          source_id: s_6GU6YT3E4ETcwsGd3ZXDcU
          stance: supports
          locator: CBDB:241887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241887）
          source: &a1
            id: s_6GU6YT3E4ETcwsGd3ZXDcU
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 241887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241887&o=json
            external_identifier: CBDB:241887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_evQSybyMYQeLf2qwoxEsF3
        subject_person_id: p_dCEZT1WezjPdG9Xoa6Z9bp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣，明人物。成化二年進士，籍贯安岳。（中国历代人物传记资料库 CBDB 241887）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wPdLn6HUjZqkuQ0kdNqyC1
          claim_id: c_evQSybyMYQeLf2qwoxEsF3
          source_id: s_6GU6YT3E4ETcwsGd3ZXDcU
          stance: supports
          locator: CBDB:241887
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ba-8cXfM2wM6-JFm5hbiv8
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dCEZT1WezjPdG9Xoa6Z9bp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l3Ags3msAQfIPjgj4KOr8S
          claim_id: c_ba-8cXfM2wM6-JFm5hbiv8
          source_id: s_Z4NOYcyhQ9VRO2d-i80c0Q
          stance: supports
          locator: CBDB：兄弟 王璿（199220）之父／母 王守文
          quotation: null
          interpretation_note: 由兄弟关系推断：王璣 与 王璿 为同胞（CBDB 记「兄」），王璿 之父／母即 王璣 之父／母。
          source:
            id: s_Z4NOYcyhQ9VRO2d-i80c0Q
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 241887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241887&o=json
            external_identifier: CBDB:241887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8D8JJjvAk9tGe283upkqdk
        status: active
        display_name: 王守文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_i5nVBgBdkOrMxw-0rVi5NK
        subject_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dCEZT1WezjPdG9Xoa6Z9bp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SN6O0OLqWivk928V1MIpmY
          claim_id: c_i5nVBgBdkOrMxw-0rVi5NK
          source_id: s_Z4NOYcyhQ9VRO2d-i80c0Q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199220 王璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z4NOYcyhQ9VRO2d-i80c0Q
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 241887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241887&o=json
            external_identifier: CBDB:241887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TxHEXLnqR7Hmrn4YZb9SRE
        status: active
        display_name: 王璿
        merged_into_person_id: null
---

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| bio.summary | 王璣，明人物。成化二年進士，籍贯安岳。（中国历代人物传记资料库 CBDB 241887） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8D8JJjvAk9tGe283upkqdk | 王守文 | accepted |
| other | p_TxHEXLnqR7Hmrn4YZb9SRE | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 241887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241887&o=json)
