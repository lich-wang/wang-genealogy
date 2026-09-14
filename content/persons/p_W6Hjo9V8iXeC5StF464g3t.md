---
schema: wang-person/v1
id: p_W6Hjo9V8iXeC5StF464g3t
status: active
merged_into: null
display_name: 王朋老
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mGdCYzteECp5w84RVuULfz
        subject_person_id: p_W6Hjo9V8iXeC5StF464g3t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朋老
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qNwNu1oVvv4rEjLeu6RxnH
          claim_id: c_mGdCYzteECp5w84RVuULfz
          source_id: s_JxabkcKFidJewpVKK9nG8v
          stance: supports
          locator: CBDB:563238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563238）
          source: &a1
            id: s_JxabkcKFidJewpVKK9nG8v
            source_type: api_record
            title: 中国历代人物传记资料库：王朋老（CBDB 563238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563238&o=json
            external_identifier: CBDB:563238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SDM3fsDF6y3Drh7CAd75Q7
        subject_person_id: p_W6Hjo9V8iXeC5StF464g3t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朋老，宋人物。籍贯虞城，曾任大理寺評事。（中国历代人物传记资料库 CBDB 563238）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AeEN2n2NERIT5x0DuAJOgT
          claim_id: c_SDM3fsDF6y3Drh7CAd75Q7
          source_id: s_JxabkcKFidJewpVKK9nG8v
          stance: supports
          locator: CBDB:563238
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w0Ha5MFYwQaRNXUeSZqbTM
        subject_person_id: p_83ygFMkQK9fNnM8zpQKj1X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W6Hjo9V8iXeC5StF464g3t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5cwJP1DrfByaeR3ULiJUHK
          claim_id: c_w0Ha5MFYwQaRNXUeSZqbTM
          source_id: s_rTDpqrrOnrHTDxxo06_WE2
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1919）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_rTDpqrrOnrHTDxxo06_WE2
            source_type: api_record
            title: 中国历代人物传记资料库：王朋老（CBDB 563238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563238&o=json
            external_identifier: CBDB:563238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_83ygFMkQK9fNnM8zpQKj1X
        status: active
        display_name: 王尧臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朋老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朋老 | accepted |
| bio.summary | 王朋老，宋人物。籍贯虞城，曾任大理寺評事。（中国历代人物传记资料库 CBDB 563238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_83ygFMkQK9fNnM8zpQKj1X | 王尧臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朋老（CBDB 563238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563238&o=json)
