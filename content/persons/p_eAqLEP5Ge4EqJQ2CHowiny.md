---
schema: wang-person/v1
id: p_eAqLEP5Ge4EqJQ2CHowiny
status: active
merged_into: null
display_name: 沈裕
revision: 1
cbdb_id: 691832
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_whD8FzM9ON-oZG25j-COs7
        subject_person_id: p_eAqLEP5Ge4EqJQ2CHowiny
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈裕
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_scxfJtUrKH4wu5-wm-v3um
          claim_id: c_whD8FzM9ON-oZG25j-COs7
          source_id: s_cEO-TIIHP_u5sEqAaLuoW2
          stance: supports
          locator: CBDB:691832
          quotation: null
          interpretation_note: CBDB 明确记录的王妙貞配偶
          source: &a1
            id: s_cEO-TIIHP_u5sEqAaLuoW2
            source_type: api_record
            title: 中国历代人物传记资料库：沈裕（CBDB 691832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691832&o=json
            external_identifier: CBDB:691832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_acbnO1tXQFKt0lS15CYA82
        subject_person_id: p_kcbRqZ8wBNE6VYvLxS14ob
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eAqLEP5Ge4EqJQ2CHowiny
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v29swI1MnkhLtjGUuYWYH_
          claim_id: c_acbnO1tXQFKt0lS15CYA82
          source_id: s_cEO-TIIHP_u5sEqAaLuoW2
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294153：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kcbRqZ8wBNE6VYvLxS14ob
        status: active
        display_name: 王妙貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 沈裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 沈裕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kcbRqZ8wBNE6VYvLxS14ob | 王妙貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈裕（CBDB 691832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691832&o=json)
