---
schema: wang-person/v1
id: p_GD7UDZDnNDTjCPHbGq85kc
status: active
merged_into: null
display_name: 王熙春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h2SLVyMZ2ZKz27Wd8vMwc9
        subject_person_id: p_GD7UDZDnNDTjCPHbGq85kc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M4FLDdcvMeZq7j73pxHf3r
          claim_id: c_h2SLVyMZ2ZKz27Wd8vMwc9
          source_id: s_HK3uhUK1nWq9tzxmALRsEU
          stance: supports
          locator: CBDB:639312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639312）
          source: &a1
            id: s_HK3uhUK1nWq9tzxmALRsEU
            source_type: api_record
            title: 中国历代人物传记资料库：王熙春（CBDB 639312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639312&o=json
            external_identifier: CBDB:639312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WPB5c37yAbRzhHeKivsQ8o
        subject_person_id: p_GD7UDZDnNDTjCPHbGq85kc
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
        - id: cs_VN4ExucZkEH8KkvJwd8gDH
          claim_id: c_WPB5c37yAbRzhHeKivsQ8o
          source_id: s_HK3uhUK1nWq9tzxmALRsEU
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

# 王熙春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙春 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熙春（CBDB 639312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639312&o=json)
