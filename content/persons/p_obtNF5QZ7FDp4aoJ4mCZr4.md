---
schema: wang-person/v1
id: p_obtNF5QZ7FDp4aoJ4mCZr4
status: active
merged_into: null
display_name: 王家怡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8N8eEmGwmuvJ6WpN7vEnen
        subject_person_id: p_obtNF5QZ7FDp4aoJ4mCZr4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j9y5UNksWBedpT5EPdZL7B
          claim_id: c_8N8eEmGwmuvJ6WpN7vEnen
          source_id: s_tj92GDqrQnN9E9gqoymiK9
          stance: supports
          locator: CBDB:637177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637177）
          source: &a1
            id: s_tj92GDqrQnN9E9gqoymiK9
            source_type: api_record
            title: 中国历代人物传记资料库：王家怡（CBDB 637177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637177&o=json
            external_identifier: CBDB:637177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HRU5zPVQm4XPdMkFYFjqCL
        subject_person_id: p_obtNF5QZ7FDp4aoJ4mCZr4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家怡，清人物。籍贯故城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637177）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UogmKAwHslGAEhcRh1wBmV
          claim_id: c_HRU5zPVQm4XPdMkFYFjqCL
          source_id: s_tj92GDqrQnN9E9gqoymiK9
          stance: supports
          locator: CBDB:637177
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

# 王家怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家怡 | accepted |
| bio.summary | 王家怡，清人物。籍贯故城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家怡（CBDB 637177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637177&o=json)
