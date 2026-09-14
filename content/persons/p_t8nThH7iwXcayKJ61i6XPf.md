---
schema: wang-person/v1
id: p_t8nThH7iwXcayKJ61i6XPf
status: active
merged_into: null
display_name: 王舉賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RoNAv2C3o4ZmXcJWF9dvoJ
        subject_person_id: p_t8nThH7iwXcayKJ61i6XPf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wh8HxV6cKywEGw6RyvdGVS
          claim_id: c_RoNAv2C3o4ZmXcJWF9dvoJ
          source_id: s_RE9M4VWz3tEMG4wJVES59j
          stance: supports
          locator: CBDB:226929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226929）
          source: &a1
            id: s_RE9M4VWz3tEMG4wJVES59j
            source_type: api_record
            title: 中国历代人物传记资料库：王舉賢（CBDB 226929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226929&o=json
            external_identifier: CBDB:226929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KnyGbK7iNPvEHs9v92ksuB
        subject_person_id: p_t8nThH7iwXcayKJ61i6XPf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226929）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jyovJAQ_83aRgGU4dSnFMN
          claim_id: c_KnyGbK7iNPvEHs9v92ksuB
          source_id: s_RE9M4VWz3tEMG4wJVES59j
          stance: supports
          locator: CBDB:226929
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jX713ahrP7elNecMeQb1q5
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t8nThH7iwXcayKJ61i6XPf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vfhacDvUIeySJ3ljS_bI0G
          claim_id: c_jX713ahrP7elNecMeQb1q5
          source_id: s_q0Kpx0afRllLEX6VcT3NhF
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王舉賢 与 王立賢 为同胞（CBDB 记「兄」），王立賢 之父／母即 王舉賢 之父／母。
          source:
            id: s_q0Kpx0afRllLEX6VcT3NhF
            source_type: api_record
            title: 中国历代人物传记资料库：王舉賢（CBDB 226929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226929&o=json
            external_identifier: CBDB:226929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MZb3xwrJh2KS7jR6a3sirM
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Dc05nfYV_zIkPwVWSfsjwh
        subject_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_t8nThH7iwXcayKJ61i6XPf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V73jR3gIpMFucN-LGahuFY
          claim_id: c_Dc05nfYV_zIkPwVWSfsjwh
          source_id: s_q0Kpx0afRllLEX6VcT3NhF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207055 王立賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q0Kpx0afRllLEX6VcT3NhF
            source_type: api_record
            title: 中国历代人物传记资料库：王舉賢（CBDB 226929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226929&o=json
            external_identifier: CBDB:226929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NGHFT8W3h8WaBq7fkVhjck
        status: active
        display_name: 王立賢
        merged_into_person_id: null
---

# 王舉賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉賢 | accepted |
| bio.summary | 王舉賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MZb3xwrJh2KS7jR6a3sirM | 王佐 | accepted |
| other | p_NGHFT8W3h8WaBq7fkVhjck | 王立賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉賢（CBDB 226929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226929&o=json)
