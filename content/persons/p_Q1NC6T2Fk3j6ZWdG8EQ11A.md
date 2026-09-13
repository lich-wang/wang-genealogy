---
schema: wang-person/v1
id: p_Q1NC6T2Fk3j6ZWdG8EQ11A
status: active
merged_into: null
display_name: 王同老
cbdb_id: 1888
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YkKjFoJwubEyFhXCxZ64CG
        subject_person_id: p_Q1NC6T2Fk3j6ZWdG8EQ11A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同老，宋人物。籍贯虞城，曾任朝奉郎、朝請大夫、三司判官。（中国历代人物传记资料库 CBDB 1888）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tMj1URKxi6_m8uLVvpV3iR
          claim_id: c_YkKjFoJwubEyFhXCxZ64CG
          source_id: s_UtAWs4PdYXZ3z6cC4PwqS7
          stance: supports
          locator: CBDB:1888
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UtAWs4PdYXZ3z6cC4PwqS7
            source_type: api_record
            title: 中国历代人物传记资料库：王同老（CBDB 1888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1888&o=json
            external_identifier: CBDB:1888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rngdMqzAxMWyfTaPGL197t
        subject_person_id: p_Q1NC6T2Fk3j6ZWdG8EQ11A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同老
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BiPKjQWQHwJK79JTJ1is2q
          claim_id: c_rngdMqzAxMWyfTaPGL197t
          source_id: s_UtAWs4PdYXZ3z6cC4PwqS7
          stance: supports
          locator: CBDB:1888
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2sQQ82SDMML1493GuQzGV3
        subject_person_id: p_83ygFMkQK9fNnM8zpQKj1X
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Q1NC6T2Fk3j6ZWdG8EQ11A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RjAXMzs1uNzF6q9CqXKohs
          claim_id: c_2sQQ82SDMML1493GuQzGV3
          source_id: s_5Bv66M9uYior98wsKzYUWv
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 未注明底本；本次仅以 CBDB API 记录作为中等置信度依据。
          source:
            id: s_5Bv66M9uYior98wsKzYUWv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王堯臣（1919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1919&o=json
            external_identifier: CBDB:1919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
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

# 王同老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同老，宋人物。籍贯虞城，曾任朝奉郎、朝請大夫、三司判官。（中国历代人物传记资料库 CBDB 1888） | accepted |
| name.primary | 王同老 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_83ygFMkQK9fNnM8zpQKj1X | 王尧臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同老（CBDB 1888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1888&o=json)
- [CBDB 中国历代人物传记资料库：王堯臣（1919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1919&o=json)
