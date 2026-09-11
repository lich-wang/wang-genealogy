---
schema: wang-person/v1
id: p_4EN94k9qzLtmR6iYMqB4n1
status: active
merged_into: null
display_name: 林章
revision: 1
cbdb_id: 56626
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Katq7gmIW4Amj5CQIo2ukX
        subject_person_id: p_4EN94k9qzLtmR6iYMqB4n1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林章，明人物。籍贯福清，身份为戲曲作家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 56626）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qzp3Ssk4m99raaAKjS86mA
          claim_id: c_Katq7gmIW4Amj5CQIo2ukX
          source_id: s_OqwkEDB2DO_DuTZnkP8Pg9
          stance: supports
          locator: CBDB:56626
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_OqwkEDB2DO_DuTZnkP8Pg9
            source_type: api_record
            title: 中国历代人物传记资料库：林章（CBDB 56626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56626&o=json
            external_identifier: CBDB:56626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9pI2qS8ufwnN1kn_PJuXNq
        subject_person_id: p_4EN94k9qzLtmR6iYMqB4n1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林章
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87FUVf6W3Jg8wXB03Hji-i
          claim_id: c_9pI2qS8ufwnN1kn_PJuXNq
          source_id: s_OqwkEDB2DO_DuTZnkP8Pg9
          stance: supports
          locator: CBDB:56626
          quotation: null
          interpretation_note: CBDB 明确记录的王美君配偶
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
        id: c_xzIwHWmYUNqeZSOHT6Y0m1
        subject_person_id: p_nBT8sbQ8kr7Zgx447A6MHB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4EN94k9qzLtmR6iYMqB4n1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lC5PHchwzU3VNpI5Eu1ojD
          claim_id: c_xzIwHWmYUNqeZSOHT6Y0m1
          source_id: s_OqwkEDB2DO_DuTZnkP8Pg9
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1021：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nBT8sbQ8kr7Zgx447A6MHB
        status: active
        display_name: 王美君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 林章，明人物。籍贯福清，身份为戲曲作家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 56626） | accepted |
| name.primary | 林章 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_nBT8sbQ8kr7Zgx447A6MHB | 王美君 | accepted |

## 外部来源

- [中国历代人物传记资料库：林章（CBDB 56626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56626&o=json)
