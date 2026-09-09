---
schema: wang-person/v1
id: p_UV3GJVKM8CCPJAA8xMZ52m
status: active
merged_into: null
display_name: 王揮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VEKWqSq9sUm9FAn4b9LZrD
        subject_person_id: p_UV3GJVKM8CCPJAA8xMZ52m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tx86ZiAwYjwPT9WqMA3cgF
          claim_id: c_VEKWqSq9sUm9FAn4b9LZrD
          source_id: s_Cu84jhKtHV7WKaQQpHkZpY
          stance: supports
          locator: CBDB:38431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38431）
          source: &a1
            id: s_Cu84jhKtHV7WKaQQpHkZpY
            source_type: api_record
            title: 中国历代人物传记资料库：王揮（CBDB 38431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38431&o=json
            external_identifier: CBDB:38431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eR8KCDWJBT5eN63EjBtsJn
        subject_person_id: p_UV3GJVKM8CCPJAA8xMZ52m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1090年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tz4rfXRceB64qXqvXcNHDE
          claim_id: c_eR8KCDWJBT5eN63EjBtsJn
          source_id: s_Cu84jhKtHV7WKaQQpHkZpY
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
        id: c_d4btS9aSQVHJ6BpysPHSvF
        subject_person_id: p_UV3GJVKM8CCPJAA8xMZ52m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1160年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gexUCV6Hyws3g566WemC9F
          claim_id: c_d4btS9aSQVHJ6BpysPHSvF
          source_id: s_Cu84jhKtHV7WKaQQpHkZpY
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
        id: c_B4TAkgbR9UBdKopBKXfAwK
        subject_person_id: p_UV3GJVKM8CCPJAA8xMZ52m
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
        - id: cs_m6Zfu95ms4VAR1vcnGRx9K
          claim_id: c_B4TAkgbR9UBdKopBKXfAwK
          source_id: s_Cu84jhKtHV7WKaQQpHkZpY
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

# 王揮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王揮 | accepted |
| birth.date | 1090年 | accepted |
| death.date | 1160年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王揮（CBDB 38431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38431&o=json)
