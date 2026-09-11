---
schema: wang-person/v1
id: p_41EHBQyiuDZN9iyYmnz1Dv
status: active
merged_into: null
display_name: 王寶麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6AvFfV7zj3iFCoBz24HFsk
        subject_person_id: p_41EHBQyiuDZN9iyYmnz1Dv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZpBXAPCy2SKr9FWTb9UjnD
          claim_id: c_6AvFfV7zj3iFCoBz24HFsk
          source_id: s_DQ4EsXmLT9pFgvXNHaFFEF
          stance: supports
          locator: CBDB:637281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637281）
          source: &a1
            id: s_DQ4EsXmLT9pFgvXNHaFFEF
            source_type: api_record
            title: 中国历代人物传记资料库：王寶麟（CBDB 637281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637281&o=json
            external_identifier: CBDB:637281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wnzTb5aDDXnLRrZU1uTdCm
        subject_person_id: p_41EHBQyiuDZN9iyYmnz1Dv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶麟，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 637281）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kDa8BShxF1O4DsYfH4xB3H
          claim_id: c_wnzTb5aDDXnLRrZU1uTdCm
          source_id: s_DQ4EsXmLT9pFgvXNHaFFEF
          stance: supports
          locator: CBDB:637281
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

# 王寶麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶麟 | accepted |
| bio.summary | 王寶麟，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 637281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶麟（CBDB 637281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637281&o=json)
