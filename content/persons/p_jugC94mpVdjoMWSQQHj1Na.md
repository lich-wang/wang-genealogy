---
schema: wang-person/v1
id: p_jugC94mpVdjoMWSQQHj1Na
status: active
merged_into: null
display_name: 王經
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6dPpVLeLKqeDrtf8maDxAb
        subject_person_id: p_jugC94mpVdjoMWSQQHj1Na
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uHefLQ3CA5jouCN5HNjWei
          claim_id: c_6dPpVLeLKqeDrtf8maDxAb
          source_id: s_horpE6GT2BpJ8N3YdoiBiw
          stance: supports
          locator: CBDB:317544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317544）
          source: &a1
            id: s_horpE6GT2BpJ8N3YdoiBiw
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 317544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317544&o=json
            external_identifier: CBDB:317544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FkJVmWw97pAjxzwEJHRec8
        subject_person_id: p_jugC94mpVdjoMWSQQHj1Na
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
        - id: cs_LC9S8xKKuD3yobbWELk3ZP
          claim_id: c_FkJVmWw97pAjxzwEJHRec8
          source_id: s_horpE6GT2BpJ8N3YdoiBiw
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
        id: c_EZhjS5imLpjB7aWj6yZkFf
        subject_person_id: p_jugC94mpVdjoMWSQQHj1Na
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_km9L8h--iTLKFt1MGKQTLf
          claim_id: c_EZhjS5imLpjB7aWj6yZkFf
          source_id: s_horpE6GT2BpJ8N3YdoiBiw
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百五十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        status: active
        display_name: 王彥民
        merged_into_person_id: null
  other: []
---

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FS8BiVQ7A5TRPBTnfjAmZ6 | 王彥民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 317544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317544&o=json)
