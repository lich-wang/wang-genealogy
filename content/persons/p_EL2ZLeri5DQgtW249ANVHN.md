---
schema: wang-person/v1
id: p_EL2ZLeri5DQgtW249ANVHN
status: active
merged_into: null
display_name: 王肇謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SLPBE185T52DGc1BfHY5km
        subject_person_id: p_EL2ZLeri5DQgtW249ANVHN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8NPYdwCWHUwy11DeSucmii
          claim_id: c_SLPBE185T52DGc1BfHY5km
          source_id: s_dSMFERUF2nvrNHrNMyZ55R
          stance: supports
          locator: CBDB:69430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69430）
          source: &a1
            id: s_dSMFERUF2nvrNHrNMyZ55R
            source_type: api_record
            title: 中国历代人物传记资料库：王肇謙（CBDB 69430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69430&o=json
            external_identifier: CBDB:69430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N4NBoUx5NSR7QxkwYhEjTF
        subject_person_id: p_EL2ZLeri5DQgtW249ANVHN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1807年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LPCvd7mqRWb5tPE9NvWmTL
          claim_id: c_N4NBoUx5NSR7QxkwYhEjTF
          source_id: s_dSMFERUF2nvrNHrNMyZ55R
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
        id: c_rMnc9jeYTYgt81vAtNHFcC
        subject_person_id: p_EL2ZLeri5DQgtW249ANVHN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8A12tLCGmGqiQra7iEYk3x
          claim_id: c_rMnc9jeYTYgt81vAtNHFcC
          source_id: s_dSMFERUF2nvrNHrNMyZ55R
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
        id: c_fM98trKHmAhnW1gJQMXpEL
        subject_person_id: p_EL2ZLeri5DQgtW249ANVHN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇謙（1807年—1857年），清人物。籍贯深澤，入仕鄉貢舉人，曾任縣知縣、知府、知州。（中国历代人物传记资料库 CBDB 69430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MKMJyQkdVt0Iz_Dwl7wNCx
          claim_id: c_fM98trKHmAhnW1gJQMXpEL
          source_id: s_dSMFERUF2nvrNHrNMyZ55R
          stance: supports
          locator: CBDB:69430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wZq5kvvV5YTpxxCtqupm9u
        subject_person_id: p_96ASJoWVHN4qhDM91uwbHB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EL2ZLeri5DQgtW249ANVHN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F6yxoDD8GK2ih71pRrIHkm
          claim_id: c_wZq5kvvV5YTpxxCtqupm9u
          source_id: s_nDpCS3mzR6PXoFdTdGzBGm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13139：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nDpCS3mzR6PXoFdTdGzBGm
            source_type: api_record
            title: 中国历代人物传记资料库：王錫培（CBDB 526961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526961&o=json
            external_identifier: CBDB:526961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_96ASJoWVHN4qhDM91uwbHB
        status: active
        display_name: 王錫培
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王肇謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇謙 | accepted |
| birth.date | 1807年 | accepted |
| death.date | 1857年 | accepted |
| bio.summary | 王肇謙（1807年—1857年），清人物。籍贯深澤，入仕鄉貢舉人，曾任縣知縣、知府、知州。（中国历代人物传记资料库 CBDB 69430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_96ASJoWVHN4qhDM91uwbHB | 王錫培 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錫培（CBDB 526961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526961&o=json)
- [中国历代人物传记资料库：王肇謙（CBDB 69430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69430&o=json)
