---
schema: wang-person/v1
id: p_TbHmQyrg4KXWtnjJ5C2FvR
status: active
merged_into: null
display_name: 王沛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yJyiG4bRxECEqzMYx59B8v
        subject_person_id: p_TbHmQyrg4KXWtnjJ5C2FvR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KNnCEMgs52HVZB8UBfgsYo
          claim_id: c_yJyiG4bRxECEqzMYx59B8v
          source_id: s_x1UTCchbiPjQxFuZpDgrVK
          stance: supports
          locator: CBDB:189525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189525）
          source: &a1
            id: s_x1UTCchbiPjQxFuZpDgrVK
            source_type: api_record
            title: 中国历代人物传记资料库：王沛（CBDB 189525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189525&o=json
            external_identifier: CBDB:189525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PsS2nq4stfdeXqAy8CH3WV
        subject_person_id: p_TbHmQyrg4KXWtnjJ5C2FvR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 827年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AtV2PcGFJBcVSjceB8qfBS
          claim_id: c_PsS2nq4stfdeXqAy8CH3WV
          source_id: s_x1UTCchbiPjQxFuZpDgrVK
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
        id: c_22xCG65TbH1oX3NBV1QvMj
        subject_person_id: p_TbHmQyrg4KXWtnjJ5C2FvR
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
        - id: cs_JS6s4yo2NuqqkfP3iSVzaQ
          claim_id: c_22xCG65TbH1oX3NBV1QvMj
          source_id: s_x1UTCchbiPjQxFuZpDgrVK
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
        id: c_TLw9ya1wM_Qr5Sb5Mr0FUA
        subject_person_id: p_TbHmQyrg4KXWtnjJ5C2FvR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cctHBa8zeZqaTvP6zovdPw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zGFtOzmZrfF12OjZQ2ytrx
          claim_id: c_TLw9ya1wM_Qr5Sb5Mr0FUA
          source_id: s_HCE7j9M9HzNGAwXLQGsGSU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HCE7j9M9HzNGAwXLQGsGSU
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 189526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189526&o=json
            external_identifier: CBDB:189526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cctHBa8zeZqaTvP6zovdPw
        status: active
        display_name: 王逢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沛 | accepted |
| death.date | 827年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cctHBa8zeZqaTvP6zovdPw | 王逢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逢（CBDB 189526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189526&o=json)
- [中国历代人物传记资料库：王沛（CBDB 189525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189525&o=json)
