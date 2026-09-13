---
schema: wang-person/v1
id: p_CTLMD5CjBThvaVgH2JwMnU
status: active
merged_into: null
display_name: 王至卿
cbdb_id: 38729
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4s2HR3m968TrhY9PvCzRun
        subject_person_id: p_CTLMD5CjBThvaVgH2JwMnU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至卿，史料所见人物。本项目依据《中国历代人物传记资料库：王至卿（CBDB 38729）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_2yQ__GC4ct0VGPYjCEvwoZ
          claim_id: c_4s2HR3m968TrhY9PvCzRun
          source_id: s_YkEXC44BLLSJEvC3oYRb5A
          stance: supports
          locator: CBDB:38729
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YkEXC44BLLSJEvC3oYRb5A
            source_type: api_record
            title: 中国历代人物传记资料库：王至卿（CBDB 38729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38729&o=json
            external_identifier: CBDB:38729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJ5NJG8aG9QXm4Leqx6tR6
        subject_person_id: p_CTLMD5CjBThvaVgH2JwMnU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wdq3nN5ZFzcZ3AtFDTw1R8
          claim_id: c_GJ5NJG8aG9QXm4Leqx6tR6
          source_id: s_YkEXC44BLLSJEvC3oYRb5A
          stance: supports
          locator: CBDB:38729
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
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

# 王至卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王至卿，史料所见人物。本项目依据《中国历代人物传记资料库：王至卿（CBDB 38729）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王至卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王至卿（CBDB 38729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38729&o=json)
