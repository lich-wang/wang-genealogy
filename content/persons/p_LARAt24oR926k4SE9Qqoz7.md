---
schema: wang-person/v1
id: p_LARAt24oR926k4SE9Qqoz7
status: active
merged_into: null
display_name: 王諒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oUcHNGEFG4J2QewgA4PKVC
        subject_person_id: p_LARAt24oR926k4SE9Qqoz7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uM4bHLCr4Q4P7q9YDvN9DH
          claim_id: c_oUcHNGEFG4J2QewgA4PKVC
          source_id: s_2WcWZBQBaoY9D95wm48iAn
          stance: supports
          locator: CBDB:260601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260601）
          source: &a1
            id: s_2WcWZBQBaoY9D95wm48iAn
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 260601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260601&o=json
            external_identifier: CBDB:260601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U1TM7cemSA7GscZtBAWagC
        subject_person_id: p_LARAt24oR926k4SE9Qqoz7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tok8cp7FK8vruvqFHVvskK
          claim_id: c_U1TM7cemSA7GscZtBAWagC
          source_id: s_2WcWZBQBaoY9D95wm48iAn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_tQ_t6wsPMkc_H1oHEFW_ws
        subject_person_id: p_LARAt24oR926k4SE9Qqoz7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZwludlaaLKkvKF_6lBO5jr
          claim_id: c_tQ_t6wsPMkc_H1oHEFW_ws
          source_id: s_2WcWZBQBaoY9D95wm48iAn
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百零八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FQCEz5vy6uJ3wtmEBbiQFJ
        status: active
        display_name: 王希旦
        merged_into_person_id: null
  other: []
---

# 王諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FQCEz5vy6uJ3wtmEBbiQFJ | 王希旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諒（CBDB 260601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260601&o=json)
