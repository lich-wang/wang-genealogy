---
schema: wang-person/v1
id: p_wjQjQdSMH1jr1xFFHBSxDy
status: active
merged_into: null
display_name: 王舉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZE2jLU4vX4Wj99fv3p19DQ
        subject_person_id: p_wjQjQdSMH1jr1xFFHBSxDy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_68xj4Mmi4DSmB4TaVDoSWa
          claim_id: c_ZE2jLU4vX4Wj99fv3p19DQ
          source_id: s_FxL5E23MmWsDYgSqBCPKmU
          stance: supports
          locator: CBDB:333319
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333319）
          source: &a1
            id: s_FxL5E23MmWsDYgSqBCPKmU
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 333319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333319&o=json
            external_identifier: CBDB:333319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L64pSvsb9so6qhEsPVPvTi
        subject_person_id: p_wjQjQdSMH1jr1xFFHBSxDy
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
        - id: cs_qQ8SYHZhpt3MaifgLkBDqU
          claim_id: c_L64pSvsb9so6qhEsPVPvTi
          source_id: s_FxL5E23MmWsDYgSqBCPKmU
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
        id: c_pIR0V7Al4qUIe0QsOXdPrQ
        subject_person_id: p_wjQjQdSMH1jr1xFFHBSxDy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sBN61AcY3h5Veu-AzehrAJ
          claim_id: c_pIR0V7Al4qUIe0QsOXdPrQ
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ueah6NxBLTeksqUa8dTE5L
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 205448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json
            external_identifier: CBDB:205448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1rXUfnsmYtKV6HvQmcZEx1
        status: active
        display_name: 王之屏
        merged_into_person_id: null
  other: []
---

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1rXUfnsmYtKV6HvQmcZEx1 | 王之屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉（CBDB 333319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333319&o=json)
- [中国历代人物传记资料库：王之屏（CBDB 205448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json)
