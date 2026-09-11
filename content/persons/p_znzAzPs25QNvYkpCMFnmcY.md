---
schema: wang-person/v1
id: p_znzAzPs25QNvYkpCMFnmcY
status: active
merged_into: null
display_name: 王成晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cm3UQbAvmFpwjNexg5NKN4
        subject_person_id: p_znzAzPs25QNvYkpCMFnmcY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9GV5oqrXkNCFrTTs1ED5Au
          claim_id: c_cm3UQbAvmFpwjNexg5NKN4
          source_id: s_F5mwFqSAZpDHA5bXQ7eRos
          stance: supports
          locator: CBDB:638039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638039）
          source: &a1
            id: s_F5mwFqSAZpDHA5bXQ7eRos
            source_type: api_record
            title: 中国历代人物传记资料库：王成晉（CBDB 638039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638039&o=json
            external_identifier: CBDB:638039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T65mva92cikk896MEDiYvZ
        subject_person_id: p_znzAzPs25QNvYkpCMFnmcY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成晉，清人物。籍贯上元，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638039）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GhZmb9ME_E2gBBazwN3U9b
          claim_id: c_T65mva92cikk896MEDiYvZ
          source_id: s_F5mwFqSAZpDHA5bXQ7eRos
          stance: supports
          locator: CBDB:638039
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

# 王成晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成晉 | accepted |
| bio.summary | 王成晉，清人物。籍贯上元，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638039） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成晉（CBDB 638039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638039&o=json)
