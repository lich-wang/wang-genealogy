---
schema: wang-person/v1
id: p_BtWvuGRFMDiFf3wNmLonU8
status: active
merged_into: null
display_name: 王仕通
cbdb_id: 266618
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L8A5fs8PRA8BXapkTcb77q
        subject_person_id: p_BtWvuGRFMDiFf3wNmLonU8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕通，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 266618）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-D9OFlFiBTM8ddXeTGSWQS
          claim_id: c_L8A5fs8PRA8BXapkTcb77q
          source_id: s_mNwbC98JoKYdVthNo7ZA5S
          stance: supports
          locator: CBDB:266618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mNwbC98JoKYdVthNo7ZA5S
            source_type: api_record
            title: 中国历代人物传记资料库：王仕通（CBDB 266618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266618&o=json
            external_identifier: CBDB:266618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HFMNjFiLpNiBcoeKAZeq83
        subject_person_id: p_BtWvuGRFMDiFf3wNmLonU8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wFgQ4h2G3sXKDV5Ya3CgPJ
          claim_id: c_HFMNjFiLpNiBcoeKAZeq83
          source_id: s_mNwbC98JoKYdVthNo7ZA5S
          stance: supports
          locator: CBDB:266618
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_Z9lHY_7BGIlmdeIMVVsapJ
        subject_person_id: p_BtWvuGRFMDiFf3wNmLonU8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wt4Rncm14h6MrnGgfPy2hA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__KJ4nI75D-UqO_kOxrD0cN
          claim_id: c_Z9lHY_7BGIlmdeIMVVsapJ
          source_id: s_mNwbC98JoKYdVthNo7ZA5S
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百九十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mNwbC98JoKYdVthNo7ZA5S
            source_type: api_record
            title: 中国历代人物传记资料库：王仕通（CBDB 266618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266618&o=json
            external_identifier: CBDB:266618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wt4Rncm14h6MrnGgfPy2hA
        status: active
        display_name: 王用才
        merged_into_person_id: null
  other: []
---

# 王仕通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕通，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 266618） | accepted |
| name.primary | 王仕通 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wt4Rncm14h6MrnGgfPy2hA | 王用才 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕通（CBDB 266618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266618&o=json)
