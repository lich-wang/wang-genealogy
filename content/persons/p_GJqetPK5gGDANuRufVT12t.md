---
schema: wang-person/v1
id: p_GJqetPK5gGDANuRufVT12t
status: active
merged_into: null
display_name: 王道高
cbdb_id: 321164
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4wS8D4TTDcZN3tmXZD6PvF
        subject_person_id: p_GJqetPK5gGDANuRufVT12t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道高，史料所见人物。本项目依据《中国历代人物传记资料库：王道高（CBDB 321164）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_IRA7Fd0ttaWUYT88_OKXrd
          claim_id: c_4wS8D4TTDcZN3tmXZD6PvF
          source_id: s_kjGmaLkTSmu4q4dt8geNW9
          stance: supports
          locator: CBDB:321164
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_kjGmaLkTSmu4q4dt8geNW9
            source_type: api_record
            title: 中国历代人物传记资料库：王道高（CBDB 321164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321164&o=json
            external_identifier: CBDB:321164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7D37T1kSd3FHGdKoGeQvyu
        subject_person_id: p_GJqetPK5gGDANuRufVT12t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bpPK3V4NaGHvGC9yVrr3SP
          claim_id: c_7D37T1kSd3FHGdKoGeQvyu
          source_id: s_kjGmaLkTSmu4q4dt8geNW9
          stance: supports
          locator: CBDB:321164
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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

# 王道高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道高，史料所见人物。本项目依据《中国历代人物传记资料库：王道高（CBDB 321164）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王道高 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道高（CBDB 321164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321164&o=json)
