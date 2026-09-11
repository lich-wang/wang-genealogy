---
schema: wang-person/v1
id: p_3GDXJEwfAkKwtSBCTXzYWv
status: active
merged_into: null
display_name: 王康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rfBAY19aQNa4UP9H1vqHWs
        subject_person_id: p_3GDXJEwfAkKwtSBCTXzYWv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7n1UTCL4vAE5h1t6Yk5eUF
          claim_id: c_rfBAY19aQNa4UP9H1vqHWs
          source_id: s_PFiBqprfFP6ykE5s1aG5kr
          stance: supports
          locator: CBDB:471768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471768）
          source: &a1
            id: s_PFiBqprfFP6ykE5s1aG5kr
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 471768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471768&o=json
            external_identifier: CBDB:471768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.213Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EgHXGDjh3ZjHVRuWCzyxMf
        subject_person_id: p_3GDXJEwfAkKwtSBCTXzYWv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 471768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cnp-UqXYHvYv7cCH08KfYo
          claim_id: c_EgHXGDjh3ZjHVRuWCzyxMf
          source_id: s_PFiBqprfFP6ykE5s1aG5kr
          stance: supports
          locator: CBDB:471768
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

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| bio.summary | 王康，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 471768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 471768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471768&o=json)
