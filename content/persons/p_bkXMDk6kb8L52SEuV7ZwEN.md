---
schema: wang-person/v1
id: p_bkXMDk6kb8L52SEuV7ZwEN
status: active
merged_into: null
display_name: 王惟月
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HAE5abpCZA2dcCjHneuuBC
        subject_person_id: p_bkXMDk6kb8L52SEuV7ZwEN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟月
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7b34MGQhtbqqaLYzRFkZVA
          claim_id: c_HAE5abpCZA2dcCjHneuuBC
          source_id: s_MXWBhGWenR9Bw35gBRgL8y
          stance: supports
          locator: CBDB:534532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534532）
          source: &a1
            id: s_MXWBhGWenR9Bw35gBRgL8y
            source_type: api_record
            title: 中国历代人物传记资料库：王惟月（CBDB 534532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534532&o=json
            external_identifier: CBDB:534532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z45o7C4kfP5dTQyz2ySYQA
        subject_person_id: p_bkXMDk6kb8L52SEuV7ZwEN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_436jb2Br5X3ZqVQYxzePrr
          claim_id: c_Z45o7C4kfP5dTQyz2ySYQA
          source_id: s_MXWBhGWenR9Bw35gBRgL8y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王惟月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟月 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟月（CBDB 534532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534532&o=json)
