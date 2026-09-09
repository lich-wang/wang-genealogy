---
schema: wang-person/v1
id: p_FdFSWk14dHFi4MyAUsTZBR
status: active
merged_into: null
display_name: 王膺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZA4ZdwGS5taK334WorbGMS
        subject_person_id: p_FdFSWk14dHFi4MyAUsTZBR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王膺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3obD7Q2Br4ryMz67KbAHzD
          claim_id: c_ZA4ZdwGS5taK334WorbGMS
          source_id: s_iM2Ea1DeMLqoMiELbfsCx3
          stance: supports
          locator: CBDB:186093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186093）
          source: &a1
            id: s_iM2Ea1DeMLqoMiELbfsCx3
            source_type: api_record
            title: 中国历代人物传记资料库：王膺（CBDB 186093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186093&o=json
            external_identifier: CBDB:186093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9MUZiRBg5An8PXPnPMsiut
        subject_person_id: p_FdFSWk14dHFi4MyAUsTZBR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dm1ByQ2NLZn8xvQGu7FDSg
          claim_id: c_9MUZiRBg5An8PXPnPMsiut
          source_id: s_iM2Ea1DeMLqoMiELbfsCx3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3qrupYXRWyeyyjK43TUtJW
        subject_person_id: p_FdFSWk14dHFi4MyAUsTZBR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x76yYLToFXDi7yq3yPmEHY
          claim_id: c_3qrupYXRWyeyyjK43TUtJW
          source_id: s_iM2Ea1DeMLqoMiELbfsCx3
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

# 王膺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王膺 | accepted |
| death.date | 860年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王膺（CBDB 186093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186093&o=json)
