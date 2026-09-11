---
schema: wang-person/v1
id: p_mCtAQA38FjMf51Dp9sA6Hp
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_86R6GMoH4QByrXg4dJ9B3Q
        subject_person_id: p_mCtAQA38FjMf51Dp9sA6Hp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HAn483WLBnoivMd8oRefhH
          claim_id: c_86R6GMoH4QByrXg4dJ9B3Q
          source_id: s_kXTY2YMdc649engu3sT2ZU
          stance: supports
          locator: CBDB:272832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272832）
          source: &a1
            id: s_kXTY2YMdc649engu3sT2ZU
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 272832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272832&o=json
            external_identifier: CBDB:272832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H6ama7ex8e64Pv6NcN8gyk
        subject_person_id: p_mCtAQA38FjMf51Dp9sA6Hp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3k23GC27DJ2aztCaTj7V5a
          claim_id: c_H6ama7ex8e64Pv6NcN8gyk
          source_id: s_kXTY2YMdc649engu3sT2ZU
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
        id: c_B7y3WJ1rkYeFsh1ye0I2-X
        subject_person_id: p_mCtAQA38FjMf51Dp9sA6Hp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WF551B42q65ujmx95gTJGt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HOXscXbmO_5MJftAu3zXBy
          claim_id: c_B7y3WJ1rkYeFsh1ye0I2-X
          source_id: s_kXTY2YMdc649engu3sT2ZU
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WF551B42q65ujmx95gTJGt
        status: active
        display_name: 王綖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WF551B42q65ujmx95gTJGt | 王綖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 272832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272832&o=json)
