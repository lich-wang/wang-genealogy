---
schema: wang-person/v1
id: p_UqnSHc2i9jAou8juB7BvTu
status: active
merged_into: null
display_name: 王守誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gkF8aj7aBEfd8y8fGJSjie
        subject_person_id: p_UqnSHc2i9jAou8juB7BvTu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MoXNPw1mm4m1mDWVJD7q1k
          claim_id: c_gkF8aj7aBEfd8y8fGJSjie
          source_id: s_KzvpzvxK34KWCqPHykYs7J
          stance: supports
          locator: CBDB:126508
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126508）
          source: &a1
            id: s_KzvpzvxK34KWCqPHykYs7J
            source_type: api_record
            title: 中国历代人物传记资料库：王守誠（CBDB 126508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126508&o=json
            external_identifier: CBDB:126508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7LQNA1gcyfVYcRXB5pTat
        subject_person_id: p_UqnSHc2i9jAou8juB7BvTu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GeP8ffiE1yyoQDNF4xKBrm
          claim_id: c_A7LQNA1gcyfVYcRXB5pTat
          source_id: s_KzvpzvxK34KWCqPHykYs7J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qdN6W5qgip87fEHe59j-00
        subject_person_id: p_raxD6LxzWqCCT2c1xHSNBU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UqnSHc2i9jAou8juB7BvTu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_04M8_NO2g0zEmEnI5hx7lI
          claim_id: c_qdN6W5qgip87fEHe59j-00
          source_id: s_FKkNbmW7bcP8mWyMYWFJTE
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FKkNbmW7bcP8mWyMYWFJTE
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 208679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208679&o=json
            external_identifier: CBDB:208679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_raxD6LxzWqCCT2c1xHSNBU
        status: active
        display_name: 王京
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_raxD6LxzWqCCT2c1xHSNBU | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 208679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208679&o=json)
- [中国历代人物传记资料库：王守誠（CBDB 126508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126508&o=json)
