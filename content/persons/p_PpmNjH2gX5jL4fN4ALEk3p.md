---
schema: wang-person/v1
id: p_PpmNjH2gX5jL4fN4ALEk3p
status: active
merged_into: null
display_name: 王潛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ug5tEQpqbhyEcK25D57Vsp
        subject_person_id: p_PpmNjH2gX5jL4fN4ALEk3p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PhgE94HJMdS3ZomkQG1LcL
          claim_id: c_Ug5tEQpqbhyEcK25D57Vsp
          source_id: s_66KUaPbkuq7YG718pCkU97
          stance: supports
          locator: CBDB:229107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229107）
          source: &a1
            id: s_66KUaPbkuq7YG718pCkU97
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 229107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229107&o=json
            external_identifier: CBDB:229107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQD9mdSuDz43uyyvH3m8tL
        subject_person_id: p_PpmNjH2gX5jL4fN4ALEk3p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潛，明人物。景泰二年進士，曾任翰林院修撰。（中国历代人物传记资料库 CBDB 229107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F_pYXF1kd9UY2Ys_KktUA-
          claim_id: c_JQD9mdSuDz43uyyvH3m8tL
          source_id: s_66KUaPbkuq7YG718pCkU97
          stance: supports
          locator: CBDB:229107
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

# 王潛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潛 | accepted |
| bio.summary | 王潛，明人物。景泰二年進士，曾任翰林院修撰。（中国历代人物传记资料库 CBDB 229107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潛（CBDB 229107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229107&o=json)
