---
schema: wang-person/v1
id: p_kTEgvZxtZrAncsi8dYgkqg
status: active
merged_into: null
display_name: 王鏻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RkUEmRePa7kB11o2KWwGjT
        subject_person_id: p_kTEgvZxtZrAncsi8dYgkqg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xpKQErKe9vad7BGBDWNhyX
          claim_id: c_RkUEmRePa7kB11o2KWwGjT
          source_id: s_FxHPyAKPPABtM4Nw81VP8x
          stance: supports
          locator: CBDB:343872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343872）
          source: &a1
            id: s_FxHPyAKPPABtM4Nw81VP8x
            source_type: api_record
            title: 中国历代人物传记资料库：王鏻（CBDB 343872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343872&o=json
            external_identifier: CBDB:343872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hyMdBVDUrxWKt8Tnkzj6nP
        subject_person_id: p_kTEgvZxtZrAncsi8dYgkqg
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
        - id: cs_c9MKsjdeikYoCHUTzTSLC7
          claim_id: c_hyMdBVDUrxWKt8Tnkzj6nP
          source_id: s_FxHPyAKPPABtM4Nw81VP8x
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
        id: c_moHKPMJeDlNyUp3hzI7q52
        subject_person_id: p_kTEgvZxtZrAncsi8dYgkqg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fHWW3QGdMT9vwTaU2iJgsA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1z-nZPXUa8hwon-QSGGjLp
          claim_id: c_moHKPMJeDlNyUp3hzI7q52
          source_id: s_fiVQ2yo2jShuG4tKELXgaV
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160953：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fiVQ2yo2jShuG4tKELXgaV
            source_type: api_record
            title: 中国历代人物传记资料库：王仲騰（CBDB 698094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698094&o=json
            external_identifier: CBDB:698094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fHWW3QGdMT9vwTaU2iJgsA
        status: active
        display_name: 王仲騰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鏻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏻 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fHWW3QGdMT9vwTaU2iJgsA | 王仲騰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏻（CBDB 343872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343872&o=json)
- [中国历代人物传记资料库：王仲騰（CBDB 698094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698094&o=json)
