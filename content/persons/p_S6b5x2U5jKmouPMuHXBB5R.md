---
schema: wang-person/v1
id: p_S6b5x2U5jKmouPMuHXBB5R
status: active
merged_into: null
display_name: 王兼三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aQaYP3moqvtSe5hDypVZuP
        subject_person_id: p_S6b5x2U5jKmouPMuHXBB5R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兼三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PY9P5NEDj7mR7Yy1mJEAdR
          claim_id: c_aQaYP3moqvtSe5hDypVZuP
          source_id: s_V7JcqrSj7zixV3PHXu9ujD
          stance: supports
          locator: CBDB:636342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636342）
          source: &a1
            id: s_V7JcqrSj7zixV3PHXu9ujD
            source_type: api_record
            title: 中国历代人物传记资料库：王兼三（CBDB 636342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636342&o=json
            external_identifier: CBDB:636342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zFp5QGGbYYfyQUQJDmuLga
        subject_person_id: p_S6b5x2U5jKmouPMuHXBB5R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兼三，清人物。籍贯山陰，曾任司獄。（中国历代人物传记资料库 CBDB 636342）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cSRvWv8PkqdAGY4xIIBPmh
          claim_id: c_zFp5QGGbYYfyQUQJDmuLga
          source_id: s_V7JcqrSj7zixV3PHXu9ujD
          stance: supports
          locator: CBDB:636342
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

# 王兼三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兼三 | accepted |
| bio.summary | 王兼三，清人物。籍贯山陰，曾任司獄。（中国历代人物传记资料库 CBDB 636342） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兼三（CBDB 636342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636342&o=json)
