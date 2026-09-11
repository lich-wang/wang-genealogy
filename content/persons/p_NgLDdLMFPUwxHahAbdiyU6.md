---
schema: wang-person/v1
id: p_NgLDdLMFPUwxHahAbdiyU6
status: active
merged_into: null
display_name: 王辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sUFgM6uGijKESA3ASWjgaQ
        subject_person_id: p_NgLDdLMFPUwxHahAbdiyU6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mnfhAF5Kt8ARQc7F7Y16kV
          claim_id: c_sUFgM6uGijKESA3ASWjgaQ
          source_id: s_gAs9MhK8zwRKo76WY2ZSYi
          stance: supports
          locator: CBDB:386174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386174）
          source: &a1
            id: s_gAs9MhK8zwRKo76WY2ZSYi
            source_type: api_record
            title: 中国历代人物传记资料库：王辰（CBDB 386174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386174&o=json
            external_identifier: CBDB:386174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yyRrBFH9vaMJkjBrRDVxdk
        subject_person_id: p_NgLDdLMFPUwxHahAbdiyU6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辰，史料所见人物。本项目依据《中国历代人物传记资料库：王辰（CBDB 386174）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XsPrSFQ0_fS4Hck0El2Mzp
          claim_id: c_yyRrBFH9vaMJkjBrRDVxdk
          source_id: s_gAs9MhK8zwRKo76WY2ZSYi
          stance: supports
          locator: CBDB:386174
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

# 王辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辰 | accepted |
| bio.summary | 王辰，史料所见人物。本项目依据《中国历代人物传记资料库：王辰（CBDB 386174）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辰（CBDB 386174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386174&o=json)
