---
schema: wang-person/v1
id: p_8LDhVhHS14LNBHSdAAFrN5
status: active
merged_into: null
display_name: 王建
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2yCG5BWSCwkRofGauhcZC2
        subject_person_id: p_8LDhVhHS14LNBHSdAAFrN5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7zqkUQhqmy5fRtoXtBumCu
          claim_id: c_2yCG5BWSCwkRofGauhcZC2
          source_id: s_HR71AH8auK69CJZ4RX61Gz
          stance: supports
          locator: CBDB:140076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140076）
          source: &a1
            id: s_HR71AH8auK69CJZ4RX61Gz
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 140076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140076&o=json
            external_identifier: CBDB:140076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8oZg5Eo9o7mkbPFWkoN6hG
        subject_person_id: p_8LDhVhHS14LNBHSdAAFrN5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Cqn2pNKaHKzvgAbDMN4gs
          claim_id: c_8oZg5Eo9o7mkbPFWkoN6hG
          source_id: s_HR71AH8auK69CJZ4RX61Gz
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
        id: c_KS2cbEiLA5U1UbErLDeVRt
        subject_person_id: p_8LDhVhHS14LNBHSdAAFrN5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 698年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CY58uSNu15u78B2atfagYT
          claim_id: c_KS2cbEiLA5U1UbErLDeVRt
          source_id: s_HR71AH8auK69CJZ4RX61Gz
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
        id: c_3Ri6ZHbQZyLtVAxLbUxWC7
        subject_person_id: p_8LDhVhHS14LNBHSdAAFrN5
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
        - id: cs_GFfLLDen4sKgcC9JPqeAX5
          claim_id: c_3Ri6ZHbQZyLtVAxLbUxWC7
          source_id: s_HR71AH8auK69CJZ4RX61Gz
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

# 王建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建 | accepted |
| birth.date | 621年 | accepted |
| death.date | 698年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 140076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140076&o=json)
