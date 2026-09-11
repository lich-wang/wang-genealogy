---
schema: wang-person/v1
id: p_A3zh972uDPeLXCx3JBFJww
status: active
merged_into: null
display_name: 王麟書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BeiKUgG1NWqgEdAV9qU3BN
        subject_person_id: p_A3zh972uDPeLXCx3JBFJww
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFGttoW81m4rGk77gQq4pK
          claim_id: c_BeiKUgG1NWqgEdAV9qU3BN
          source_id: s_9UBj5Tdxbsag88v94ZvPMj
          stance: supports
          locator: CBDB:72223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72223）
          source: &a1
            id: s_9UBj5Tdxbsag88v94ZvPMj
            source_type: api_record
            title: 中国历代人物传记资料库：王麟書（CBDB 72223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72223&o=json
            external_identifier: CBDB:72223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wBq3PxjT9CEogEDh5LLtJQ
        subject_person_id: p_A3zh972uDPeLXCx3JBFJww
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1828年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SVfLxmg5XPpLAhqSC1P6Vv
          claim_id: c_wBq3PxjT9CEogEDh5LLtJQ
          source_id: s_9UBj5Tdxbsag88v94ZvPMj
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
        id: c_7x6iEYLw64AomykcoBrzB8
        subject_person_id: p_A3zh972uDPeLXCx3JBFJww
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1887年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8nVEMPfF88tZxAx69jgJw
          claim_id: c_7x6iEYLw64AomykcoBrzB8
          source_id: s_9UBj5Tdxbsag88v94ZvPMj
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
        id: c_FUkvCA6StNcucaNsgKCj2G
        subject_person_id: p_A3zh972uDPeLXCx3JBFJww
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟書（1828年—1887年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 72223）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7TfJ7rM09OqkdNWvQv_dUk
          claim_id: c_FUkvCA6StNcucaNsgKCj2G
          source_id: s_9UBj5Tdxbsag88v94ZvPMj
          stance: supports
          locator: CBDB:72223
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王麟書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟書 | accepted |
| birth.date | 1828年 | accepted |
| death.date | 1887年 | accepted |
| bio.summary | 王麟書（1828年—1887年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 72223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟書（CBDB 72223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72223&o=json)
