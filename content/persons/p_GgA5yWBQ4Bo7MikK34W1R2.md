---
schema: wang-person/v1
id: p_GgA5yWBQ4Bo7MikK34W1R2
status: active
merged_into: null
display_name: 王發桂
cbdb_id: 58624
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_65Rtmfb8RF43AN7Hs1ZF88
        subject_person_id: p_GgA5yWBQ4Bo7MikK34W1R2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發桂（卒于1870年），清人物。明清進士進士，籍贯清苑，入仕進士，曾任查勘東西陵歲修工程大臣、祠祭司員外郎、大臣。（中国历代人物传记资料库 CBDB 58624）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VPpw0xf63e43AKHnsB7GF0
          claim_id: c_65Rtmfb8RF43AN7Hs1ZF88
          source_id: s_sgg916q2bhmB2zvWidAN7Q
          stance: supports
          locator: CBDB:58624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sgg916q2bhmB2zvWidAN7Q
            source_type: api_record
            title: 中国历代人物传记资料库：王發桂（CBDB 58624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58624&o=json
            external_identifier: CBDB:58624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_V7TAH6wg7o6YVmMtomSAQn
        subject_person_id: p_GgA5yWBQ4Bo7MikK34W1R2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1870年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1870-01-01
            latest: 1870-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_18u3XWTPu946A8VxEjqjQS
          claim_id: c_V7TAH6wg7o6YVmMtomSAQn
          source_id: s_sgg916q2bhmB2zvWidAN7Q
          stance: supports
          locator: CBDB:58624
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1870
          source:
            id: s_sgg916q2bhmB2zvWidAN7Q
            source_type: api_record
            title: 中国历代人物传记资料库：王發桂（CBDB 58624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58624&o=json
            external_identifier: CBDB:58624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JQ7yqEnEXehvyNkdt2HFor
        subject_person_id: p_GgA5yWBQ4Bo7MikK34W1R2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oesC8PTBzAvAdAPC84G81c
          claim_id: c_JQ7yqEnEXehvyNkdt2HFor
          source_id: s_sgg916q2bhmB2zvWidAN7Q
          stance: supports
          locator: CBDB:58624
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1870
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_M54GPqgTOH7hPacItnemQK
        subject_person_id: p_GgA5yWBQ4Bo7MikK34W1R2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vDf4KNgP8SQ1AFCjHoMyNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oJ366XmfVMdIVtgJB-4OC0
          claim_id: c_M54GPqgTOH7hPacItnemQK
          source_id: s_sgg916q2bhmB2zvWidAN7Q
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1886：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_sgg916q2bhmB2zvWidAN7Q
            source_type: api_record
            title: 中国历代人物传记资料库：王發桂（CBDB 58624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58624&o=json
            external_identifier: CBDB:58624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vDf4KNgP8SQ1AFCjHoMyNz
        status: active
        display_name: 王本正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4lkd2c6jGZFaMf9sD5h4qt
        subject_person_id: p_s4pJCAjTsoPic4xi2YpMo6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GgA5yWBQ4Bo7MikK34W1R2
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c8LlL8m1ieBRijek1GGOyk
          claim_id: c_4lkd2c6jGZFaMf9sD5h4qt
          source_id: s_sgg916q2bhmB2zvWidAN7Q
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1886：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_s4pJCAjTsoPic4xi2YpMo6
        status: active
        display_name: 王星若
        merged_into_person_id: null
    - claim:
        id: c_F9G5se1IuRZLf3Ctx3xLGL
        subject_person_id: p_PyjKpNJ9DyQHJrcV5qHGjq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GgA5yWBQ4Bo7MikK34W1R2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_waMs0w05GkldJocPPL2I9n
          claim_id: c_F9G5se1IuRZLf3Ctx3xLGL
          source_id: s_sgg916q2bhmB2zvWidAN7Q
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1886：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_PyjKpNJ9DyQHJrcV5qHGjq
        status: active
        display_name: 王履平
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王發桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王發桂（卒于1870年），清人物。明清進士進士，籍贯清苑，入仕進士，曾任查勘東西陵歲修工程大臣、祠祭司員外郎、大臣。（中国历代人物传记资料库 CBDB 58624） | accepted |
| death.date | 1870年 | accepted |
| name.primary | 王發桂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vDf4KNgP8SQ1AFCjHoMyNz | 王本正 | accepted |
| ancestors | p_s4pJCAjTsoPic4xi2YpMo6 | 王星若 | accepted |
| ancestors | p_PyjKpNJ9DyQHJrcV5qHGjq | 王履平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王發桂（CBDB 58624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58624&o=json)
