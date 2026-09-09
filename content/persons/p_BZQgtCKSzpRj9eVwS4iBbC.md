---
schema: wang-person/v1
id: p_BZQgtCKSzpRj9eVwS4iBbC
status: active
merged_into: null
display_name: 王道平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pmm9BtGdJci8SfUR9NsiFh
        subject_person_id: p_BZQgtCKSzpRj9eVwS4iBbC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sfoy7AJ7Q7DjD3HDMPBMGT
          claim_id: c_Pmm9BtGdJci8SfUR9NsiFh
          source_id: s_3mYswf8u3wnoMkw2sbUXfy
          stance: supports
          locator: CBDB:475848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475848）
          source: &a1
            id: s_3mYswf8u3wnoMkw2sbUXfy
            source_type: api_record
            title: 中国历代人物传记资料库：王道平（CBDB 475848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475848&o=json
            external_identifier: CBDB:475848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6QN4dC6n9QqL1Uq7S3EHhS
        subject_person_id: p_BZQgtCKSzpRj9eVwS4iBbC
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
        - id: cs_wE6UoaEoPM81xFHmE7K1ty
          claim_id: c_6QN4dC6n9QqL1Uq7S3EHhS
          source_id: s_3mYswf8u3wnoMkw2sbUXfy
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

# 王道平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道平 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道平（CBDB 475848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475848&o=json)
