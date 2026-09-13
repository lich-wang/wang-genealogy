---
schema: wang-person/v1
id: p_CvNcKWE8FdhDeHL9JMF93w
status: active
merged_into: null
display_name: 王胤東
cbdb_id: 217340
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6vBdTQJRg9JMMjX8J1GR5n
        subject_person_id: p_CvNcKWE8FdhDeHL9JMF93w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤東，史料所见人物。本项目依据《中国历代人物传记资料库：王胤東（CBDB 217340）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_1NxT2Q_WWnvH0DW-2osy8O
          claim_id: c_6vBdTQJRg9JMMjX8J1GR5n
          source_id: s_jTRes72L1omYX3PtD2MnYZ
          stance: supports
          locator: CBDB:217340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jTRes72L1omYX3PtD2MnYZ
            source_type: api_record
            title: 中国历代人物传记资料库：王胤東（CBDB 217340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217340&o=json
            external_identifier: CBDB:217340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n7HHeACoU3Dhh53znXoNZB
        subject_person_id: p_CvNcKWE8FdhDeHL9JMF93w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤東
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6o1ExFGdYQXgbFwm3ZMALX
          claim_id: c_n7HHeACoU3Dhh53znXoNZB
          source_id: s_jTRes72L1omYX3PtD2MnYZ
          stance: supports
          locator: CBDB:217340
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__eaor87OGantKdCvMQNqlH
        subject_person_id: p_CvNcKWE8FdhDeHL9JMF93w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vLHvb3BCMGxfLW94457af3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K1KbTdEL97ByZ_kv4a_-RU
          claim_id: c__eaor87OGantKdCvMQNqlH
          source_id: s_jTRes72L1omYX3PtD2MnYZ
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jTRes72L1omYX3PtD2MnYZ
            source_type: api_record
            title: 中国历代人物传记资料库：王胤東（CBDB 217340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217340&o=json
            external_identifier: CBDB:217340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vLHvb3BCMGxfLW94457af3
        status: active
        display_name: 王亮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王胤東

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胤東，史料所见人物。本项目依据《中国历代人物传记资料库：王胤東（CBDB 217340）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王胤東 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vLHvb3BCMGxfLW94457af3 | 王亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王胤東（CBDB 217340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217340&o=json)
