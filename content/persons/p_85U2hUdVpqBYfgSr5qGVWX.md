---
schema: wang-person/v1
id: p_85U2hUdVpqBYfgSr5qGVWX
status: active
merged_into: null
display_name: 王崧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aYfifAFQzfMEW4JAnCjYGY
        subject_person_id: p_85U2hUdVpqBYfgSr5qGVWX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NfSbp4QkKUMT2M2c5W5vpf
          claim_id: c_aYfifAFQzfMEW4JAnCjYGY
          source_id: s_WtaVV5CYKrmMeg6z7UKtZS
          stance: supports
          locator: CBDB:69336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69336）
          source: &a1
            id: s_WtaVV5CYKrmMeg6z7UKtZS
            source_type: api_record
            title: 中国历代人物传记资料库：王崧（CBDB 69336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69336&o=json
            external_identifier: CBDB:69336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_312xAW6a3P8mSBuDVg9B97
        subject_person_id: p_85U2hUdVpqBYfgSr5qGVWX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1752年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vsc9YrJCu2V2TzShGePzVA
          claim_id: c_312xAW6a3P8mSBuDVg9B97
          source_id: s_WtaVV5CYKrmMeg6z7UKtZS
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
        id: c_bqxhhsRmnkvKoqQuBHF9cD
        subject_person_id: p_85U2hUdVpqBYfgSr5qGVWX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1837年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E6WpZVJCcJFJjknH7W3mLU
          claim_id: c_bqxhhsRmnkvKoqQuBHF9cD
          source_id: s_WtaVV5CYKrmMeg6z7UKtZS
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
        id: c_fenB5Le4DCHQmvAbNL9wD1
        subject_person_id: p_85U2hUdVpqBYfgSr5qGVWX
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
        - id: cs_P2uRTqLHw5EH7jVYsjGZsb
          claim_id: c_fenB5Le4DCHQmvAbNL9wD1
          source_id: s_WtaVV5CYKrmMeg6z7UKtZS
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

# 王崧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崧 | accepted |
| birth.date | 1752年 | accepted |
| death.date | 1837年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崧（CBDB 69336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69336&o=json)
