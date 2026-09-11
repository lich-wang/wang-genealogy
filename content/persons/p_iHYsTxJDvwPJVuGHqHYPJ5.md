---
schema: wang-person/v1
id: p_iHYsTxJDvwPJVuGHqHYPJ5
status: active
merged_into: null
display_name: 王珬
cbdb_id: 70070
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9FzAAV8ovhvrB6Tb6vnXz7
        subject_person_id: p_iHYsTxJDvwPJVuGHqHYPJ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珬，清人物。中国历代人物传记资料库（CBDB）以人物编号 70070 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_XHVtYHzTGjoOYPVxpbj05m
          claim_id: c_9FzAAV8ovhvrB6Tb6vnXz7
          source_id: s_5gakfZWJPB6opeyqTrp9Bm
          stance: supports
          locator: CBDB:70070
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_5gakfZWJPB6opeyqTrp9Bm
            source_type: api_record
            title: 中国历代人物传记资料库：王珬（CBDB 70070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70070&o=json
            external_identifier: CBDB:70070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fy49SFRJ6ujvgkh2vdH82z
        subject_person_id: p_iHYsTxJDvwPJVuGHqHYPJ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mv1dzEm9ahcsNFnHjFD964
          claim_id: c_Fy49SFRJ6ujvgkh2vdH82z
          source_id: s_5gakfZWJPB6opeyqTrp9Bm
          stance: supports
          locator: CBDB:70070
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_5gakfZWJPB6opeyqTrp9Bm
            source_type: api_record
            title: 中国历代人物传记资料库：王珬（CBDB 70070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70070&o=json
            external_identifier: CBDB:70070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2crjKOMFC9bPzcXnEoy4ST
        subject_person_id: p_iHYsTxJDvwPJVuGHqHYPJ5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tvv54AegXaTEPSDVc3cu9J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sHLG15HDMZUa1V0BxNUmrM
          claim_id: c_2crjKOMFC9bPzcXnEoy4ST
          source_id: s_owuIN9MRmc41fa1vWz63Sl
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1268：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_owuIN9MRmc41fa1vWz63Sl
            source_type: api_record
            title: 中国历代人物传记资料库：沈關關（CBDB 70069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70069&o=json
            external_identifier: CBDB:70069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tvv54AegXaTEPSDVc3cu9J
        status: active
        display_name: 沈關關
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王珬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珬，清人物。中国历代人物传记资料库（CBDB）以人物编号 70070 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王珬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_tvv54AegXaTEPSDVc3cu9J | 沈關關 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈關關（CBDB 70069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70069&o=json)
- [中国历代人物传记资料库：王珬（CBDB 70070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70070&o=json)
