---
schema: wang-person/v1
id: p_PQRRw5Pc1BQewPTN93y2aU
status: active
merged_into: null
display_name: 王利賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mkE3DKGMJB4J9oV7USGtHQ
        subject_person_id: p_PQRRw5Pc1BQewPTN93y2aU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T8k6QQvYfBzV49aGo4sGD1
          claim_id: c_mkE3DKGMJB4J9oV7USGtHQ
          source_id: s_kC9vH4B3xN64rKuM8FHG1a
          stance: supports
          locator: CBDB:331580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331580）
          source: &a1
            id: s_kC9vH4B3xN64rKuM8FHG1a
            source_type: api_record
            title: 中国历代人物传记资料库：王利賓（CBDB 331580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331580&o=json
            external_identifier: CBDB:331580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CNWkMuXGwAV3kJc6GJGuRV
        subject_person_id: p_PQRRw5Pc1BQewPTN93y2aU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利賓，明人物。嘉靖四十四年進士，籍贯滕縣。（中国历代人物传记资料库 CBDB 331580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WBtPtrTkmB17DzaBP9Ik-n
          claim_id: c_CNWkMuXGwAV3kJc6GJGuRV
          source_id: s_kC9vH4B3xN64rKuM8FHG1a
          stance: supports
          locator: CBDB:331580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_naK4U6ShuAW_xvvB-I9S3U
        subject_person_id: p_ZgyZoznnAJrPag6d8FS83S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PQRRw5Pc1BQewPTN93y2aU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WqckYfNPaMbeOHInfroR5c
          claim_id: c_naK4U6ShuAW_xvvB-I9S3U
          source_id: s_ujoV9ToKYhvky2Cp5mREM7
          stance: supports
          locator: CBDB：兄弟 王元賓（205321）之父／母 王天敘
          quotation: null
          interpretation_note: 由兄弟关系推断：王利賓 与 王元賓 为同胞（CBDB 记「兄」），王元賓 之父／母即 王利賓 之父／母。
          source:
            id: s_ujoV9ToKYhvky2Cp5mREM7
            source_type: api_record
            title: 中国历代人物传记资料库：王利賓（CBDB 331580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331580&o=json
            external_identifier: CBDB:331580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZgyZoznnAJrPag6d8FS83S
        status: active
        display_name: 王天敘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7XqhCE679ktoRwvYv1I55I
        subject_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PQRRw5Pc1BQewPTN93y2aU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u-n3Mhn7qC7Xe2Hw4SUcrv
          claim_id: c_7XqhCE679ktoRwvYv1I55I
          source_id: s_ujoV9ToKYhvky2Cp5mREM7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205321 王元賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ujoV9ToKYhvky2Cp5mREM7
            source_type: api_record
            title: 中国历代人物传记资料库：王利賓（CBDB 331580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331580&o=json
            external_identifier: CBDB:331580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8FE6kbWmNCoQTRuebayd8Y
        status: active
        display_name: 王元賓
        merged_into_person_id: null
---

# 王利賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利賓 | accepted |
| bio.summary | 王利賓，明人物。嘉靖四十四年進士，籍贯滕縣。（中国历代人物传记资料库 CBDB 331580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZgyZoznnAJrPag6d8FS83S | 王天敘 | accepted |
| other | p_8FE6kbWmNCoQTRuebayd8Y | 王元賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王利賓（CBDB 331580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331580&o=json)
