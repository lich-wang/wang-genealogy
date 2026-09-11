---
schema: wang-person/v1
id: p_8abpLSQKLVJUBSTYHH9VUf
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JNJ31FWVuss7uWSyB9KDdG
        subject_person_id: p_8abpLSQKLVJUBSTYHH9VUf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8PhEJMNN3B495SG2M9ap9H
          claim_id: c_JNJ31FWVuss7uWSyB9KDdG
          source_id: s_1b3ifn62TbyUquTMTEK1Ww
          stance: supports
          locator: CBDB:273730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273730）
          source: &a1
            id: s_1b3ifn62TbyUquTMTEK1Ww
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 273730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273730&o=json
            external_identifier: CBDB:273730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4vazUijf3Qz2tV4rfAYeNF
        subject_person_id: p_8abpLSQKLVJUBSTYHH9VUf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，明人物。弘治十八年進士，籍贯江都，曾任州判官。（中国历代人物传记资料库 CBDB 273730）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g-6EnUYF64te6G8tAGEh8S
          claim_id: c_4vazUijf3Qz2tV4rfAYeNF
          source_id: s_1b3ifn62TbyUquTMTEK1Ww
          stance: supports
          locator: CBDB:273730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BpwzEkJPrPsBAf2gFkd-Qu
        subject_person_id: p_8abpLSQKLVJUBSTYHH9VUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GoKhl-L-_ixMehjH7QtTWl
          claim_id: c_BpwzEkJPrPsBAf2gFkd-Qu
          source_id: s_1b3ifn62TbyUquTMTEK1Ww
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DqGaEwDgvnqbuon9q4h7Cc
        status: active
        display_name: 王儼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，明人物。弘治十八年進士，籍贯江都，曾任州判官。（中国历代人物传记资料库 CBDB 273730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DqGaEwDgvnqbuon9q4h7Cc | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 273730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273730&o=json)
