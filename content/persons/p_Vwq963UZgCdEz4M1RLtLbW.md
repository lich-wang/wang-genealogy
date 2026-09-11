---
schema: wang-person/v1
id: p_Vwq963UZgCdEz4M1RLtLbW
status: active
merged_into: null
display_name: 王榮烈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lis1BKsLrxF2NSGK4d3RaL
        subject_person_id: p_Vwq963UZgCdEz4M1RLtLbW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oDBg8qRepZgiV4aQDo3C97
          claim_id: c_Lis1BKsLrxF2NSGK4d3RaL
          source_id: s_QEtwfeXYd7eEiavco9X2Ja
          stance: supports
          locator: CBDB:69410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69410）
          source: &a1
            id: s_QEtwfeXYd7eEiavco9X2Ja
            source_type: api_record
            title: 中国历代人物传记资料库：王榮烈（CBDB 69410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69410&o=json
            external_identifier: CBDB:69410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DEwMtAiwzWwHhGufHvKZey
        subject_person_id: p_Vwq963UZgCdEz4M1RLtLbW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CZgEE4qyvr7Zfke5KBZJrW
          claim_id: c_DEwMtAiwzWwHhGufHvKZey
          source_id: s_QEtwfeXYd7eEiavco9X2Ja
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
        id: c_LnjUNzU46rMRFcCyxe65y3
        subject_person_id: p_Vwq963UZgCdEz4M1RLtLbW
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
        - id: cs_tg2cQ6nrARtjhpAJT81vsv
          claim_id: c_LnjUNzU46rMRFcCyxe65y3
          source_id: s_QEtwfeXYd7eEiavco9X2Ja
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
        id: c_RVXnAEvWJmbsyeUHDQdHBG
        subject_person_id: p_Vwq963UZgCdEz4M1RLtLbW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e17TBTgCoGXmeXHGWicw9h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zo5zm2UBRP4JXsC66RjzzC
          claim_id: c_RVXnAEvWJmbsyeUHDQdHBG
          source_id: s_VU5AwBQA7y8HFfrcTjdMHS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13116：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VU5AwBQA7y8HFfrcTjdMHS
            source_type: api_record
            title: 中国历代人物传记资料库：王承謙（CBDB 526943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526943&o=json
            external_identifier: CBDB:526943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_e17TBTgCoGXmeXHGWicw9h
        status: active
        display_name: 王承謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮烈 | accepted |
| death.date | 1860年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_e17TBTgCoGXmeXHGWicw9h | 王承謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承謙（CBDB 526943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526943&o=json)
- [中国历代人物传记资料库：王榮烈（CBDB 69410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69410&o=json)
