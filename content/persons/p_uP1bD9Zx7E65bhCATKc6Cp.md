---
schema: wang-person/v1
id: p_uP1bD9Zx7E65bhCATKc6Cp
status: active
merged_into: null
display_name: 王媛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T832yvxCCyyZvASTUEh4aZ
        subject_person_id: p_uP1bD9Zx7E65bhCATKc6Cp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rYtn5941YZZ1GCwdfZq8hC
          claim_id: c_T832yvxCCyyZvASTUEh4aZ
          source_id: s_35E6sF9z3gVL8xnu3DgEXs
          stance: supports
          locator: CBDB:139140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139140）
          source: &a1
            id: s_35E6sF9z3gVL8xnu3DgEXs
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 139140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139140&o=json
            external_identifier: CBDB:139140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bXjMQzZEHMGbZgo5149g7u
        subject_person_id: p_uP1bD9Zx7E65bhCATKc6Cp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 616年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4VpUV6Kwp1xdvSepwJGrC5
          claim_id: c_bXjMQzZEHMGbZgo5149g7u
          source_id: s_35E6sF9z3gVL8xnu3DgEXs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H4uvgCn7D7PR5V7NUShQNB
        subject_person_id: p_uP1bD9Zx7E65bhCATKc6Cp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 658年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Q1xcu5CdTSmnNJNshTY5y
          claim_id: c_H4uvgCn7D7PR5V7NUShQNB
          source_id: s_35E6sF9z3gVL8xnu3DgEXs
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
        id: c_t6BNPNw8CPPKRH25jMLEWr
        subject_person_id: p_uP1bD9Zx7E65bhCATKc6Cp
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
        - id: cs_p21TagL5pQqJRUwShnsey7
          claim_id: c_t6BNPNw8CPPKRH25jMLEWr
          source_id: s_35E6sF9z3gVL8xnu3DgEXs
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
        id: c_gIKFuQYUiREKAy0EbIe-9u
        subject_person_id: p_YmbxT6WWcjneK7JVCkb5ja
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uP1bD9Zx7E65bhCATKc6Cp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95mLbO_En--Qc5Q5WyjTBq
          claim_id: c_gIKFuQYUiREKAy0EbIe-9u
          source_id: s_35E6sF9z3gVL8xnu3DgEXs
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 74：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YmbxT6WWcjneK7JVCkb5ja
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2pDery46WK-FCbzq08Lvs-
        subject_person_id: p_uP1bD9Zx7E65bhCATKc6Cp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TSH6pmB6RgU9jcXNeQLsG9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUHan-0vRxyLXgo3fPGYR6
          claim_id: c_2pDery46WK-FCbzq08Lvs-
          source_id: s_3zq5sJwAGOpQHYMfDPN9w5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 74：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3zq5sJwAGOpQHYMfDPN9w5
            source_type: api_record
            title: 中国历代人物传记资料库：張某(王媛夫)（CBDB 147459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147459&o=json
            external_identifier: CBDB:147459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TSH6pmB6RgU9jcXNeQLsG9
        status: active
        display_name: 張某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王媛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王媛 | accepted |
| birth.date | 616年 | accepted |
| death.date | 658年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YmbxT6WWcjneK7JVCkb5ja | 王榮 | accepted |
| spouses | p_TSH6pmB6RgU9jcXNeQLsG9 | 張某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王媛（CBDB 139140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139140&o=json)
- [中国历代人物传记资料库：張某(王媛夫)（CBDB 147459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147459&o=json)
