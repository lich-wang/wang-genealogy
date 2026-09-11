---
schema: wang-person/v1
id: p_AxUYHXEKALJdp77kxGTxUX
status: active
merged_into: null
display_name: 王彭年
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKEZ3foTW27eHKUmba53tz
        subject_person_id: p_AxUYHXEKALJdp77kxGTxUX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彭年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a14sKsVDmiabTsaw7cv1tZ
          claim_id: c_cKEZ3foTW27eHKUmba53tz
          source_id: s_PmAJ4qpp338JfGPAMvYL29
          stance: supports
          locator: CBDB:26491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26491）
          source: &a1
            id: s_PmAJ4qpp338JfGPAMvYL29
            source_type: api_record
            title: 中国历代人物传记资料库：王彭年（CBDB 26491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26491&o=json
            external_identifier: CBDB:26491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xZJbhYQRNfWBr6DKyBuLNB
        subject_person_id: p_AxUYHXEKALJdp77kxGTxUX
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
        - id: cs_QJfxqGvU6rzZHVZ9Ue5pKd
          claim_id: c_xZJbhYQRNfWBr6DKyBuLNB
          source_id: s_PmAJ4qpp338JfGPAMvYL29
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TIhdXr0MIj_N93Up-3CxWL
        subject_person_id: p_vgoWcNsg5TJm8CAAjNf5Xr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AxUYHXEKALJdp77kxGTxUX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0KR544ZMA49mQ6IAXtYxSb
          claim_id: c_TIhdXr0MIj_N93Up-3CxWL
          source_id: s_PmAJ4qpp338JfGPAMvYL29
          stance: supports
          locator: CBDB 双向互证（父 王道卿 ⇄ 子 王彭年）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_vgoWcNsg5TJm8CAAjNf5Xr
        status: active
        display_name: 王道卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彭年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彭年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vgoWcNsg5TJm8CAAjNf5Xr | 王道卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彭年（CBDB 26491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26491&o=json)
