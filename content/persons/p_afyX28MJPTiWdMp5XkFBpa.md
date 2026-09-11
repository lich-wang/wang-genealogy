---
schema: wang-person/v1
id: p_afyX28MJPTiWdMp5XkFBpa
status: active
merged_into: null
display_name: 王恬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2N3nB5vJAjM27cgiPwXQ31
        subject_person_id: p_afyX28MJPTiWdMp5XkFBpa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iFq1rf4a8hwiqzidJP8G9U
          claim_id: c_2N3nB5vJAjM27cgiPwXQ31
          source_id: s_mGG3F9wHLL4SmL52LaQ5EE
          stance: supports
          locator: CBDB:468018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468018）
          source: &a1
            id: s_mGG3F9wHLL4SmL52LaQ5EE
            source_type: api_record
            title: 中国历代人物传记资料库：王恬（CBDB 468018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468018&o=json
            external_identifier: CBDB:468018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_picci553EFajQ6QC5j7NKd
        subject_person_id: p_afyX28MJPTiWdMp5XkFBpa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬，史料所见人物。本项目依据《中国历代人物传记资料库：王恬（CBDB 468018）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7cSFSiLSyuaWI6bNYKXy_R
          claim_id: c_picci553EFajQ6QC5j7NKd
          source_id: s_mGG3F9wHLL4SmL52LaQ5EE
          stance: supports
          locator: CBDB:468018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王恬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恬 | accepted |
| bio.summary | 王恬，史料所见人物。本项目依据《中国历代人物传记资料库：王恬（CBDB 468018）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恬（CBDB 468018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468018&o=json)
