---
schema: wang-person/v1
id: p_fWDv3QBk1AxnDZ9v9njKTe
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 316801
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1I9Dml7TsYcUfvRggSnSWB
        subject_person_id: p_fWDv3QBk1AxnDZ9v9njKTe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 316801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fiK-Bd3M5osXb1pOdHDN9p
          claim_id: c_1I9Dml7TsYcUfvRggSnSWB
          source_id: s_DbLIBDnkfLtH6nBhg7B7iM
          stance: supports
          locator: CBDB:316801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DbLIBDnkfLtH6nBhg7B7iM
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王文炳妻)（CBDB 316801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316801&o=json
            external_identifier: CBDB:316801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WdhbGwdrMKBPTpUF_HNE2E
        subject_person_id: p_fWDv3QBk1AxnDZ9v9njKTe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FVHyGgQwSCJtj5f0OB-4ia
          claim_id: c_WdhbGwdrMKBPTpUF_HNE2E
          source_id: s_DbLIBDnkfLtH6nBhg7B7iM
          stance: supports
          locator: CBDB:316801
          quotation: null
          interpretation_note: CBDB 明确记录的王文炳配偶
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
        id: c_Ga-OMOwjqdpYMqmAiAugQm
        subject_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fWDv3QBk1AxnDZ9v9njKTe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfn7LPtkrmISEndnD8gOS2
          claim_id: c_Ga-OMOwjqdpYMqmAiAugQm
          source_id: s_DbLIBDnkfLtH6nBhg7B7iM
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5HHB1Hb4zKCj9LE68zB5ne
        status: active
        display_name: 王文炳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 316801） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5HHB1Hb4zKCj9LE68zB5ne | 王文炳 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王文炳妻)（CBDB 316801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316801&o=json)
