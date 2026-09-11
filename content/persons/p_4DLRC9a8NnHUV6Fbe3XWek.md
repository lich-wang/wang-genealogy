---
schema: wang-person/v1
id: p_4DLRC9a8NnHUV6Fbe3XWek
status: active
merged_into: null
display_name: 王琫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Dq321WrevoDEESPGDhQQ5
        subject_person_id: p_4DLRC9a8NnHUV6Fbe3XWek
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5T2MvsN6tF4cRP3mwbupsc
          claim_id: c_2Dq321WrevoDEESPGDhQQ5
          source_id: s_cky4LvHwWUP2r8kFHSMQk8
          stance: supports
          locator: CBDB:186200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186200）
          source: &a1
            id: s_cky4LvHwWUP2r8kFHSMQk8
            source_type: api_record
            title: 中国历代人物传记资料库：王琫（CBDB 186200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186200&o=json
            external_identifier: CBDB:186200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_J7pZmYBPfQDiKcweo8CcUP
        subject_person_id: p_4DLRC9a8NnHUV6Fbe3XWek
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 891年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78M53zDh1cbiT65Wcm3Kfx
          claim_id: c_J7pZmYBPfQDiKcweo8CcUP
          source_id: s_cky4LvHwWUP2r8kFHSMQk8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yb1L1uQB6GVKKVkDfpNzXo
        subject_person_id: p_4DLRC9a8NnHUV6Fbe3XWek
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琫（卒于891年），史料所见人物。本项目依据《中国历代人物传记资料库：王琫（CBDB 186200）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mbXpMoMI5WEk-bmL8km8cy
          claim_id: c_Yb1L1uQB6GVKKVkDfpNzXo
          source_id: s_cky4LvHwWUP2r8kFHSMQk8
          stance: supports
          locator: CBDB:186200
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王琫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琫 | accepted |
| death.date | 891年 | accepted |
| bio.summary | 王琫（卒于891年），史料所见人物。本项目依据《中国历代人物传记资料库：王琫（CBDB 186200）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琫（CBDB 186200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186200&o=json)
