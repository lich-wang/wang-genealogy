---
schema: wang-person/v1
id: p_xETp6apMdzRFX9CJqBM6Mg
status: active
merged_into: null
display_name: 田氏
cbdb_id: 330751
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uZgsqw3B6WucW7Zdg4YVkn
        subject_person_id: p_xETp6apMdzRFX9CJqBM6Mg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 田氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qTYbTeeSqMv4kmEEgMndXZ
          claim_id: c_uZgsqw3B6WucW7Zdg4YVkn
          source_id: s_26mkMpas4HGSQ6arNuKJcZ
          stance: supports
          locator: Q65857717
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_26mkMpas4HGSQ6arNuKJcZ
            source_type: api_record
            title: 维基数据：田氏（Q65857717）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65857717
            external_identifier: Q65857717
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_5vizbLVF15bnLNzA7dvNTQ
          claim_id: c_uZgsqw3B6WucW7Zdg4YVkn
          source_id: s_PeGJZApEmfSqt9XeHEawUo
          stance: supports
          locator: CBDB:330751
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_PeGJZApEmfSqt9XeHEawUo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：田氏（330751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330751&o=json
            external_identifier: CBDB:330751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1X6nP5gGag84sM97eTNMeL
        subject_person_id: p_hkxRnkwdABHFBvtuuQxejY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xETp6apMdzRFX9CJqBM6Mg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q6r6SSTYAYDSJ78wNtzJ5r
          claim_id: c_1X6nP5gGag84sM97eTNMeL
          source_id: s_26mkMpas4HGSQ6arNuKJcZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_A71pHwsXXGGyxpeM9TkdmU
          claim_id: c_1X6nP5gGag84sM97eTNMeL
          source_id: s_hU2T3rNMDcHdxgdRjFWsNh
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_hU2T3rNMDcHdxgdRjFWsNh
            source_type: api_record
            title: 维基数据：王象坤（Q16904084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16904084
            external_identifier: Q16904084
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:07.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E5%9D%A4
        - id: cs_VFhUESkdPi3F23ZdADpgQj
          claim_id: c_1X6nP5gGag84sM97eTNMeL
          source_id: s_JKK5kJVto6JWG92bh3X87P
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖四十四年進士登科錄:一卷
          source:
            id: s_JKK5kJVto6JWG92bh3X87P
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王象坤（205267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205267&o=json
            external_identifier: CBDB:205267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:07.911Z
            metadata_json: null
      object_person:
        id: p_hkxRnkwdABHFBvtuuQxejY
        status: active
        display_name: 王象坤
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 田氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 田氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hkxRnkwdABHFBvtuuQxejY | 王象坤 | accepted |

## 外部来源

- [维基数据：田氏（Q65857717）](https://www.wikidata.org/wiki/Q65857717)
- [维基数据：王象坤（Q16904084）](https://www.wikidata.org/wiki/Q16904084)
- [CBDB 中国历代人物传记资料库：田氏（330751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330751&o=json)
- [CBDB 中国历代人物传记资料库：王象坤（205267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205267&o=json)
