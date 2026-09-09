---
schema: wang-person/v1
id: p_7BqQPRhQ477PSkgNLavSZ2
status: active
merged_into: null
display_name: 王騊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zir1D2z4FmLpkrWDzg1m2N
        subject_person_id: p_7BqQPRhQ477PSkgNLavSZ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x2B6C8HQ2VEn8F91gL4Dzo
          claim_id: c_zir1D2z4FmLpkrWDzg1m2N
          source_id: s_Zoy1kS679UHey8EUyuoDTY
          stance: supports
          locator: CBDB:98061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98061）
          source: &a1
            id: s_Zoy1kS679UHey8EUyuoDTY
            source_type: api_record
            title: 中国历代人物传记资料库：王騊（CBDB 98061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98061&o=json
            external_identifier: CBDB:98061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eSrH4NYKsuZLR6CHwdS569
        subject_person_id: p_7BqQPRhQ477PSkgNLavSZ2
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
        - id: cs_SqCSC7UnQ4PFbstJ6H452K
          claim_id: c_eSrH4NYKsuZLR6CHwdS569
          source_id: s_Zoy1kS679UHey8EUyuoDTY
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

# 王騊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騊 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王騊（CBDB 98061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98061&o=json)
