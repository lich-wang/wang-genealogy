---
schema: wang-person/v1
id: p_C2PvigzGNHG78CUU5HNtSJ
status: active
merged_into: null
display_name: 王振
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wTS2m45AH9Niio5i9QUtFN
        subject_person_id: p_C2PvigzGNHG78CUU5HNtSJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_myTxjyFC5p8bqGJKFJVeD9
          claim_id: c_wTS2m45AH9Niio5i9QUtFN
          source_id: s_hSyvL3139oZkSZUL56Qh6K
          stance: supports
          locator: CBDB:190515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190515）
          source: &a1
            id: s_hSyvL3139oZkSZUL56Qh6K
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 190515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190515&o=json
            external_identifier: CBDB:190515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CwDd2x3E4nV3XNzYFg3Xyx
        subject_person_id: p_C2PvigzGNHG78CUU5HNtSJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 721年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2HUR9yy64aVrE1473QJKm
          claim_id: c_CwDd2x3E4nV3XNzYFg3Xyx
          source_id: s_hSyvL3139oZkSZUL56Qh6K
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
        id: c_UUEJC2yCH7CtHuHXkMLTc3
        subject_person_id: p_C2PvigzGNHG78CUU5HNtSJ
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
        - id: cs_zCnrEzsurR2NDXg6uhBpBF
          claim_id: c_UUEJC2yCH7CtHuHXkMLTc3
          source_id: s_hSyvL3139oZkSZUL56Qh6K
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
        id: c_bva0_eAD_aCxQF2ONg_jXF
        subject_person_id: p_C2PvigzGNHG78CUU5HNtSJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Aqc68C8fXRQi969oTgMa3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1FChK9Y3P3YGFONvck2w5P
          claim_id: c_bva0_eAD_aCxQF2ONg_jXF
          source_id: s_DXg8oyZdP5SXnRvZ3N2vD9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DXg8oyZdP5SXnRvZ3N2vD9
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 190514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190514&o=json
            external_identifier: CBDB:190514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Aqc68C8fXRQi969oTgMa3
        status: active
        display_name: 王旻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振 | accepted |
| death.date | 721年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8Aqc68C8fXRQi969oTgMa3 | 王旻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旻（CBDB 190514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190514&o=json)
- [中国历代人物传记资料库：王振（CBDB 190515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190515&o=json)
