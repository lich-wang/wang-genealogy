---
schema: wang-person/v1
id: p_EqBrC3P6PFftiJvnAm14hu
status: active
merged_into: null
display_name: 王希仁
cbdb_id: 296934
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ert5HLsDfAZ81RRmcTd7bF
        subject_person_id: p_EqBrC3P6PFftiJvnAm14hu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希仁，史料所见人物。本项目依据《中国历代人物传记资料库：王希仁（CBDB 296934）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_eqYv9QZBqiRYIdh2AVkHqM
          claim_id: c_Ert5HLsDfAZ81RRmcTd7bF
          source_id: s_9MnAC8rqH84z4mq4PMn1Hw
          stance: supports
          locator: CBDB:296934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9MnAC8rqH84z4mq4PMn1Hw
            source_type: api_record
            title: 中国历代人物传记资料库：王希仁（CBDB 296934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296934&o=json
            external_identifier: CBDB:296934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ZH1FEjc5uAG4dCqM4yKGr
        subject_person_id: p_EqBrC3P6PFftiJvnAm14hu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mELM35zSupWvvFpcix6Zjj
          claim_id: c_7ZH1FEjc5uAG4dCqM4yKGr
          source_id: s_9MnAC8rqH84z4mq4PMn1Hw
          stance: supports
          locator: CBDB:296934
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_pa7RT5crHC4JdFx-OrFVFL
        subject_person_id: p_EqBrC3P6PFftiJvnAm14hu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1b0fmFLbCLjNtna3cUuI1c
          claim_id: c_pa7RT5crHC4JdFx-OrFVFL
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_57kZAzZH2t6g4w3F4mdEPS
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 198633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json
            external_identifier: CBDB:198633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1vXY7qFFYMcnZjgBc9EDs8
        status: active
        display_name: 王佐
        merged_into_person_id: null
  other: []
---

# 王希仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希仁，史料所见人物。本项目依据《中国历代人物传记资料库：王希仁（CBDB 296934）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王希仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1vXY7qFFYMcnZjgBc9EDs8 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希仁（CBDB 296934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296934&o=json)
- [中国历代人物传记资料库：王佐（CBDB 198633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json)
