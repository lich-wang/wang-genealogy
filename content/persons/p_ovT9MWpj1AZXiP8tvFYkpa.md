---
schema: wang-person/v1
id: p_ovT9MWpj1AZXiP8tvFYkpa
status: active
merged_into: null
display_name: 王洀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S4d43PmtmpW4KvruivJ5i8
        subject_person_id: p_ovT9MWpj1AZXiP8tvFYkpa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BXJFm4hqHhKdyABH4fJ9wE
          claim_id: c_S4d43PmtmpW4KvruivJ5i8
          source_id: s_aE9CRVdFcH1VyFEuT93CDb
          stance: supports
          locator: CBDB:488075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488075）
          source: &a1
            id: s_aE9CRVdFcH1VyFEuT93CDb
            source_type: api_record
            title: 中国历代人物传记资料库：王洀（CBDB 488075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488075&o=json
            external_identifier: CBDB:488075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R9qg2A22w1yx77iJ58ZyL2
        subject_person_id: p_ovT9MWpj1AZXiP8tvFYkpa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洀，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 488075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oG5heLGbmt65Tb8aMw5x2i
          claim_id: c_R9qg2A22w1yx77iJ58ZyL2
          source_id: s_aE9CRVdFcH1VyFEuT93CDb
          stance: supports
          locator: CBDB:488075
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

# 王洀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洀 | accepted |
| bio.summary | 王洀，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 488075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洀（CBDB 488075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488075&o=json)
