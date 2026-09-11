---
schema: wang-person/v1
id: p_hLpnVxFRSsU7UjALAQAbXR
status: active
merged_into: null
display_name: 王同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DCuBEzEw69i4Z5kFv35AYV
        subject_person_id: p_hLpnVxFRSsU7UjALAQAbXR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dxpJsu3d7wG2udY8rWXBNM
          claim_id: c_DCuBEzEw69i4Z5kFv35AYV
          source_id: s_QQrBQppHwBAfaqzE8JBfwC
          stance: supports
          locator: CBDB:343623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343623）
          source: &a1
            id: s_QQrBQppHwBAfaqzE8JBfwC
            source_type: api_record
            title: 中国历代人物传记资料库：王同（CBDB 343623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343623&o=json
            external_identifier: CBDB:343623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X3CQ11xwT4RewBQ6NBFXaF
        subject_person_id: p_hLpnVxFRSsU7UjALAQAbXR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同，清人物。明清進士進士，籍贯仁和，入仕進士。（中国历代人物传记资料库 CBDB 343623）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ccaITgM05FlE3OXa7TCza4
          claim_id: c_X3CQ11xwT4RewBQ6NBFXaF
          source_id: s_QQrBQppHwBAfaqzE8JBfwC
          stance: supports
          locator: CBDB:343623
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

# 王同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同 | accepted |
| bio.summary | 王同，清人物。明清進士進士，籍贯仁和，入仕進士。（中国历代人物传记资料库 CBDB 343623） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同（CBDB 343623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343623&o=json)
