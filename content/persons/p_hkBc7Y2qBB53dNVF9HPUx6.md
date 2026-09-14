---
schema: wang-person/v1
id: p_hkBc7Y2qBB53dNVF9HPUx6
status: active
merged_into: null
display_name: 王楨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oSD8sv7CCtKkLu7BWJV9mk
        subject_person_id: p_hkBc7Y2qBB53dNVF9HPUx6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7UBCr4Qg56BZD5G5q64x3C
          claim_id: c_oSD8sv7CCtKkLu7BWJV9mk
          source_id: s_1KbsPKeK9rtC4VoB8vkPd3
          stance: supports
          locator: CBDB:29209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29209）
          source: &a1
            id: s_1KbsPKeK9rtC4VoB8vkPd3
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 29209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29209&o=json
            external_identifier: CBDB:29209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wYpRCH4NY9LeHjeNyKvaNa
        subject_person_id: p_hkBc7Y2qBB53dNVF9HPUx6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KC55rM1X39I6ytMqmVuyvz
          claim_id: c_wYpRCH4NY9LeHjeNyKvaNa
          source_id: s_1KbsPKeK9rtC4VoB8vkPd3
          stance: supports
          locator: CBDB:29209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__Pm9IRiHh-c1sWOjtFXm4q
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hkBc7Y2qBB53dNVF9HPUx6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jj9-uWaljgBSYNACEJCqPD
          claim_id: c__Pm9IRiHh-c1sWOjtFXm4q
          source_id: s_DmbuWuHkY2FwT_GyV8jJ-T
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_DmbuWuHkY2FwT_GyV8jJ-T
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 29209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29209&o=json
            external_identifier: CBDB:29209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XVBiZo5rSMuhnxXwBu1Wf6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨 | accepted |
| bio.summary | 王楨，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XVBiZo5rSMuhnxXwBu1Wf6 | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楨（CBDB 29209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29209&o=json)
