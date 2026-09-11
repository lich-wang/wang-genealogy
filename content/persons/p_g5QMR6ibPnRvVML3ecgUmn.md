---
schema: wang-person/v1
id: p_g5QMR6ibPnRvVML3ecgUmn
status: active
merged_into: null
display_name: 王宸仔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LZNDYKtHWXzGDXRG7L9Kt2
        subject_person_id: p_g5QMR6ibPnRvVML3ecgUmn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸仔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ANbCQfH5jtt7ApiXzgwzoq
          claim_id: c_LZNDYKtHWXzGDXRG7L9Kt2
          source_id: s_Esur9r2t7oGT3GZRw8rNAY
          stance: supports
          locator: CBDB:637230
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637230）
          source: &a1
            id: s_Esur9r2t7oGT3GZRw8rNAY
            source_type: api_record
            title: 中国历代人物传记资料库：王宸仔（CBDB 637230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637230&o=json
            external_identifier: CBDB:637230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZA8mKmsw1Nxr7vp9Z66CCZ
        subject_person_id: p_g5QMR6ibPnRvVML3ecgUmn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸仔，清人物。籍贯山東省，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637230）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_myO85Qgoos4nPv-ZqNr4ee
          claim_id: c_ZA8mKmsw1Nxr7vp9Z66CCZ
          source_id: s_Esur9r2t7oGT3GZRw8rNAY
          stance: supports
          locator: CBDB:637230
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

# 王宸仔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸仔 | accepted |
| bio.summary | 王宸仔，清人物。籍贯山東省，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637230） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宸仔（CBDB 637230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637230&o=json)
