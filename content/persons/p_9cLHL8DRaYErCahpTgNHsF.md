---
schema: wang-person/v1
id: p_9cLHL8DRaYErCahpTgNHsF
status: active
merged_into: null
display_name: 王綰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fShU3Y6YCMBVVoh3E2q7m1
        subject_person_id: p_9cLHL8DRaYErCahpTgNHsF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yp5g2zRynoHLj3K13tJViN
          claim_id: c_fShU3Y6YCMBVVoh3E2q7m1
          source_id: s_SbNMYp2FikFuLPML5wfYAm
          stance: supports
          locator: CBDB:3989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3989）
          source: &a1
            id: s_SbNMYp2FikFuLPML5wfYAm
            source_type: api_record
            title: 中国历代人物传记资料库：王綰（CBDB 3989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3989&o=json
            external_identifier: CBDB:3989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DprPPGeNCPARJZFjwxJNxZ
        subject_person_id: p_9cLHL8DRaYErCahpTgNHsF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为吳人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bo6PX4bgF5317cf8R93pD2
          claim_id: c_DprPPGeNCPARJZFjwxJNxZ
          source_id: s_SbNMYp2FikFuLPML5wfYAm
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
        id: c_uqA-d9aKivJqHhFETSrs3i
        subject_person_id: p_9cLHL8DRaYErCahpTgNHsF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RZo3gQ4ivBvbpgbYTeFWnt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1peXTAJ3fk0PVLc7TudspY
          claim_id: c_uqA-d9aKivJqHhFETSrs3i
          source_id: s_SbNMYp2FikFuLPML5wfYAm
          stance: supports
          locator: CBDB 双向互证（子 王崇文 ⇄ 父 王綰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_RZo3gQ4ivBvbpgbYTeFWnt
        status: active
        display_name: 王崇文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綰 | accepted |
| bio.summary | CBDB 记载为吳人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RZo3gQ4ivBvbpgbYTeFWnt | 王崇文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綰（CBDB 3989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3989&o=json)
