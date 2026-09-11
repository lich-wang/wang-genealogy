---
schema: wang-person/v1
id: p_9N7RUBwrA5c7xovwjNDj1z
status: active
merged_into: null
display_name: 王曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BGDdtazNaJ4Tz1RnEJDgjA
        subject_person_id: p_9N7RUBwrA5c7xovwjNDj1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9xLv14XDALZnab44fFzAA
          claim_id: c_BGDdtazNaJ4Tz1RnEJDgjA
          source_id: s_Dsv1JWF7XP2H56oaau31UK
          stance: supports
          locator: CBDB:688329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688329）
          source: &a1
            id: s_Dsv1JWF7XP2H56oaau31UK
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 688329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688329&o=json
            external_identifier: CBDB:688329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oYSZHwtf72e75uenX1B7tM
        subject_person_id: p_9N7RUBwrA5c7xovwjNDj1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾，宋人物。籍贯上饒，入仕進士。（中国历代人物传记资料库 CBDB 688329）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aruDevYVM-b6V6Pg4NsKvu
          claim_id: c_oYSZHwtf72e75uenX1B7tM
          source_id: s_Dsv1JWF7XP2H56oaau31UK
          stance: supports
          locator: CBDB:688329
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

# 王曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曾 | accepted |
| bio.summary | 王曾，宋人物。籍贯上饒，入仕進士。（中国历代人物传记资料库 CBDB 688329） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曾（CBDB 688329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688329&o=json)
