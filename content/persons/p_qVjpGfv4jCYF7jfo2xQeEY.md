---
schema: wang-person/v1
id: p_qVjpGfv4jCYF7jfo2xQeEY
status: active
merged_into: null
display_name: 王思九
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mr8kGKRbVKq4ofyZk74ovJ
        subject_person_id: p_qVjpGfv4jCYF7jfo2xQeEY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思九
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MJKQjZUJM3iPQfZKt2kcN4
          claim_id: c_Mr8kGKRbVKq4ofyZk74ovJ
          source_id: s_MPzMiaE2JRj61rSCHkRE1R
          stance: supports
          locator: CBDB:526932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526932）
          source: &a1
            id: s_MPzMiaE2JRj61rSCHkRE1R
            source_type: api_record
            title: 中国历代人物传记资料库：王思九（CBDB 526932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526932&o=json
            external_identifier: CBDB:526932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ep64M6B6rm1Yhu5HPn6YFU
        subject_person_id: p_qVjpGfv4jCYF7jfo2xQeEY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JUofirQRWADx2Hsq7rR5hX
          claim_id: c_ep64M6B6rm1Yhu5HPn6YFU
          source_id: s_MPzMiaE2JRj61rSCHkRE1R
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
  descendants:
    - claim:
        id: c_i59wrA34LgomOz493YH0Qx
        subject_person_id: p_qVjpGfv4jCYF7jfo2xQeEY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHYbJsS7LE12BDd6qGrWUt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MlKgahBvC6IdE1JHQXz99h
          claim_id: c_i59wrA34LgomOz493YH0Qx
          source_id: s_MPzMiaE2JRj61rSCHkRE1R
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13096：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DHYbJsS7LE12BDd6qGrWUt
        status: active
        display_name: 王蒔蘭
        merged_into_person_id: null
  other: []
---

# 王思九

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思九 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DHYbJsS7LE12BDd6qGrWUt | 王蒔蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思九（CBDB 526932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526932&o=json)
