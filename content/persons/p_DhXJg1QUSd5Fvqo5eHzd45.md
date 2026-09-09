---
schema: wang-person/v1
id: p_DhXJg1QUSd5Fvqo5eHzd45
status: active
merged_into: null
display_name: 王宇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s7sDMyRXZSA2GvsPKh1QSg
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vNvpvsnBXM1qtZdtKuz5mv
          claim_id: c_s7sDMyRXZSA2GvsPKh1QSg
          source_id: s_FsTUsBNFhCg8mc3eniTCnB
          stance: supports
          locator: CBDB:205042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205042）
          source: &a1
            id: s_FsTUsBNFhCg8mc3eniTCnB
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 205042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205042&o=json
            external_identifier: CBDB:205042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fHUtvHjEAREB39QtBQmiUG
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqPmE9JUB984uzUVaCLAMB
          claim_id: c_fHUtvHjEAREB39QtBQmiUG
          source_id: s_FsTUsBNFhCg8mc3eniTCnB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vEwBpZiJ4s1wGp4yi546j1
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PzV6fg4t5Vu5W89oh9Fo53
          claim_id: c_vEwBpZiJ4s1wGp4yi546j1
          source_id: s_FsTUsBNFhCg8mc3eniTCnB
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

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宇（CBDB 205042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205042&o=json)
