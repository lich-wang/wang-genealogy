---
schema: wang-person/v1
id: p_hHZ5eNrL27jeg6kvNsSboK
status: active
merged_into: null
display_name: 王德興
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ccD3VJPP6tdWyRGQ2co3o1
        subject_person_id: p_hHZ5eNrL27jeg6kvNsSboK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zPPS7i8o9Qa8EJ6BAMK5Lm
          claim_id: c_ccD3VJPP6tdWyRGQ2co3o1
          source_id: s_au3qtRGUrcbEbKd5W119u7
          stance: supports
          locator: CBDB:322397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322397）
          source: &a1
            id: s_au3qtRGUrcbEbKd5W119u7
            source_type: api_record
            title: 中国历代人物传记资料库：王德興（CBDB 322397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322397&o=json
            external_identifier: CBDB:322397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QNT1NLLiLspPtVz6HjH7K5
        subject_person_id: p_hHZ5eNrL27jeg6kvNsSboK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德興，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322397）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S1UVifJRJogkkNVbIuF4lF
          claim_id: c_QNT1NLLiLspPtVz6HjH7K5
          source_id: s_au3qtRGUrcbEbKd5W119u7
          stance: supports
          locator: CBDB:322397
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
  descendants:
    - claim:
        id: c_hJYSgEr_qXUrvIXtjj7JQ1
        subject_person_id: p_hHZ5eNrL27jeg6kvNsSboK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A_uT37o456zwQoC-LJUscT
          claim_id: c_hJYSgEr_qXUrvIXtjj7JQ1
          source_id: s_YpAKSrU9qwMyHtJCQL4Hfc
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YpAKSrU9qwMyHtJCQL4Hfc
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 67669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67669&o=json
            external_identifier: CBDB:67669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2aMd4JjZAnRDvAWGEDvPYQ
        status: active
        display_name: 王復
        merged_into_person_id: null
  other: []
---

# 王德興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德興 | accepted |
| bio.summary | 王德興，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322397） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2aMd4JjZAnRDvAWGEDvPYQ | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德興（CBDB 322397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322397&o=json)
- [中国历代人物传记资料库：王復（CBDB 67669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67669&o=json)
