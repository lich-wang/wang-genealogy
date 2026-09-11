---
schema: wang-person/v1
id: p_Kpv6MQue9mKuc39NCPEVQJ
status: active
merged_into: null
display_name: 王憲猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKBF8VRYw4b3XBc7SQRc6r
        subject_person_id: p_Kpv6MQue9mKuc39NCPEVQJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SQDjRN6w8hgCqv87vPX31L
          claim_id: c_HKBF8VRYw4b3XBc7SQRc6r
          source_id: s_Zmw6XNns4ZaijVRCzzL9FM
          stance: supports
          locator: CBDB:637973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637973）
          source: &a1
            id: s_Zmw6XNns4ZaijVRCzzL9FM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲猷（CBDB 637973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637973&o=json
            external_identifier: CBDB:637973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2pX3exYVitYcG2aNC9yzxM
        subject_person_id: p_Kpv6MQue9mKuc39NCPEVQJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲猷，清人物。籍贯寶坻，入仕副榜，曾任知縣。（中国历代人物传记资料库 CBDB 637973）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FxeyNk8ZmG-jJ4g7nFRB3d
          claim_id: c_2pX3exYVitYcG2aNC9yzxM
          source_id: s_Zmw6XNns4ZaijVRCzzL9FM
          stance: supports
          locator: CBDB:637973
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

# 王憲猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲猷 | accepted |
| bio.summary | 王憲猷，清人物。籍贯寶坻，入仕副榜，曾任知縣。（中国历代人物传记资料库 CBDB 637973） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲猷（CBDB 637973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637973&o=json)
