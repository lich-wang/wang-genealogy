---
schema: wang-person/v1
id: p_YursMnWTJNLDitSvJ5qMQk
status: active
merged_into: null
display_name: 王堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5LQW8a8QbHy5QJpXxGp9fQ
        subject_person_id: p_YursMnWTJNLDitSvJ5qMQk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nSajEthDEhd6JR198qHaon
          claim_id: c_5LQW8a8QbHy5QJpXxGp9fQ
          source_id: s_FYEuQ7RDyyK7U3rrdF5jeW
          stance: supports
          locator: CBDB:636739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636739）
          source: &a1
            id: s_FYEuQ7RDyyK7U3rrdF5jeW
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 636739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636739&o=json
            external_identifier: CBDB:636739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YyT6NZtkojJ67oGpG1MZgM
        subject_person_id: p_YursMnWTJNLDitSvJ5qMQk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂，清人物。籍贯浙江省，曾任典史。（中国历代人物传记资料库 CBDB 636739）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3mt6KonPs9xwuvA01FOZlV
          claim_id: c_YyT6NZtkojJ67oGpG1MZgM
          source_id: s_FYEuQ7RDyyK7U3rrdF5jeW
          stance: supports
          locator: CBDB:636739
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

# 王堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂 | accepted |
| bio.summary | 王堂，清人物。籍贯浙江省，曾任典史。（中国历代人物传记资料库 CBDB 636739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堂（CBDB 636739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636739&o=json)
