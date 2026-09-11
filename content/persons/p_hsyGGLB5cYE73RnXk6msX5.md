---
schema: wang-person/v1
id: p_hsyGGLB5cYE73RnXk6msX5
status: active
merged_into: null
display_name: 王居仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B7vNZswebdAGzG5WzqCcWM
        subject_person_id: p_hsyGGLB5cYE73RnXk6msX5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RYydA3NN69zYX3XgLtpW71
          claim_id: c_B7vNZswebdAGzG5WzqCcWM
          source_id: s_mwj7BthChGBZ343QbC6CVk
          stance: supports
          locator: CBDB:101238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101238）
          source: &a1
            id: s_mwj7BthChGBZ343QbC6CVk
            source_type: api_record
            title: 中国历代人物传记资料库：王居仁（CBDB 101238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101238&o=json
            external_identifier: CBDB:101238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_js9rFxceifuKPkrB5tY4MN
        subject_person_id: p_hsyGGLB5cYE73RnXk6msX5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居仁，元人物。籍贯河間路。（中国历代人物传记资料库 CBDB 101238）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__fp_uuf3GU6ig3LisexkiE
          claim_id: c_js9rFxceifuKPkrB5tY4MN
          source_id: s_mwj7BthChGBZ343QbC6CVk
          stance: supports
          locator: CBDB:101238
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

# 王居仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居仁 | accepted |
| bio.summary | 王居仁，元人物。籍贯河間路。（中国历代人物传记资料库 CBDB 101238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居仁（CBDB 101238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101238&o=json)
