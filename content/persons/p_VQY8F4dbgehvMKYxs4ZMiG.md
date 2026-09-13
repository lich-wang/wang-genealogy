---
schema: wang-person/v1
id: p_VQY8F4dbgehvMKYxs4ZMiG
status: active
merged_into: null
display_name: 王仲丘
cbdb_id: 152427
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9mTHGHic7WfRdWq8TYzZYm
        subject_person_id: p_VQY8F4dbgehvMKYxs4ZMiG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲丘，唐人物。曾任集賢院修撰。（中国历代人物传记资料库 CBDB 152427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DQAymo0z8ab_cr5HCvxa7-
          claim_id: c_9mTHGHic7WfRdWq8TYzZYm
          source_id: s_sgPQxJ2N5g1XvfSu6fXK7P
          stance: supports
          locator: CBDB:152427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sgPQxJ2N5g1XvfSu6fXK7P
            source_type: api_record
            title: 中国历代人物传记资料库：王仲丘（CBDB 152427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152427&o=json
            external_identifier: CBDB:152427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DGPx98GoVW4KcdKEaGsnhr
        subject_person_id: p_VQY8F4dbgehvMKYxs4ZMiG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲丘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PCQxCx9zDAvJ5zH7LXrKgm
          claim_id: c_DGPx98GoVW4KcdKEaGsnhr
          source_id: s_sgPQxJ2N5g1XvfSu6fXK7P
          stance: supports
          locator: CBDB:152427
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
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

# 王仲丘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲丘，唐人物。曾任集賢院修撰。（中国历代人物传记资料库 CBDB 152427） | accepted |
| name.primary | 王仲丘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲丘（CBDB 152427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152427&o=json)
