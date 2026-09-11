---
schema: wang-person/v1
id: p_jLD8VTKrPU3mnUKjD5Lvzu
status: active
merged_into: null
display_name: 王彥昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G2y8qogpJeAFbCXn9FytPP
        subject_person_id: p_jLD8VTKrPU3mnUKjD5Lvzu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8BtFZ4zVm9oRJrQi5AtwpV
          claim_id: c_G2y8qogpJeAFbCXn9FytPP
          source_id: s_FdesQz9n5JXg6fkm12CsBG
          stance: supports
          locator: CBDB:377550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377550）
          source: &a1
            id: s_FdesQz9n5JXg6fkm12CsBG
            source_type: api_record
            title: 中国历代人物传记资料库：王彥昌（CBDB 377550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377550&o=json
            external_identifier: CBDB:377550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H557Ja3BxA1UUS1avGeQJH
        subject_person_id: p_jLD8VTKrPU3mnUKjD5Lvzu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥昌，唐人物。曾任州刺史、京兆尹。（中国历代人物传记资料库 CBDB 377550）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RaAIQC2mvravJofcD81s0k
          claim_id: c_H557Ja3BxA1UUS1avGeQJH
          source_id: s_FdesQz9n5JXg6fkm12CsBG
          stance: supports
          locator: CBDB:377550
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

# 王彥昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥昌 | accepted |
| bio.summary | 王彥昌，唐人物。曾任州刺史、京兆尹。（中国历代人物传记资料库 CBDB 377550） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥昌（CBDB 377550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377550&o=json)
