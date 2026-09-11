---
schema: wang-person/v1
id: p_juJvxXoMDh794HUvGD2NLz
status: active
merged_into: null
display_name: 王芙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFqsLpuQrEAobNHyXdp4Ew
        subject_person_id: p_juJvxXoMDh794HUvGD2NLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zXPb72KrBajxs2x5YEvxTN
          claim_id: c_JFqsLpuQrEAobNHyXdp4Ew
          source_id: s_1HteqzPzgZjk7CXovyFHhm
          stance: supports
          locator: CBDB:640050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640050）
          source: &a1
            id: s_1HteqzPzgZjk7CXovyFHhm
            source_type: api_record
            title: 中国历代人物传记资料库：王芙（CBDB 640050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640050&o=json
            external_identifier: CBDB:640050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CSPCgzJi9kpWHdK6d7VyGF
        subject_person_id: p_juJvxXoMDh794HUvGD2NLz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芙，清人物。籍贯金谿，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640050）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LcjewfZ0_jXJsw4hoq4Fdr
          claim_id: c_CSPCgzJi9kpWHdK6d7VyGF
          source_id: s_1HteqzPzgZjk7CXovyFHhm
          stance: supports
          locator: CBDB:640050
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

# 王芙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芙 | accepted |
| bio.summary | 王芙，清人物。籍贯金谿，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640050） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芙（CBDB 640050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640050&o=json)
