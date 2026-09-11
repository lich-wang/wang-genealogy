---
schema: wang-person/v1
id: p_Dx7DJAFgKcf2Mjx7rmznYb
status: active
merged_into: null
display_name: 王文煒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5FNMN8RwzgrVXiTJPrwTWS
        subject_person_id: p_Dx7DJAFgKcf2Mjx7rmznYb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jJWPvSivcPbtuTUd1yNfeN
          claim_id: c_5FNMN8RwzgrVXiTJPrwTWS
          source_id: s_1UaddS3uf3vS8oQx3eC68c
          stance: supports
          locator: CBDB:316803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316803）
          source: &a1
            id: s_1UaddS3uf3vS8oQx3eC68c
            source_type: api_record
            title: 中国历代人物传记资料库：王文煒（CBDB 316803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316803&o=json
            external_identifier: CBDB:316803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MLCpuJCpQjmfqb87gaJh32
        subject_person_id: p_Dx7DJAFgKcf2Mjx7rmznYb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文煒，明人物。嘉靖三十二年進士，籍贯廬陵，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 316803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9a3OFB53Sgt9CpYxhyPVTa
          claim_id: c_MLCpuJCpQjmfqb87gaJh32
          source_id: s_1UaddS3uf3vS8oQx3eC68c
          stance: supports
          locator: CBDB:316803
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

# 王文煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文煒 | accepted |
| bio.summary | 王文煒，明人物。嘉靖三十二年進士，籍贯廬陵，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 316803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文煒（CBDB 316803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316803&o=json)
