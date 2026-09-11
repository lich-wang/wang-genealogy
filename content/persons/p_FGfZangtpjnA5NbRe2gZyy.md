---
schema: wang-person/v1
id: p_FGfZangtpjnA5NbRe2gZyy
status: active
merged_into: null
display_name: 王志道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Civa8eED8yNFFaUNDXCeQF
        subject_person_id: p_FGfZangtpjnA5NbRe2gZyy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cPXf6shTxcRAUNJgB5DZCC
          claim_id: c_Civa8eED8yNFFaUNDXCeQF
          source_id: s_1FuGeRPKM42gdHu2N5BEJw
          stance: supports
          locator: CBDB:456035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456035）
          source: &a1
            id: s_1FuGeRPKM42gdHu2N5BEJw
            source_type: api_record
            title: 中国历代人物传记资料库：王志道（CBDB 456035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456035&o=json
            external_identifier: CBDB:456035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AMsjV4VWfXpH2f8uGXFMS8
        subject_person_id: p_FGfZangtpjnA5NbRe2gZyy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志道，明人物。入仕監生，曾任教諭。（中国历代人物传记资料库 CBDB 456035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A7zjNNZ6khtrwP9yoUCtzO
          claim_id: c_AMsjV4VWfXpH2f8uGXFMS8
          source_id: s_1FuGeRPKM42gdHu2N5BEJw
          stance: supports
          locator: CBDB:456035
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

# 王志道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志道 | accepted |
| bio.summary | 王志道，明人物。入仕監生，曾任教諭。（中国历代人物传记资料库 CBDB 456035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志道（CBDB 456035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456035&o=json)
