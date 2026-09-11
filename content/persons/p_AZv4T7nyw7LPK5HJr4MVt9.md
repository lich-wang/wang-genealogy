---
schema: wang-person/v1
id: p_AZv4T7nyw7LPK5HJr4MVt9
status: active
merged_into: null
display_name: 王著
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N8H6z4YNiEjS4GAMYFvxY2
        subject_person_id: p_AZv4T7nyw7LPK5HJr4MVt9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王著
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aTHLvvcuyw7SCc4ioH593T
          claim_id: c_N8H6z4YNiEjS4GAMYFvxY2
          source_id: s_3qWAN822cqiEq1tjku3xAa
          stance: supports
          locator: CBDB:38961
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38961）
          source: &a1
            id: s_3qWAN822cqiEq1tjku3xAa
            source_type: api_record
            title: 中国历代人物传记资料库：王著（CBDB 38961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38961&o=json
            external_identifier: CBDB:38961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZeUB9Cz7km4tZRt9GFYHRr
        subject_person_id: p_AZv4T7nyw7LPK5HJr4MVt9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 928年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9DX89sPg7yuD326RwdEWzG
          claim_id: c_ZeUB9Cz7km4tZRt9GFYHRr
          source_id: s_3qWAN822cqiEq1tjku3xAa
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
        id: c_s28d7U13aXMnyQno9vPUVy
        subject_person_id: p_AZv4T7nyw7LPK5HJr4MVt9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 969年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EFHp7jQ8GhuxWmFouao5eA
          claim_id: c_s28d7U13aXMnyQno9vPUVy
          source_id: s_3qWAN822cqiEq1tjku3xAa
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
        id: c_g9J4CogVuCyKW7S2adLAuX
        subject_person_id: p_AZv4T7nyw7LPK5HJr4MVt9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王著（928年—969年），宋人物。籍贯單父，入仕進士，曾任翰林學士、中書舍人、尚書省戶部度支司員外郎。（中国历代人物传记资料库 CBDB 38961）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ilDEJw3s-c5mQwfWLyh6AR
          claim_id: c_g9J4CogVuCyKW7S2adLAuX
          source_id: s_3qWAN822cqiEq1tjku3xAa
          stance: supports
          locator: CBDB:38961
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

# 王著

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王著 | accepted |
| birth.date | 928年 | accepted |
| death.date | 969年 | accepted |
| bio.summary | 王著（928年—969年），宋人物。籍贯單父，入仕進士，曾任翰林學士、中書舍人、尚書省戶部度支司員外郎。（中国历代人物传记资料库 CBDB 38961） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王著（CBDB 38961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38961&o=json)
