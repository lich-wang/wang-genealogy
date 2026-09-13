---
schema: wang-person/v1
id: p_mTBJ2X7pVJNNipQjLFjpMJ
status: active
merged_into: null
display_name: 王真壽
cbdb_id: 268956
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zq228jTkHm5L9oacuz5zmy
        subject_person_id: p_mTBJ2X7pVJNNipQjLFjpMJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真壽，史料所见人物。本项目依据《中国历代人物传记资料库：王真壽（CBDB 268956）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_xlPDNddo_c1Hk2GH1RGkWh
          claim_id: c_zq228jTkHm5L9oacuz5zmy
          source_id: s_5TKCGANAiTSnhY9nrmPaDu
          stance: supports
          locator: CBDB:268956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5TKCGANAiTSnhY9nrmPaDu
            source_type: api_record
            title: 中国历代人物传记资料库：王真壽（CBDB 268956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268956&o=json
            external_identifier: CBDB:268956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mrrkNQvE7UXhBQJGx1pWp8
        subject_person_id: p_mTBJ2X7pVJNNipQjLFjpMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_79s2mBQQ94zsZ7rAz2TBpy
          claim_id: c_mrrkNQvE7UXhBQJGx1pWp8
          source_id: s_5TKCGANAiTSnhY9nrmPaDu
          stance: supports
          locator: CBDB:268956
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
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
        id: c_UkWmq1QMWZ_jD8o6Hw3h1h
        subject_person_id: p_mTBJ2X7pVJNNipQjLFjpMJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aE8BJNQJMvShc1BQ8KJMip
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y_9IO6_uwJH7OPHIaGFZRD
          claim_id: c_UkWmq1QMWZ_jD8o6Hw3h1h
          source_id: s_5TKCGANAiTSnhY9nrmPaDu
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5TKCGANAiTSnhY9nrmPaDu
            source_type: api_record
            title: 中国历代人物传记资料库：王真壽（CBDB 268956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268956&o=json
            external_identifier: CBDB:268956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aE8BJNQJMvShc1BQ8KJMip
        status: active
        display_name: 王士昭
        merged_into_person_id: null
  other: []
---

# 王真壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王真壽，史料所见人物。本项目依据《中国历代人物传记资料库：王真壽（CBDB 268956）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王真壽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aE8BJNQJMvShc1BQ8KJMip | 王士昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王真壽（CBDB 268956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268956&o=json)
