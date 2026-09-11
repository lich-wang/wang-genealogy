---
schema: wang-person/v1
id: p_ncJMsYgNL3hQVCtFzxU5EN
status: active
merged_into: null
display_name: 王子輿
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TppunX68dSmLxAD6aBJL6B
        subject_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子輿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PyUEDp5yC9yo7EnojQ2jLx
          claim_id: c_TppunX68dSmLxAD6aBJL6B
          source_id: s_fP78VdDt5bTzzyVF9Kg6cW
          stance: supports
          locator: CBDB:1912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1912）
          source: &a1
            id: s_fP78VdDt5bTzzyVF9Kg6cW
            source_type: api_record
            title: 中国历代人物传记资料库：王子輿（CBDB 1912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1912&o=json
            external_identifier: CBDB:1912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LesfUcmeTkP4nXDPGBmkD1
        subject_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1002年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pYsGFsStNX9sbusgPiAkUT
          claim_id: c_LesfUcmeTkP4nXDPGBmkD1
          source_id: s_fP78VdDt5bTzzyVF9Kg6cW
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
        id: c_QfcGwjbZcDzarH4hYmyu8W
        subject_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_65fKs3v6rEAMHSd4k6X2pe
          claim_id: c_QfcGwjbZcDzarH4hYmyu8W
          source_id: s_fP78VdDt5bTzzyVF9Kg6cW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_l92-vcpNwrHtrqlFYD_NMw
        subject_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MGmit54AmziqBQHDxXTxaf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oodgVZEa1jyab_2QhFjeT
          claim_id: c_l92-vcpNwrHtrqlFYD_NMw
          source_id: s_bpcEW2Hr61PTwA9qBmdMBE
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bpcEW2Hr61PTwA9qBmdMBE
            source_type: api_record
            title: 中国历代人物传记资料库：王道宗（CBDB 119718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119718&o=json
            external_identifier: CBDB:119718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MGmit54AmziqBQHDxXTxaf
        status: active
        display_name: 王道宗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ZrXpKFfA3BFASych5_Jzmi
        subject_person_id: p_G4qJ7yPaYSWAivkaqit1c4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_abQHxrG12QG05LKiSwhsWM
          claim_id: c_ZrXpKFfA3BFASych5_Jzmi
          source_id: s_AX3P585bEwZ5g8ooDZ5ufL
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AX3P585bEwZ5g8ooDZ5ufL
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 18284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18284&o=json
            external_identifier: CBDB:18284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G4qJ7yPaYSWAivkaqit1c4
        status: active
        display_name: 王徽
        merged_into_person_id: null
    - claim:
        id: c_ap63_aP7y-A4FXu5s5asoQ
        subject_person_id: p_iSUfErCn12jeYUoQ7FXh2z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HgpHOG0dr0US4zaD25ybpa
          claim_id: c_ap63_aP7y-A4FXu5s5asoQ
          source_id: s_ide1eRio9EVuxXe2kvMzLC
          stance: supports
          locator: 宋史：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ide1eRio9EVuxXe2kvMzLC
            source_type: api_record
            title: 中国历代人物传记资料库：王甲（CBDB 18283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18283&o=json
            external_identifier: CBDB:18283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iSUfErCn12jeYUoQ7FXh2z
        status: active
        display_name: 王甲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王子輿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子輿 | accepted |
| death.date | 1002年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MGmit54AmziqBQHDxXTxaf | 王道宗 | accepted |
| ancestors | p_G4qJ7yPaYSWAivkaqit1c4 | 王徽 | accepted |
| ancestors | p_iSUfErCn12jeYUoQ7FXh2z | 王甲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道宗（CBDB 119718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119718&o=json)
- [中国历代人物传记资料库：王徽（CBDB 18284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18284&o=json)
- [中国历代人物传记资料库：王甲（CBDB 18283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18283&o=json)
- [中国历代人物传记资料库：王子輿（CBDB 1912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1912&o=json)
