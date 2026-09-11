---
schema: wang-person/v1
id: p_GDYJiKmBDGx8GATz5Lz7eZ
status: active
merged_into: null
display_name: 王楠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QShDB5zaMJi1GruWfHuPNi
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r7awK457ScsHQVs4YWgBLM
          claim_id: c_QShDB5zaMJi1GruWfHuPNi
          source_id: s_t2rq243GEoJnhL6cAcAk2T
          stance: supports
          locator: CBDB:203063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203063）
          source: &a1
            id: s_t2rq243GEoJnhL6cAcAk2T
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 203063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203063&o=json
            external_identifier: CBDB:203063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Nn3tKyZ9hL4uP9DSFeuX8Z
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DA1ZWXc5hVAAV18fzLptzV
          claim_id: c_Nn3tKyZ9hL4uP9DSFeuX8Z
          source_id: s_t2rq243GEoJnhL6cAcAk2T
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yHJB3122N61A2b3hG1yTJ9
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
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
        - id: cs_ovAnB7nxZG59ZBD7Dbzwxk
          claim_id: c_yHJB3122N61A2b3hG1yTJ9
          source_id: s_t2rq243GEoJnhL6cAcAk2T
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
        id: c_qzG60H4eOnvWP3Z2ZVJ9P-
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CS91qL343IoMq49jAPM25V
          claim_id: c_qzG60H4eOnvWP3Z2ZVJ9P-
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DpzAwGANuGaaryEQnDijHj
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 283695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json
            external_identifier: CBDB:283695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dNbcibvajSXBYgSvME8CE6
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Y63OTr2lFfK6toKxXAiU7g
        subject_person_id: p_jPTs2aJkrLkZiHjYSYA58S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5f6JW9xYftdFzXfLCHcUl
          claim_id: c_Y63OTr2lFfK6toKxXAiU7g
          source_id: s_3nx7D8qK1jFr1GVzDUxr2A
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第五十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3nx7D8qK1jFr1GVzDUxr2A
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 283694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283694&o=json
            external_identifier: CBDB:283694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jPTs2aJkrLkZiHjYSYA58S
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王楠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楠 | accepted |
| birth.date | 1493年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dNbcibvajSXBYgSvME8CE6 | 王玉 | accepted |
| ancestors | p_jPTs2aJkrLkZiHjYSYA58S | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 283694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283694&o=json)
- [中国历代人物传记资料库：王楠（CBDB 203063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203063&o=json)
- [中国历代人物传记资料库：王玉（CBDB 283695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json)
