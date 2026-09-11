---
schema: wang-person/v1
id: p_mmxBAZq9qSESshC4uQKn38
status: active
merged_into: null
display_name: 王茂謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vUjyvw21Wu2ckwnKhdUFTG
        subject_person_id: p_mmxBAZq9qSESshC4uQKn38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5LSiKg3xrJ161z63T3ocLw
          claim_id: c_vUjyvw21Wu2ckwnKhdUFTG
          source_id: s_QHon84dFvcWLqJQyDMWW81
          stance: supports
          locator: CBDB:683892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683892）
          source: &a1
            id: s_QHon84dFvcWLqJQyDMWW81
            source_type: api_record
            title: 中国历代人物传记资料库：王茂謙（CBDB 683892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683892&o=json
            external_identifier: CBDB:683892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_seuf2iGvGpZxjaH656myGN
        subject_person_id: p_mmxBAZq9qSESshC4uQKn38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wGjEcx3LjEqrMZPHdjwJcx
          claim_id: c_seuf2iGvGpZxjaH656myGN
          source_id: s_QHon84dFvcWLqJQyDMWW81
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
        id: c_VeqawwQaxmA458t2XoKHPx
        subject_person_id: p_baPx7xrKQVVrCaN9KsE9x5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mmxBAZq9qSESshC4uQKn38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_su24upW7VjY0XRjhya8HQN
          claim_id: c_VeqawwQaxmA458t2XoKHPx
          source_id: s_QHon84dFvcWLqJQyDMWW81
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_baPx7xrKQVVrCaN9KsE9x5
        status: active
        display_name: 王虔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茂謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂謙 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_baPx7xrKQVVrCaN9KsE9x5 | 王虔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂謙（CBDB 683892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683892&o=json)
