---
schema: wang-person/v1
id: p_nKH7DSmnk7Y2uQPtcGHGJB
status: active
merged_into: null
display_name: 王真卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zrHw1V9zDZPcR8HTHGsUXr
        subject_person_id: p_nKH7DSmnk7Y2uQPtcGHGJB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X9bBpgCRNCSz7h6xYyniPJ
          claim_id: c_zrHw1V9zDZPcR8HTHGsUXr
          source_id: s_EP7FeffbNiUnePJx2QrAF7
          stance: supports
          locator: CBDB:544948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544948）
          source: &a1
            id: s_EP7FeffbNiUnePJx2QrAF7
            source_type: api_record
            title: 中国历代人物传记资料库：王真卿（CBDB 544948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544948&o=json
            external_identifier: CBDB:544948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cxe3NpMvv2X27HK64geExX
        subject_person_id: p_nKH7DSmnk7Y2uQPtcGHGJB
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
        - id: cs_QY1kyjTPq6BG8dYs1x7RFA
          claim_id: c_Cxe3NpMvv2X27HK64geExX
          source_id: s_EP7FeffbNiUnePJx2QrAF7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  other: []
---

# 王真卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王真卿 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王真卿（CBDB 544948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544948&o=json)
