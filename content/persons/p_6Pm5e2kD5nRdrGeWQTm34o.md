---
schema: wang-person/v1
id: p_6Pm5e2kD5nRdrGeWQTm34o
status: active
merged_into: null
display_name: 王啟綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ct3Gm6G9ej1Wh2Ma5B68c7
        subject_person_id: p_6Pm5e2kD5nRdrGeWQTm34o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LaNX13iDAS5JYTFQkSuNGy
          claim_id: c_Ct3Gm6G9ej1Wh2Ma5B68c7
          source_id: s_PEEUMscesZbzK7snAWrP4t
          stance: supports
          locator: CBDB:71716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71716）
          source: &a1
            id: s_PEEUMscesZbzK7snAWrP4t
            source_type: api_record
            title: 中国历代人物传记资料库：王啟綸（CBDB 71716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71716&o=json
            external_identifier: CBDB:71716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fJcRcVmdmroZ4gW5LwWQKS
        subject_person_id: p_6Pm5e2kD5nRdrGeWQTm34o
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLsyB2ZeaX7gqimMVpLUS1
          claim_id: c_fJcRcVmdmroZ4gW5LwWQKS
          source_id: s_PEEUMscesZbzK7snAWrP4t
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o7ciLPa8FrKqru6jBH4o58
        subject_person_id: p_6Pm5e2kD5nRdrGeWQTm34o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟綸（生于1832年），清人物。籍贯祥符。（中国历代人物传记资料库 CBDB 71716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KzhHjPG7FZLMFh3w3SJv-s
          claim_id: c_o7ciLPa8FrKqru6jBH4o58
          source_id: s_PEEUMscesZbzK7snAWrP4t
          stance: supports
          locator: CBDB:71716
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

# 王啟綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟綸 | accepted |
| birth.date | 1832年 | accepted |
| bio.summary | 王啟綸（生于1832年），清人物。籍贯祥符。（中国历代人物传记资料库 CBDB 71716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟綸（CBDB 71716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71716&o=json)
