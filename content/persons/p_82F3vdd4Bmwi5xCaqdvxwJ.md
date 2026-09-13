---
schema: wang-person/v1
id: p_82F3vdd4Bmwi5xCaqdvxwJ
status: active
merged_into: null
display_name: 王長生
cbdb_id: 120543
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hMsu5hCNyD3HN3vRa5yays
        subject_person_id: p_82F3vdd4Bmwi5xCaqdvxwJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長生，史料所见人物。本项目依据《中国历代人物传记资料库：王長生（CBDB 120543）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_eh9Vy0zwQxdwh7ZpwR9GOb
          claim_id: c_hMsu5hCNyD3HN3vRa5yays
          source_id: s_SQgc83B3Vr1y5RwSxyRV79
          stance: supports
          locator: CBDB:120543
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_SQgc83B3Vr1y5RwSxyRV79
            source_type: api_record
            title: 中国历代人物传记资料库：王長生（CBDB 120543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120543&o=json
            external_identifier: CBDB:120543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_D9JQmRZo5CeoQUAPo7bT31
        subject_person_id: p_82F3vdd4Bmwi5xCaqdvxwJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_um3pVUbiqC3ARUhnX5oFeK
          claim_id: c_D9JQmRZo5CeoQUAPo7bT31
          source_id: s_SQgc83B3Vr1y5RwSxyRV79
          stance: supports
          locator: CBDB:120543
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
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
  descendants: []
  other: []
---

# 王長生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王長生，史料所见人物。本项目依据《中国历代人物传记资料库：王長生（CBDB 120543）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王長生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長生（CBDB 120543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120543&o=json)
