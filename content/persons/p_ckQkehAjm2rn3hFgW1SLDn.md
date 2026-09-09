---
schema: wang-person/v1
id: p_ckQkehAjm2rn3hFgW1SLDn
status: active
merged_into: null
display_name: 王平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m78417MmJnW6S6L6s6qVJJ
        subject_person_id: p_ckQkehAjm2rn3hFgW1SLDn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hG9V2tMxAQg1YaTckq639v
          claim_id: c_m78417MmJnW6S6L6s6qVJJ
          source_id: s_Sq9mToAc9R7an6v6Qu7tjp
          stance: supports
          locator: CBDB:1856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1856）
          source: &a1
            id: s_Sq9mToAc9R7an6v6Qu7tjp
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 1856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1856&o=json
            external_identifier: CBDB:1856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bcQx5hDLX9bFDT6N6F6sZy
        subject_person_id: p_ckQkehAjm2rn3hFgW1SLDn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 985年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AwXUx9P4Xvxvf6MseeP5Pv
          claim_id: c_bcQx5hDLX9bFDT6N6F6sZy
          source_id: s_Sq9mToAc9R7an6v6Qu7tjp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4YpvBNQP5NJEz4yc39iDSy
        subject_person_id: p_ckQkehAjm2rn3hFgW1SLDn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1047年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kc5E4emTtnYf62Tv2zB7KG
          claim_id: c_4YpvBNQP5NJEz4yc39iDSy
          source_id: s_Sq9mToAc9R7an6v6Qu7tjp
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
        id: c_DBnWYj3VUoQFWNWsJd4kih
        subject_person_id: p_ckQkehAjm2rn3hFgW1SLDn
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
        - id: cs_92r6NjreZ1zP5DLNcAU61M
          claim_id: c_DBnWYj3VUoQFWNWsJd4kih
          source_id: s_Sq9mToAc9R7an6v6Qu7tjp
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

# 王平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平 | accepted |
| birth.date | 985年 | accepted |
| death.date | 1047年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王平（CBDB 1856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1856&o=json)
