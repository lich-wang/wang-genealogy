---
schema: wang-person/v1
id: p_CZQQ91VfnuK7NuqpB8hoXK
status: active
merged_into: null
display_name: 王照
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VtemBZ1uNF1Fdesbc1SbgV
        subject_person_id: p_CZQQ91VfnuK7NuqpB8hoXK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U1B8yTJYDsh68JQP1ShnoF
          claim_id: c_VtemBZ1uNF1Fdesbc1SbgV
          source_id: s_yrA1AQ1LxXvZAAxVT1YMNp
          stance: supports
          locator: CBDB:220569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220569）
          source: &a1
            id: s_yrA1AQ1LxXvZAAxVT1YMNp
            source_type: api_record
            title: 中国历代人物传记资料库：王照（CBDB 220569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220569&o=json
            external_identifier: CBDB:220569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C33QFPCtudSsT2EqyJywph
        subject_person_id: p_CZQQ91VfnuK7NuqpB8hoXK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王照，明人物。萬曆八年進士，籍贯廣濟。（中国历代人物传记资料库 CBDB 220569）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m6f2l3EMbxe_FHgwnXE4Nu
          claim_id: c_C33QFPCtudSsT2EqyJywph
          source_id: s_yrA1AQ1LxXvZAAxVT1YMNp
          stance: supports
          locator: CBDB:220569
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HDY8hWxjAwijb_NQ5mkFt_
        subject_person_id: p_CZQQ91VfnuK7NuqpB8hoXK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TxvCUWCPj6wVBqyLV556YD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1sD2JJo9mCJgNxC-nxeMi
          claim_id: c_HDY8hWxjAwijb_NQ5mkFt_
          source_id: s_yrA1AQ1LxXvZAAxVT1YMNp
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TxvCUWCPj6wVBqyLV556YD
        status: active
        display_name: 王大謨
        merged_into_person_id: null
    - claim:
        id: c_Ywwar0RTtpz6WYHQXem7wp
        subject_person_id: p_CZQQ91VfnuK7NuqpB8hoXK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AGw7JSRWBPYTLp5VhR36Lo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GtITLT8bhs7vHsHAS-Po0o
          claim_id: c_Ywwar0RTtpz6WYHQXem7wp
          source_id: s_p4AnTj67EZe3xwEocE3-Wf
          stance: supports
          locator: CBDB：兄弟 王大謨（206615）之父／母 王照
          quotation: null
          interpretation_note: 由兄弟关系推断：王大宗 与 王大謨 为同胞（CBDB 记「弟」），王大謨 之父／母即 王大宗 之父／母。
          source:
            id: s_p4AnTj67EZe3xwEocE3-Wf
            source_type: api_record
            title: 中国历代人物传记资料库：王大宗（CBDB 220575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220575&o=json
            external_identifier: CBDB:220575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AGw7JSRWBPYTLp5VhR36Lo
        status: active
        display_name: 王大宗
        merged_into_person_id: null
    - claim:
        id: c_nnh-g9hpqv5gq8ZYllS6jc
        subject_person_id: p_CZQQ91VfnuK7NuqpB8hoXK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QyEJMmoL51cyqHo6rHvG61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4IPSB5sIxPJTF2GCeHVRQ_
          claim_id: c_nnh-g9hpqv5gq8ZYllS6jc
          source_id: s_Q2PlmVvep8GNp4qZhEO2L8
          stance: supports
          locator: CBDB：兄弟 王大謨（206615）之父／母 王照
          quotation: null
          interpretation_note: 由兄弟关系推断：王大邦 与 王大謨 为同胞（CBDB 记「弟」），王大謨 之父／母即 王大邦 之父／母。
          source:
            id: s_Q2PlmVvep8GNp4qZhEO2L8
            source_type: api_record
            title: 中国历代人物传记资料库：王大邦（CBDB 220574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220574&o=json
            external_identifier: CBDB:220574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QyEJMmoL51cyqHo6rHvG61
        status: active
        display_name: 王大邦
        merged_into_person_id: null
    - claim:
        id: c_JH63R55mcQHaHmn5P0HDKv
        subject_person_id: p_CZQQ91VfnuK7NuqpB8hoXK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bQnRSpmUMJHu5JxAujBFEa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MU7d3gIKvtMZEEFp_AYpgJ
          claim_id: c_JH63R55mcQHaHmn5P0HDKv
          source_id: s_LMyzzto9n0hr1HcB-_K6xc
          stance: supports
          locator: CBDB：兄弟 王大謨（206615）之父／母 王照
          quotation: null
          interpretation_note: 由兄弟关系推断：王大猷 与 王大謨 为同胞（CBDB 记「弟」），王大謨 之父／母即 王大猷 之父／母。
          source:
            id: s_LMyzzto9n0hr1HcB-_K6xc
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 220576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220576&o=json
            external_identifier: CBDB:220576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bQnRSpmUMJHu5JxAujBFEa
        status: active
        display_name: 王大猷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王照 | accepted |
| bio.summary | 王照，明人物。萬曆八年進士，籍贯廣濟。（中国历代人物传记资料库 CBDB 220569） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TxvCUWCPj6wVBqyLV556YD | 王大謨 | accepted |
| children | p_AGw7JSRWBPYTLp5VhR36Lo | 王大宗 | accepted |
| children | p_QyEJMmoL51cyqHo6rHvG61 | 王大邦 | accepted |
| children | p_bQnRSpmUMJHu5JxAujBFEa | 王大猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大邦（CBDB 220574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220574&o=json)
- [中国历代人物传记资料库：王大猷（CBDB 220576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220576&o=json)
- [中国历代人物传记资料库：王大宗（CBDB 220575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220575&o=json)
- [中国历代人物传记资料库：王照（CBDB 220569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220569&o=json)
