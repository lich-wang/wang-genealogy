---
schema: wang-person/v1
id: p_hqm8QJPDYRRDX7Me858AJ1
status: active
merged_into: null
display_name: 王定執
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s5Hu5ptRmTQxnG5eB54iK1
        subject_person_id: p_hqm8QJPDYRRDX7Me858AJ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定執
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uBBZGFfhtNPgDhRHNBKYuS
          claim_id: c_s5Hu5ptRmTQxnG5eB54iK1
          source_id: s_v96yEp85NU7h5Q7CLXM89W
          stance: supports
          locator: CBDB:690302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690302）
          source: &a1
            id: s_v96yEp85NU7h5Q7CLXM89W
            source_type: api_record
            title: 中国历代人物传记资料库：王定執（CBDB 690302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690302&o=json
            external_identifier: CBDB:690302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SJQHP1wvbtD2cLYEytXKju
        subject_person_id: p_hqm8QJPDYRRDX7Me858AJ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKPBu3Xyot9b1PAUYzLg4g
          claim_id: c_SJQHP1wvbtD2cLYEytXKju
          source_id: s_v96yEp85NU7h5Q7CLXM89W
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0WU_493IbHF4DSwYQbxT7x
        subject_person_id: p_hqm8QJPDYRRDX7Me858AJ1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_k2tNkb2j9gtacPUz8v9vJ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LDwRUCZzu6X6HEZL-6EbZV
          claim_id: c_0WU_493IbHF4DSwYQbxT7x
          source_id: s_hr4m_7qbEMZSSDM9OazPzQ
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1164292：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hr4m_7qbEMZSSDM9OazPzQ
            source_type: api_record
            title: 中国历代人物传记资料库：吳修月（CBDB 78485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=78485&o=json
            external_identifier: CBDB:78485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_k2tNkb2j9gtacPUz8v9vJ7
        status: active
        display_name: 吳修月
        merged_into_person_id: null
    - claim:
        id: c_7yHCB9XMPLgTLqLt0Y8SuN
        subject_person_id: p_hqm8QJPDYRRDX7Me858AJ1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eLBHcqULQHp1Y6qsnftguH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pxEIj8qljooUI43flkTACG
          claim_id: c_7yHCB9XMPLgTLqLt0Y8SuN
          source_id: s_G-ByLZHhtLMYC79lurImcq
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1164292：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G-ByLZHhtLMYC79lurImcq
            source_type: api_record
            title: 中国历代人物传记资料库：張慶雲（CBDB 569528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=569528&o=json
            external_identifier: CBDB:569528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eLBHcqULQHp1Y6qsnftguH
        status: active
        display_name: 張慶雲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王定執

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定執 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_k2tNkb2j9gtacPUz8v9vJ7 | 吳修月 | accepted |
| spouses | p_eLBHcqULQHp1Y6qsnftguH | 張慶雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定執（CBDB 690302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690302&o=json)
- [中国历代人物传记资料库：吳修月（CBDB 78485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=78485&o=json)
- [中国历代人物传记资料库：張慶雲（CBDB 569528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=569528&o=json)
