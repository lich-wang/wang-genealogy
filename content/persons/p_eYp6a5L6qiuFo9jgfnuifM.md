---
schema: wang-person/v1
id: p_eYp6a5L6qiuFo9jgfnuifM
status: active
merged_into: null
display_name: 王并
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8zEpn8XjXXH7xvgoH8D2G6
        subject_person_id: p_eYp6a5L6qiuFo9jgfnuifM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王并
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ae2mCj7kz4T416JFmfRK8S
          claim_id: c_8zEpn8XjXXH7xvgoH8D2G6
          source_id: s_QykoE5m8efNqAuzo1FDfvi
          stance: supports
          locator: CBDB:170487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170487）
          source: &a1
            id: s_QykoE5m8efNqAuzo1FDfvi
            source_type: api_record
            title: 中国历代人物传记资料库：王并（CBDB 170487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170487&o=json
            external_identifier: CBDB:170487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_u5fX8c5LPSuU58GkoCpvNA
        subject_person_id: p_eYp6a5L6qiuFo9jgfnuifM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 679年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uCppBT1UT4XZkvCj3u93YY
          claim_id: c_u5fX8c5LPSuU58GkoCpvNA
          source_id: s_QykoE5m8efNqAuzo1FDfvi
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
        id: c_oPAZD4NvZHR8cRoXX2jjT7
        subject_person_id: p_eYp6a5L6qiuFo9jgfnuifM
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
        - id: cs_7Sf4aGnVboogoPg1xA8HL8
          claim_id: c_oPAZD4NvZHR8cRoXX2jjT7
          source_id: s_QykoE5m8efNqAuzo1FDfvi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_49GJz17NvYeG9moVBH52SL
        subject_person_id: p_eYp6a5L6qiuFo9jgfnuifM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2jLF8Z5zHXYNSfB95H7d2Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kpIY4FCbY7hXWP3tLYiq0m
          claim_id: c_49GJz17NvYeG9moVBH52SL
          source_id: s_QykoE5m8efNqAuzo1FDfvi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2jLF8Z5zHXYNSfB95H7d2Z
        status: active
        display_name: 王義瓚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王并

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王并 | accepted |
| death.date | 679年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2jLF8Z5zHXYNSfB95H7d2Z | 王義瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王并（CBDB 170487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170487&o=json)
