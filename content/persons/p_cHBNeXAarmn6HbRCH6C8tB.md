---
schema: wang-person/v1
id: p_cHBNeXAarmn6HbRCH6C8tB
status: active
merged_into: null
display_name: 王克明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WorwUULPFoNfvDA7GTH2PK
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DWyzMwGxEeSg8225EmGnhn
          claim_id: c_WorwUULPFoNfvDA7GTH2PK
          source_id: s_2LtQWCwDDm6FaVxhdbigei
          stance: supports
          locator: CBDB:22101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22101）
          source: &a1
            id: s_2LtQWCwDDm6FaVxhdbigei
            source_type: api_record
            title: 中国历代人物传记资料库：王克明（CBDB 22101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22101&o=json
            external_identifier: CBDB:22101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uHCm13u3C5kM3Mws8cGh5G
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1112年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSiYBWXNES9p3QpgUNo8mv
          claim_id: c_uHCm13u3C5kM3Mws8cGh5G
          source_id: s_2LtQWCwDDm6FaVxhdbigei
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TPtGPS5DuSnAbDA78DugDa
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1178年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4cmEVnxeRwTPuvtgEoFR7P
          claim_id: c_TPtGPS5DuSnAbDA78DugDa
          source_id: s_2LtQWCwDDm6FaVxhdbigei
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zJ9YnXFyCoK3xcNiwWvPop
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克明（1112年—1178年），宋人物。籍贯烏程，身份为醫學、行醫，入仕醫科，曾任翰林醫痊、翰林醫官。（中国历代人物传记资料库 CBDB 22101）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AMTXMlSGKOLCJ9CK_S2JRV
          claim_id: c_zJ9YnXFyCoK3xcNiwWvPop
          source_id: s_2LtQWCwDDm6FaVxhdbigei
          stance: supports
          locator: CBDB:22101
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FAZkwXMqISfjaIUuvWUkow
        subject_person_id: p_2bJiLgTRPHfnh13AQDs2Hm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i058j-CI6tXs1MOJpTRWzz
          claim_id: c_FAZkwXMqISfjaIUuvWUkow
          source_id: s_WhaCCd7mUCRkER8ss3WRhi
          stance: supports
          locator: CBDB 双向互证（子 王克明 ⇄ 父 王實）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_WhaCCd7mUCRkER8ss3WRhi
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 22100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22100&o=json
            external_identifier: CBDB:22100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2bJiLgTRPHfnh13AQDs2Hm
        status: active
        display_name: 王實
        merged_into_person_id: null
  children:
    - claim:
        id: c_W5f_fdvIk2PVebnqgdZJzg
        subject_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bVfk37wS8MobhUNNY58YVh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BTldG6b-GyxdJ0soLCtigl
          claim_id: c_W5f_fdvIk2PVebnqgdZJzg
          source_id: s_maW_hL86D5V3EfEWfWYQxU
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22101）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_maW_hL86D5V3EfEWfWYQxU
            source_type: api_record
            title: 中国历代人物传记资料库：王大受（CBDB 22102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22102&o=json
            external_identifier: CBDB:22102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVfk37wS8MobhUNNY58YVh
        status: active
        display_name: 王大受
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克明 | accepted |
| birth.date | 1112年 | accepted |
| death.date | 1178年 | accepted |
| bio.summary | 王克明（1112年—1178年），宋人物。籍贯烏程，身份为醫學、行醫，入仕醫科，曾任翰林醫痊、翰林醫官。（中国历代人物传记资料库 CBDB 22101） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2bJiLgTRPHfnh13AQDs2Hm | 王實 | accepted |
| children | p_bVfk37wS8MobhUNNY58YVh | 王大受 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大受（CBDB 22102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22102&o=json)
- [中国历代人物传记资料库：王克明（CBDB 22101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22101&o=json)
- [中国历代人物传记资料库：王實（CBDB 22100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22100&o=json)
