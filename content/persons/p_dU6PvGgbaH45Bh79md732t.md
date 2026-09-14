---
schema: wang-person/v1
id: p_dU6PvGgbaH45Bh79md732t
status: active
merged_into: null
display_name: 王彥隆
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qw8erRq3jJ54mX7Yj7yyPt
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7YYg7DeWbZKXVo6B4h6uEu
          claim_id: c_qw8erRq3jJ54mX7Yj7yyPt
          source_id: s_c3num1yraFAopsmZwfvCcU
          stance: supports
          locator: CBDB:17821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17821）
          source: &a1
            id: s_c3num1yraFAopsmZwfvCcU
            source_type: api_record
            title: 中国历代人物传记资料库：王彥隆（CBDB 17821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17821&o=json
            external_identifier: CBDB:17821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NY2z7dLdbrozZzfJPnGCQM
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1078年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5dAv672JnF85JpxpQ5aoun
          claim_id: c_NY2z7dLdbrozZzfJPnGCQM
          source_id: s_c3num1yraFAopsmZwfvCcU
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
        id: c_MbsufFnN2aUGHw5PnSLR4D
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1128年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VuZFokUbY7Y1SqdLsU6iS
          claim_id: c_MbsufFnN2aUGHw5PnSLR4D
          source_id: s_c3num1yraFAopsmZwfvCcU
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
        id: c_i9RXUxZgYhEBHCtD7tt9CC
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥隆（1078年—1128年），宋人物。籍贯德安，入仕恩蔭、蔭補，曾任朝奉郎、左朝奉郎、承務郎。（中国历代人物传记资料库 CBDB 17821）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l4F5P2R3Rad4BDzFhz0xC1
          claim_id: c_i9RXUxZgYhEBHCtD7tt9CC
          source_id: s_c3num1yraFAopsmZwfvCcU
          stance: supports
          locator: CBDB:17821
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LrTnu9VeDzJ8FyfmoNnqcV
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BjAKSxmjc8djxRBT2DFZjB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EVksiPoV2ndnkbz_xJIf2m
          claim_id: c_LrTnu9VeDzJ8FyfmoNnqcV
          source_id: s_jQ0PXvc-hMIBcMI4ut_zj4
          stance: supports
          locator: CBDB 亲属：父（KinPerson 17821）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_jQ0PXvc-hMIBcMI4ut_zj4
            source_type: api_record
            title: 中国历代人物传记资料库：王萬裕（CBDB 36117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36117&o=json
            external_identifier: CBDB:36117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BjAKSxmjc8djxRBT2DFZjB
        status: active
        display_name: 王萬裕
        merged_into_person_id: null
    - claim:
        id: c_RvuX9gFwXcefaPR2ebmn4r
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r28xZqjot7YozbDLYTpmY3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jF3qncsBplfTsYckHDar_w
          claim_id: c_RvuX9gFwXcefaPR2ebmn4r
          source_id: s_4jnSQ75Ysk9GqwG-oLgYGE
          stance: supports
          locator: CBDB 亲属：父（KinPerson 17821）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_4jnSQ75Ysk9GqwG-oLgYGE
            source_type: api_record
            title: 中国历代人物传记资料库：王萬章（CBDB 36115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36115&o=json
            external_identifier: CBDB:36115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r28xZqjot7YozbDLYTpmY3
        status: active
        display_name: 王萬章
        merged_into_person_id: null
    - claim:
        id: c_5BBLWvpG7N65c8PhqjW5X5
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_srg7VyGZuEpckmhLcbkQ8x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDM_KyUVje_-nvxoPYdSRL
          claim_id: c_5BBLWvpG7N65c8PhqjW5X5
          source_id: s_ogD2T0SAepuBzYoMe9kCXk
          stance: supports
          locator: CBDB 亲属：父（KinPerson 17821）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ogD2T0SAepuBzYoMe9kCXk
            source_type: api_record
            title: 中国历代人物传记资料库：王萬夫（CBDB 36116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36116&o=json
            external_identifier: CBDB:36116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_srg7VyGZuEpckmhLcbkQ8x
        status: active
        display_name: 王萬夫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_S-xJfs1YNUPJ-fZl-3HHpQ
        subject_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dU6PvGgbaH45Bh79md732t
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__aLKlteanDBRHztAsOW7Yr
          claim_id: c_S-xJfs1YNUPJ-fZl-3HHpQ
          source_id: s_c3num1yraFAopsmZwfvCcU
          stance: supports
          locator: CBDB 双向互证（祖父 王韶 ⇄ 孫 王彥隆）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王彥隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥隆 | accepted |
| birth.date | 1078年 | accepted |
| death.date | 1128年 | accepted |
| bio.summary | 王彥隆（1078年—1128年），宋人物。籍贯德安，入仕恩蔭、蔭補，曾任朝奉郎、左朝奉郎、承務郎。（中国历代人物传记资料库 CBDB 17821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BjAKSxmjc8djxRBT2DFZjB | 王萬裕 | accepted |
| children | p_r28xZqjot7YozbDLYTpmY3 | 王萬章 | accepted |
| children | p_srg7VyGZuEpckmhLcbkQ8x | 王萬夫 | accepted |
| ancestors | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬夫（CBDB 36116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36116&o=json)
- [中国历代人物传记资料库：王萬裕（CBDB 36117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36117&o=json)
- [中国历代人物传记资料库：王萬章（CBDB 36115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36115&o=json)
- [中国历代人物传记资料库：王彥隆（CBDB 17821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17821&o=json)
