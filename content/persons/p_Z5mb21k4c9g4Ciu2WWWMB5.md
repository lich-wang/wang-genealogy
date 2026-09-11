---
schema: wang-person/v1
id: p_Z5mb21k4c9g4Ciu2WWWMB5
status: active
merged_into: null
display_name: 王文翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pmeb9o4SKzBbEUyspEZ9Vx
        subject_person_id: p_Z5mb21k4c9g4Ciu2WWWMB5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cKaF38YRXoLfUJSuwVwfqL
          claim_id: c_Pmeb9o4SKzBbEUyspEZ9Vx
          source_id: s_TCjBUWCh89zfo9MA7NbQ7a
          stance: supports
          locator: CBDB:638274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638274）
          source: &a1
            id: s_TCjBUWCh89zfo9MA7NbQ7a
            source_type: api_record
            title: 中国历代人物传记资料库：王文翰（CBDB 638274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638274&o=json
            external_identifier: CBDB:638274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vstM7A8fftbchFU9it1cub
        subject_person_id: p_Z5mb21k4c9g4Ciu2WWWMB5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文翰，清人物。籍贯廣寧，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638274）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m4pJngNhBTnPR7Vo9hnFbt
          claim_id: c_vstM7A8fftbchFU9it1cub
          source_id: s_TCjBUWCh89zfo9MA7NbQ7a
          stance: supports
          locator: CBDB:638274
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

# 王文翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文翰 | accepted |
| bio.summary | 王文翰，清人物。籍贯廣寧，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638274） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文翰（CBDB 638274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638274&o=json)
