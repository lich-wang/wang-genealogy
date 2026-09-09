---
schema: wang-person/v1
id: p_TQyk4QWwhcUUZQXxe66jDH
status: active
merged_into: null
display_name: 王詠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MaRj85LTuhN6KJ4tB2qVEK
        subject_person_id: p_TQyk4QWwhcUUZQXxe66jDH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ygfqf3fFGBbE9PFfLAC1hv
          claim_id: c_MaRj85LTuhN6KJ4tB2qVEK
          source_id: s_NBhoY1PJp3T71pqSaTD1Hv
          stance: supports
          locator: CBDB:22930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22930）
          source: &a1
            id: s_NBhoY1PJp3T71pqSaTD1Hv
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 22930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22930&o=json
            external_identifier: CBDB:22930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d3A6vQv6bsHJ9WC4ZJQuN6
        subject_person_id: p_TQyk4QWwhcUUZQXxe66jDH
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
        - id: cs_7Eaw4mV2jG65zbmeHAFzSH
          claim_id: c_d3A6vQv6bsHJ9WC4ZJQuN6
          source_id: s_NBhoY1PJp3T71pqSaTD1Hv
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

# 王詠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詠 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詠（CBDB 22930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22930&o=json)
