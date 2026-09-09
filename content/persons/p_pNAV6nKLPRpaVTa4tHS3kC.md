---
schema: wang-person/v1
id: p_pNAV6nKLPRpaVTa4tHS3kC
status: active
merged_into: null
display_name: 王維鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_buEoUNzmvRwArZqm16hcJf
        subject_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qb76TV4hfY2hq66oBniK4g
          claim_id: c_buEoUNzmvRwArZqm16hcJf
          source_id: s_W8zvZ7D8mqKMHZ7rP94cdS
          stance: supports
          locator: CBDB:639833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639833）
          source: &a1
            id: s_W8zvZ7D8mqKMHZ7rP94cdS
            source_type: api_record
            title: 中国历代人物传记资料库：王維鶴（CBDB 639833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639833&o=json
            external_identifier: CBDB:639833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VR2uR7RJXZb6ZGiyD5V6rt
        subject_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
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
        - id: cs_Jd5g2K2UA4hNMqquZmm4G5
          claim_id: c_VR2uR7RJXZb6ZGiyD5V6rt
          source_id: s_W8zvZ7D8mqKMHZ7rP94cdS
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

# 王維鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維鶴 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維鶴（CBDB 639833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639833&o=json)
