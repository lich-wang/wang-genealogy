---
schema: wang-person/v1
id: p_AzchV2gadaNThZJMv4i97k
status: active
merged_into: null
display_name: 王輝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3njZH6Hzt9tgmb5RGVx959
        subject_person_id: p_AzchV2gadaNThZJMv4i97k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qvgnR6eKPh4L7x5uGY74oV
          claim_id: c_3njZH6Hzt9tgmb5RGVx959
          source_id: s_EvEpf3ZJ99QhhdpGGtsqMX
          stance: supports
          locator: CBDB:37866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37866）
          source: &a1
            id: s_EvEpf3ZJ99QhhdpGGtsqMX
            source_type: api_record
            title: 中国历代人物传记资料库：王輝（CBDB 37866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37866&o=json
            external_identifier: CBDB:37866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XRfDpv3setVXnE6tyW8CGh
        subject_person_id: p_AzchV2gadaNThZJMv4i97k
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1176年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMEoHHCvMqn2S7o649SUhL
          claim_id: c_XRfDpv3setVXnE6tyW8CGh
          source_id: s_EvEpf3ZJ99QhhdpGGtsqMX
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
        id: c_qRCVSkH3HfAxk7BBXuNQFr
        subject_person_id: p_AzchV2gadaNThZJMv4i97k
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
        - id: cs_jVBUH88n32sjBXYH95T1fF
          claim_id: c_qRCVSkH3HfAxk7BBXuNQFr
          source_id: s_EvEpf3ZJ99QhhdpGGtsqMX
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

# 王輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輝 | accepted |
| death.date | 1176年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輝（CBDB 37866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37866&o=json)
