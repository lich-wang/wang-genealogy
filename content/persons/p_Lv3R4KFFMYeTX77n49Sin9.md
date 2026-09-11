---
schema: wang-person/v1
id: p_Lv3R4KFFMYeTX77n49Sin9
status: active
merged_into: null
display_name: 王翊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TEhJx3QDHiweD8iYNLmgX6
        subject_person_id: p_Lv3R4KFFMYeTX77n49Sin9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KT1d9iFANEDwwqaJADbzXj
          claim_id: c_TEhJx3QDHiweD8iYNLmgX6
          source_id: s_sviDGuxZMvEm61fno8cp1H
          stance: supports
          locator: CBDB:37964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37964）
          source: &a1
            id: s_sviDGuxZMvEm61fno8cp1H
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 37964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37964&o=json
            external_identifier: CBDB:37964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JvqWb4w962uN5TzPZZNKDJ
        subject_person_id: p_Lv3R4KFFMYeTX77n49Sin9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1092年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TxZTqGFo1yyiRSLi98UHXi
          claim_id: c_JvqWb4w962uN5TzPZZNKDJ
          source_id: s_sviDGuxZMvEm61fno8cp1H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PZtYYGUH8nCtbEXn8qUwQb
        subject_person_id: p_Lv3R4KFFMYeTX77n49Sin9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1173年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PD71t21EewHuAcJABNGf4P
          claim_id: c_PZtYYGUH8nCtbEXn8qUwQb
          source_id: s_sviDGuxZMvEm61fno8cp1H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AM2YFyXDmX9W9jTQjeL9Jm
        subject_person_id: p_Lv3R4KFFMYeTX77n49Sin9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊（1092年—1173年），宋人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 37964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FcDF3wO3XNImXzy1e2O5UO
          claim_id: c_AM2YFyXDmX9W9jTQjeL9Jm
          source_id: s_sviDGuxZMvEm61fno8cp1H
          stance: supports
          locator: CBDB:37964
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

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| birth.date | 1092年 | accepted |
| death.date | 1173年 | accepted |
| bio.summary | 王翊（1092年—1173年），宋人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 37964） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 37964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37964&o=json)
