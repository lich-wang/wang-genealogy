---
schema: wang-person/v1
id: p_6hVpVebN2X9FnkfC1qzEEz
status: active
merged_into: null
display_name: 王封權
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9LztBYwEXG1hWWxpJrWuyo
        subject_person_id: p_6hVpVebN2X9FnkfC1qzEEz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王封權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6CdZWN2G6fTDbnXzhGTk4V
          claim_id: c_9LztBYwEXG1hWWxpJrWuyo
          source_id: s_qhPRjqX342HPk4ArUCPsWW
          stance: supports
          locator: CBDB:574252
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574252）
          source: &a1
            id: s_qhPRjqX342HPk4ArUCPsWW
            source_type: api_record
            title: 中国历代人物传记资料库：王封權（CBDB 574252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574252&o=json
            external_identifier: CBDB:574252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jSc9sECM9VDSVm65F3s2Zz
        subject_person_id: p_6hVpVebN2X9FnkfC1qzEEz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王封權，清人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 574252）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FB6IBwY7UGQVtdxQtQhavi
          claim_id: c_jSc9sECM9VDSVm65F3s2Zz
          source_id: s_qhPRjqX342HPk4ArUCPsWW
          stance: supports
          locator: CBDB:574252
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

# 王封權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王封權 | accepted |
| bio.summary | 王封權，清人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 574252） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王封權（CBDB 574252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574252&o=json)
