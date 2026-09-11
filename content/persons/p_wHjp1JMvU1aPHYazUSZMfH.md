---
schema: wang-person/v1
id: p_wHjp1JMvU1aPHYazUSZMfH
status: active
merged_into: null
display_name: 王琴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hJu55E2LhL6bYRNQg2VdFU
        subject_person_id: p_wHjp1JMvU1aPHYazUSZMfH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xqZ56mf1i767tWwoVzcMLE
          claim_id: c_hJu55E2LhL6bYRNQg2VdFU
          source_id: s_VBSdwWicjCZTKdLSo2PWXH
          stance: supports
          locator: CBDB:323579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323579）
          source: &a1
            id: s_VBSdwWicjCZTKdLSo2PWXH
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 323579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323579&o=json
            external_identifier: CBDB:323579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MpKR95PqrHgeiSA1y7bCFK
        subject_person_id: p_wHjp1JMvU1aPHYazUSZMfH
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
        - id: cs_9954Gqf4gWujPJSjNTi23V
          claim_id: c_MpKR95PqrHgeiSA1y7bCFK
          source_id: s_VBSdwWicjCZTKdLSo2PWXH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ALIJESpL_NjPjmzMZMS3hp
        subject_person_id: p_wHjp1JMvU1aPHYazUSZMfH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UYeZjxwRSFnnKq62fsnzid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aHrWNwJzbRtrbaE_uldKav
          claim_id: c_ALIJESpL_NjPjmzMZMS3hp
          source_id: s_VBSdwWicjCZTKdLSo2PWXH
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UYeZjxwRSFnnKq62fsnzid
        status: active
        display_name: 王葑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UYeZjxwRSFnnKq62fsnzid | 王葑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琴（CBDB 323579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323579&o=json)
