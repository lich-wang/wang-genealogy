---
schema: wang-person/v1
id: p_QeQBP88kMapAU4v9RQ1vsF
status: active
merged_into: null
display_name: 王守道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_16gGSki2HshkGkd832DP1N
        subject_person_id: p_QeQBP88kMapAU4v9RQ1vsF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPMpRqhKoDv8haFM5R1HMC
          claim_id: c_16gGSki2HshkGkd832DP1N
          source_id: s_aNquKj2JGUCGomZHi1kCCE
          stance: supports
          locator: CBDB:269326
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269326）
          source: &a1
            id: s_aNquKj2JGUCGomZHi1kCCE
            source_type: api_record
            title: 中国历代人物传记资料库：王守道（CBDB 269326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269326&o=json
            external_identifier: CBDB:269326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JTovfDvPMQMifaPcZ824aG
        subject_person_id: p_QeQBP88kMapAU4v9RQ1vsF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守道，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 269326）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tY3AQW-_K7iJJoa5_ce4y7
          claim_id: c_JTovfDvPMQMifaPcZ824aG
          source_id: s_aNquKj2JGUCGomZHi1kCCE
          stance: supports
          locator: CBDB:269326
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
        id: c_t6x1mnx1MOQhhVBy-5TF9I
        subject_person_id: p_QeQBP88kMapAU4v9RQ1vsF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CZ8eCkhwLj8bRjMZEDrV7a
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0941Dw1L-w5BCl9l-1O7KV
          claim_id: c_t6x1mnx1MOQhhVBy-5TF9I
          source_id: s_aNquKj2JGUCGomZHi1kCCE
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百五十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CZ8eCkhwLj8bRjMZEDrV7a
        status: active
        display_name: 王琮
        merged_into_person_id: null
  other: []
---

# 王守道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守道 | accepted |
| bio.summary | 王守道，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 269326） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CZ8eCkhwLj8bRjMZEDrV7a | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守道（CBDB 269326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269326&o=json)
