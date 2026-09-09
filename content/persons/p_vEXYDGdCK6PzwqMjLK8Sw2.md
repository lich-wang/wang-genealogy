---
schema: wang-person/v1
id: p_vEXYDGdCK6PzwqMjLK8Sw2
status: active
merged_into: null
display_name: 王登洲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ti6MsX6Ppn2D5MTQH6F6T
        subject_person_id: p_vEXYDGdCK6PzwqMjLK8Sw2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登洲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwgQpwbiWLysZjkEoqyj7r
          claim_id: c_8ti6MsX6Ppn2D5MTQH6F6T
          source_id: s_8PifHpiB2gzKpVop4tjYB1
          stance: supports
          locator: CBDB:639507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639507）
          source: &a1
            id: s_8PifHpiB2gzKpVop4tjYB1
            source_type: api_record
            title: 中国历代人物传记资料库：王登洲（CBDB 639507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639507&o=json
            external_identifier: CBDB:639507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KuSe5Q4XFKeSPg4GQrgt7J
        subject_person_id: p_vEXYDGdCK6PzwqMjLK8Sw2
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
        - id: cs_KohGZ64sF168foEu4rCwg1
          claim_id: c_KuSe5Q4XFKeSPg4GQrgt7J
          source_id: s_8PifHpiB2gzKpVop4tjYB1
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

# 王登洲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登洲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登洲（CBDB 639507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639507&o=json)
