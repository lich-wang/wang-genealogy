---
schema: wang-person/v1
id: p_kUxbu6ypHaVUGjbP1NnfLs
status: active
merged_into: null
display_name: 王植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UqVzSeuPqHpKCjmrfNekgW
        subject_person_id: p_kUxbu6ypHaVUGjbP1NnfLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1cLzHjZEpzceXzFpGKtorM
          claim_id: c_UqVzSeuPqHpKCjmrfNekgW
          source_id: s_WmYTMmJxjHzoaCZyHw8DzS
          stance: supports
          locator: CBDB:57185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57185）
          source: &a1
            id: s_WmYTMmJxjHzoaCZyHw8DzS
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 57185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57185&o=json
            external_identifier: CBDB:57185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p46KvqfLVyAPgdPiYuQHHs
        subject_person_id: p_kUxbu6ypHaVUGjbP1NnfLs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XLx8zGqfei6UpJJPFN3wqk
          claim_id: c_p46KvqfLVyAPgdPiYuQHHs
          source_id: s_WmYTMmJxjHzoaCZyHw8DzS
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
        id: c_ZkiCivJ1obcJyAhfEnMif8
        subject_person_id: p_kUxbu6ypHaVUGjbP1NnfLs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UcSnMoHyMPmmToJ9Q3HmCd
          claim_id: c_ZkiCivJ1obcJyAhfEnMif8
          source_id: s_WmYTMmJxjHzoaCZyHw8DzS
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
        id: c_D62VM7kL2zQWYjQBufH3Aj
        subject_person_id: p_kUxbu6ypHaVUGjbP1NnfLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植（1792年—1852年），清人物。明清進士進士，籍贯清苑，入仕進士，曾任編修、會試考官、禮部侍郎。（中国历代人物传记资料库 CBDB 57185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uNiJC_-6rYlenAIz7j5_nu
          claim_id: c_D62VM7kL2zQWYjQBufH3Aj
          source_id: s_WmYTMmJxjHzoaCZyHw8DzS
          stance: supports
          locator: CBDB:57185
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

# 王植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王植 | accepted |
| birth.date | 1792年 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | 王植（1792年—1852年），清人物。明清進士進士，籍贯清苑，入仕進士，曾任編修、會試考官、禮部侍郎。（中国历代人物传记资料库 CBDB 57185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王植（CBDB 57185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57185&o=json)
