---
schema: wang-person/v1
id: p_bF2DFUCtWnXA5T2aKYsQbZ
status: active
merged_into: null
display_name: 王樾蔭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HF1yLR2KCEncsQ2ebzcbZP
        subject_person_id: p_bF2DFUCtWnXA5T2aKYsQbZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樾蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SPsvaHihaMUqPbq3uhyxMv
          claim_id: c_HF1yLR2KCEncsQ2ebzcbZP
          source_id: s_NEHK7uJ9JhR23Q2nCvDy6B
          stance: supports
          locator: CBDB:638874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638874）
          source: &a1
            id: s_NEHK7uJ9JhR23Q2nCvDy6B
            source_type: api_record
            title: 中国历代人物传记资料库：王樾蔭（CBDB 638874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638874&o=json
            external_identifier: CBDB:638874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o91AEDdZWGNfaa3VCNfMpQ
        subject_person_id: p_bF2DFUCtWnXA5T2aKYsQbZ
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
        - id: cs_gLNARfKn81WuNLm854L3Bv
          claim_id: c_o91AEDdZWGNfaa3VCNfMpQ
          source_id: s_NEHK7uJ9JhR23Q2nCvDy6B
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

# 王樾蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樾蔭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樾蔭（CBDB 638874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638874&o=json)
