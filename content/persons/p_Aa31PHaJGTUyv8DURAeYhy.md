---
schema: wang-person/v1
id: p_Aa31PHaJGTUyv8DURAeYhy
status: active
merged_into: null
display_name: 王均
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zSmsbRjxQFbLe715qV34VT
        subject_person_id: p_Aa31PHaJGTUyv8DURAeYhy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DYErr6wvt1xc5BujCi7o41
          claim_id: c_zSmsbRjxQFbLe715qV34VT
          source_id: s_uy2SoZoXcDpYsRoydMQ5RN
          stance: supports
          locator: CBDB:236484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236484）
          source: &a1
            id: s_uy2SoZoXcDpYsRoydMQ5RN
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 236484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236484&o=json
            external_identifier: CBDB:236484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hPd7YYtYNEi9L7SAfDMdGF
        subject_person_id: p_Aa31PHaJGTUyv8DURAeYhy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XXr3c45HVouTTaoyZSepYX
          claim_id: c_hPd7YYtYNEi9L7SAfDMdGF
          source_id: s_uy2SoZoXcDpYsRoydMQ5RN
          stance: supports
          locator: CBDB:236484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hLJ6S9p-TJqFkOVxdAwioJ
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Aa31PHaJGTUyv8DURAeYhy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DlQP9GrHzxew0R6GBAv27I
          claim_id: c_hLJ6S9p-TJqFkOVxdAwioJ
          source_id: s_s8yZ7pHEr3w2PU_aaRDTDE
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王均 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王均 之父／母。
          source:
            id: s_s8yZ7pHEr3w2PU_aaRDTDE
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 236484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236484&o=json
            external_identifier: CBDB:236484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XiY68382_SgzkJwuHWIIB0
        subject_person_id: p_Aa31PHaJGTUyv8DURAeYhy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GKwkZsCFLz0FnMYsCxm5hP
          claim_id: c_XiY68382_SgzkJwuHWIIB0
          source_id: s_s8yZ7pHEr3w2PU_aaRDTDE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s8yZ7pHEr3w2PU_aaRDTDE
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 236484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236484&o=json
            external_identifier: CBDB:236484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
---

# 王均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王均 | accepted |
| bio.summary | 王均，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| other | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王均（CBDB 236484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236484&o=json)
