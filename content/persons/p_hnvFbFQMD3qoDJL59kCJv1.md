---
schema: wang-person/v1
id: p_hnvFbFQMD3qoDJL59kCJv1
status: active
merged_into: null
display_name: 王應麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j4Ag8W56G6D8M7cbN7qekH
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DeJZp8TmBjDWtkURwbCwHK
          claim_id: c_j4Ag8W56G6D8M7cbN7qekH
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: CBDB:126851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126851）
          source: &a1
            id: s_USNXCoUtmKiaD7MqB2q9Qs
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 126851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json
            external_identifier: CBDB:126851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r75U4nhTKV36JTuCjMG6YJ
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1545年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rpAsJi3RNg5Avrd98VP8Nr
          claim_id: c_r75U4nhTKV36JTuCjMG6YJ
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
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
        id: c_wFLUGVZbnnUENjAtTyAw29
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1620年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLHJrAGd2WVXmHp1Fg1Uar
          claim_id: c_wFLUGVZbnnUENjAtTyAw29
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
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
        id: c_C8355i5giUJTkEjeWXHXfL
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
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
        - id: cs_GjNtoVZw18AYz5k3qnzLAK
          claim_id: c_C8355i5giUJTkEjeWXHXfL
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
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
        id: c_OLEqWglKs3uqEz2QdivYXW
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YmLQFt9Hy_cWZ0KRiM0r6u
          claim_id: c_OLEqWglKs3uqEz2QdivYXW
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        status: active
        display_name: 王榮貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_QC7YHT9x8TUV_zScRuH_ED
        subject_person_id: p_j6yFKCjZuRSKE6EaY7VL2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-949Vse62N_k0wD151pgza
          claim_id: c_QC7YHT9x8TUV_zScRuH_ED
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j6yFKCjZuRSKE6EaY7VL2H
        status: active
        display_name: 王先宗
        merged_into_person_id: null
    - claim:
        id: c_gAo8JGuj8ePqF8ZtfZt0K8
        subject_person_id: p_MJhP1yFLnhK4DCVH2JD1UB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWfoQNeEqcpKxq-6XhaWl6
          claim_id: c_gAo8JGuj8ePqF8ZtfZt0K8
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MJhP1yFLnhK4DCVH2JD1UB
        status: active
        display_name: 王質安
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應麟 | accepted |
| birth.date | 1545年 | accepted |
| death.date | 1620年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MpRHKYQgMhyeJ8uJAKZD2Z | 王榮貴 | accepted |
| ancestors | p_j6yFKCjZuRSKE6EaY7VL2H | 王先宗 | accepted |
| ancestors | p_MJhP1yFLnhK4DCVH2JD1UB | 王質安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應麟（CBDB 126851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json)
