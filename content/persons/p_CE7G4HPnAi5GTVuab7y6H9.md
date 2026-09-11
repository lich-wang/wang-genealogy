---
schema: wang-person/v1
id: p_CE7G4HPnAi5GTVuab7y6H9
status: active
merged_into: null
display_name: 陶氏
revision: 1
cbdb_id: 700851
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WSkNEwsv2tTmeTL2JY0FCK
        subject_person_id: p_CE7G4HPnAi5GTVuab7y6H9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陶氏，清人物。籍贯蘇州府，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 700851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zsUCZD5mqjzt98MC8stTCo
          claim_id: c_WSkNEwsv2tTmeTL2JY0FCK
          source_id: s_yikWgcGV2yXTrhc0yVX0HF
          stance: supports
          locator: CBDB:700851
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yikWgcGV2yXTrhc0yVX0HF
            source_type: api_record
            title: 中国历代人物传记资料库：陶氏(王若濬妻)（CBDB 700851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700851&o=json
            external_identifier: CBDB:700851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_0whPYWUzAlwkHUj1XryN5M
        subject_person_id: p_CE7G4HPnAi5GTVuab7y6H9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陶氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ZezTMpPJUuOAgyhs4WyXx
          claim_id: c_0whPYWUzAlwkHUj1XryN5M
          source_id: s_yikWgcGV2yXTrhc0yVX0HF
          stance: supports
          locator: CBDB:700851
          quotation: null
          interpretation_note: CBDB 明确记录的王若濬配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_pgw47C7ktaX6xV2DNMvioY
        subject_person_id: p_SvV71z7wuSBsk2C4dEE7Ss
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CE7G4HPnAi5GTVuab7y6H9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MkCNz3MQ887MQpMGkPpn5K
          claim_id: c_pgw47C7ktaX6xV2DNMvioY
          source_id: s_yikWgcGV2yXTrhc0yVX0HF
          stance: supports
          locator: 吳門補乘，lgid=177495：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SvV71z7wuSBsk2C4dEE7Ss
        status: active
        display_name: 王若濬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陶氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陶氏，清人物。籍贯蘇州府，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 700851） | accepted |
| name.primary | 陶氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_SvV71z7wuSBsk2C4dEE7Ss | 王若濬 | accepted |

## 外部来源

- [中国历代人物传记资料库：陶氏(王若濬妻)（CBDB 700851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700851&o=json)
