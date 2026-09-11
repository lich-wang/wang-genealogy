---
schema: wang-person/v1
id: p_s7b8sNn1c2KhS6yHRDCx2S
status: active
merged_into: null
display_name: 王橒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yvgpvVoXGsFpSFBY766NyG
        subject_person_id: p_s7b8sNn1c2KhS6yHRDCx2S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RmpuamWeS4RZZR9J7B5LHW
          claim_id: c_yvgpvVoXGsFpSFBY766NyG
          source_id: s_Fa8iP38WaGZZuA7zyPBJSJ
          stance: supports
          locator: CBDB:471662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471662）
          source: &a1
            id: s_Fa8iP38WaGZZuA7zyPBJSJ
            source_type: api_record
            title: 中国历代人物传记资料库：王橒（CBDB 471662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471662&o=json
            external_identifier: CBDB:471662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LbPrtw2UnmNECR9Bu6pvCJ
        subject_person_id: p_s7b8sNn1c2KhS6yHRDCx2S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橒，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 471662）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yBRLk3c8ink_GWX48f6Ekz
          claim_id: c_LbPrtw2UnmNECR9Bu6pvCJ
          source_id: s_Fa8iP38WaGZZuA7zyPBJSJ
          stance: supports
          locator: CBDB:471662
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

# 王橒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王橒 | accepted |
| bio.summary | 王橒，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 471662） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王橒（CBDB 471662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471662&o=json)
