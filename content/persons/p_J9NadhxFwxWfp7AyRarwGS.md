---
schema: wang-person/v1
id: p_J9NadhxFwxWfp7AyRarwGS
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YWvYNJGqhfEhcdQhz64P23
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZE4NG8AiFMUt6GbGXEqLb3
          claim_id: c_YWvYNJGqhfEhcdQhz64P23
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: CBDB:199241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199241）
          source: &a1
            id: s_bbRqnXQuKPo1U93iT5YxWY
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 199241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json
            external_identifier: CBDB:199241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_657SxSeQfARS52AL94T144
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1431年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KDKxpbBNfJ6VxgD95GH5wm
          claim_id: c_657SxSeQfARS52AL94T144
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KBM5DUH5HRdK9oZGagUESQ
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
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
        - id: cs_BemDsCn8W2E1FG2v9CqruW
          claim_id: c_KBM5DUH5HRdK9oZGagUESQ
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
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
        id: c_wEExksD47eEVF-MrHpYvO2
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaApADrzH27KZtwE8mT8aA
          claim_id: c_wEExksD47eEVF-MrHpYvO2
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZSdmaffBtX3DKbv12A8Zie
        status: active
        display_name: 王輝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aEaXfGtnBlr6nXqSs9vzhd
        subject_person_id: p_PjZjP8EDevdHKEtY8FrjQq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_REMFSRLZ54VHUYbuVez2mM
          claim_id: c_aEaXfGtnBlr6nXqSs9vzhd
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PjZjP8EDevdHKEtY8FrjQq
        status: active
        display_name: 王敏道
        merged_into_person_id: null
    - claim:
        id: c_FvYdqBoUjb3IEmIwkfzaWX
        subject_person_id: p_x5eFQiYNR4age58MLJ5BPQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csj01jAH2QtVEPeArWgfCC
          claim_id: c_FvYdqBoUjb3IEmIwkfzaWX
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x5eFQiYNR4age58MLJ5BPQ
        status: active
        display_name: 王思誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| birth.date | 1431年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSdmaffBtX3DKbv12A8Zie | 王輝 | accepted |
| ancestors | p_PjZjP8EDevdHKEtY8FrjQq | 王敏道 | accepted |
| ancestors | p_x5eFQiYNR4age58MLJ5BPQ | 王思誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 199241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json)
