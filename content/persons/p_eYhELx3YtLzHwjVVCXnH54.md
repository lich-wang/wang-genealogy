---
schema: wang-person/v1
id: p_eYhELx3YtLzHwjVVCXnH54
status: active
merged_into: null
display_name: 王節
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6tR7L2vi3JPb9WE954FB9y
        subject_person_id: p_eYhELx3YtLzHwjVVCXnH54
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TacPTL6ZHQBmuaSZGRccqR
          claim_id: c_6tR7L2vi3JPb9WE954FB9y
          source_id: s_MhrMQvXjreE1TEDy1v7PjE
          stance: supports
          locator: CBDB:262005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262005）
          source: &a1
            id: s_MhrMQvXjreE1TEDy1v7PjE
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 262005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262005&o=json
            external_identifier: CBDB:262005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7ZBgNNs2jVQ8uAHDjpxkP
        subject_person_id: p_eYhELx3YtLzHwjVVCXnH54
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 262005）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jbvV4DM6GfDEwenrN0_f2g
          claim_id: c_A7ZBgNNs2jVQ8uAHDjpxkP
          source_id: s_MhrMQvXjreE1TEDy1v7PjE
          stance: supports
          locator: CBDB:262005
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qw2FVbXmL1WT3OoLJuPFgx
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eYhELx3YtLzHwjVVCXnH54
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NSTe-l5Zo9RyD6Nqz7FngG
          claim_id: c_Qw2FVbXmL1WT3OoLJuPFgx
          source_id: s_tlZmBCJGXPAO3qLU7fKCr5
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王節 与 王統 为同胞（CBDB 记「兄」），王統 之父／母即 王節 之父／母。
          source:
            id: s_tlZmBCJGXPAO3qLU7fKCr5
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 262005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262005&o=json
            external_identifier: CBDB:262005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxJiGj8JHn8DhGEqa1wJaa
        status: active
        display_name: 王大綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gAZM8gGN77nNT_gpSUA-SC
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eYhELx3YtLzHwjVVCXnH54
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tz4m_gj0ZBMKMSOg0O9uDZ
          claim_id: c_gAZM8gGN77nNT_gpSUA-SC
          source_id: s_tlZmBCJGXPAO3qLU7fKCr5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tlZmBCJGXPAO3qLU7fKCr5
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 262005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262005&o=json
            external_identifier: CBDB:262005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LSGWLrXs7XnndXnW76V8U
        status: active
        display_name: 王統
        merged_into_person_id: null
---

# 王節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王節 | accepted |
| bio.summary | 王節，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 262005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxJiGj8JHn8DhGEqa1wJaa | 王大綸 | accepted |
| other | p_2LSGWLrXs7XnndXnW76V8U | 王統 | accepted |

## 外部来源

- [中国历代人物传记资料库：王節（CBDB 262005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262005&o=json)
