---
schema: wang-person/v1
id: p_Q78NHTK4vooe11bgCyMrsD
status: active
merged_into: null
display_name: 王丕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GGe1pj3i9sEa4RyQ4UPB81
        subject_person_id: p_Q78NHTK4vooe11bgCyMrsD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wELRCEXpxtLgHJdBXGcBQ1
          claim_id: c_GGe1pj3i9sEa4RyQ4UPB81
          source_id: s_aZ3Y3C68Ad7bWYQ21yNPPV
          stance: supports
          locator: CBDB:526872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526872）
          source: &a1
            id: s_aZ3Y3C68Ad7bWYQ21yNPPV
            source_type: api_record
            title: 中国历代人物传记资料库：王丕（CBDB 526872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526872&o=json
            external_identifier: CBDB:526872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_psxYoAREF9B24jL5g4x9RT
        subject_person_id: p_Q78NHTK4vooe11bgCyMrsD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t31GBk7zVtbjqa5xgSV3fz
          claim_id: c_psxYoAREF9B24jL5g4x9RT
          source_id: s_aZ3Y3C68Ad7bWYQ21yNPPV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U24I7EEjEwoqzyY_IfFuXS
        subject_person_id: p_HDyRTiaAGZCqHG86QTQWZE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q78NHTK4vooe11bgCyMrsD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zO2IyOpUVPnussNP50pFe
          claim_id: c_U24I7EEjEwoqzyY_IfFuXS
          source_id: s_aZ3Y3C68Ad7bWYQ21yNPPV
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13041：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HDyRTiaAGZCqHG86QTQWZE
        status: active
        display_name: 王清弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王丕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HDyRTiaAGZCqHG86QTQWZE | 王清弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王丕（CBDB 526872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526872&o=json)
