---
schema: wang-person/v1
id: p_UnMgCiAN82PWUFatFPfQM1
status: active
merged_into: null
display_name: 王鶴齡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5KBZ7QUE5KCoR6q7QX2iZL
        subject_person_id: p_UnMgCiAN82PWUFatFPfQM1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YLRmBGKWsWP9Aop4tsj8J3
          claim_id: c_5KBZ7QUE5KCoR6q7QX2iZL
          source_id: s_DZAmuJs7qzwPkeyC2QmE72
          stance: supports
          locator: CBDB:694315
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694315）
          source: &a1
            id: s_DZAmuJs7qzwPkeyC2QmE72
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴齡（CBDB 694315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694315&o=json
            external_identifier: CBDB:694315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xc5AYbk2YPpPQH68z2hKR3
        subject_person_id: p_UnMgCiAN82PWUFatFPfQM1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_boKQi9Gkpm6CzwXsHVXNjx
          claim_id: c_Xc5AYbk2YPpPQH68z2hKR3
          source_id: s_DZAmuJs7qzwPkeyC2QmE72
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
        id: c_yJ-wquMRdljRS3HqHsaB4g
        subject_person_id: p_UnMgCiAN82PWUFatFPfQM1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vJEZ9Szh9s5FpFkeZXoWPH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QKoSIf_Kb2igkys3mjvFfU
          claim_id: c_yJ-wquMRdljRS3HqHsaB4g
          source_id: s_DZAmuJs7qzwPkeyC2QmE72
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294040：孫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vJEZ9Szh9s5FpFkeZXoWPH
        status: active
        display_name: 王維綱
        merged_into_person_id: null
  other: []
---

# 王鶴齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴齡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vJEZ9Szh9s5FpFkeZXoWPH | 王維綱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鶴齡（CBDB 694315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694315&o=json)
