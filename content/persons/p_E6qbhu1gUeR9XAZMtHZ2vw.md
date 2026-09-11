---
schema: wang-person/v1
id: p_E6qbhu1gUeR9XAZMtHZ2vw
status: active
merged_into: null
display_name: 王孟生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_THQF9NejJogEEpxzpg26g8
        subject_person_id: p_E6qbhu1gUeR9XAZMtHZ2vw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U5EuRKSW1LA1xMD6TdPx9D
          claim_id: c_THQF9NejJogEEpxzpg26g8
          source_id: s_MJzHiDQ8ZZ5UQCfDkgXh6T
          stance: supports
          locator: CBDB:637015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637015）
          source: &a1
            id: s_MJzHiDQ8ZZ5UQCfDkgXh6T
            source_type: api_record
            title: 中国历代人物传记资料库：王孟生（CBDB 637015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637015&o=json
            external_identifier: CBDB:637015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dxc7WXGEzJQt91c1SrD9fb
        subject_person_id: p_E6qbhu1gUeR9XAZMtHZ2vw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟生，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-dxEeq6tv45hP8n5L66XB4
          claim_id: c_Dxc7WXGEzJQt91c1SrD9fb
          source_id: s_MJzHiDQ8ZZ5UQCfDkgXh6T
          stance: supports
          locator: CBDB:637015
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

# 王孟生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟生 | accepted |
| bio.summary | 王孟生，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟生（CBDB 637015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637015&o=json)
