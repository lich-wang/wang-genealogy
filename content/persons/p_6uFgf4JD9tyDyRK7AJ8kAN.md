---
schema: wang-person/v1
id: p_6uFgf4JD9tyDyRK7AJ8kAN
status: active
merged_into: null
display_name: 王遵扆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XoTJPbX8ABjGiMjA6LBSpU
        subject_person_id: p_6uFgf4JD9tyDyRK7AJ8kAN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵扆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_St5TcakBP9dM2UwW5M2kk6
          claim_id: c_XoTJPbX8ABjGiMjA6LBSpU
          source_id: s_noBL8GqVQvGiWSZmvMQZqZ
          stance: supports
          locator: CBDB:72202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72202）
          source: &a1
            id: s_noBL8GqVQvGiWSZmvMQZqZ
            source_type: api_record
            title: 中国历代人物传记资料库：王遵扆（CBDB 72202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72202&o=json
            external_identifier: CBDB:72202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5gArZ1cQDcdNvESNBDMxmW
        subject_person_id: p_6uFgf4JD9tyDyRK7AJ8kAN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d3A6y29QzYc8icQmPuMNgZ
          claim_id: c_5gArZ1cQDcdNvESNBDMxmW
          source_id: s_noBL8GqVQvGiWSZmvMQZqZ
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
        id: c_GAiRJDekQhFAmriomSUQgX
        subject_person_id: p_6uFgf4JD9tyDyRK7AJ8kAN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1734年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPwjXQUPGgaUNHuURdkGGZ
          claim_id: c_GAiRJDekQhFAmriomSUQgX
          source_id: s_noBL8GqVQvGiWSZmvMQZqZ
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
        id: c_8E7h38HwLZe1JZQfab8W84
        subject_person_id: p_6uFgf4JD9tyDyRK7AJ8kAN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵扆（1668年—1734年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 72202）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tydkzs-Mk-XDMTPTef-pom
          claim_id: c_8E7h38HwLZe1JZQfab8W84
          source_id: s_noBL8GqVQvGiWSZmvMQZqZ
          stance: supports
          locator: CBDB:72202
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

# 王遵扆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵扆 | accepted |
| birth.date | 1668年 | accepted |
| death.date | 1734年 | accepted |
| bio.summary | 王遵扆（1668年—1734年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 72202） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遵扆（CBDB 72202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72202&o=json)
