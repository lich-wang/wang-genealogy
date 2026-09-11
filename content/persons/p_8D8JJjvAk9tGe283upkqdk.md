---
schema: wang-person/v1
id: p_8D8JJjvAk9tGe283upkqdk
status: active
merged_into: null
display_name: 王守文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eqhy3ALCa479v7bySnY1c6
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VTHwCjcQ4qvocU2w4evRo9
          claim_id: c_Eqhy3ALCa479v7bySnY1c6
          source_id: s_zbDcNK6UaeHRsYDrdL8c8Z
          stance: supports
          locator: CBDB:241883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241883）
          source: &a1
            id: s_zbDcNK6UaeHRsYDrdL8c8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王守文（CBDB 241883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241883&o=json
            external_identifier: CBDB:241883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UKVA1kkbYW4n7eKzWLzTr2
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zpjbrSZkJofjeDAHq1pg7u
          claim_id: c_UKVA1kkbYW4n7eKzWLzTr2
          source_id: s_zbDcNK6UaeHRsYDrdL8c8Z
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
        id: c_SVvoZK0xjk8g8Cg5L8JyJn
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wVNQZtHXH1DmzuUBiFBxfp
          claim_id: c_SVvoZK0xjk8g8Cg5L8JyJn
          source_id: s_zbDcNK6UaeHRsYDrdL8c8Z
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TxHEXLnqR7Hmrn4YZb9SRE
        status: active
        display_name: 王璿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TxHEXLnqR7Hmrn4YZb9SRE | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守文（CBDB 241883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241883&o=json)
