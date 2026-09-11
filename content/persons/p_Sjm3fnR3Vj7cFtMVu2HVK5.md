---
schema: wang-person/v1
id: p_Sjm3fnR3Vj7cFtMVu2HVK5
status: active
merged_into: null
display_name: 王述炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D3rekvZQsjZSEnc3gdQLau
        subject_person_id: p_Sjm3fnR3Vj7cFtMVu2HVK5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f5FZgc7798r5GWUxk2P3yF
          claim_id: c_D3rekvZQsjZSEnc3gdQLau
          source_id: s_jASiCLWeveHeYS8Ej9ttCd
          stance: supports
          locator: CBDB:640397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640397）
          source: &a1
            id: s_jASiCLWeveHeYS8Ej9ttCd
            source_type: api_record
            title: 中国历代人物传记资料库：王述炳（CBDB 640397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640397&o=json
            external_identifier: CBDB:640397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UvRA1oTHQH3LmVQeX2erZh
        subject_person_id: p_Sjm3fnR3Vj7cFtMVu2HVK5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述炳，清人物。籍贯大興，入仕監生，曾任知府、知縣。（中国历代人物传记资料库 CBDB 640397）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XYyTZyXqw0HXRD2Mo0c21t
          claim_id: c_UvRA1oTHQH3LmVQeX2erZh
          source_id: s_jASiCLWeveHeYS8Ej9ttCd
          stance: supports
          locator: CBDB:640397
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

# 王述炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述炳 | accepted |
| bio.summary | 王述炳，清人物。籍贯大興，入仕監生，曾任知府、知縣。（中国历代人物传记资料库 CBDB 640397） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述炳（CBDB 640397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640397&o=json)
