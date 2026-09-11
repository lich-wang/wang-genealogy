---
schema: wang-person/v1
id: p_3pPq8Aka3EVUkoknRn4YrF
status: active
merged_into: null
display_name: 王楨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1gcE3ZHoRXMCF9FgssAG2j
        subject_person_id: p_3pPq8Aka3EVUkoknRn4YrF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jeQxNPCrgHjspcSrkGEiE2
          claim_id: c_1gcE3ZHoRXMCF9FgssAG2j
          source_id: s_2NyJmYWJv2HU2jjAUqx9Ac
          stance: supports
          locator: CBDB:563628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563628）
          source: &a1
            id: s_2NyJmYWJv2HU2jjAUqx9Ac
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 563628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563628&o=json
            external_identifier: CBDB:563628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P2aGkZwJKmBRthyfCJkj7H
        subject_person_id: p_3pPq8Aka3EVUkoknRn4YrF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨，明人物。曾任王府長史、兵馬司指揮。（中国历代人物传记资料库 CBDB 563628）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7-RhkJQctDf5Zetk-E-NB4
          claim_id: c_P2aGkZwJKmBRthyfCJkj7H
          source_id: s_2NyJmYWJv2HU2jjAUqx9Ac
          stance: supports
          locator: CBDB:563628
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
  spouses:
    - claim:
        id: c_Nw3T1rm9UAy-7n88fu0BeN
        subject_person_id: p_3pPq8Aka3EVUkoknRn4YrF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vy5AvBAYSXaAsRVFzmv57e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRkc0iX3BaeK6MYH1_rx4x
          claim_id: c_Nw3T1rm9UAy-7n88fu0BeN
          source_id: s_czriHH8pfzYEndzwLgdPx5
          stance: supports
          locator: 紹興府志:八十卷，lgid=316743：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_czriHH8pfzYEndzwLgdPx5
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王楨妻)（CBDB 563629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563629&o=json
            external_identifier: CBDB:563629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vy5AvBAYSXaAsRVFzmv57e
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨 | accepted |
| bio.summary | 王楨，明人物。曾任王府長史、兵馬司指揮。（中国历代人物传记资料库 CBDB 563628） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_vy5AvBAYSXaAsRVFzmv57e | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楨（CBDB 563628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563628&o=json)
- [中国历代人物传记资料库：張氏(王楨妻)（CBDB 563629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563629&o=json)
