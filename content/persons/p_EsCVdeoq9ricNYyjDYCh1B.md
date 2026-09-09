---
schema: wang-person/v1
id: p_EsCVdeoq9ricNYyjDYCh1B
status: active
merged_into: null
display_name: 王世選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZR88iR6iyHFdzjiuk8yDY3
        subject_person_id: p_EsCVdeoq9ricNYyjDYCh1B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4xXnpCnx548mH8zErVXJup
          claim_id: c_ZR88iR6iyHFdzjiuk8yDY3
          source_id: s_SsMJ3aUYtAn4aRRpPH7rgc
          stance: supports
          locator: CBDB:69169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69169）
          source: &a1
            id: s_SsMJ3aUYtAn4aRRpPH7rgc
            source_type: api_record
            title: 中国历代人物传记资料库：王世選（CBDB 69169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69169&o=json
            external_identifier: CBDB:69169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ew6cpkgmh8gG3nkpbnrv3s
        subject_person_id: p_EsCVdeoq9ricNYyjDYCh1B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1661年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ALGHVaY1a4pcMNkhVRyDH
          claim_id: c_Ew6cpkgmh8gG3nkpbnrv3s
          source_id: s_SsMJ3aUYtAn4aRRpPH7rgc
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
        id: c_TE7r7VEP5p84GZUSE6ZHMG
        subject_person_id: p_EsCVdeoq9ricNYyjDYCh1B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vpV1CgxRGTMbjrxLYXuR8z
          claim_id: c_TE7r7VEP5p84GZUSE6ZHMG
          source_id: s_SsMJ3aUYtAn4aRRpPH7rgc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王世選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世選 | accepted |
| death.date | 1661年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世選（CBDB 69169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69169&o=json)
