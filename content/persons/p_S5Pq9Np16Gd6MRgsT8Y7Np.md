---
schema: wang-person/v1
id: p_S5Pq9Np16Gd6MRgsT8Y7Np
status: active
merged_into: null
display_name: 王翊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NY1fvjFu42M5RpEJp9zKsP
        subject_person_id: p_S5Pq9Np16Gd6MRgsT8Y7Np
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fUmaHjstPCFRKjopYNGWws
          claim_id: c_NY1fvjFu42M5RpEJp9zKsP
          source_id: s_S4knh8HztPTQouxfoWq5rW
          stance: supports
          locator: CBDB:381688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381688）
          source: &a1
            id: s_S4knh8HztPTQouxfoWq5rW
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 381688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381688&o=json
            external_identifier: CBDB:381688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jagm3afy56Xz5nBntNVEqi
        subject_person_id: p_S5Pq9Np16Gd6MRgsT8Y7Np
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TyaouXsFUpk5Nw4__8rrGz
          claim_id: c_Jagm3afy56Xz5nBntNVEqi
          source_id: s_S4knh8HztPTQouxfoWq5rW
          stance: supports
          locator: CBDB:381688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| bio.summary | 王翊，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 381688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381688&o=json)
