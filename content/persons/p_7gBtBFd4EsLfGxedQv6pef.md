---
schema: wang-person/v1
id: p_7gBtBFd4EsLfGxedQv6pef
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qG4qoqMEcGn9vB4uHhDCm8
        subject_person_id: p_7gBtBFd4EsLfGxedQv6pef
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ExPn6QEJQYjtfEwhjNaQFD
          claim_id: c_qG4qoqMEcGn9vB4uHhDCm8
          source_id: s_dys8UW2ZrHMGwwKEvazE3f
          stance: supports
          locator: CBDB:317395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317395）
          source: &a1
            id: s_dys8UW2ZrHMGwwKEvazE3f
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 317395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317395&o=json
            external_identifier: CBDB:317395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ixdNNfv4d49nAfPpCGs6Jx
        subject_person_id: p_7gBtBFd4EsLfGxedQv6pef
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 317395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6FiYpgciMv0Q8DnMoF0nZJ
          claim_id: c_ixdNNfv4d49nAfPpCGs6Jx
          source_id: s_dys8UW2ZrHMGwwKEvazE3f
          stance: supports
          locator: CBDB:317395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_OQGxgYVgrOcx8E6xgpod63
        subject_person_id: p_7gBtBFd4EsLfGxedQv6pef
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1oodw5KMyHddZ5LmNR35kQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CVuOHbWBa0DHc7q8McklS6
          claim_id: c_OQGxgYVgrOcx8E6xgpod63
          source_id: s_dys8UW2ZrHMGwwKEvazE3f
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1oodw5KMyHddZ5LmNR35kQ
        status: active
        display_name: 王汝正
        merged_into_person_id: null
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 317395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1oodw5KMyHddZ5LmNR35kQ | 王汝正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 317395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317395&o=json)
