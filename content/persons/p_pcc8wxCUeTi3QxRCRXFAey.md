---
schema: wang-person/v1
id: p_pcc8wxCUeTi3QxRCRXFAey
status: active
merged_into: null
display_name: 王端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ShArBEjnfqCSsy9xqwz7Hn
        subject_person_id: p_pcc8wxCUeTi3QxRCRXFAey
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VfLFn7aiNK9L7zSXw1KBYt
          claim_id: c_ShArBEjnfqCSsy9xqwz7Hn
          source_id: s_AbTWeCLApEsbEvV8JY5ZLS
          stance: supports
          locator: CBDB:32763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32763）
          source: &a1
            id: s_AbTWeCLApEsbEvV8JY5ZLS
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 32763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32763&o=json
            external_identifier: CBDB:32763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N3PLgzyJgaD3UXTKQ8HsEZ
        subject_person_id: p_pcc8wxCUeTi3QxRCRXFAey
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
        - id: cs_XP4g8H13NFY7QcZWqMb4my
          claim_id: c_N3PLgzyJgaD3UXTKQ8HsEZ
          source_id: s_AbTWeCLApEsbEvV8JY5ZLS
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
        id: c_zKnNzxYUQ3P19zwoqjEz4G
        subject_person_id: p_pcc8wxCUeTi3QxRCRXFAey
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P7GhwesJiVs4C1A4Nba7Jb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Ui12YhWvBP3lc_x7WTtri
          claim_id: c_zKnNzxYUQ3P19zwoqjEz4G
          source_id: s_AbTWeCLApEsbEvV8JY5ZLS
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P7GhwesJiVs4C1A4Nba7Jb
        status: active
        display_name: 王紹
        merged_into_person_id: null
    - claim:
        id: c_piip1hHQGjsOXw1jBlT8mx
        subject_person_id: p_pcc8wxCUeTi3QxRCRXFAey
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KA8pZJq3afCN4g5AfhsWLC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jeoB85qcZCA7JVmihu2SoD
          claim_id: c_piip1hHQGjsOXw1jBlT8mx
          source_id: s_AbTWeCLApEsbEvV8JY5ZLS
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KA8pZJq3afCN4g5AfhsWLC
        status: active
        display_name: 王綽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_P7GhwesJiVs4C1A4Nba7Jb | 王紹 | accepted |
| children | p_KA8pZJq3afCN4g5AfhsWLC | 王綽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 32763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32763&o=json)
