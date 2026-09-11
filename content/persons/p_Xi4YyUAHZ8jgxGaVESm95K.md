---
schema: wang-person/v1
id: p_Xi4YyUAHZ8jgxGaVESm95K
status: active
merged_into: null
display_name: 王勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C69jhL6YQe5qMyifKdfju2
        subject_person_id: p_Xi4YyUAHZ8jgxGaVESm95K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WQsBK9nkurDhYPa92FTqLA
          claim_id: c_C69jhL6YQe5qMyifKdfju2
          source_id: s_89MG36B7C19Tf9GuuTsBYa
          stance: supports
          locator: CBDB:69462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69462）
          source: &a1
            id: s_89MG36B7C19Tf9GuuTsBYa
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 69462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69462&o=json
            external_identifier: CBDB:69462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8oWbvBVEfhRRnuG1M7GCAS
        subject_person_id: p_Xi4YyUAHZ8jgxGaVESm95K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳，清人物。籍贯廣平府，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 69462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gofT1hIWAPGVyenH1RbInq
          claim_id: c_8oWbvBVEfhRRnuG1M7GCAS
          source_id: s_89MG36B7C19Tf9GuuTsBYa
          stance: supports
          locator: CBDB:69462
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

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| bio.summary | 王勳，清人物。籍贯廣平府，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 69462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勳（CBDB 69462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69462&o=json)
