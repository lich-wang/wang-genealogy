---
schema: wang-person/v1
id: p_hTPxiW1KqFV4Pc5dYpNx4S
status: active
merged_into: null
display_name: 王象震
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dEAqrAo8Uz4BhUpBPa9FVx
        subject_person_id: p_hTPxiW1KqFV4Pc5dYpNx4S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cQiFaxyfkWWe8Pd9JHGNbF
          claim_id: c_dEAqrAo8Uz4BhUpBPa9FVx
          source_id: s_Duj69prCr4XP1TV1QU73KB
          stance: supports
          locator: CBDB:220276
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220276）
          source: &a1
            id: s_Duj69prCr4XP1TV1QU73KB
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 220276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json
            external_identifier: CBDB:220276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CkouUF1JXVctpcb5SZ8siz
        subject_person_id: p_hTPxiW1KqFV4Pc5dYpNx4S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象震，明人物。隆慶五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220276）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fyeOhTTfbtzcLVX3LiKFcp
          claim_id: c_CkouUF1JXVctpcb5SZ8siz
          source_id: s_Duj69prCr4XP1TV1QU73KB
          stance: supports
          locator: CBDB:220276
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l7lShdvmA4hXYptyEERnpI
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_hTPxiW1KqFV4Pc5dYpNx4S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMCfgjO9K7wlMZg_GiC2x3
          claim_id: c_l7lShdvmA4hXYptyEERnpI
          source_id: s_H1NWuH3qju2c0-OsZYgHKy
          stance: supports
          locator: CBDB：兄弟 王象乾（65764）之父／母 王之垣
          quotation: null
          interpretation_note: 由兄弟关系推断：王象震 与 王象乾 为同胞（CBDB 记「兄」），王象乾 之父／母即 王象震 之父／母。
          source:
            id: s_H1NWuH3qju2c0-OsZYgHKy
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 220276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json
            external_identifier: CBDB:220276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
    - claim:
        id: c_TzWs_tj-rbnAkbW-38iZio
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hTPxiW1KqFV4Pc5dYpNx4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76WbBEITHLEWCQZdEj_mX6
          claim_id: c_TzWs_tj-rbnAkbW-38iZio
          source_id: s_H1NWuH3qju2c0-OsZYgHKy
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象震 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象震 之父／母。
          source:
            id: s_H1NWuH3qju2c0-OsZYgHKy
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 220276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json
            external_identifier: CBDB:220276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_745ZARbrVV3z44SCezSl9i
        subject_person_id: p_hTPxiW1KqFV4Pc5dYpNx4S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWQjqLwF0-IPG197ZC7aB-
          claim_id: c_745ZARbrVV3z44SCezSl9i
          source_id: s_H1NWuH3qju2c0-OsZYgHKy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 65764 王象乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H1NWuH3qju2c0-OsZYgHKy
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 220276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json
            external_identifier: CBDB:220276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_am5Vd5AeYsvD8mELuKUQHm
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hTPxiW1KqFV4Pc5dYpNx4S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s6OZo9G3UefQUHgYdyf9JG
          claim_id: c_am5Vd5AeYsvD8mELuKUQHm
          source_id: s_H1NWuH3qju2c0-OsZYgHKy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H1NWuH3qju2c0-OsZYgHKy
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 220276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json
            external_identifier: CBDB:220276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
---

# 王象震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象震 | accepted |
| bio.summary | 王象震，明人物。隆慶五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220276） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| other | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象震（CBDB 220276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json)
