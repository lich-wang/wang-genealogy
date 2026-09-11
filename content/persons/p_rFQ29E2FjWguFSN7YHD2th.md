---
schema: wang-person/v1
id: p_rFQ29E2FjWguFSN7YHD2th
status: active
merged_into: null
display_name: 王直
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5btgRWq8EnCMgNUnTVpLG3
        subject_person_id: p_rFQ29E2FjWguFSN7YHD2th
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UP1tGYNR1tZefs3v7B8kyK
          claim_id: c_5btgRWq8EnCMgNUnTVpLG3
          source_id: s_s2XBCNu9aGNokeowSULcuG
          stance: supports
          locator: CBDB:301436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301436）
          source: &a1
            id: s_s2XBCNu9aGNokeowSULcuG
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 301436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301436&o=json
            external_identifier: CBDB:301436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MniFbyCk5tA2q7juH9HF2F
        subject_person_id: p_rFQ29E2FjWguFSN7YHD2th
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直，明人物。洪武四年進士。（中国历代人物传记资料库 CBDB 301436）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9LzI1HO9jHbuufCRKX7ess
          claim_id: c_MniFbyCk5tA2q7juH9HF2F
          source_id: s_s2XBCNu9aGNokeowSULcuG
          stance: supports
          locator: CBDB:301436
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
        id: c_5rpllfyy5SItIQ6mtSMRmx
        subject_person_id: p_rFQ29E2FjWguFSN7YHD2th
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xeCtF6YtnZ7oFJ3LJ48uKd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0D1rYew6b5eCOZB2cVhCKj
          claim_id: c_5rpllfyy5SItIQ6mtSMRmx
          source_id: s_s2XBCNu9aGNokeowSULcuG
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xeCtF6YtnZ7oFJ3LJ48uKd
        status: active
        display_name: 王諫
        merged_into_person_id: null
  other: []
---

# 王直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王直 | accepted |
| bio.summary | 王直，明人物。洪武四年進士。（中国历代人物传记资料库 CBDB 301436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xeCtF6YtnZ7oFJ3LJ48uKd | 王諫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王直（CBDB 301436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301436&o=json)
