---
schema: wang-person/v1
id: p_rFJb884nc9Z8KvwE3XSutH
status: active
merged_into: null
display_name: 王珙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZV5pPP63yCg9Rq49GKeGeP
        subject_person_id: p_rFJb884nc9Z8KvwE3XSutH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HWS7EsFZtaRRF3Vp2k2uz9
          claim_id: c_ZV5pPP63yCg9Rq49GKeGeP
          source_id: s_592AJJVJfT8VKDHcTqz15L
          stance: supports
          locator: CBDB:468740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468740）
          source: &a1
            id: s_592AJJVJfT8VKDHcTqz15L
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 468740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468740&o=json
            external_identifier: CBDB:468740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PA1KN7GiLeMQ35QKgFowK6
        subject_person_id: p_rFJb884nc9Z8KvwE3XSutH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙，宋人物。籍贯通遠軍，曾任武翼郎。（中国历代人物传记资料库 CBDB 468740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NMKMZRpnUh7XLl6m0T20nS
          claim_id: c_PA1KN7GiLeMQ35QKgFowK6
          source_id: s_592AJJVJfT8VKDHcTqz15L
          stance: supports
          locator: CBDB:468740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hhAM51Clku_61xjolyhE7s
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rFJb884nc9Z8KvwE3XSutH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cwXaNcfUN3SU4X0gX-8gyU
          claim_id: c_hhAM51Clku_61xjolyhE7s
          source_id: s_UFrN6RCcIGtqYSSfen25rr
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_UFrN6RCcIGtqYSSfen25rr
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 468740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468740&o=json
            external_identifier: CBDB:468740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfZA8CNHYRGPvaenX91t3P
        status: active
        display_name: 王德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珙 | accepted |
| bio.summary | 王珙，宋人物。籍贯通遠軍，曾任武翼郎。（中国历代人物传记资料库 CBDB 468740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vfZA8CNHYRGPvaenX91t3P | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珙（CBDB 468740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468740&o=json)
