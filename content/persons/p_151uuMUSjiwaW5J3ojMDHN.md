---
schema: wang-person/v1
id: p_151uuMUSjiwaW5J3ojMDHN
status: active
merged_into: null
display_name: 王君仲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NMvWmv6CnAS3uJWxbYEnCr
        subject_person_id: p_151uuMUSjiwaW5J3ojMDHN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tCWUfV5DrRXQeSuBMo7ced
          claim_id: c_NMvWmv6CnAS3uJWxbYEnCr
          source_id: s_HATxY3Z3SoqUg3tZsxTGNh
          stance: supports
          locator: CBDB:175708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175708）
          source: &a1
            id: s_HATxY3Z3SoqUg3tZsxTGNh
            source_type: api_record
            title: 中国历代人物传记资料库：王君仲（CBDB 175708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175708&o=json
            external_identifier: CBDB:175708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nRgd4v53rBRV6MWtQ8gMZL
        subject_person_id: p_151uuMUSjiwaW5J3ojMDHN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4uqbJqRhKwSB4htvcxwxSK
          claim_id: c_nRgd4v53rBRV6MWtQ8gMZL
          source_id: s_HATxY3Z3SoqUg3tZsxTGNh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_18j2NhfVVZb7Snabu8FLcS
        subject_person_id: p_151uuMUSjiwaW5J3ojMDHN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M2XqBpDsHdHo3pNfPTF9T2
          claim_id: c_18j2NhfVVZb7Snabu8FLcS
          source_id: s_HATxY3Z3SoqUg3tZsxTGNh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tf6I7JGIrKIKyioYLxiezE
        subject_person_id: p_jhGmz5PBmstGBfB54XPkH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_151uuMUSjiwaW5J3ojMDHN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCVQhAh8waEdKQijhmwTWu
          claim_id: c_Tf6I7JGIrKIKyioYLxiezE
          source_id: s_HATxY3Z3SoqUg3tZsxTGNh
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8112：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jhGmz5PBmstGBfB54XPkH7
        status: active
        display_name: 王重
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君仲 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhGmz5PBmstGBfB54XPkH7 | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君仲（CBDB 175708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175708&o=json)
