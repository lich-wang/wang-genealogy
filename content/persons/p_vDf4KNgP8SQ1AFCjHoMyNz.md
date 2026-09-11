---
schema: wang-person/v1
id: p_vDf4KNgP8SQ1AFCjHoMyNz
status: active
merged_into: null
display_name: 王本正
cbdb_id: 517430
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kaxrfuMEo9FQ97M4EJwJZT
        subject_person_id: p_vDf4KNgP8SQ1AFCjHoMyNz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本正，清人物。中国历代人物传记资料库（CBDB）以人物编号 517430 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_WuDKel7SK21i4ItJ_XOIAa
          claim_id: c_kaxrfuMEo9FQ97M4EJwJZT
          source_id: s_AVi47VMorr9oj4Exo2RK5w
          stance: supports
          locator: CBDB:517430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_AVi47VMorr9oj4Exo2RK5w
            source_type: api_record
            title: 中国历代人物传记资料库：王本正（CBDB 517430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517430&o=json
            external_identifier: CBDB:517430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aqUXxQ4km6ENk2peqFNavz
        subject_person_id: p_vDf4KNgP8SQ1AFCjHoMyNz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XPkzxFRB2MH66tcSPHQKTK
          claim_id: c_aqUXxQ4km6ENk2peqFNavz
          source_id: s_AVi47VMorr9oj4Exo2RK5w
          stance: supports
          locator: CBDB:517430
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_AVi47VMorr9oj4Exo2RK5w
            source_type: api_record
            title: 中国历代人物传记资料库：王本正（CBDB 517430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517430&o=json
            external_identifier: CBDB:517430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
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
      object_person:
        id: p_GgA5yWBQ4Bo7MikK34W1R2
        status: active
        display_name: 王發桂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本正，清人物。中国历代人物传记资料库（CBDB）以人物编号 517430 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王本正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GgA5yWBQ4Bo7MikK34W1R2 | 王發桂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本正（CBDB 517430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517430&o=json)
- [中国历代人物传记资料库：王發桂（CBDB 58624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58624&o=json)
