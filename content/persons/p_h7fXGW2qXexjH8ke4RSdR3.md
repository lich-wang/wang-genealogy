---
schema: wang-person/v1
id: p_h7fXGW2qXexjH8ke4RSdR3
status: active
merged_into: null
display_name: 王金
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rA6yAxgCJLgs2GZxF299At
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uunpX1Bw4QsuFGQ8fJyQTL
          claim_id: c_rA6yAxgCJLgs2GZxF299At
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
          stance: supports
          locator: CBDB:201798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201798）
          source: &a1
            id: s_YKx1VJJuWVzR7HUsm6D4ou
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 201798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201798&o=json
            external_identifier: CBDB:201798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2ZDG4CPPKvG438gPvvCd75
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BGgeNpAhPJc83Von4skFmK
          claim_id: c_2ZDG4CPPKvG438gPvvCd75
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z5rzFXgpW431T62TtZ5Ba1
        subject_person_id: p_h7fXGW2qXexjH8ke4RSdR3
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
        - id: cs_RySDnjn3nKaAz5FfzmkhBU
          claim_id: c_Z5rzFXgpW431T62TtZ5Ba1
          source_id: s_YKx1VJJuWVzR7HUsm6D4ou
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
        id: c_sLCjPyTUQClxVYMZsIhe9u
        subject_person_id: p_gMnjRmnoNMq3o2vj1nLE69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IbCqE8xfUW8aqfd4f0nByq
          claim_id: c_sLCjPyTUQClxVYMZsIhe9u
          source_id: s_NQt4EujdCKpuugUvaUmJQS
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NQt4EujdCKpuugUvaUmJQS
            source_type: api_record
            title: 中国历代人物传记资料库：王某華（CBDB 278404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278404&o=json
            external_identifier: CBDB:278404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_gMnjRmnoNMq3o2vj1nLE69
        status: active
        display_name: 王某華
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7FJmuH01dlR5FKuB0fZ7E0
        subject_person_id: p_A4ZBP13BuAWnaxXR4USmkn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bRT7UTIjbeoByz4RNy8z9
          claim_id: c_7FJmuH01dlR5FKuB0fZ7E0
          source_id: s_VG6hzm3AnPqJ1Zs9e6Fr1w
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VG6hzm3AnPqJ1Zs9e6Fr1w
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 278402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278402&o=json
            external_identifier: CBDB:278402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A4ZBP13BuAWnaxXR4USmkn
        status: active
        display_name: 王彬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| birth.date | 1478年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gMnjRmnoNMq3o2vj1nLE69 | 王某華 | accepted |
| ancestors | p_A4ZBP13BuAWnaxXR4USmkn | 王彬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 278402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278402&o=json)
- [中国历代人物传记资料库：王金（CBDB 201798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201798&o=json)
- [中国历代人物传记资料库：王某華（CBDB 278404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278404&o=json)
