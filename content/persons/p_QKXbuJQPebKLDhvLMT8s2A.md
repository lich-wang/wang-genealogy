---
schema: wang-person/v1
id: p_QKXbuJQPebKLDhvLMT8s2A
status: active
merged_into: null
display_name: 王端卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FYheXALEEQvAUUBWJqG2aG
        subject_person_id: p_QKXbuJQPebKLDhvLMT8s2A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jMpHCFnbB8gzLd2Ti1K8PT
          claim_id: c_FYheXALEEQvAUUBWJqG2aG
          source_id: s_Gm7HioA2kTr8ikaoASKGuM
          stance: supports
          locator: CBDB:639708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639708）
          source: &a1
            id: s_Gm7HioA2kTr8ikaoASKGuM
            source_type: api_record
            title: 中国历代人物传记资料库：王端卿（CBDB 639708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639708&o=json
            external_identifier: CBDB:639708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vyymj1FCVP43asobpDTAJP
        subject_person_id: p_QKXbuJQPebKLDhvLMT8s2A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端卿，清人物。籍贯沔陽州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1tRXoJlxsR4Xx0QHBp8mwL
          claim_id: c_Vyymj1FCVP43asobpDTAJP
          source_id: s_Gm7HioA2kTr8ikaoASKGuM
          stance: supports
          locator: CBDB:639708
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

# 王端卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端卿 | accepted |
| bio.summary | 王端卿，清人物。籍贯沔陽州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端卿（CBDB 639708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639708&o=json)
