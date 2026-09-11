---
schema: wang-person/v1
id: p_rRAnBGJbkqATavTw6FfqPJ
status: active
merged_into: null
display_name: 王之純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_drjZ1JGcKF9UYmUZe85ekq
        subject_person_id: p_rRAnBGJbkqATavTw6FfqPJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9CrD64xGQLE5gPfkwv6HKH
          claim_id: c_drjZ1JGcKF9UYmUZe85ekq
          source_id: s_1uLVHi9BQ7Ujai1mLmNBj5
          stance: supports
          locator: CBDB:686397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686397）
          source: &a1
            id: s_1uLVHi9BQ7Ujai1mLmNBj5
            source_type: api_record
            title: 中国历代人物传记资料库：王之純（CBDB 686397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686397&o=json
            external_identifier: CBDB:686397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sD5Rb38imKchE1y7H2uDtm
        subject_person_id: p_rRAnBGJbkqATavTw6FfqPJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之純，宋人物。籍贯蓬州，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 686397）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sRMAGxEzt8HWlgUQLEaLe4
          claim_id: c_sD5Rb38imKchE1y7H2uDtm
          source_id: s_1uLVHi9BQ7Ujai1mLmNBj5
          stance: supports
          locator: CBDB:686397
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

# 王之純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之純 | accepted |
| bio.summary | 王之純，宋人物。籍贯蓬州，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 686397） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之純（CBDB 686397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686397&o=json)
