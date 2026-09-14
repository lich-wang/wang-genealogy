---
schema: wang-person/v1
id: p_nfahEgLJEZz6sAMjVDU6dk
status: active
merged_into: null
display_name: 王喬吳
cbdb_id: 336217
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pt36RP3b15gFbU8FYv4jDL
        subject_person_id: p_nfahEgLJEZz6sAMjVDU6dk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬吳，明人物。隆慶二年進士，籍贯石首，入仕鄉貢舉人，曾任通判。（中国历代人物传记资料库 CBDB 336217）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PnQ8bkFXSVJILSh8urnMT7
          claim_id: c_Pt36RP3b15gFbU8FYv4jDL
          source_id: s_oeNzmYMfmfu7LrGE6WDXu7
          stance: supports
          locator: CBDB:336217
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oeNzmYMfmfu7LrGE6WDXu7
            source_type: api_record
            title: 中国历代人物传记资料库：王喬吳（CBDB 336217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336217&o=json
            external_identifier: CBDB:336217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZiZoX9F2KiCPNerqmkaNGU
        subject_person_id: p_nfahEgLJEZz6sAMjVDU6dk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬吳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NeHcMCfdY88QMefpkvyWWv
          claim_id: c_ZiZoX9F2KiCPNerqmkaNGU
          source_id: s_oeNzmYMfmfu7LrGE6WDXu7
          stance: supports
          locator: CBDB:336217
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
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
  other:
    - claim:
        id: c_NrfpdOsc2pNKKWvy2Fq_AA
        subject_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nfahEgLJEZz6sAMjVDU6dk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J02-44EnXT6R5z_7b7CffS
          claim_id: c_NrfpdOsc2pNKKWvy2Fq_AA
          source_id: s_KytMHLYRn9NBLOaA7OZeYA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KytMHLYRn9NBLOaA7OZeYA
            source_type: api_record
            title: 中国历代人物传记资料库：王喬吳（CBDB 336217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336217&o=json
            external_identifier: CBDB:336217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jKrz7wAG7kSqp2N7HpxJ4F
        status: active
        display_name: 王喬桂
        merged_into_person_id: null
---

# 王喬吳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王喬吳，明人物。隆慶二年進士，籍贯石首，入仕鄉貢舉人，曾任通判。（中国历代人物传记资料库 CBDB 336217） | accepted |
| name.primary | 王喬吳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_jKrz7wAG7kSqp2N7HpxJ4F | 王喬桂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王喬吳（CBDB 336217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336217&o=json)
