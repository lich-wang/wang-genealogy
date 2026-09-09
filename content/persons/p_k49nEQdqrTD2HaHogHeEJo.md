---
schema: wang-person/v1
id: p_k49nEQdqrTD2HaHogHeEJo
status: active
merged_into: null
display_name: 王式文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y7D2HpxzkXf4FtWbnEQhTf
        subject_person_id: p_k49nEQdqrTD2HaHogHeEJo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W83E8Cjx9t3ezs5Q6s3Hk2
          claim_id: c_y7D2HpxzkXf4FtWbnEQhTf
          source_id: s_Ym77HCBPWU62f4GBZBQm5m
          stance: supports
          locator: CBDB:343069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343069）
          source: &a1
            id: s_Ym77HCBPWU62f4GBZBQm5m
            source_type: api_record
            title: 中国历代人物传记资料库：王式文（CBDB 343069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343069&o=json
            external_identifier: CBDB:343069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MPkRkPY8Je125Zg52brUS3
        subject_person_id: p_k49nEQdqrTD2HaHogHeEJo
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
        - id: cs_Qg3S4PsVLXGPdRBsw4c3Cg
          claim_id: c_MPkRkPY8Je125Zg52brUS3
          source_id: s_Ym77HCBPWU62f4GBZBQm5m
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

# 王式文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式文 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式文（CBDB 343069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343069&o=json)
