---
schema: wang-person/v1
id: p_z3cDLC3QR4mmvqHtCQ8jY3
status: active
merged_into: null
display_name: 王訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_77G74NTGTuKmikKBmo9M1B
        subject_person_id: p_z3cDLC3QR4mmvqHtCQ8jY3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7hDWsw5pgo3sAv7181LXF2
          claim_id: c_77G74NTGTuKmikKBmo9M1B
          source_id: s_AgNGQmoM7waUHAeudQjo6g
          stance: supports
          locator: CBDB:222403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222403）
          source: &a1
            id: s_AgNGQmoM7waUHAeudQjo6g
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 222403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222403&o=json
            external_identifier: CBDB:222403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pddzSS8AQ6vXF6KJKL1nLd
        subject_person_id: p_z3cDLC3QR4mmvqHtCQ8jY3
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
        - id: cs_FR1N9NUBRmmd7rnxzzDaCx
          claim_id: c_pddzSS8AQ6vXF6KJKL1nLd
          source_id: s_AgNGQmoM7waUHAeudQjo6g
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
        id: c_o0gnoQFbIUqeuoEUztJK2N
        subject_person_id: p_z3cDLC3QR4mmvqHtCQ8jY3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D6wSSzErFedvXoDGGx8HqR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gwldlecFmZgja8dla5evxQ
          claim_id: c_o0gnoQFbIUqeuoEUztJK2N
          source_id: s_AgNGQmoM7waUHAeudQjo6g
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第三十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D6wSSzErFedvXoDGGx8HqR
        status: active
        display_name: 王士琦
        merged_into_person_id: null
    - claim:
        id: c_EWl4K7WkkmhpP6vHDzW2I0
        subject_person_id: p_z3cDLC3QR4mmvqHtCQ8jY3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H1qN9DJkUwvePJbjMNJmyp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7nmg5J1BvtJMX61jxN75i
          claim_id: c_EWl4K7WkkmhpP6vHDzW2I0
          source_id: s_AgNGQmoM7waUHAeudQjo6g
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H1qN9DJkUwvePJbjMNJmyp
        status: active
        display_name: 王士崧
        merged_into_person_id: null
    - claim:
        id: c_y1MIsiRVMerbdmy6iQ8u_2
        subject_person_id: p_z3cDLC3QR4mmvqHtCQ8jY3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2upGeiN52eY6RGi8eXqg1R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZcKpPUvf2XK0pW7vi1Jk3r
          claim_id: c_y1MIsiRVMerbdmy6iQ8u_2
          source_id: s_AgNGQmoM7waUHAeudQjo6g
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2upGeiN52eY6RGi8eXqg1R
        status: active
        display_name: 王士昌
        merged_into_person_id: null
  other: []
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_D6wSSzErFedvXoDGGx8HqR | 王士琦 | accepted |
| descendants | p_H1qN9DJkUwvePJbjMNJmyp | 王士崧 | accepted |
| descendants | p_2upGeiN52eY6RGi8eXqg1R | 王士昌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 222403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222403&o=json)
