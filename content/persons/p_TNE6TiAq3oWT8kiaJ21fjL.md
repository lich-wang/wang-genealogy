---
schema: wang-person/v1
id: p_TNE6TiAq3oWT8kiaJ21fjL
status: active
merged_into: null
display_name: 王安民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C7EJBMyApDW6JZP1GfuiVE
        subject_person_id: p_TNE6TiAq3oWT8kiaJ21fjL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t26KM8ZrUXBs33XDKwdz2y
          claim_id: c_C7EJBMyApDW6JZP1GfuiVE
          source_id: s_nup6of261Qhs3VuyTg7DFy
          stance: supports
          locator: CBDB:562651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562651）
          source: &a1
            id: s_nup6of261Qhs3VuyTg7DFy
            source_type: api_record
            title: 中国历代人物传记资料库：王安民（CBDB 562651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562651&o=json
            external_identifier: CBDB:562651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mEzWC63wMNmMnqmLCjCoSh
        subject_person_id: p_TNE6TiAq3oWT8kiaJ21fjL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安民，清人物。籍贯諸暨。（中国历代人物传记资料库 CBDB 562651）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x61OTUvaqqYcLH1au0wd9M
          claim_id: c_mEzWC63wMNmMnqmLCjCoSh
          source_id: s_nup6of261Qhs3VuyTg7DFy
          stance: supports
          locator: CBDB:562651
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

# 王安民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安民 | accepted |
| bio.summary | 王安民，清人物。籍贯諸暨。（中国历代人物传记资料库 CBDB 562651） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安民（CBDB 562651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562651&o=json)
