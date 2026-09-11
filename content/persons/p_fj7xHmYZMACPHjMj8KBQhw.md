---
schema: wang-person/v1
id: p_fj7xHmYZMACPHjMj8KBQhw
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_19yF1vgG5EMUnxSRkE6iRz
        subject_person_id: p_fj7xHmYZMACPHjMj8KBQhw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ajDBSdLnAmPTJe5hF6KQtA
          claim_id: c_19yF1vgG5EMUnxSRkE6iRz
          source_id: s_qa6teXg7bJyZTbYLCV4CeK
          stance: supports
          locator: CBDB:472656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472656）
          source: &a1
            id: s_qa6teXg7bJyZTbYLCV4CeK
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 472656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472656&o=json
            external_identifier: CBDB:472656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XrrSaytgbNQmBx1ajmr213
        subject_person_id: p_fj7xHmYZMACPHjMj8KBQhw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，清人物。曾任右營遊擊。（中国历代人物传记资料库 CBDB 472656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xBsLl_pWDalVacJdVqLPyo
          claim_id: c_XrrSaytgbNQmBx1ajmr213
          source_id: s_qa6teXg7bJyZTbYLCV4CeK
          stance: supports
          locator: CBDB:472656
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，清人物。曾任右營遊擊。（中国历代人物传记资料库 CBDB 472656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 472656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472656&o=json)
