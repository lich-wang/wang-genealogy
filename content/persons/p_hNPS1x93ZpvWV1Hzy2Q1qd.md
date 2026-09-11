---
schema: wang-person/v1
id: p_hNPS1x93ZpvWV1Hzy2Q1qd
status: active
merged_into: null
display_name: 王棪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wBCGN8HqdtBgxpeFswkYzD
        subject_person_id: p_hNPS1x93ZpvWV1Hzy2Q1qd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WFKQmSP6vEv5Uhd3hEbSwB
          claim_id: c_wBCGN8HqdtBgxpeFswkYzD
          source_id: s_SThhFpJaqnU8gAszJz7UQL
          stance: supports
          locator: CBDB:638735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638735）
          source: &a1
            id: s_SThhFpJaqnU8gAszJz7UQL
            source_type: api_record
            title: 中国历代人物传记资料库：王棪（CBDB 638735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638735&o=json
            external_identifier: CBDB:638735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ViFdmbX7hBsKTyaWhCcd4
        subject_person_id: p_hNPS1x93ZpvWV1Hzy2Q1qd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棪，清人物。籍贯仁和，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638735）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fkQSVQqnP6v8DteKP63ej0
          claim_id: c_8ViFdmbX7hBsKTyaWhCcd4
          source_id: s_SThhFpJaqnU8gAszJz7UQL
          stance: supports
          locator: CBDB:638735
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

# 王棪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棪 | accepted |
| bio.summary | 王棪，清人物。籍贯仁和，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638735） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棪（CBDB 638735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638735&o=json)
