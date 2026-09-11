---
schema: wang-person/v1
id: p_zCa3Fb3vpprQ78qwA7ev4C
status: active
merged_into: null
display_name: 王諤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WpiZGHUBvFa1azh1SWEgM7
        subject_person_id: p_zCa3Fb3vpprQ78qwA7ev4C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wM5gWSpm4JJKCLG7gGFh1d
          claim_id: c_WpiZGHUBvFa1azh1SWEgM7
          source_id: s_97DNJLMUmYpR1g7fKWTeey
          stance: supports
          locator: CBDB:640280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640280）
          source: &a1
            id: s_97DNJLMUmYpR1g7fKWTeey
            source_type: api_record
            title: 中国历代人物传记资料库：王諤（CBDB 640280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640280&o=json
            external_identifier: CBDB:640280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kkixs9sBtavbZMgP5Ud5nF
        subject_person_id: p_zCa3Fb3vpprQ78qwA7ev4C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諤，清人物。籍贯歸安，曾任知縣。（中国历代人物传记资料库 CBDB 640280）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NU6ku0s4xJQJHspUc9aG29
          claim_id: c_Kkixs9sBtavbZMgP5Ud5nF
          source_id: s_97DNJLMUmYpR1g7fKWTeey
          stance: supports
          locator: CBDB:640280
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

# 王諤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諤 | accepted |
| bio.summary | 王諤，清人物。籍贯歸安，曾任知縣。（中国历代人物传记资料库 CBDB 640280） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諤（CBDB 640280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640280&o=json)
