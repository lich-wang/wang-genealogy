---
schema: wang-person/v1
id: p_mddk6SPKF95i3npAYgeV38
status: active
merged_into: null
display_name: 王日新
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wwE2YQ8ZMdjbQ2zuBWTWad
        subject_person_id: p_mddk6SPKF95i3npAYgeV38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gSL1wvrqqviU3AH5exyT1t
          claim_id: c_wwE2YQ8ZMdjbQ2zuBWTWad
          source_id: s_cmBPEC5AL6bAz2NjSDfnNY
          stance: supports
          locator: CBDB:558385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558385）
          source: &a1
            id: s_cmBPEC5AL6bAz2NjSDfnNY
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 558385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558385&o=json
            external_identifier: CBDB:558385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bfpg323tKkD75yV2N6vpE4
        subject_person_id: p_mddk6SPKF95i3npAYgeV38
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
        - id: cs_XrMZA2xtNCMnnmxZ2hJyR5
          claim_id: c_Bfpg323tKkD75yV2N6vpE4
          source_id: s_cmBPEC5AL6bAz2NjSDfnNY
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
        id: c_X9KMBTP_Z8T4VH-03ftst3
        subject_person_id: p_L9dzbHQjDKY6RB765GdXrR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mddk6SPKF95i3npAYgeV38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ba24D9u7wDMGMSKaDimRRr
          claim_id: c_X9KMBTP_Z8T4VH-03ftst3
          source_id: s_cmBPEC5AL6bAz2NjSDfnNY
          stance: supports
          locator: (乾隆)信陽州志，lgid=868523：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L9dzbHQjDKY6RB765GdXrR
        status: active
        display_name: 王重
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王日新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日新 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L9dzbHQjDKY6RB765GdXrR | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日新（CBDB 558385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558385&o=json)
