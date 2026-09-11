---
schema: wang-person/v1
id: p_aNtw7xo969jAHaaSzaCYyn
status: active
merged_into: null
display_name: 王濰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wE7cZn3CLr1ViXg56asP8S
        subject_person_id: p_aNtw7xo969jAHaaSzaCYyn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qt4FCT2MrF72JY1fMqEsPf
          claim_id: c_wE7cZn3CLr1ViXg56asP8S
          source_id: s_fRuKG3QsKGetuLcJreSebz
          stance: supports
          locator: CBDB:639205
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639205）
          source: &a1
            id: s_fRuKG3QsKGetuLcJreSebz
            source_type: api_record
            title: 中国历代人物传记资料库：王濰（CBDB 639205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639205&o=json
            external_identifier: CBDB:639205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NUr7bX6F3govCxAUZJfQPF
        subject_person_id: p_aNtw7xo969jAHaaSzaCYyn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濰，清人物。籍贯歸安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639205）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fhjp-cVS1GvSXX-5eqUrb9
          claim_id: c_NUr7bX6F3govCxAUZJfQPF
          source_id: s_fRuKG3QsKGetuLcJreSebz
          stance: supports
          locator: CBDB:639205
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

# 王濰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濰 | accepted |
| bio.summary | 王濰，清人物。籍贯歸安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639205） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濰（CBDB 639205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639205&o=json)
