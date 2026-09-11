---
schema: wang-person/v1
id: p_KT4kzUcuEwspr9aGBoBFvF
status: active
merged_into: null
display_name: 王琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FLCGtdc9PdbU2bcq6YEwZZ
        subject_person_id: p_KT4kzUcuEwspr9aGBoBFvF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZWHPXvtKMVxQbVfx8mWYfs
          claim_id: c_FLCGtdc9PdbU2bcq6YEwZZ
          source_id: s_g5GDQTMg3DiKjAuMABApGG
          stance: supports
          locator: CBDB:341971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341971）
          source: &a1
            id: s_g5GDQTMg3DiKjAuMABApGG
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 341971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341971&o=json
            external_identifier: CBDB:341971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PJETgraRPdaHEQM8YABhAh
        subject_person_id: p_KT4kzUcuEwspr9aGBoBFvF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮，明人物。明清進士進士，籍贯麗水，入仕進士。（中国历代人物传记资料库 CBDB 341971）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3VBjwSF2X8D_werELrtPWc
          claim_id: c_PJETgraRPdaHEQM8YABhAh
          source_id: s_g5GDQTMg3DiKjAuMABApGG
          stance: supports
          locator: CBDB:341971
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

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | 王琮，明人物。明清進士進士，籍贯麗水，入仕進士。（中国历代人物传记资料库 CBDB 341971） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 341971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341971&o=json)
