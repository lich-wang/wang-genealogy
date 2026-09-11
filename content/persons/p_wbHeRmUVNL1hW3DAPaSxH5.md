---
schema: wang-person/v1
id: p_wbHeRmUVNL1hW3DAPaSxH5
status: active
merged_into: null
display_name: 王炎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KGgWKm2Xn5XXMzW1kBcvDc
        subject_person_id: p_wbHeRmUVNL1hW3DAPaSxH5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FcXePtBfkKGK8sbHN6B1Kr
          claim_id: c_KGgWKm2Xn5XXMzW1kBcvDc
          source_id: s_AGU36myaf7ZCYTsYYhfsmc
          stance: supports
          locator: CBDB:153366
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153366）
          source: &a1
            id: s_AGU36myaf7ZCYTsYYhfsmc
            source_type: api_record
            title: 中国历代人物传记资料库：王炎（CBDB 153366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153366&o=json
            external_identifier: CBDB:153366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xcWvz75CzhQWGk7hDgy3L3
        subject_person_id: p_wbHeRmUVNL1hW3DAPaSxH5
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
        - id: cs_BW6PFGyppX3XJ5Ri8ENXry
          claim_id: c_xcWvz75CzhQWGk7hDgy3L3
          source_id: s_AGU36myaf7ZCYTsYYhfsmc
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
        id: c_ORvgIZhP1_K-Hh0XAHBqq_
        subject_person_id: p_NQEG3VEtv6G5kdckYDLpGN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wbHeRmUVNL1hW3DAPaSxH5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xAUUNdhgLm651s1WnuFaW8
          claim_id: c_ORvgIZhP1_K-Hh0XAHBqq_
          source_id: s_AGU36myaf7ZCYTsYYhfsmc
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 28：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NQEG3VEtv6G5kdckYDLpGN
        status: active
        display_name: 王之渙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NQEG3VEtv6G5kdckYDLpGN | 王之渙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炎（CBDB 153366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153366&o=json)
