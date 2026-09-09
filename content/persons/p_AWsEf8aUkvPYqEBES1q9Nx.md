---
schema: wang-person/v1
id: p_AWsEf8aUkvPYqEBES1q9Nx
status: active
merged_into: null
display_name: 王漸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y6JALtkXfHjC1P57RWnX7y
        subject_person_id: p_AWsEf8aUkvPYqEBES1q9Nx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yyDZnriBnQVVLVcHBW2DcN
          claim_id: c_Y6JALtkXfHjC1P57RWnX7y
          source_id: s_2K1Nssajtnrr2UQ6aJRVcQ
          stance: supports
          locator: CBDB:92080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92080）
          source: &a1
            id: s_2K1Nssajtnrr2UQ6aJRVcQ
            source_type: api_record
            title: 中国历代人物传记资料库：王漸（CBDB 92080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92080&o=json
            external_identifier: CBDB:92080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A2y7srR5x4fv5tkC42bfdq
        subject_person_id: p_AWsEf8aUkvPYqEBES1q9Nx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xFyAe9ATDE4aEmUYZYGm7G
          claim_id: c_A2y7srR5x4fv5tkC42bfdq
          source_id: s_2K1Nssajtnrr2UQ6aJRVcQ
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

# 王漸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漸 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漸（CBDB 92080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92080&o=json)
