---
schema: wang-person/v1
id: p_VurubLfej93zNZ3XBXwptM
status: active
merged_into: null
display_name: 王繼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ycaKS5HjVYrajS2HzTyh79
        subject_person_id: p_VurubLfej93zNZ3XBXwptM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SJSgxQaaZTB3XFFYjCZSFw
          claim_id: c_ycaKS5HjVYrajS2HzTyh79
          source_id: s_WCo4iDS3JtwKvPDGkzQ7rL
          stance: supports
          locator: CBDB:479865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479865）
          source: &a1
            id: s_WCo4iDS3JtwKvPDGkzQ7rL
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 479865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479865&o=json
            external_identifier: CBDB:479865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cgTdBRNVt1mAEDyB98yQYR
        subject_person_id: p_VurubLfej93zNZ3XBXwptM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼，明人物。曾任按察使。（中国历代人物传记资料库 CBDB 479865）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tb61qNvjtwCedJaYUtJVtF
          claim_id: c_cgTdBRNVt1mAEDyB98yQYR
          source_id: s_WCo4iDS3JtwKvPDGkzQ7rL
          stance: supports
          locator: CBDB:479865
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

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| bio.summary | 王繼，明人物。曾任按察使。（中国历代人物传记资料库 CBDB 479865） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 479865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479865&o=json)
