---
schema: wang-person/v1
id: p_1vXY7qFFYMcnZjgBc9EDs8
status: active
merged_into: null
display_name: 王佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9AF9fJuNsQLKvHYD5e49jD
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pmsKeQauM2V3T4X5eELifa
          claim_id: c_9AF9fJuNsQLKvHYD5e49jD
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: CBDB:198633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198633）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zKKwyuy3RFEpG7F74cUiEw
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23Rifwh6q63EFXM4v56U9S
          claim_id: c_zKKwyuy3RFEpG7F74cUiEw
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
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
        id: c_seAYnRYXX8nUEXYyyD6Yp7
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
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
        - id: cs_K2kfYRZBbNBGjqGXr4fx3g
          claim_id: c_seAYnRYXX8nUEXYyyD6Yp7
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
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
        id: c_8n9uh0LHj6kH1tlFbUHbIb
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wGQw8gHHlTbYM2qWCZ95RT
          claim_id: c_8n9uh0LHj6kH1tlFbUHbIb
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e8GwzBVysey3Kb4uNTABDK
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_M7_hie7WMtq86cP17g-bGk
        subject_person_id: p_Dp8q3v4je1nMarPFQKSQZg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJle2ocWeYxVD2IQjI-i_T
          claim_id: c_M7_hie7WMtq86cP17g-bGk
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Dp8q3v4je1nMarPFQKSQZg
        status: active
        display_name: 王克善
        merged_into_person_id: null
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
          source: *a1
      object_person:
        id: p_EqBrC3P6PFftiJvnAm14hu
        status: active
        display_name: 王希仁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1424年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e8GwzBVysey3Kb4uNTABDK | 王敬 | accepted |
| ancestors | p_Dp8q3v4je1nMarPFQKSQZg | 王克善 | accepted |
| ancestors | p_EqBrC3P6PFftiJvnAm14hu | 王希仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 198633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json)
