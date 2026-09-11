---
schema: wang-person/v1
id: p_TfRE2PtormURx9X7QK28D9
status: active
merged_into: null
display_name: 王其智
cbdb_id: 277147
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2cL84hPDQ7LheGMKwuTn5j
        subject_person_id: p_TfRE2PtormURx9X7QK28D9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其智，明人物。中国历代人物传记资料库（CBDB）以人物编号 277147 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_V_qs2w0TugijtdELlm-DXr
          claim_id: c_2cL84hPDQ7LheGMKwuTn5j
          source_id: s_3xRFVMjB6PDLWw7P1ZcQkG
          stance: supports
          locator: CBDB:277147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_3xRFVMjB6PDLWw7P1ZcQkG
            source_type: api_record
            title: 中国历代人物传记资料库：王其智（CBDB 277147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277147&o=json
            external_identifier: CBDB:277147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kMBww5VuX5TdjuDukNpAGn
        subject_person_id: p_TfRE2PtormURx9X7QK28D9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RFoH6BLvwdH2P7m3m3VZWk
          claim_id: c_kMBww5VuX5TdjuDukNpAGn
          source_id: s_3xRFVMjB6PDLWw7P1ZcQkG
          stance: supports
          locator: CBDB:277147
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_3xRFVMjB6PDLWw7P1ZcQkG
            source_type: api_record
            title: 中国历代人物传记资料库：王其智（CBDB 277147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277147&o=json
            external_identifier: CBDB:277147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_L3Szoteuekgnbu942viFdJ
        subject_person_id: p_TfRE2PtormURx9X7QK28D9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F0bO--VZbZrxUlO8lJqpb3
          claim_id: c_L3Szoteuekgnbu942viFdJ
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kekNW4qJqBQs88vjAxByMp
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json
            external_identifier: CBDB:201722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D2oNcSP9ujVXCgNLvsNQq7
        status: active
        display_name: 王璽
        merged_into_person_id: null
  other: []
---

# 王其智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王其智，明人物。中国历代人物传记资料库（CBDB）以人物编号 277147 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王其智 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_D2oNcSP9ujVXCgNLvsNQq7 | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王其智（CBDB 277147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277147&o=json)
- [中国历代人物传记资料库：王璽（CBDB 201722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json)
