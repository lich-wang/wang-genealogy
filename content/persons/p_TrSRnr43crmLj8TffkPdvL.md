---
schema: wang-person/v1
id: p_TrSRnr43crmLj8TffkPdvL
status: active
merged_into: null
display_name: 王仁則
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_epUbAEAK5xmebNkyW7WsdT
        subject_person_id: p_TrSRnr43crmLj8TffkPdvL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aG72wMTyFU6q6Ftkm7cmh6
          claim_id: c_epUbAEAK5xmebNkyW7WsdT
          source_id: s_ju4PLQeqrmVPY1PGNRb9gY
          stance: supports
          locator: CBDB:138809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138809）
          source: &a1
            id: s_ju4PLQeqrmVPY1PGNRb9gY
            source_type: api_record
            title: 中国历代人物传记资料库：王仁則（CBDB 138809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138809&o=json
            external_identifier: CBDB:138809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9ikNfa35piJYe2Uh3Q59pi
        subject_person_id: p_TrSRnr43crmLj8TffkPdvL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 587年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZxoVw9kjWcE56D1hiLLR8M
          claim_id: c_9ikNfa35piJYe2Uh3Q59pi
          source_id: s_ju4PLQeqrmVPY1PGNRb9gY
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
        id: c_FKqNqfg6MsPtpAKn3f9kuT
        subject_person_id: p_TrSRnr43crmLj8TffkPdvL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 626年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kJTLZKecSKfp9JR6fWS4C
          claim_id: c_FKqNqfg6MsPtpAKn3f9kuT
          source_id: s_ju4PLQeqrmVPY1PGNRb9gY
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
        id: c_YuBUaoMsJ7zQPCB1p2pcCY
        subject_person_id: p_TrSRnr43crmLj8TffkPdvL
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
        - id: cs_3gXMnwU31HqB2u5SBZM9tW
          claim_id: c_YuBUaoMsJ7zQPCB1p2pcCY
          source_id: s_ju4PLQeqrmVPY1PGNRb9gY
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

# 王仁則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁則 | accepted |
| birth.date | 587年 | accepted |
| death.date | 626年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁則（CBDB 138809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138809&o=json)
