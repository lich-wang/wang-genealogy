---
schema: wang-person/v1
id: p_iXLhPm5oeKdLJr3G9uSs5o
status: active
merged_into: null
display_name: 王廣壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e2rQtZATqBQ7bHuTJSMG9D
        subject_person_id: p_iXLhPm5oeKdLJr3G9uSs5o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XKCyfDwjLQN2rBWCQN7Exj
          claim_id: c_e2rQtZATqBQ7bHuTJSMG9D
          source_id: s_1jTQiUbWNZdCtvpxrNutAV
          stance: supports
          locator: CBDB:533519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（533519）
          source: &a1
            id: s_1jTQiUbWNZdCtvpxrNutAV
            source_type: api_record
            title: 中国历代人物传记资料库：王廣壽（CBDB 533519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533519&o=json
            external_identifier: CBDB:533519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GE7mezzsd1XJyYyjsFY4Fv
        subject_person_id: p_iXLhPm5oeKdLJr3G9uSs5o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣壽，宋人物。籍贯臨川，入仕進士。（中国历代人物传记资料库 CBDB 533519）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_38xOx1nSjpGTbbp5H53bwX
          claim_id: c_GE7mezzsd1XJyYyjsFY4Fv
          source_id: s_1jTQiUbWNZdCtvpxrNutAV
          stance: supports
          locator: CBDB:533519
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

# 王廣壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣壽 | accepted |
| bio.summary | 王廣壽，宋人物。籍贯臨川，入仕進士。（中国历代人物传记资料库 CBDB 533519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣壽（CBDB 533519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533519&o=json)
