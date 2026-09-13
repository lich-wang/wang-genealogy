---
schema: wang-person/v1
id: p_GuQFsAkukJ9WUs38TCwHMW
status: active
merged_into: null
display_name: 王震午
cbdb_id: 38334
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ztt6evgvmwLqiy2HQf7aN2
        subject_person_id: p_GuQFsAkukJ9WUs38TCwHMW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震午（生于1219年），史料所见人物。本项目依据《中国历代人物传记资料库：王震午（CBDB 38334）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_dEj_GQclGHfYM2-kaBcisY
          claim_id: c_Ztt6evgvmwLqiy2HQf7aN2
          source_id: s_VEJmQ7GgnGDGJV8RFNBpaB
          stance: supports
          locator: CBDB:38334
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VEJmQ7GgnGDGJV8RFNBpaB
            source_type: api_record
            title: 中国历代人物传记资料库：王震午（CBDB 38334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38334&o=json
            external_identifier: CBDB:38334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_87rQr4HDjYhsYYrBFR2u7U
        subject_person_id: p_GuQFsAkukJ9WUs38TCwHMW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1219年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1219-01-01
            latest: 1219-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3zy5BDFxPugvHCHV27M1TH
          claim_id: c_87rQr4HDjYhsYYrBFR2u7U
          source_id: s_VEJmQ7GgnGDGJV8RFNBpaB
          stance: supports
          locator: CBDB:38334
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1219
          source:
            id: s_VEJmQ7GgnGDGJV8RFNBpaB
            source_type: api_record
            title: 中国历代人物传记资料库：王震午（CBDB 38334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38334&o=json
            external_identifier: CBDB:38334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJmYoeM4NCBpiAYb9xTC6y
        subject_person_id: p_GuQFsAkukJ9WUs38TCwHMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震午
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P9zBmDQKv1JPn4aJboepW4
          claim_id: c_HJmYoeM4NCBpiAYb9xTC6y
          source_id: s_VEJmQ7GgnGDGJV8RFNBpaB
          stance: supports
          locator: CBDB:38334
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1219
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_vnv28T4jnHS9KhMTzcBuY4
        subject_person_id: p_eEkn63mYcWKUbsbSjgAwqL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GuQFsAkukJ9WUs38TCwHMW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6yu8ms8vQNPM8snUzv5PqS
          claim_id: c_vnv28T4jnHS9KhMTzcBuY4
          source_id: s_1VYKApJEqsSZnY28cwpmaG
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1VYKApJEqsSZnY28cwpmaG
            source_type: api_record
            title: 中国历代人物传记资料库：王大鈞（CBDB 137957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137957&o=json
            external_identifier: CBDB:137957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eEkn63mYcWKUbsbSjgAwqL
        status: active
        display_name: 王大鈞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王震午

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王震午（生于1219年），史料所见人物。本项目依据《中国历代人物传记资料库：王震午（CBDB 38334）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1219年 | accepted |
| name.primary | 王震午 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_eEkn63mYcWKUbsbSjgAwqL | 王大鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大鈞（CBDB 137957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137957&o=json)
- [中国历代人物传记资料库：王震午（CBDB 38334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38334&o=json)
