---
schema: wang-person/v1
id: p_XdG4ttvyJbn7Y3Kn1F5yA2
status: active
merged_into: null
display_name: 王正道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LK2F4i6D1Ng6zT72yv3MAH
        subject_person_id: p_XdG4ttvyJbn7Y3Kn1F5yA2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLhpNEAEABx7oYHQrxE396
          claim_id: c_LK2F4i6D1Ng6zT72yv3MAH
          source_id: s_764pTz4XMYt2c53fc7mTXD
          stance: supports
          locator: CBDB:700441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700441）
          source: &a1
            id: s_764pTz4XMYt2c53fc7mTXD
            source_type: api_record
            title: 中国历代人物传记资料库：王正道（CBDB 700441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700441&o=json
            external_identifier: CBDB:700441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hs2HGBcxLwCr9xYQN9yFR5
        subject_person_id: p_XdG4ttvyJbn7Y3Kn1F5yA2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正道，明人物。籍贯錢塘，身份为詩人、博學之人。（中国历代人物传记资料库 CBDB 700441）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZGpq-Zxkxr3ks4bTNILPCS
          claim_id: c_hs2HGBcxLwCr9xYQN9yFR5
          source_id: s_764pTz4XMYt2c53fc7mTXD
          stance: supports
          locator: CBDB:700441
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

# 王正道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正道 | accepted |
| bio.summary | 王正道，明人物。籍贯錢塘，身份为詩人、博學之人。（中国历代人物传记资料库 CBDB 700441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正道（CBDB 700441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700441&o=json)
