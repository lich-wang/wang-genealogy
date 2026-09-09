---
schema: wang-person/v1
id: p_4sjf5K8PJZCH7k9Mz9m5Aj
status: active
merged_into: null
display_name: 王伸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5FiQZbC5K3G7H3NQ2qGEDC
        subject_person_id: p_4sjf5K8PJZCH7k9Mz9m5Aj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MVLSwXPLBBHzMDEpf3p6Pa
          claim_id: c_5FiQZbC5K3G7H3NQ2qGEDC
          source_id: s_PK2TUmQfEkjn3w7NV827YY
          stance: supports
          locator: CBDB:445522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445522）
          source: &a1
            id: s_PK2TUmQfEkjn3w7NV827YY
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 445522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445522&o=json
            external_identifier: CBDB:445522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MKtVdzDM6zcHyBwvxXWTGr
        subject_person_id: p_4sjf5K8PJZCH7k9Mz9m5Aj
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
        - id: cs_dobYCmC9bXbZ48Jk519pFc
          claim_id: c_MKtVdzDM6zcHyBwvxXWTGr
          source_id: s_PK2TUmQfEkjn3w7NV827YY
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

# 王伸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伸 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伸（CBDB 445522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445522&o=json)
