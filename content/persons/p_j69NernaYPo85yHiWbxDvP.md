---
schema: wang-person/v1
id: p_j69NernaYPo85yHiWbxDvP
status: active
merged_into: null
display_name: 王鳳桐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7TtAwJ8FYxWB8GfCE9VMEA
        subject_person_id: p_j69NernaYPo85yHiWbxDvP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳桐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DzMurCi1XrRQme2r8cRbTq
          claim_id: c_7TtAwJ8FYxWB8GfCE9VMEA
          source_id: s_K2GJduURFR6GrDNWiLVRwg
          stance: supports
          locator: CBDB:640958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640958）
          source: &a1
            id: s_K2GJduURFR6GrDNWiLVRwg
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳桐（CBDB 640958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640958&o=json
            external_identifier: CBDB:640958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pVxWrFss4HG5DNPynLb3LL
        subject_person_id: p_j69NernaYPo85yHiWbxDvP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳桐，清人物。籍贯衛輝府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OZfggcmq9wR7_mD0Wv0ont
          claim_id: c_pVxWrFss4HG5DNPynLb3LL
          source_id: s_K2GJduURFR6GrDNWiLVRwg
          stance: supports
          locator: CBDB:640958
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
  descendants: []
  other: []
---

# 王鳳桐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳桐 | accepted |
| bio.summary | 王鳳桐，清人物。籍贯衛輝府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳桐（CBDB 640958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640958&o=json)
