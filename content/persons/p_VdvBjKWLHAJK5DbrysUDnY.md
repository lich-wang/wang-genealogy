---
schema: wang-person/v1
id: p_VdvBjKWLHAJK5DbrysUDnY
status: active
merged_into: null
display_name: 王世融
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KAXe4tUvd9eTqmgcKUpMtj
        subject_person_id: p_VdvBjKWLHAJK5DbrysUDnY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世融
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5TRPe6MTDrYcg33rDpypTW
          claim_id: c_KAXe4tUvd9eTqmgcKUpMtj
          source_id: s_ezJQGdcLsYrdUqwQmUrDJr
          stance: supports
          locator: CBDB:37409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37409）
          source: &a1
            id: s_ezJQGdcLsYrdUqwQmUrDJr
            source_type: api_record
            title: 中国历代人物传记资料库：王世融（CBDB 37409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37409&o=json
            external_identifier: CBDB:37409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7sFHaHHnsJE2dKhx6b5dV6
        subject_person_id: p_VdvBjKWLHAJK5DbrysUDnY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世融，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 37409）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-6MFtsox8eAsuC_RmEB7cX
          claim_id: c_7sFHaHHnsJE2dKhx6b5dV6
          source_id: s_ezJQGdcLsYrdUqwQmUrDJr
          stance: supports
          locator: CBDB:37409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pi_N1gzwcRI7nTf2Kvy6Gx
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VdvBjKWLHAJK5DbrysUDnY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DgRHZNaWRJbIe0nuF-B89u
          claim_id: c_Pi_N1gzwcRI7nTf2Kvy6Gx
          source_id: s_YihA0nqp3IKwp1IHrRokCp
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26364）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_YihA0nqp3IKwp1IHrRokCp
            source_type: api_record
            title: 中国历代人物传记资料库：王世融（CBDB 37409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37409&o=json
            external_identifier: CBDB:37409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HmkBbL3A8MpbWct9UhADAQ
        status: active
        display_name: 王中正
        merged_into_person_id: null
    - claim:
        id: c_xuFvZVTWFR7RWpa7VgKa6w
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_VdvBjKWLHAJK5DbrysUDnY
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NQ8TFKGUKlRaGItugnyNlN
          claim_id: c_xuFvZVTWFR7RWpa7VgKa6w
          source_id: s_YihA0nqp3IKwp1IHrRokCp
          stance: supports
          locator: CBDB 亲属：母（KinPerson 38174）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_YihA0nqp3IKwp1IHrRokCp
            source_type: api_record
            title: 中国历代人物传记资料库：王世融（CBDB 37409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37409&o=json
            external_identifier: CBDB:37409
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

# 王世融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世融 | accepted |
| bio.summary | 王世融，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 37409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HmkBbL3A8MpbWct9UhADAQ | 王中正 | accepted |
| parents | p_dTS2S2ii7KBfBH17rTzSn5 | 施氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世融（CBDB 37409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37409&o=json)
