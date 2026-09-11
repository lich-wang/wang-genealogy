---
schema: wang-person/v1
id: p_ATUD83UALiA71wZ7nEBUi2
status: active
merged_into: null
display_name: 王會圖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GCHujATYXXkKWQxiFAGJL3
        subject_person_id: p_ATUD83UALiA71wZ7nEBUi2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c5jhP4xo5MMMJbY2Fy4h29
          claim_id: c_GCHujATYXXkKWQxiFAGJL3
          source_id: s_Y8p4VBN5t3TpANaZiLDDGk
          stance: supports
          locator: CBDB:329992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329992）
          source: &a1
            id: s_Y8p4VBN5t3TpANaZiLDDGk
            source_type: api_record
            title: 中国历代人物传记资料库：王會圖（CBDB 329992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329992&o=json
            external_identifier: CBDB:329992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cF5GzNw97DRwniKNAPMdiA
        subject_person_id: p_ATUD83UALiA71wZ7nEBUi2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會圖，明人物。嘉靖四十四年進士，籍贯定遠，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 329992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RL4e1W-adlr8_lWtI4VPJ7
          claim_id: c_cF5GzNw97DRwniKNAPMdiA
          source_id: s_Y8p4VBN5t3TpANaZiLDDGk
          stance: supports
          locator: CBDB:329992
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

# 王會圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會圖 | accepted |
| bio.summary | 王會圖，明人物。嘉靖四十四年進士，籍贯定遠，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 329992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會圖（CBDB 329992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329992&o=json)
