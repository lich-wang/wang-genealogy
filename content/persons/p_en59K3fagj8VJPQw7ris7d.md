---
schema: wang-person/v1
id: p_en59K3fagj8VJPQw7ris7d
status: active
merged_into: null
display_name: 王崇術
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sJpPLsPf2APoN4NjSmPTTe
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇術
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_39yDV8zECY5v5XWk1V7o9y
          claim_id: c_sJpPLsPf2APoN4NjSmPTTe
          source_id: s_eJ52n3w5zzgSTpQ5eDCkT9
          stance: supports
          locator: CBDB:145041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145041）
          source: &a1
            id: s_eJ52n3w5zzgSTpQ5eDCkT9
            source_type: api_record
            title: 中国历代人物传记资料库：王崇術（CBDB 145041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145041&o=json
            external_identifier: CBDB:145041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_92wuQL6jG8Ey388GGVaiXQ
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CNAKxvUcKEGARmhj7C2KFV
          claim_id: c_92wuQL6jG8Ey388GGVaiXQ
          source_id: s_eJ52n3w5zzgSTpQ5eDCkT9
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
        id: c_nhQD6wPCC2UFoYKjPkAH9K
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 749年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYVfCLJkNnC1LXdZEpNFqN
          claim_id: c_nhQD6wPCC2UFoYKjPkAH9K
          source_id: s_eJ52n3w5zzgSTpQ5eDCkT9
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
        id: c_3dpTRdAmDN4oA5HVWZN6ZE
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
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
        - id: cs_6gSBEs85QrZvXskrwLmzk6
          claim_id: c_3dpTRdAmDN4oA5HVWZN6ZE
          source_id: s_eJ52n3w5zzgSTpQ5eDCkT9
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
        id: c_PJk-U4a3eVwNCPsnA0V_PB
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1D7RB15BHLuwCjT8rR8VHQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dgfElDRlTkhPGac8nEIFzX
          claim_id: c_PJk-U4a3eVwNCPsnA0V_PB
          source_id: s_rJJEf6XoNiYcXwHwXx9wiG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 35684：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rJJEf6XoNiYcXwHwXx9wiG
            source_type: api_record
            title: 中国历代人物传记资料库：王奇哲（CBDB 194722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194722&o=json
            external_identifier: CBDB:194722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1D7RB15BHLuwCjT8rR8VHQ
        status: active
        display_name: 王奇哲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇術

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇術 | accepted |
| birth.date | 678年 | accepted |
| death.date | 749年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1D7RB15BHLuwCjT8rR8VHQ | 王奇哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇術（CBDB 145041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145041&o=json)
- [中国历代人物传记资料库：王奇哲（CBDB 194722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194722&o=json)
