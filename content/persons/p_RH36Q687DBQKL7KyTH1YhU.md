---
schema: wang-person/v1
id: p_RH36Q687DBQKL7KyTH1YhU
status: active
merged_into: null
display_name: 王惟賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v1AZQNRVA3SmzXekvFX3eT
        subject_person_id: p_RH36Q687DBQKL7KyTH1YhU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uCDBwcGQAwzrBVJgG6J6re
          claim_id: c_v1AZQNRVA3SmzXekvFX3eT
          source_id: s_hRmANtv2ivHHvc5ViLyezR
          stance: supports
          locator: CBDB:316798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316798）
          source: &a1
            id: s_hRmANtv2ivHHvc5ViLyezR
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 316798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316798&o=json
            external_identifier: CBDB:316798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xw9gCXBiMndPCsBg6e6895
        subject_person_id: p_RH36Q687DBQKL7KyTH1YhU
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
        - id: cs_dcCpN1M7g4RqKRSsrg17ij
          claim_id: c_Xw9gCXBiMndPCsBg6e6895
          source_id: s_hRmANtv2ivHHvc5ViLyezR
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

# 王惟賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟賢（CBDB 316798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316798&o=json)
