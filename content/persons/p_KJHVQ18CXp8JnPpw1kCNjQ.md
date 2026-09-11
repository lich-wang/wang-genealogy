---
schema: wang-person/v1
id: p_KJHVQ18CXp8JnPpw1kCNjQ
status: active
merged_into: null
display_name: 王彝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gHcQDkimQPUA1A559yZc92
        subject_person_id: p_KJHVQ18CXp8JnPpw1kCNjQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5TiFqgGVYhAFFX7dnJbJhY
          claim_id: c_gHcQDkimQPUA1A559yZc92
          source_id: s_gC8FP3LtB48EcQP9A7GPeo
          stance: supports
          locator: CBDB:278545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278545）
          source: &a1
            id: s_gC8FP3LtB48EcQP9A7GPeo
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 278545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278545&o=json
            external_identifier: CBDB:278545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KDbffCV1FbgE5KWrJfNuec
        subject_person_id: p_KJHVQ18CXp8JnPpw1kCNjQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 278545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wg-5vi0p6---LPgBYfSP4X
          claim_id: c_KDbffCV1FbgE5KWrJfNuec
          source_id: s_gC8FP3LtB48EcQP9A7GPeo
          stance: supports
          locator: CBDB:278545
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
        id: c_XqQxrf3jawispPQsy1tr3X
        subject_person_id: p_KJHVQ18CXp8JnPpw1kCNjQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EGSQruOAvdwA43JM3YQd8
          claim_id: c_XqQxrf3jawispPQsy1tr3X
          source_id: s_gC8FP3LtB48EcQP9A7GPeo
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百五十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
  other: []
---

# 王彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝 | accepted |
| bio.summary | 王彝，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 278545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彝（CBDB 278545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278545&o=json)
