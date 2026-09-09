---
schema: wang-person/v1
id: p_xQzLo26BDbczHMMgeMnwYy
status: active
merged_into: null
display_name: 王用賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_23hmyn1o33YwcsTMX7pAb9
        subject_person_id: p_xQzLo26BDbczHMMgeMnwYy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w9wDSoV55d9gNsE7iU7NWg
          claim_id: c_23hmyn1o33YwcsTMX7pAb9
          source_id: s_cF2V2bRHULKybexykphWQB
          stance: supports
          locator: CBDB:639478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639478）
          source: &a1
            id: s_cF2V2bRHULKybexykphWQB
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 639478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639478&o=json
            external_identifier: CBDB:639478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L2pERDKBgMSwWCFEXoaBAC
        subject_person_id: p_xQzLo26BDbczHMMgeMnwYy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Tz4cREi7bAmuUwPRDuEGM
          claim_id: c_L2pERDKBgMSwWCFEXoaBAC
          source_id: s_cF2V2bRHULKybexykphWQB
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
  descendants: []
  other: []
---

# 王用賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用賢（CBDB 639478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639478&o=json)
