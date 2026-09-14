---
schema: wang-person/v1
id: p_CHJThDkPUT6tJ14ZDHz191
status: active
merged_into: null
display_name: 王之輔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLBqqirGD1wn2WiTo6rPpS
        subject_person_id: p_CHJThDkPUT6tJ14ZDHz191
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q8vTFPvkJBfZcMs2MuM4kE
          claim_id: c_aLBqqirGD1wn2WiTo6rPpS
          source_id: s_TJNmiFhpy9TwKD9nbXFEFM
          stance: supports
          locator: CBDB:217738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217738）
          source: &a1
            id: s_TJNmiFhpy9TwKD9nbXFEFM
            source_type: api_record
            title: 中国历代人物传记资料库：王之輔（CBDB 217738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217738&o=json
            external_identifier: CBDB:217738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2nfdJzbMQ6Vfsru1HQ74Uv
        subject_person_id: p_CHJThDkPUT6tJ14ZDHz191
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之輔，明人物。萬曆五年進士，籍贯新城，曾任知州。（中国历代人物传记资料库 CBDB 217738）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GqXcDHuO4xEw1ihqoUCUF7
          claim_id: c_2nfdJzbMQ6Vfsru1HQ74Uv
          source_id: s_TJNmiFhpy9TwKD9nbXFEFM
          stance: supports
          locator: CBDB:217738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VQi2q_WrNZ6ly8EOmh47gY
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CHJThDkPUT6tJ14ZDHz191
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E0zWk5kNoPo1He69u6G0MR
          claim_id: c_VQi2q_WrNZ6ly8EOmh47gY
          source_id: s_GJiaLOrfpHq-irzojwgeTb
          stance: supports
          locator: CBDB：兄弟 王之猷（126467）之父／母 王重光
          quotation: null
          interpretation_note: 由兄弟关系推断：王之輔 与 王之猷 为同胞（CBDB 记「弟」），王之猷 之父／母即 王之輔 之父／母。
          source:
            id: s_GJiaLOrfpHq-irzojwgeTb
            source_type: api_record
            title: 中国历代人物传记资料库：王之輔（CBDB 217738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217738&o=json
            external_identifier: CBDB:217738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Wwb8vPkCWKugNpyYOLMgkC
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CHJThDkPUT6tJ14ZDHz191
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v5dh8_wi8VFUzmEYjo67zn
          claim_id: c_Wwb8vPkCWKugNpyYOLMgkC
          source_id: s_GJiaLOrfpHq-irzojwgeTb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126467 王之猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GJiaLOrfpHq-irzojwgeTb
            source_type: api_record
            title: 中国历代人物传记资料库：王之輔（CBDB 217738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217738&o=json
            external_identifier: CBDB:217738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
---

# 王之輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之輔 | accepted |
| bio.summary | 王之輔，明人物。萬曆五年進士，籍贯新城，曾任知州。（中国历代人物传记资料库 CBDB 217738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| other | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之輔（CBDB 217738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217738&o=json)
