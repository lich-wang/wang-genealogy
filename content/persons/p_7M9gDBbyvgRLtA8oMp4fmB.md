---
schema: wang-person/v1
id: p_7M9gDBbyvgRLtA8oMp4fmB
status: active
merged_into: null
display_name: 王大全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_59dmCw3nTYG1LVAgHGHr7i
        subject_person_id: p_7M9gDBbyvgRLtA8oMp4fmB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mv7cBDB81kcAn7sKdKdcZ9
          claim_id: c_59dmCw3nTYG1LVAgHGHr7i
          source_id: s_DJZNJpq89cyLHKiUTNxRad
          stance: supports
          locator: CBDB:636888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636888）
          source: &a1
            id: s_DJZNJpq89cyLHKiUTNxRad
            source_type: api_record
            title: 中国历代人物传记资料库：王大全（CBDB 636888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636888&o=json
            external_identifier: CBDB:636888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nDi8spDLhA2qkshmuyTuDQ
        subject_person_id: p_7M9gDBbyvgRLtA8oMp4fmB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_81UzYreA5EN8L7hHug8pF8
          claim_id: c_nDi8spDLhA2qkshmuyTuDQ
          source_id: s_DJZNJpq89cyLHKiUTNxRad
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王大全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大全 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大全（CBDB 636888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636888&o=json)
