---
schema: wang-person/v1
id: p_LmSW9NS4ySvFMsRqLKMSCT
status: active
merged_into: null
display_name: 王彥昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vj7prS6feXBowmUS9u7jNp
        subject_person_id: p_LmSW9NS4ySvFMsRqLKMSCT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_74Z3HrHH9GyzsajKBrZHd9
          claim_id: c_Vj7prS6feXBowmUS9u7jNp
          source_id: s_3VRz628t2A2DyVWSR7CCsJ
          stance: supports
          locator: CBDB:37640
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37640）
          source: &a1
            id: s_3VRz628t2A2DyVWSR7CCsJ
            source_type: api_record
            title: 中国历代人物传记资料库：王彥昇（CBDB 37640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37640&o=json
            external_identifier: CBDB:37640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.214Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VSG7u6RCCCLAC88P525sR6
        subject_person_id: p_LmSW9NS4ySvFMsRqLKMSCT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 917年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EQfDGK1VtinTiGCfcHRM2V
          claim_id: c_VSG7u6RCCCLAC88P525sR6
          source_id: s_3VRz628t2A2DyVWSR7CCsJ
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
        id: c_1o6HeGKW6uiBk2Xn1bKPAA
        subject_person_id: p_LmSW9NS4ySvFMsRqLKMSCT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 974年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4bKKRqcPRVCucUmasDKrXy
          claim_id: c_1o6HeGKW6uiBk2Xn1bKPAA
          source_id: s_3VRz628t2A2DyVWSR7CCsJ
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
        id: c_bSB7TpJM8kuuuLdscKXLRN
        subject_person_id: p_LmSW9NS4ySvFMsRqLKMSCT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥昇（917年—974年），宋人物。籍贯洛陽，身份为精於劍術，曾任防禦使、團練使、東班。（中国历代人物传记资料库 CBDB 37640）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kUOyP4hoBiSyACTI1fryGd
          claim_id: c_bSB7TpJM8kuuuLdscKXLRN
          source_id: s_3VRz628t2A2DyVWSR7CCsJ
          stance: supports
          locator: CBDB:37640
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彥昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥昇 | accepted |
| birth.date | 917年 | accepted |
| death.date | 974年 | accepted |
| bio.summary | 王彥昇（917年—974年），宋人物。籍贯洛陽，身份为精於劍術，曾任防禦使、團練使、東班。（中国历代人物传记资料库 CBDB 37640） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥昇（CBDB 37640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37640&o=json)
