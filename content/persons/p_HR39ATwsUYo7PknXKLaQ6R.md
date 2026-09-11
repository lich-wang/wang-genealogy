---
schema: wang-person/v1
id: p_HR39ATwsUYo7PknXKLaQ6R
status: active
merged_into: null
display_name: 王珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLEtnZRc1q4X9NbXQQ63MA
        subject_person_id: p_HR39ATwsUYo7PknXKLaQ6R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CGeGuTw78PHWgmEWd12cgs
          claim_id: c_aLEtnZRc1q4X9NbXQQ63MA
          source_id: s_5quMw7jWD9A5351Uw55cU9
          stance: supports
          locator: CBDB:148675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148675）
          source: &a1
            id: s_5quMw7jWD9A5351Uw55cU9
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 148675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148675&o=json
            external_identifier: CBDB:148675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JyC2c7fosbXeVKDAuj7NwY
        subject_person_id: p_HR39ATwsUYo7PknXKLaQ6R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍，唐人物。籍贯北市。（中国历代人物传记资料库 CBDB 148675）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_REthCtj0fumG4rbCxbRoMP
          claim_id: c_JyC2c7fosbXeVKDAuj7NwY
          source_id: s_5quMw7jWD9A5351Uw55cU9
          stance: supports
          locator: CBDB:148675
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

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | 王珍，唐人物。籍贯北市。（中国历代人物传记资料库 CBDB 148675） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珍（CBDB 148675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148675&o=json)
