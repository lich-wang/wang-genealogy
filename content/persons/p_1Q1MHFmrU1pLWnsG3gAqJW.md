---
schema: wang-person/v1
id: p_1Q1MHFmrU1pLWnsG3gAqJW
status: active
merged_into: null
display_name: 王啟祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bem2b3VcqHnJNEC2HLeAKd
        subject_person_id: p_1Q1MHFmrU1pLWnsG3gAqJW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8i42yk1SBXo7nbiM96csLZ
          claim_id: c_Bem2b3VcqHnJNEC2HLeAKd
          source_id: s_aQwad5Eyx5M4H7tLGuFZoh
          stance: supports
          locator: CBDB:700777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700777）
          source: &a1
            id: s_aQwad5Eyx5M4H7tLGuFZoh
            source_type: api_record
            title: 中国历代人物传记资料库：王啟祚（CBDB 700777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700777&o=json
            external_identifier: CBDB:700777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ERcNHsZHYHyHeKJ7rgQNaS
        subject_person_id: p_1Q1MHFmrU1pLWnsG3gAqJW
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
        - id: cs_6AGBMKQrzbh4rYXiRWz6rJ
          claim_id: c_ERcNHsZHYHyHeKJ7rgQNaS
          source_id: s_aQwad5Eyx5M4H7tLGuFZoh
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
        id: c_gXylMlvTAMq_Da2ua6fFuz
        subject_person_id: p_HqKNQxKx5pE3EjygcutNH6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Q1MHFmrU1pLWnsG3gAqJW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9IvzfFRCFq3g5hNwfS_er6
          claim_id: c_gXylMlvTAMq_Da2ua6fFuz
          source_id: s_aQwad5Eyx5M4H7tLGuFZoh
          stance: supports
          locator: 平陰縣志，lgid=630824：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HqKNQxKx5pE3EjygcutNH6
        status: active
        display_name: 王朝屏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟祚 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HqKNQxKx5pE3EjygcutNH6 | 王朝屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟祚（CBDB 700777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700777&o=json)
