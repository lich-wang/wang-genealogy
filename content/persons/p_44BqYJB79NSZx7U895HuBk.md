---
schema: wang-person/v1
id: p_44BqYJB79NSZx7U895HuBk
status: active
merged_into: null
display_name: 王冰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f2KWyAmhkgQP2697zDxcpD
        subject_person_id: p_44BqYJB79NSZx7U895HuBk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZXPhXvgK4Ac7HYMWsQiZvw
          claim_id: c_f2KWyAmhkgQP2697zDxcpD
          source_id: s_qxN738BoX8sV5Rs2efh2Av
          stance: supports
          locator: CBDB:158168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158168）
          source: &a1
            id: s_qxN738BoX8sV5Rs2efh2Av
            source_type: api_record
            title: 中国历代人物传记资料库：王冰（CBDB 158168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158168&o=json
            external_identifier: CBDB:158168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dwGuG6a8AF7MQ8n9EyNBfq
        subject_person_id: p_44BqYJB79NSZx7U895HuBk
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
        - id: cs_8CjqXaB5H8ddguP8yLLJVF
          claim_id: c_dwGuG6a8AF7MQ8n9EyNBfq
          source_id: s_qxN738BoX8sV5Rs2efh2Av
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
        id: c_MjwXoZFlw4_u-mhxwOsRSv
        subject_person_id: p_44BqYJB79NSZx7U895HuBk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XQPtvapXgFixvHPKvmUd3C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rG-7PDkLKf9McozplQnsQU
          claim_id: c_MjwXoZFlw4_u-mhxwOsRSv
          source_id: s_qxN738BoX8sV5Rs2efh2Av
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XQPtvapXgFixvHPKvmUd3C
        status: active
        display_name: 王琳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_2fxm0FR-ZRLREMY1U94QNk
        subject_person_id: p_44BqYJB79NSZx7U895HuBk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rpm9GiSnPhv5RZN23kJhyJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nE-Czb9DNbWhGjxEkEiulw
          claim_id: c_2fxm0FR-ZRLREMY1U94QNk
          source_id: s_qxN738BoX8sV5Rs2efh2Av
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 2：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rpm9GiSnPhv5RZN23kJhyJ
        status: active
        display_name: 王從政
        merged_into_person_id: null
  other: []
---

# 王冰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冰 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XQPtvapXgFixvHPKvmUd3C | 王琳 | accepted |
| descendants | p_Rpm9GiSnPhv5RZN23kJhyJ | 王從政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冰（CBDB 158168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158168&o=json)
