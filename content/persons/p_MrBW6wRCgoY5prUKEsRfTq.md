---
schema: wang-person/v1
id: p_MrBW6wRCgoY5prUKEsRfTq
status: active
merged_into: null
display_name: 王廷賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pjLxbnd6APYkgDi1Hxmuyt
        subject_person_id: p_MrBW6wRCgoY5prUKEsRfTq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r38y9121PiaweZLTTsQqkC
          claim_id: c_pjLxbnd6APYkgDi1Hxmuyt
          source_id: s_dcyMTBaaoftzT15eSX7G5D
          stance: supports
          locator: CBDB:303978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303978）
          source: &a1
            id: s_dcyMTBaaoftzT15eSX7G5D
            source_type: api_record
            title: 中国历代人物传记资料库：王廷賓（CBDB 303978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303978&o=json
            external_identifier: CBDB:303978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3ew8VXgBoTwSaQ7oq21nNH
        subject_person_id: p_MrBW6wRCgoY5prUKEsRfTq
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
        - id: cs_5pAA21KkaLwPJcL2bPWAY8
          claim_id: c_3ew8VXgBoTwSaQ7oq21nNH
          source_id: s_dcyMTBaaoftzT15eSX7G5D
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
        id: c_wV5kZqG4jm8y4DedXq-CWU
        subject_person_id: p_MrBW6wRCgoY5prUKEsRfTq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FnbE6TVi9LCgSCOwwgv9JW
          claim_id: c_wV5kZqG4jm8y4DedXq-CWU
          source_id: s_dcyMTBaaoftzT15eSX7G5D
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xpckQ2G2t7wTNrXzHWsi53
        status: active
        display_name: 王霽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷賓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xpckQ2G2t7wTNrXzHWsi53 | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷賓（CBDB 303978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303978&o=json)
