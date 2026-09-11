---
schema: wang-person/v1
id: p_dACwgZwbNR1ZJ5Htbc7g4U
status: active
merged_into: null
display_name: 王義仙
cbdb_id: 158750
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hDPsQxjH71vMKu34zYgsBr
        subject_person_id: p_dACwgZwbNR1ZJ5Htbc7g4U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義仙，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158750 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_CS-IXXO4FaDTCmC1Jm_qA9
          claim_id: c_hDPsQxjH71vMKu34zYgsBr
          source_id: s_rqeecvYaztuXJ5tPCWegf7
          stance: supports
          locator: CBDB:158750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_rqeecvYaztuXJ5tPCWegf7
            source_type: api_record
            title: 中国历代人物传记资料库：王義仙（CBDB 158750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158750&o=json
            external_identifier: CBDB:158750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HEvZ63nZHadk3pdG5P8M23
        subject_person_id: p_dACwgZwbNR1ZJ5Htbc7g4U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tidgcKm3szD77tMLuJ2xSs
          claim_id: c_HEvZ63nZHadk3pdG5P8M23
          source_id: s_rqeecvYaztuXJ5tPCWegf7
          stance: supports
          locator: CBDB:158750
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_rqeecvYaztuXJ5tPCWegf7
            source_type: api_record
            title: 中国历代人物传记资料库：王義仙（CBDB 158750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158750&o=json
            external_identifier: CBDB:158750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8UlfM8qardKKR3lpwH3mwf
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dACwgZwbNR1ZJ5Htbc7g4U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zVs55QLiUgJI4dcOUMxmts
          claim_id: c_8UlfM8qardKKR3lpwH3mwf
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SQTm9bfti1Cf4E7AWrBph
            source_type: api_record
            title: 中国历代人物传记资料库：王文幹（CBDB 141823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json
            external_identifier: CBDB:141823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xT91PgYZaQ28ZWS5H1F1Pb
        status: active
        display_name: 王文幹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王義仙，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158750 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王義仙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xT91PgYZaQ28ZWS5H1F1Pb | 王文幹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文幹（CBDB 141823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json)
- [中国历代人物传记资料库：王義仙（CBDB 158750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158750&o=json)
