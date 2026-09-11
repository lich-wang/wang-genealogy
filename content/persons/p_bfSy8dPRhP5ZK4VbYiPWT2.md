---
schema: wang-person/v1
id: p_bfSy8dPRhP5ZK4VbYiPWT2
status: active
merged_into: null
display_name: 王正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o89F69N6xayG7WRUP41NNU
        subject_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zwsg9HL5RMXrH9ysFsKrZo
          claim_id: c_o89F69N6xayG7WRUP41NNU
          source_id: s_FLTe23fQ3Yas8yRVm4tAdp
          stance: supports
          locator: CBDB:208144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208144）
          source: &a1
            id: s_FLTe23fQ3Yas8yRVm4tAdp
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 208144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208144&o=json
            external_identifier: CBDB:208144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c7B6pmQE195WBCPVVXNHA5
        subject_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QP5fTuMGqQEhzQVP3A9DDf
          claim_id: c_c7B6pmQE195WBCPVVXNHA5
          source_id: s_FLTe23fQ3Yas8yRVm4tAdp
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
        id: c_4BFAGj2KwQp5SVGykCAhXP
        subject_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
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
        - id: cs_ZVjXTtdRZkbedLMsJ3jSV4
          claim_id: c_4BFAGj2KwQp5SVGykCAhXP
          source_id: s_FLTe23fQ3Yas8yRVm4tAdp
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
        id: c_WmtVi8hpiHdzrVIfkItVp3
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zbKj98JeC6KWficHAeAQvO
          claim_id: c_WmtVi8hpiHdzrVIfkItVp3
          source_id: s_Q24rEAHyuRo4MFbpVkFBFd
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q24rEAHyuRo4MFbpVkFBFd
            source_type: api_record
            title: 中国历代人物传记资料库：王礪（CBDB 241021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241021&o=json
            external_identifier: CBDB:241021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2h2iTcWMQkG9VP954w7RTi
        status: active
        display_name: 王礪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2h2iTcWMQkG9VP954w7RTi | 王礪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王礪（CBDB 241021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241021&o=json)
- [中国历代人物传记资料库：王正（CBDB 208144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208144&o=json)
