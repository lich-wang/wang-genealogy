---
schema: wang-person/v1
id: p_oFp7aJM8wd32Lbsw96yXiv
status: active
merged_into: null
display_name: 王琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8CCcjPoakiVeCWM493YxX
        subject_person_id: p_oFp7aJM8wd32Lbsw96yXiv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rNQxxyLcAqXwT6ha8RL9DR
          claim_id: c_z8CCcjPoakiVeCWM493YxX
          source_id: s_dTC2ghGCNM8bti9xyMqazs
          stance: supports
          locator: CBDB:1898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1898）
          source: &a1
            id: s_dTC2ghGCNM8bti9xyMqazs
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 1898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1898&o=json
            external_identifier: CBDB:1898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oYEDPCtmQPV4teRXhpGru8
        subject_person_id: p_oFp7aJM8wd32Lbsw96yXiv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1154年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ts7SfSANvqbBD35RAPn8jF
          claim_id: c_oYEDPCtmQPV4teRXhpGru8
          source_id: s_dTC2ghGCNM8bti9xyMqazs
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
        id: c_12ee4FWcT9ZNkCpxEES9Hi
        subject_person_id: p_oFp7aJM8wd32Lbsw96yXiv
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
        - id: cs_bhbUkFEH4dXb1t3mdrd4yN
          claim_id: c_12ee4FWcT9ZNkCpxEES9Hi
          source_id: s_dTC2ghGCNM8bti9xyMqazs
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

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| death.date | 1154年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 1898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1898&o=json)
