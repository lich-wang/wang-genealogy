---
schema: wang-person/v1
id: p_ao822YFt7JBepLqFY7vDGJ
status: active
merged_into: null
display_name: 王丘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sEMs9zE7ekuBrJ6wuBW3G9
        subject_person_id: p_ao822YFt7JBepLqFY7vDGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6suioHp2DVU7nHTVSLc8Lt
          claim_id: c_sEMs9zE7ekuBrJ6wuBW3G9
          source_id: s_saqAWbM7hK4NPA8wQdU9c1
          stance: supports
          locator: CBDB:196237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（196237）
          source: &a1
            id: s_saqAWbM7hK4NPA8wQdU9c1
            source_type: api_record
            title: 中国历代人物传记资料库：王丘（CBDB 196237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196237&o=json
            external_identifier: CBDB:196237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4n125W51MBqKzEAHuB7UZD
        subject_person_id: p_ao822YFt7JBepLqFY7vDGJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BRTv3NNyAG8jQ7csHVM6mQ
          claim_id: c_4n125W51MBqKzEAHuB7UZD
          source_id: s_saqAWbM7hK4NPA8wQdU9c1
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
        id: c_SuJoB5AVWnGD2sy4omGFAA
        subject_person_id: p_ao822YFt7JBepLqFY7vDGJ
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
        - id: cs_4WAhYgxzCALwuVA7sp18RA
          claim_id: c_SuJoB5AVWnGD2sy4omGFAA
          source_id: s_saqAWbM7hK4NPA8wQdU9c1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jaYK8j_t0AkfPvBrXB6G3Q
        subject_person_id: p_jgind6LWu7AGQf2WTE9JAF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ao822YFt7JBepLqFY7vDGJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-I0owSiLs4OOJO4SR_XWep
          claim_id: c_jaYK8j_t0AkfPvBrXB6G3Q
          source_id: s_saqAWbM7hK4NPA8wQdU9c1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jgind6LWu7AGQf2WTE9JAF
        status: active
        display_name: 王同晊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王丘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丘 | accepted |
| death.date | 743年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jgind6LWu7AGQf2WTE9JAF | 王同晊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王丘（CBDB 196237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196237&o=json)
