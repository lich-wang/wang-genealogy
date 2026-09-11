---
schema: wang-person/v1
id: p_BxC4uACvR2xMAKZRYpDAhv
status: active
merged_into: null
display_name: 王宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HzHRNon2dYzDAhYLiuSCFx
        subject_person_id: p_BxC4uACvR2xMAKZRYpDAhv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wu1QcoMEwzLWLhphcpV1sG
          claim_id: c_HzHRNon2dYzDAhYLiuSCFx
          source_id: s_tktoThxfWQ7JAns87E8uJs
          stance: supports
          locator: CBDB:292307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292307）
          source: &a1
            id: s_tktoThxfWQ7JAns87E8uJs
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 292307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292307&o=json
            external_identifier: CBDB:292307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.402Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TXMsPNW3JJHzka8DFN7Az5
        subject_person_id: p_BxC4uACvR2xMAKZRYpDAhv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 292307）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ql7zxKjp9RjpWRALGZ_VUz
          claim_id: c_TXMsPNW3JJHzka8DFN7Az5
          source_id: s_tktoThxfWQ7JAns87E8uJs
          stance: supports
          locator: CBDB:292307
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
        id: c_62JMEmMZz8ks6veCx9VcE0
        subject_person_id: p_BxC4uACvR2xMAKZRYpDAhv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mQ1HgNsHjLy4eqYSHR1uT
          claim_id: c_62JMEmMZz8ks6veCx9VcE0
          source_id: s_tktoThxfWQ7JAns87E8uJs
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第四十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XKApWYJnmMgLZmZqtzznxJ
        status: active
        display_name: 王教
        merged_into_person_id: null
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | 王宗，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 292307） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_XKApWYJnmMgLZmZqtzznxJ | 王教 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 292307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292307&o=json)
