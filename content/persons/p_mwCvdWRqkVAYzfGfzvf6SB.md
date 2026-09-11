---
schema: wang-person/v1
id: p_mwCvdWRqkVAYzfGfzvf6SB
status: active
merged_into: null
display_name: 王漣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F8r4ZptGgQqofW6B6zFMra
        subject_person_id: p_mwCvdWRqkVAYzfGfzvf6SB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gggu9zGBionNCX7jtLtg5k
          claim_id: c_F8r4ZptGgQqofW6B6zFMra
          source_id: s_HY5pUkUGaiQyd86AWb21eZ
          stance: supports
          locator: CBDB:69417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69417）
          source: &a1
            id: s_HY5pUkUGaiQyd86AWb21eZ
            source_type: api_record
            title: 中国历代人物传记资料库：王漣（CBDB 69417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69417&o=json
            external_identifier: CBDB:69417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_T3F3bFCEgFR9wzmYvb3gYt
        subject_person_id: p_mwCvdWRqkVAYzfGfzvf6SB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1884年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z8XS5taMDGJXX2nnuXHK5o
          claim_id: c_T3F3bFCEgFR9wzmYvb3gYt
          source_id: s_HY5pUkUGaiQyd86AWb21eZ
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
        id: c_J4GKsg2WtfEbAW7M6oPiXS
        subject_person_id: p_mwCvdWRqkVAYzfGfzvf6SB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王漣（卒于1884年），清人物。籍贯閩縣，身份为外文學家，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 69417）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tqIVVJ-Za5FYmDMVZWdZnN
          claim_id: c_J4GKsg2WtfEbAW7M6oPiXS
          source_id: s_HY5pUkUGaiQyd86AWb21eZ
          stance: supports
          locator: CBDB:69417
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

# 王漣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漣 | accepted |
| death.date | 1884年 | accepted |
| bio.summary | 王漣（卒于1884年），清人物。籍贯閩縣，身份为外文學家，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 69417） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漣（CBDB 69417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69417&o=json)
