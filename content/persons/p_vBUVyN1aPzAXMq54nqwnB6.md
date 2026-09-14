---
schema: wang-person/v1
id: p_vBUVyN1aPzAXMq54nqwnB6
status: active
merged_into: null
display_name: 王世清
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eB7Vn4bRu8nMT8HL8GLzM4
        subject_person_id: p_vBUVyN1aPzAXMq54nqwnB6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KGvnaiGcRQMjEiMg222eX6
          claim_id: c_eB7Vn4bRu8nMT8HL8GLzM4
          source_id: s_x8TMi61Z9YMzrY6UUXSdv8
          stance: supports
          locator: CBDB:285109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285109）
          source: &a1
            id: s_x8TMi61Z9YMzrY6UUXSdv8
            source_type: api_record
            title: 中国历代人物传记资料库：王世清（CBDB 285109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285109&o=json
            external_identifier: CBDB:285109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EsQfoAFj39jBvhoD1gBwe5
        subject_person_id: p_vBUVyN1aPzAXMq54nqwnB6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世清，明人物。正德十六年進士，籍贯開州。（中国历代人物传记资料库 CBDB 285109）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h-ojGctv1chsL04OUFYN65
          claim_id: c_EsQfoAFj39jBvhoD1gBwe5
          source_id: s_x8TMi61Z9YMzrY6UUXSdv8
          stance: supports
          locator: CBDB:285109
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T8T0gR-KEoP4liZV5IpKn2
        subject_person_id: p_5xNKeJnMLc2HP1gUGBRQHQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vBUVyN1aPzAXMq54nqwnB6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sld1Hgz0k-Ca7mBo8Dm5xA
          claim_id: c_T8T0gR-KEoP4liZV5IpKn2
          source_id: s_WyOwAX3wriepVLOIiC028c
          stance: supports
          locator: CBDB：兄弟 王世爵（202209）之父／母 王緒
          quotation: null
          interpretation_note: 由兄弟关系推断：王世清 与 王世爵 为同胞（CBDB 记「兄」），王世爵 之父／母即 王世清 之父／母。
          source:
            id: s_WyOwAX3wriepVLOIiC028c
            source_type: api_record
            title: 中国历代人物传记资料库：王世清（CBDB 285109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285109&o=json
            external_identifier: CBDB:285109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5xNKeJnMLc2HP1gUGBRQHQ
        status: active
        display_name: 王緒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QGdgVzoAZJZ3mhm5cyjyU5
        subject_person_id: p_mzfdPkfX3Q3SMWu8QjHhbB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vBUVyN1aPzAXMq54nqwnB6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I20zvlhl-wPssGnQINn05c
          claim_id: c_QGdgVzoAZJZ3mhm5cyjyU5
          source_id: s_WyOwAX3wriepVLOIiC028c
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202209 王世爵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WyOwAX3wriepVLOIiC028c
            source_type: api_record
            title: 中国历代人物传记资料库：王世清（CBDB 285109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285109&o=json
            external_identifier: CBDB:285109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mzfdPkfX3Q3SMWu8QjHhbB
        status: active
        display_name: 王世爵
        merged_into_person_id: null
---

# 王世清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世清 | accepted |
| bio.summary | 王世清，明人物。正德十六年進士，籍贯開州。（中国历代人物传记资料库 CBDB 285109） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5xNKeJnMLc2HP1gUGBRQHQ | 王緒 | accepted |
| other | p_mzfdPkfX3Q3SMWu8QjHhbB | 王世爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世清（CBDB 285109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285109&o=json)
