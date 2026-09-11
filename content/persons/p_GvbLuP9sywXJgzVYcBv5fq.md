---
schema: wang-person/v1
id: p_GvbLuP9sywXJgzVYcBv5fq
status: active
merged_into: null
display_name: 王寶瑩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_urXRANFVXoZBPT933JAER2
        subject_person_id: p_GvbLuP9sywXJgzVYcBv5fq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HkNKT8zbJ1z8ZwNYBJuPmg
          claim_id: c_urXRANFVXoZBPT933JAER2
          source_id: s_15k9jwgk4WyoNs4XUtfC3s
          stance: supports
          locator: CBDB:637277
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637277）
          source: &a1
            id: s_15k9jwgk4WyoNs4XUtfC3s
            source_type: api_record
            title: 中国历代人物传记资料库：王寶瑩（CBDB 637277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637277&o=json
            external_identifier: CBDB:637277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.371Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w1oENFN8tbPJ5kmiLkSZSc
        subject_person_id: p_GvbLuP9sywXJgzVYcBv5fq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶瑩，清人物。籍贯浙江省，入仕廩貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637277）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i45pD2XVVhwhXukQ13IIc4
          claim_id: c_w1oENFN8tbPJ5kmiLkSZSc
          source_id: s_15k9jwgk4WyoNs4XUtfC3s
          stance: supports
          locator: CBDB:637277
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

# 王寶瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶瑩 | accepted |
| bio.summary | 王寶瑩，清人物。籍贯浙江省，入仕廩貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637277） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶瑩（CBDB 637277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637277&o=json)
