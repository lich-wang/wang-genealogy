---
schema: wang-person/v1
id: p_MsStZLVU9nEm97komR3uHe
status: active
merged_into: null
display_name: 王懷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZEQUCqBkEm5wmoLVdcjevo
        subject_person_id: p_MsStZLVU9nEm97komR3uHe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vNo7pa6mMr73UnJt8Y1CuG
          claim_id: c_ZEQUCqBkEm5wmoLVdcjevo
          source_id: s_b8rZhr5qKgPnrrFjAajbCG
          stance: supports
          locator: CBDB:376535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（376535）
          source: &a1
            id: s_b8rZhr5qKgPnrrFjAajbCG
            source_type: api_record
            title: 中国历代人物传记资料库：王懷（CBDB 376535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376535&o=json
            external_identifier: CBDB:376535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_keEv1RoqAX9nwJFKjEtGvk
        subject_person_id: p_MsStZLVU9nEm97komR3uHe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷，唐人物。曾任太府少卿。（中国历代人物传记资料库 CBDB 376535）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Ri6xUc-BBMLdLAp_wW9cK
          claim_id: c_keEv1RoqAX9nwJFKjEtGvk
          source_id: s_b8rZhr5qKgPnrrFjAajbCG
          stance: supports
          locator: CBDB:376535
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

# 王懷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷 | accepted |
| bio.summary | 王懷，唐人物。曾任太府少卿。（中国历代人物传记资料库 CBDB 376535） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷（CBDB 376535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376535&o=json)
