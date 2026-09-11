---
schema: wang-person/v1
id: p_vAD36nL3Ty4FEHW8EW9YZ7
status: active
merged_into: null
display_name: 王重儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wgwifA4UcDgEqUu3a6bfBA
        subject_person_id: p_vAD36nL3Ty4FEHW8EW9YZ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AGewcosU7SacJPKAz1A6QJ
          claim_id: c_wgwifA4UcDgEqUu3a6bfBA
          source_id: s_MUhKocd8THA4ZC1cLM3gGy
          stance: supports
          locator: CBDB:504638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504638）
          source: &a1
            id: s_MUhKocd8THA4ZC1cLM3gGy
            source_type: api_record
            title: 中国历代人物传记资料库：王重儒（CBDB 504638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504638&o=json
            external_identifier: CBDB:504638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VWEWqbLAUjdQRUkjp1HmpH
        subject_person_id: p_vAD36nL3Ty4FEHW8EW9YZ7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重儒，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 504638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_972aONyGSIn4kmEpW1zMhi
          claim_id: c_VWEWqbLAUjdQRUkjp1HmpH
          source_id: s_MUhKocd8THA4ZC1cLM3gGy
          stance: supports
          locator: CBDB:504638
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

# 王重儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重儒 | accepted |
| bio.summary | 王重儒，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 504638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重儒（CBDB 504638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504638&o=json)
