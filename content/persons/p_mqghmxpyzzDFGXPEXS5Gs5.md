---
schema: wang-person/v1
id: p_mqghmxpyzzDFGXPEXS5Gs5
status: active
merged_into: null
display_name: 王光祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2hWVyiM8X6q4m2aT96YTby
        subject_person_id: p_mqghmxpyzzDFGXPEXS5Gs5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DBzHJLdWgYM5BcK6xsSF1D
          claim_id: c_2hWVyiM8X6q4m2aT96YTby
          source_id: s_4VwJJbjuAJF58X6Ra58Hvc
          stance: supports
          locator: CBDB:502756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502756）
          source: &a1
            id: s_4VwJJbjuAJF58X6Ra58Hvc
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 502756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502756&o=json
            external_identifier: CBDB:502756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZvZCDFAxsL41iqezW3MuiB
        subject_person_id: p_mqghmxpyzzDFGXPEXS5Gs5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖，宋人物。曾任副總管。（中国历代人物传记资料库 CBDB 502756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sx8fb4WHE7AGgm_V5-7yrt
          claim_id: c_ZvZCDFAxsL41iqezW3MuiB
          source_id: s_4VwJJbjuAJF58X6Ra58Hvc
          stance: supports
          locator: CBDB:502756
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

# 王光祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光祖 | accepted |
| bio.summary | 王光祖，宋人物。曾任副總管。（中国历代人物传记资料库 CBDB 502756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光祖（CBDB 502756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502756&o=json)
