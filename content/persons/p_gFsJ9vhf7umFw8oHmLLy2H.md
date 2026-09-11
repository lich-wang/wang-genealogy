---
schema: wang-person/v1
id: p_gFsJ9vhf7umFw8oHmLLy2H
status: active
merged_into: null
display_name: 王樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HYkF3q2Gjb63ghBQ9CVwYE
        subject_person_id: p_gFsJ9vhf7umFw8oHmLLy2H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JhrbDQKvCWFPSotny4sZiP
          claim_id: c_HYkF3q2Gjb63ghBQ9CVwYE
          source_id: s_3r5USU8pDUVT41AD1sS2oC
          stance: supports
          locator: CBDB:479396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479396）
          source: &a1
            id: s_3r5USU8pDUVT41AD1sS2oC
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 479396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479396&o=json
            external_identifier: CBDB:479396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uhxGTtHVT62DiJP477Tcbt
        subject_person_id: p_gFsJ9vhf7umFw8oHmLLy2H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞，宋人物。曾任提舉。（中国历代人物传记资料库 CBDB 479396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E6tPfZYKDfUI8svk531LFy
          claim_id: c_uhxGTtHVT62DiJP477Tcbt
          source_id: s_3r5USU8pDUVT41AD1sS2oC
          stance: supports
          locator: CBDB:479396
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

# 王樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樞 | accepted |
| bio.summary | 王樞，宋人物。曾任提舉。（中国历代人物传记资料库 CBDB 479396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樞（CBDB 479396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479396&o=json)
