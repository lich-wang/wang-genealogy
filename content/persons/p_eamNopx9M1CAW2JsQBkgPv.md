---
schema: wang-person/v1
id: p_eamNopx9M1CAW2JsQBkgPv
status: active
merged_into: null
display_name: 王育
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aUhZ4PQNRDtXJJZ68Qt2yc
        subject_person_id: p_eamNopx9M1CAW2JsQBkgPv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YsDYJFqEGWgNNtoT28emNz
          claim_id: c_aUhZ4PQNRDtXJJZ68Qt2yc
          source_id: s_YrpTJ1Sx5985HbimYUpRxi
          stance: supports
          locator: CBDB:237520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237520）
          source: &a1
            id: s_YrpTJ1Sx5985HbimYUpRxi
            source_type: api_record
            title: 中国历代人物传记资料库：王育（CBDB 237520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237520&o=json
            external_identifier: CBDB:237520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zmX9jK3XZ9Vpk3rb1WZ7QT
        subject_person_id: p_eamNopx9M1CAW2JsQBkgPv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BeaS-7ifuAg5QXsnKRokTl
          claim_id: c_zmX9jK3XZ9Vpk3rb1WZ7QT
          source_id: s_YrpTJ1Sx5985HbimYUpRxi
          stance: supports
          locator: CBDB:237520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oEIuPPVEhr0sI9SBQNUvye
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eamNopx9M1CAW2JsQBkgPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7PXRarNw5qtBM9hVbVDUb
          claim_id: c_oEIuPPVEhr0sI9SBQNUvye
          source_id: s_ij5Szkn_6Z3tOhrIdfKJGo
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王育 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王育 之父／母。
          source:
            id: s_ij5Szkn_6Z3tOhrIdfKJGo
            source_type: api_record
            title: 中国历代人物传记资料库：王育（CBDB 237520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237520&o=json
            external_identifier: CBDB:237520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lj8WT4nJBhsqQXhWW65SRH
        status: active
        display_name: 王志善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_x406qmwA2EhexFBSBYxlMf
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eamNopx9M1CAW2JsQBkgPv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nRT15ZwBh87ej2ZL-8Cwn8
          claim_id: c_x406qmwA2EhexFBSBYxlMf
          source_id: s_ij5Szkn_6Z3tOhrIdfKJGo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ij5Szkn_6Z3tOhrIdfKJGo
            source_type: api_record
            title: 中国历代人物传记资料库：王育（CBDB 237520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237520&o=json
            external_identifier: CBDB:237520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V99Mmn5gsgVZ4CwJWSpRRc
        status: active
        display_name: 王賓
        merged_into_person_id: null
---

# 王育

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育 | accepted |
| bio.summary | 王育，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lj8WT4nJBhsqQXhWW65SRH | 王志善 | accepted |
| other | p_V99Mmn5gsgVZ4CwJWSpRRc | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王育（CBDB 237520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237520&o=json)
