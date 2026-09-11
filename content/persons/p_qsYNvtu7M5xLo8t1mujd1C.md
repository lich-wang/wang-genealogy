---
schema: wang-person/v1
id: p_qsYNvtu7M5xLo8t1mujd1C
status: active
merged_into: null
display_name: 王乾祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qhjBt7fDKqg9ZAwnToQDsz
        subject_person_id: p_qsYNvtu7M5xLo8t1mujd1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4XpYEiz8rmSevNpJ9yyFEe
          claim_id: c_qhjBt7fDKqg9ZAwnToQDsz
          source_id: s_RnEnuQAf3JoCDRPT64vFKX
          stance: supports
          locator: CBDB:38111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38111）
          source: &a1
            id: s_RnEnuQAf3JoCDRPT64vFKX
            source_type: api_record
            title: 中国历代人物传记资料库：王乾祐（CBDB 38111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38111&o=json
            external_identifier: CBDB:38111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oC6jS2pdboGn4UTBJkv9JQ
        subject_person_id: p_qsYNvtu7M5xLo8t1mujd1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾祐，宋人物。曾任太子中舍人。（中国历代人物传记资料库 CBDB 38111）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xxoUjXrNl4vuW87rwy1H5D
          claim_id: c_oC6jS2pdboGn4UTBJkv9JQ
          source_id: s_RnEnuQAf3JoCDRPT64vFKX
          stance: supports
          locator: CBDB:38111
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

# 王乾祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾祐 | accepted |
| bio.summary | 王乾祐，宋人物。曾任太子中舍人。（中国历代人物传记资料库 CBDB 38111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乾祐（CBDB 38111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38111&o=json)
