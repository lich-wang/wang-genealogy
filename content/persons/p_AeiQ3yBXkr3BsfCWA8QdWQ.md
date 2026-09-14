---
schema: wang-person/v1
id: p_AeiQ3yBXkr3BsfCWA8QdWQ
status: active
merged_into: null
display_name: 王世長
cbdb_id: 37408
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HW6y49aNVBGBp6PK9B6S6Q
        subject_person_id: p_AeiQ3yBXkr3BsfCWA8QdWQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世長，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 37408）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nYXnNuXA3PPWM9XIsEn98t
          claim_id: c_HW6y49aNVBGBp6PK9B6S6Q
          source_id: s_YsjVQw6oAzA6WcfJr872vH
          stance: supports
          locator: CBDB:37408
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YsjVQw6oAzA6WcfJr872vH
            source_type: api_record
            title: 中国历代人物传记资料库：王世長（CBDB 37408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37408&o=json
            external_identifier: CBDB:37408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ayxqSQz9CZrCAExSKrmGGg
        subject_person_id: p_AeiQ3yBXkr3BsfCWA8QdWQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世長
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T1Kq33iCHeQ98EKgCkS7ei
          claim_id: c_ayxqSQz9CZrCAExSKrmGGg
          source_id: s_YsjVQw6oAzA6WcfJr872vH
          stance: supports
          locator: CBDB:37408
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gdnfVDZN06hNWGAwnkFw1K
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AeiQ3yBXkr3BsfCWA8QdWQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZETJI4rN5pLx_4ai8DELv9
          claim_id: c_gdnfVDZN06hNWGAwnkFw1K
          source_id: s_kwsEQaXzPK3rm007QYfSdE
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26364）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kwsEQaXzPK3rm007QYfSdE
            source_type: api_record
            title: 中国历代人物传记资料库：王世長（CBDB 37408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37408&o=json
            external_identifier: CBDB:37408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HmkBbL3A8MpbWct9UhADAQ
        status: active
        display_name: 王中正
        merged_into_person_id: null
    - claim:
        id: c_Oj1NhgipkxbPNTnlGHEmIN
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_AeiQ3yBXkr3BsfCWA8QdWQ
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tblr1-1NSx5-hNcM9XUGTV
          claim_id: c_Oj1NhgipkxbPNTnlGHEmIN
          source_id: s_kwsEQaXzPK3rm007QYfSdE
          stance: supports
          locator: CBDB 亲属：母（KinPerson 38174）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kwsEQaXzPK3rm007QYfSdE
            source_type: api_record
            title: 中国历代人物传记资料库：王世長（CBDB 37408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37408&o=json
            external_identifier: CBDB:37408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dTS2S2ii7KBfBH17rTzSn5
        status: active
        display_name: 施氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世長

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世長，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 37408） | accepted |
| name.primary | 王世長 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HmkBbL3A8MpbWct9UhADAQ | 王中正 | accepted |
| parents | p_dTS2S2ii7KBfBH17rTzSn5 | 施氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世長（CBDB 37408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37408&o=json)
