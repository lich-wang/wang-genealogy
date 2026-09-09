---
schema: wang-person/v1
id: p_6D72VCCtVu5zyK1zSakJfA
status: active
merged_into: null
display_name: 王輗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCvfJArKsjiCqK7m27zVSW
        subject_person_id: p_6D72VCCtVu5zyK1zSakJfA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AZr1254vfNT4G9cUimPYDi
          claim_id: c_uCvfJArKsjiCqK7m27zVSW
          source_id: s_urx3pNscCD6VXy2xRcQwRt
          stance: supports
          locator: CBDB:329355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329355）
          source: &a1
            id: s_urx3pNscCD6VXy2xRcQwRt
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 329355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json
            external_identifier: CBDB:329355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JBUN1yND6D1v8UUhRXDMGD
        subject_person_id: p_6D72VCCtVu5zyK1zSakJfA
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
        - id: cs_j2oyJhhB1W873wrZE1CgAF
          claim_id: c_JBUN1yND6D1v8UUhRXDMGD
          source_id: s_urx3pNscCD6VXy2xRcQwRt
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

# 王輗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輗（CBDB 329355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json)
