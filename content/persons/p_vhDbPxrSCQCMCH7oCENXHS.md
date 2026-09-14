---
schema: wang-person/v1
id: p_vhDbPxrSCQCMCH7oCENXHS
status: active
merged_into: null
display_name: 王浩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8YD7Scn9WewRuJNYzKxKHH
        subject_person_id: p_vhDbPxrSCQCMCH7oCENXHS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8DuYz6692FMUSNvKZMTqCy
          claim_id: c_8YD7Scn9WewRuJNYzKxKHH
          source_id: s_P86gZK1qoQRUJDVwqVg7xE
          stance: supports
          locator: CBDB:240609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240609）
          source: &a1
            id: s_P86gZK1qoQRUJDVwqVg7xE
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 240609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240609&o=json
            external_identifier: CBDB:240609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kZCeedcW4vdqiNLKHJxd2p
        subject_person_id: p_vhDbPxrSCQCMCH7oCENXHS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩，明人物。成化二年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 240609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kRDSQMAS6w1aRzK49TyewQ
          claim_id: c_kZCeedcW4vdqiNLKHJxd2p
          source_id: s_P86gZK1qoQRUJDVwqVg7xE
          stance: supports
          locator: CBDB:240609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ucndUvIQWdgjg8c27S3qoI
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vhDbPxrSCQCMCH7oCENXHS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gcck0EiJMJPu_QxwFnO8Ql
          claim_id: c_ucndUvIQWdgjg8c27S3qoI
          source_id: s_t9vBVjLOfU6NvVxc_83aIr
          stance: supports
          locator: CBDB：兄弟 王俊（199171）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王浩 与 王俊 为同胞（CBDB 记「兄」），王俊 之父／母即 王浩 之父／母。
          source:
            id: s_t9vBVjLOfU6NvVxc_83aIr
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 240609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240609&o=json
            external_identifier: CBDB:240609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wDGxRNCDYBWfdncywvt3LA
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_P2byJiIAj6dbaAm7w5_LRM
        subject_person_id: p_kPeA425yX1vHGJ6NED9rRs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vhDbPxrSCQCMCH7oCENXHS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KSkPCO8rGJpDBRAbJDOTwS
          claim_id: c_P2byJiIAj6dbaAm7w5_LRM
          source_id: s_t9vBVjLOfU6NvVxc_83aIr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199171 王俊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t9vBVjLOfU6NvVxc_83aIr
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 240609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240609&o=json
            external_identifier: CBDB:240609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kPeA425yX1vHGJ6NED9rRs
        status: active
        display_name: 王俊
        merged_into_person_id: null
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | 王浩，明人物。成化二年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 240609） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wDGxRNCDYBWfdncywvt3LA | 王寧 | accepted |
| other | p_kPeA425yX1vHGJ6NED9rRs | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 240609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240609&o=json)
