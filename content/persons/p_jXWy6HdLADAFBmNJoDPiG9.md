---
schema: wang-person/v1
id: p_jXWy6HdLADAFBmNJoDPiG9
status: active
merged_into: null
display_name: 王挺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7kjc2x5TiQjiveb5c4M7Au
        subject_person_id: p_jXWy6HdLADAFBmNJoDPiG9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PW9pLrDoHbr9na4CVrQLfN
          claim_id: c_7kjc2x5TiQjiveb5c4M7Au
          source_id: s_nsLgbguWQGdd26q9mxLMZE
          stance: supports
          locator: CBDB:71128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71128）
          source: &a1
            id: s_nsLgbguWQGdd26q9mxLMZE
            source_type: api_record
            title: 中国历代人物传记资料库：王挺（CBDB 71128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71128&o=json
            external_identifier: CBDB:71128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NUoZwBDbwuXj75DDMDUAfi
        subject_person_id: p_jXWy6HdLADAFBmNJoDPiG9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1619年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oiuPcr1CDcjJuVMFSCTVpC
          claim_id: c_NUoZwBDbwuXj75DDMDUAfi
          source_id: s_nsLgbguWQGdd26q9mxLMZE
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
        id: c_DkXzksxkMkxLo24PFk9iX3
        subject_person_id: p_jXWy6HdLADAFBmNJoDPiG9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1677年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xo3DfJYqW7ezrvFExyxt71
          claim_id: c_DkXzksxkMkxLo24PFk9iX3
          source_id: s_nsLgbguWQGdd26q9mxLMZE
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
        id: c_VZUqK5K43zmrZ9TvBmpzdm
        subject_person_id: p_jXWy6HdLADAFBmNJoDPiG9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王挺（1619年—1677年），史料所见人物。本项目依据《中国历代人物传记资料库：王挺（CBDB 71128）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E5kRBIHNkCBsJw-Fv9U7YQ
          claim_id: c_VZUqK5K43zmrZ9TvBmpzdm
          source_id: s_nsLgbguWQGdd26q9mxLMZE
          stance: supports
          locator: CBDB:71128
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

# 王挺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王挺 | accepted |
| birth.date | 1619年 | accepted |
| death.date | 1677年 | accepted |
| bio.summary | 王挺（1619年—1677年），史料所见人物。本项目依据《中国历代人物传记资料库：王挺（CBDB 71128）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王挺（CBDB 71128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71128&o=json)
