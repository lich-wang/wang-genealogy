---
schema: wang-person/v1
id: p_TSdzCMDyb8gMGsxBUz2f4H
status: active
merged_into: null
display_name: 王吟梅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6qNDKTiA51ER4KE8gtukFx
        subject_person_id: p_TSdzCMDyb8gMGsxBUz2f4H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吟梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJ3C3Bob8FB9moF49r3MJt
          claim_id: c_6qNDKTiA51ER4KE8gtukFx
          source_id: s_FrTPrUjLVZ8A5XEyvkaNU5
          stance: supports
          locator: CBDB:636524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636524）
          source: &a1
            id: s_FrTPrUjLVZ8A5XEyvkaNU5
            source_type: api_record
            title: 中国历代人物传记资料库：王吟梅（CBDB 636524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636524&o=json
            external_identifier: CBDB:636524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xqwtup6P5PvkZG1ZxPC8NF
        subject_person_id: p_TSdzCMDyb8gMGsxBUz2f4H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吟梅，清人物。籍贯寧津，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636524）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5ZVc4OsHWLryV2NH9Jnqj7
          claim_id: c_xqwtup6P5PvkZG1ZxPC8NF
          source_id: s_FrTPrUjLVZ8A5XEyvkaNU5
          stance: supports
          locator: CBDB:636524
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

# 王吟梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吟梅 | accepted |
| bio.summary | 王吟梅，清人物。籍贯寧津，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636524） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吟梅（CBDB 636524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636524&o=json)
