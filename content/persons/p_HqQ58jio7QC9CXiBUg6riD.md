---
schema: wang-person/v1
id: p_HqQ58jio7QC9CXiBUg6riD
status: active
merged_into: null
display_name: 王吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3vAoaAG9TKR6XT7JxVDoC4
        subject_person_id: p_HqQ58jio7QC9CXiBUg6riD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5dqF6NJ57Xa66NwzTfCZPx
          claim_id: c_3vAoaAG9TKR6XT7JxVDoC4
          source_id: s_6Pg48Sha4b3jcBFqnTCmhv
          stance: supports
          locator: CBDB:343022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343022）
          source: &a1
            id: s_6Pg48Sha4b3jcBFqnTCmhv
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 343022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343022&o=json
            external_identifier: CBDB:343022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WNqbHARopfB9q2ANTPRTCa
        subject_person_id: p_HqQ58jio7QC9CXiBUg6riD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉，清人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 343022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ScN-wdvvFrPbn0LSbDZRji
          claim_id: c_WNqbHARopfB9q2ANTPRTCa
          source_id: s_6Pg48Sha4b3jcBFqnTCmhv
          stance: supports
          locator: CBDB:343022
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

# 王吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉 | accepted |
| bio.summary | 王吉，清人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 343022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吉（CBDB 343022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343022&o=json)
