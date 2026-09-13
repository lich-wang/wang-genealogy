---
schema: wang-person/v1
id: p_K3UsBndxunPzRMVaLH5HGf
status: active
merged_into: null
display_name: 王子佐
cbdb_id: 414235
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XL7UDzK1A73LCwrXuXrEQj
        subject_person_id: p_K3UsBndxunPzRMVaLH5HGf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子佐，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 414235）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7xV8uV7V02MgEXpq-OhunA
          claim_id: c_XL7UDzK1A73LCwrXuXrEQj
          source_id: s_oo7Mz2CMLkq3FGWjb5BYUj
          stance: supports
          locator: CBDB:414235
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oo7Mz2CMLkq3FGWjb5BYUj
            source_type: api_record
            title: 中国历代人物传记资料库：王子佐（CBDB 414235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414235&o=json
            external_identifier: CBDB:414235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:30.615Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7C84K2WTjLYg3kjPpP25mQ
        subject_person_id: p_K3UsBndxunPzRMVaLH5HGf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AkZwkiSy86FaHLAyHh914Z
          claim_id: c_7C84K2WTjLYg3kjPpP25mQ
          source_id: s_oo7Mz2CMLkq3FGWjb5BYUj
          stance: supports
          locator: CBDB:414235
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5301-5400）｜历史性依据：CBDB 朝代 = 明
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

# 王子佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子佐，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 414235） | accepted |
| name.primary | 王子佐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子佐（CBDB 414235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414235&o=json)
