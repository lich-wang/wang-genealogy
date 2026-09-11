---
schema: wang-person/v1
id: p_WGN9wvJbsoV4MZHf6rn2aA
status: active
merged_into: null
display_name: 王萬龍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qyBwSYUZSASerjASCCDaGN
        subject_person_id: p_WGN9wvJbsoV4MZHf6rn2aA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TvswfVMcha88pQojYfGBnF
          claim_id: c_qyBwSYUZSASerjASCCDaGN
          source_id: s_3x1Ur5GNf53XHzKkvTRQ9n
          stance: supports
          locator: CBDB:69370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69370）
          source: &a1
            id: s_3x1Ur5GNf53XHzKkvTRQ9n
            source_type: api_record
            title: 中国历代人物传记资料库：王萬龍（CBDB 69370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69370&o=json
            external_identifier: CBDB:69370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_woZeyaBSBBCvgFcT6WDHp5
        subject_person_id: p_WGN9wvJbsoV4MZHf6rn2aA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_widZGL22oKTqQ5iurDQCMR
          claim_id: c_woZeyaBSBBCvgFcT6WDHp5
          source_id: s_3x1Ur5GNf53XHzKkvTRQ9n
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
        id: c_DotwYcEDBdTcQ42MQ1FCk2
        subject_person_id: p_WGN9wvJbsoV4MZHf6rn2aA
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
        - id: cs_agqz2Vj3SAM364Le3EJgHc
          claim_id: c_DotwYcEDBdTcQ42MQ1FCk2
          source_id: s_3x1Ur5GNf53XHzKkvTRQ9n
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
        id: c_I_01SkVSnM-MewmT3pAQLh
        subject_person_id: p_WGN9wvJbsoV4MZHf6rn2aA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z4NuQyYedqRsHN3HCm4JpM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ln9koLKbzgLc3o2sk2od6
          claim_id: c_I_01SkVSnM-MewmT3pAQLh
          source_id: s_3x1Ur5GNf53XHzKkvTRQ9n
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13075：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z4NuQyYedqRsHN3HCm4JpM
        status: active
        display_name: 王維鏞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬龍 | accepted |
| death.date | 1841年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z4NuQyYedqRsHN3HCm4JpM | 王維鏞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬龍（CBDB 69370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69370&o=json)
