---
schema: wang-person/v1
id: p_eFhKzbESVxhCuJGXAkMcL9
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BszCgwjubyxxwrwjL9GMvJ
        subject_person_id: p_eFhKzbESVxhCuJGXAkMcL9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vN9hXdakQPJDViry45VdFw
          claim_id: c_BszCgwjubyxxwrwjL9GMvJ
          source_id: s_w33Wv7iea3nA6rLQ5eDTAH
          stance: supports
          locator: CBDB:231062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231062）
          source: &a1
            id: s_w33Wv7iea3nA6rLQ5eDTAH
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 231062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json
            external_identifier: CBDB:231062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xaCfwMHXhLMiukx1ykUiS8
        subject_person_id: p_eFhKzbESVxhCuJGXAkMcL9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。宣德八年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 231062）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jchxm9mzHfaYzkNZbg_Sf0
          claim_id: c_xaCfwMHXhLMiukx1ykUiS8
          source_id: s_w33Wv7iea3nA6rLQ5eDTAH
          stance: supports
          locator: CBDB:231062
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。宣德八年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 231062） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 231062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json)
