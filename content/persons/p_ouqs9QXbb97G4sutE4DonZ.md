---
schema: wang-person/v1
id: p_ouqs9QXbb97G4sutE4DonZ
status: active
merged_into: null
display_name: 王邦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GUwkSHKbxWTTwvQXpkbDwm
        subject_person_id: p_ouqs9QXbb97G4sutE4DonZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r1C2qE76p1FJSGCod8u7A5
          claim_id: c_GUwkSHKbxWTTwvQXpkbDwm
          source_id: s_ivaHjuqto7MWPKTN6y6jMY
          stance: supports
          locator: CBDB:251775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251775）
          source: &a1
            id: s_ivaHjuqto7MWPKTN6y6jMY
            source_type: api_record
            title: 中国历代人物传记资料库：王邦（CBDB 251775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251775&o=json
            external_identifier: CBDB:251775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7fB77j7SqZpSoCdQiLbrqW
        subject_person_id: p_ouqs9QXbb97G4sutE4DonZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vb4QK4Jak1CyaWkMp4fYvE
          claim_id: c_7fB77j7SqZpSoCdQiLbrqW
          source_id: s_ivaHjuqto7MWPKTN6y6jMY
          stance: supports
          locator: CBDB:251775
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lTfUbsV5n6dyPPxQElTZkz
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ouqs9QXbb97G4sutE4DonZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wcNiJIaX5vk5OjuUfxrlLf
          claim_id: c_lTfUbsV5n6dyPPxQElTZkz
          source_id: s_edmD9wc0v6ECS54oMqv6UI
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王邦 与 王本儉 为同胞（CBDB 记「弟」），王本儉 之父／母即 王邦 之父／母。
          source:
            id: s_edmD9wc0v6ECS54oMqv6UI
            source_type: api_record
            title: 中国历代人物传记资料库：王邦（CBDB 251775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251775&o=json
            external_identifier: CBDB:251775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6jw2H1KWkaDQExePFFB6Yj
        status: active
        display_name: 王孟良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nw3ZaOts8SnMWJwGevairE
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ouqs9QXbb97G4sutE4DonZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3gmQA8IMWmNoxE-jUT4SC
          claim_id: c_nw3ZaOts8SnMWJwGevairE
          source_id: s_edmD9wc0v6ECS54oMqv6UI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_edmD9wc0v6ECS54oMqv6UI
            source_type: api_record
            title: 中国历代人物传记资料库：王邦（CBDB 251775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251775&o=json
            external_identifier: CBDB:251775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9PrBQcpmCF997Qgs2oiS3t
        status: active
        display_name: 王本儉
        merged_into_person_id: null
---

# 王邦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦 | accepted |
| bio.summary | 王邦，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251775） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6jw2H1KWkaDQExePFFB6Yj | 王孟良 | accepted |
| other | p_9PrBQcpmCF997Qgs2oiS3t | 王本儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦（CBDB 251775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251775&o=json)
