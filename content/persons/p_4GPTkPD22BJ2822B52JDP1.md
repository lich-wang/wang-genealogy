---
schema: wang-person/v1
id: p_4GPTkPD22BJ2822B52JDP1
status: active
merged_into: null
display_name: 王鴻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nAeewuMY2iX6DRhM4SQc6C
        subject_person_id: p_4GPTkPD22BJ2822B52JDP1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_trTs3bmGpNgxNc4Syh522D
          claim_id: c_nAeewuMY2iX6DRhM4SQc6C
          source_id: s_LCMwY9kvK6ZpiDK4DkC2J5
          stance: supports
          locator: CBDB:45806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45806）
          source: &a1
            id: s_LCMwY9kvK6ZpiDK4DkC2J5
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻（CBDB 45806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45806&o=json
            external_identifier: CBDB:45806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vqsuNp9garUJ5cPhg9d63D
        subject_person_id: p_4GPTkPD22BJ2822B52JDP1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻，宋人物。籍贯雩都，身份为落第士人。（中国历代人物传记资料库 CBDB 45806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pgy9MxdeccXcfbQ7AOim2V
          claim_id: c_vqsuNp9garUJ5cPhg9d63D
          source_id: s_LCMwY9kvK6ZpiDK4DkC2J5
          stance: supports
          locator: CBDB:45806
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

# 王鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻 | accepted |
| bio.summary | 王鴻，宋人物。籍贯雩都，身份为落第士人。（中国历代人物传记资料库 CBDB 45806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻（CBDB 45806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45806&o=json)
