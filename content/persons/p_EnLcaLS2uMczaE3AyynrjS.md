---
schema: wang-person/v1
id: p_EnLcaLS2uMczaE3AyynrjS
status: active
merged_into: null
display_name: 王雲鷟
cbdb_id: 210683
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XHavP6jYn9HMGv4xryp34G
        subject_person_id: p_EnLcaLS2uMczaE3AyynrjS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鷟，史料所见人物。本项目依据《中国历代人物传记资料库：王雲鷟（CBDB 210683）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_nviV6KMnafCiU2FycFAVUW
          claim_id: c_XHavP6jYn9HMGv4xryp34G
          source_id: s_A24eYe1YkqX5tQey84wLnq
          stance: supports
          locator: CBDB:210683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_A24eYe1YkqX5tQey84wLnq
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷟（CBDB 210683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210683&o=json
            external_identifier: CBDB:210683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_knmbwMkU8ZwRCK4vKof1jH
        subject_person_id: p_EnLcaLS2uMczaE3AyynrjS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鷟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JiGPdHkJU715BeGYjXixFc
          claim_id: c_knmbwMkU8ZwRCK4vKof1jH
          source_id: s_A24eYe1YkqX5tQey84wLnq
          stance: supports
          locator: CBDB:210683
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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

# 王雲鷟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雲鷟，史料所见人物。本项目依据《中国历代人物传记资料库：王雲鷟（CBDB 210683）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王雲鷟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲鷟（CBDB 210683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210683&o=json)
