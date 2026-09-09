---
schema: wang-person/v1
id: p_AhhvB59jPg4iSrR4uhcg7J
status: active
merged_into: null
display_name: 王從約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yY9i6H64Gu7jvFM7XS9MR3
        subject_person_id: p_AhhvB59jPg4iSrR4uhcg7J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DJLG5sUE6swH17ULHQXhHs
          claim_id: c_yY9i6H64Gu7jvFM7XS9MR3
          source_id: s_WqtbRc4JVS44hzULVKWqmD
          stance: supports
          locator: CBDB:192786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192786）
          source: &a1
            id: s_WqtbRc4JVS44hzULVKWqmD
            source_type: api_record
            title: 中国历代人物传记资料库：王從約（CBDB 192786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192786&o=json
            external_identifier: CBDB:192786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fPkq4mdiujhDoPKS1nuQsE
        subject_person_id: p_AhhvB59jPg4iSrR4uhcg7J
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 849年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V9QYvvf5BL9bJqUXXr8q6S
          claim_id: c_fPkq4mdiujhDoPKS1nuQsE
          source_id: s_WqtbRc4JVS44hzULVKWqmD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39Uf8TDLLp8CcNv9wgKSA8
        subject_person_id: p_AhhvB59jPg4iSrR4uhcg7J
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
        - id: cs_iaYrbo18t1M5s6PaxMD3Np
          claim_id: c_39Uf8TDLLp8CcNv9wgKSA8
          source_id: s_WqtbRc4JVS44hzULVKWqmD
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

# 王從約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從約 | accepted |
| death.date | 849年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從約（CBDB 192786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192786&o=json)
