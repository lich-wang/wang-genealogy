---
schema: wang-person/v1
id: p_FL6Az72NGqaTwTmAdfMBte
status: active
merged_into: null
display_name: 王懋德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hBbNL4P525gx88vVhL9JRG
        subject_person_id: p_FL6Az72NGqaTwTmAdfMBte
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4FXG1fwG7iSYh194GboewX
          claim_id: c_hBbNL4P525gx88vVhL9JRG
          source_id: s_ZsCm8Vamh7CW2SaQFGb3JL
          stance: supports
          locator: CBDB:126854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126854）
          source: &a1
            id: s_ZsCm8Vamh7CW2SaQFGb3JL
            source_type: api_record
            title: 中国历代人物传记资料库：王懋德（CBDB 126854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126854&o=json
            external_identifier: CBDB:126854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zFkQS4tCD7D2WKocYMNqxX
        subject_person_id: p_FL6Az72NGqaTwTmAdfMBte
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
        - id: cs_7vhfiSNd8b8zEUP71kaChP
          claim_id: c_zFkQS4tCD7D2WKocYMNqxX
          source_id: s_ZsCm8Vamh7CW2SaQFGb3JL
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
        id: c_kMx4mpg_Kbo6HKkJZ7DARv
        subject_person_id: p_iK7J2v9nYEqAqfNJHxwFuC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FL6Az72NGqaTwTmAdfMBte
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wY47WgIHuE-_ZO304zfCK7
          claim_id: c_kMx4mpg_Kbo6HKkJZ7DARv
          source_id: s_AgzRmVL4H3ueEnRHC71KzN
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AgzRmVL4H3ueEnRHC71KzN
            source_type: api_record
            title: 中国历代人物传记资料库：王良弼（CBDB 334279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334279&o=json
            external_identifier: CBDB:334279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iK7J2v9nYEqAqfNJHxwFuC
        status: active
        display_name: 王良弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Q1XO8keSJWL4LZnmZJ0ApM
        subject_person_id: p_DG3mQvkRF6cAieQLfbw7xA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FL6Az72NGqaTwTmAdfMBte
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RjKeaaKvtaMu5EW4PXZuRn
          claim_id: c_Q1XO8keSJWL4LZnmZJ0ApM
          source_id: s_CJXhKemsH7wA8zBJ156bVk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CJXhKemsH7wA8zBJ156bVk
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 334278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334278&o=json
            external_identifier: CBDB:334278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DG3mQvkRF6cAieQLfbw7xA
        status: active
        display_name: 王賓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王懋德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iK7J2v9nYEqAqfNJHxwFuC | 王良弼 | accepted |
| ancestors | p_DG3mQvkRF6cAieQLfbw7xA | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 334278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334278&o=json)
- [中国历代人物传记资料库：王良弼（CBDB 334279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334279&o=json)
- [中国历代人物传记资料库：王懋德（CBDB 126854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126854&o=json)
