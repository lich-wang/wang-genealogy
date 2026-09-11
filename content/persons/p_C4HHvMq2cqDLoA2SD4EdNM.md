---
schema: wang-person/v1
id: p_C4HHvMq2cqDLoA2SD4EdNM
status: active
merged_into: null
display_name: 王文龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d24o3SWt1iwi7h8z9DNKDa
        subject_person_id: p_C4HHvMq2cqDLoA2SD4EdNM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sQV9PMEa8kuMtmL2yknLnx
          claim_id: c_d24o3SWt1iwi7h8z9DNKDa
          source_id: s_Lh31MCVQ2KZiXNNrjR3JQw
          stance: supports
          locator: CBDB:341609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341609）
          source: &a1
            id: s_Lh31MCVQ2KZiXNNrjR3JQw
            source_type: api_record
            title: 中国历代人物传记资料库：王文龍（CBDB 341609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341609&o=json
            external_identifier: CBDB:341609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4m8SpVbLufnKJDuUJ6B5C
        subject_person_id: p_C4HHvMq2cqDLoA2SD4EdNM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文龍，清人物。明清進士進士，籍贯黃縣，入仕進士，曾任守備。（中国历代人物传记资料库 CBDB 341609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_43_PcAPo87UBfOBxvF958b
          claim_id: c_B4m8SpVbLufnKJDuUJ6B5C
          source_id: s_Lh31MCVQ2KZiXNNrjR3JQw
          stance: supports
          locator: CBDB:341609
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

# 王文龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文龍 | accepted |
| bio.summary | 王文龍，清人物。明清進士進士，籍贯黃縣，入仕進士，曾任守備。（中国历代人物传记资料库 CBDB 341609） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文龍（CBDB 341609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341609&o=json)
