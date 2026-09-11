---
schema: wang-person/v1
id: p_iqf8z5vVDeG4f4cJMH52mk
status: active
merged_into: null
display_name: 王諒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8vmUQ2AbgiGsudQeArXe8t
        subject_person_id: p_iqf8z5vVDeG4f4cJMH52mk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kgukKQYA6CzNGp7syud3aB
          claim_id: c_8vmUQ2AbgiGsudQeArXe8t
          source_id: s_VAK9jzjnKBAHdJh6ndKMBP
          stance: supports
          locator: CBDB:273830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273830）
          source: &a1
            id: s_VAK9jzjnKBAHdJh6ndKMBP
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 273830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273830&o=json
            external_identifier: CBDB:273830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TEuu9bkbeuyZcitSxibAGC
        subject_person_id: p_iqf8z5vVDeG4f4cJMH52mk
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
        - id: cs_MYLQAV6NvXqjVbWjsfXM7V
          claim_id: c_TEuu9bkbeuyZcitSxibAGC
          source_id: s_VAK9jzjnKBAHdJh6ndKMBP
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
        id: c_aR1RNMc-Sh-5ZBScubQmJh
        subject_person_id: p_iqf8z5vVDeG4f4cJMH52mk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8hfYGyR7xtg6FUyyHERJzA
          claim_id: c_aR1RNMc-Sh-5ZBScubQmJh
          source_id: s_VAK9jzjnKBAHdJh6ndKMBP
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WQELCyNtxHbkJD3Uq4LakB
        status: active
        display_name: 王堯封
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WQELCyNtxHbkJD3Uq4LakB | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諒（CBDB 273830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273830&o=json)
