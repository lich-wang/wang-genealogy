---
schema: wang-person/v1
id: p_i1QHsHBU3CPkszGCwghP6x
status: active
merged_into: null
display_name: 王殿孝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C9sLApa82Sps3sYLKg4K7Y
        subject_person_id: p_i1QHsHBU3CPkszGCwghP6x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6zsKhsby8DvAepkRbxxRcj
          claim_id: c_C9sLApa82Sps3sYLKg4K7Y
          source_id: s_ix35heAC65vW2ejy94cBJG
          stance: supports
          locator: CBDB:703837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703837）
          source: &a1
            id: s_ix35heAC65vW2ejy94cBJG
            source_type: api_record
            title: 中国历代人物传记资料库：王殿孝（CBDB 703837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703837&o=json
            external_identifier: CBDB:703837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wJGDh2qXdHLoATog1CTzkW
        subject_person_id: p_i1QHsHBU3CPkszGCwghP6x
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
        - id: cs_5M7kKXcW8Xv63Jye7e12gg
          claim_id: c_wJGDh2qXdHLoATog1CTzkW
          source_id: s_ix35heAC65vW2ejy94cBJG
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

# 王殿孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殿孝 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殿孝（CBDB 703837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703837&o=json)
