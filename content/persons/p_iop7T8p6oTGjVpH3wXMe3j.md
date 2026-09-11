---
schema: wang-person/v1
id: p_iop7T8p6oTGjVpH3wXMe3j
status: active
merged_into: null
display_name: 王蘭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mz4vNEALh3Pu3wZ1EBvHfu
        subject_person_id: p_iop7T8p6oTGjVpH3wXMe3j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YXe2ggJK79L1ea6Fdnj46v
          claim_id: c_Mz4vNEALh3Pu3wZ1EBvHfu
          source_id: s_LqJQUzPTMHjFe1bT4CDBm8
          stance: supports
          locator: CBDB:266131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266131）
          source: &a1
            id: s_LqJQUzPTMHjFe1bT4CDBm8
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 266131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266131&o=json
            external_identifier: CBDB:266131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c8CG24U7uV2AiyVqzTghvY
        subject_person_id: p_iop7T8p6oTGjVpH3wXMe3j
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
        - id: cs_2FVcJSUyLhUx1F8wr35JdG
          claim_id: c_c8CG24U7uV2AiyVqzTghvY
          source_id: s_LqJQUzPTMHjFe1bT4CDBm8
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
  descendants:
    - claim:
        id: c_mLJsmJCmnRKz-lWX8rBJ3z
        subject_person_id: p_iop7T8p6oTGjVpH3wXMe3j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtdvkP_bxYyH8ogUAg6aFA
          claim_id: c_mLJsmJCmnRKz-lWX8rBJ3z
          source_id: s_LqJQUzPTMHjFe1bT4CDBm8
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_skjKvTKbz5aUC8X3W9ytWH
        status: active
        display_name: 王崇文
        merged_into_person_id: null
    - claim:
        id: c__lTIKzDh1vBgkjcvUnj8-h
        subject_person_id: p_iop7T8p6oTGjVpH3wXMe3j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5btbNFkuNqxJDcg99ibvfp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TyIuQ0R-L0a88PxX7IuAkd
          claim_id: c__lTIKzDh1vBgkjcvUnj8-h
          source_id: s_LqJQUzPTMHjFe1bT4CDBm8
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5btbNFkuNqxJDcg99ibvfp
        status: active
        display_name: 王崇儉
        merged_into_person_id: null
    - claim:
        id: c_1gGUpsRaaLVjiYbfPuFrzl
        subject_person_id: p_iop7T8p6oTGjVpH3wXMe3j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7nb8oCgM1WcE0rqbeId8vV
          claim_id: c_1gGUpsRaaLVjiYbfPuFrzl
          source_id: s_LqJQUzPTMHjFe1bT4CDBm8
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第二十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gZEG3LV8BoSpVH5X7JPghB
        status: active
        display_name: 王崇獻
        merged_into_person_id: null
  other: []
---

# 王蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_skjKvTKbz5aUC8X3W9ytWH | 王崇文 | accepted |
| descendants | p_5btbNFkuNqxJDcg99ibvfp | 王崇儉 | accepted |
| descendants | p_gZEG3LV8BoSpVH5X7JPghB | 王崇獻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 266131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266131&o=json)
