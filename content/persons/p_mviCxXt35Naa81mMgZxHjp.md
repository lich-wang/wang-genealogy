---
schema: wang-person/v1
id: p_mviCxXt35Naa81mMgZxHjp
status: active
merged_into: null
display_name: 王撮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5LJWWzxujvCEe65g3jGbuK
        subject_person_id: p_mviCxXt35Naa81mMgZxHjp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2xQcZRTEeAqowBgrqxUUtJ
          claim_id: c_5LJWWzxujvCEe65g3jGbuK
          source_id: s_d3BgoJZ13NZ7F29tKLR8vN
          stance: supports
          locator: CBDB:638158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638158）
          source: &a1
            id: s_d3BgoJZ13NZ7F29tKLR8vN
            source_type: api_record
            title: 中国历代人物传记资料库：王撮（CBDB 638158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638158&o=json
            external_identifier: CBDB:638158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gA3RFqj4CeXde19Fhq4LEC
        subject_person_id: p_mviCxXt35Naa81mMgZxHjp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撮，清人物。籍贯安福，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zDUuqaEoxgnNcOLLY_FKPq
          claim_id: c_gA3RFqj4CeXde19Fhq4LEC
          source_id: s_d3BgoJZ13NZ7F29tKLR8vN
          stance: supports
          locator: CBDB:638158
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

# 王撮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撮 | accepted |
| bio.summary | 王撮，清人物。籍贯安福，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撮（CBDB 638158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638158&o=json)
