---
schema: wang-person/v1
id: p_DHkLaNrhXTyY2QbEp4wQXF
status: active
merged_into: null
display_name: 王導
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xdJPwZgHkiy7kWFaLZDRqQ
        subject_person_id: p_DHkLaNrhXTyY2QbEp4wQXF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王導
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V9MBrAKLWQsx9vyts1N3Kt
          claim_id: c_xdJPwZgHkiy7kWFaLZDRqQ
          source_id: s_h91pP7drCfPBv5PNUZEpMa
          stance: supports
          locator: CBDB:266130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266130）
          source: &a1
            id: s_h91pP7drCfPBv5PNUZEpMa
            source_type: api_record
            title: 中国历代人物传记资料库：王導（CBDB 266130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266130&o=json
            external_identifier: CBDB:266130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39EMkLQJbuvZuK2yFohRK2
        subject_person_id: p_DHkLaNrhXTyY2QbEp4wQXF
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
        - id: cs_67zh8XWL4djd8KvGdWWUjM
          claim_id: c_39EMkLQJbuvZuK2yFohRK2
          source_id: s_h91pP7drCfPBv5PNUZEpMa
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
        id: c_82yuwYTzBqu_wjiWcdL5u5
        subject_person_id: p_DHkLaNrhXTyY2QbEp4wQXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9CLh8HQYnhj1Tk2CkBPsF
          claim_id: c_82yuwYTzBqu_wjiWcdL5u5
          source_id: s_h91pP7drCfPBv5PNUZEpMa
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_skjKvTKbz5aUC8X3W9ytWH
        status: active
        display_name: 王崇文
        merged_into_person_id: null
    - claim:
        id: c_oDmPaARDQFfPw_9yiDc6wD
        subject_person_id: p_DHkLaNrhXTyY2QbEp4wQXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5btbNFkuNqxJDcg99ibvfp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2jD0nRBJonsjPPaYt-wK6n
          claim_id: c_oDmPaARDQFfPw_9yiDc6wD
          source_id: s_h91pP7drCfPBv5PNUZEpMa
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5btbNFkuNqxJDcg99ibvfp
        status: active
        display_name: 王崇儉
        merged_into_person_id: null
    - claim:
        id: c_0_R2WdQ5of0MvdW42ZwkL-
        subject_person_id: p_DHkLaNrhXTyY2QbEp4wQXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_drO1BnGtb3IoE5nSLTGcpe
          claim_id: c_0_R2WdQ5of0MvdW42ZwkL-
          source_id: s_h91pP7drCfPBv5PNUZEpMa
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第二十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gZEG3LV8BoSpVH5X7JPghB
        status: active
        display_name: 王崇獻
        merged_into_person_id: null
  other: []
---

# 王導

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王導 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_skjKvTKbz5aUC8X3W9ytWH | 王崇文 | accepted |
| descendants | p_5btbNFkuNqxJDcg99ibvfp | 王崇儉 | accepted |
| descendants | p_gZEG3LV8BoSpVH5X7JPghB | 王崇獻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王導（CBDB 266130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266130&o=json)
