---
schema: wang-person/v1
id: p_sEJMDf7MZN7v8Q7KLE5kKK
status: active
merged_into: null
display_name: 王煦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_opcBqww6UbHdk3FEBPRDZL
        subject_person_id: p_sEJMDf7MZN7v8Q7KLE5kKK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_34Ser95qPjdAPVKp3G359x
          claim_id: c_opcBqww6UbHdk3FEBPRDZL
          source_id: s_J715DTxEYqkgschUPPP4Ls
          stance: supports
          locator: CBDB:551676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551676）
          source: &a1
            id: s_J715DTxEYqkgschUPPP4Ls
            source_type: api_record
            title: 中国历代人物传记资料库：王煦（CBDB 551676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551676&o=json
            external_identifier: CBDB:551676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kSvz7wRLoJryB1FNFXc4mq
        subject_person_id: p_sEJMDf7MZN7v8Q7KLE5kKK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1296年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSvEkJU9yqfMNn22K632VU
          claim_id: c_kSvz7wRLoJryB1FNFXc4mq
          source_id: s_J715DTxEYqkgschUPPP4Ls
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_q63ToQLHFdVkSBXLR2CRRp
        subject_person_id: p_sEJMDf7MZN7v8Q7KLE5kKK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1349年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E3U1ZQtwpZvLazs9XjLBSi
          claim_id: c_q63ToQLHFdVkSBXLR2CRRp
          source_id: s_J715DTxEYqkgschUPPP4Ls
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
        id: c_Hd8VWzPQ75rEeyAJZSfyAJ
        subject_person_id: p_sEJMDf7MZN7v8Q7KLE5kKK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦（1296年—1349年），史料所见人物。本项目依据《中国历代人物传记资料库：王煦（CBDB 551676）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S5cRODSq-xJ91Bqb3avfMH
          claim_id: c_Hd8VWzPQ75rEeyAJZSfyAJ
          source_id: s_J715DTxEYqkgschUPPP4Ls
          stance: supports
          locator: CBDB:551676
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

# 王煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煦 | accepted |
| birth.date | 1296年 | accepted |
| death.date | 1349年 | accepted |
| bio.summary | 王煦（1296年—1349年），史料所见人物。本项目依据《中国历代人物传记资料库：王煦（CBDB 551676）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煦（CBDB 551676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551676&o=json)
