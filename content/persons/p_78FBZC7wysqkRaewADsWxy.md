---
schema: wang-person/v1
id: p_78FBZC7wysqkRaewADsWxy
status: active
merged_into: null
display_name: 王梵相
cbdb_id: 164570
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tj5toiffitVH951bD4b1Vs
        subject_person_id: p_78FBZC7wysqkRaewADsWxy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梵相，唐人物。中国历代人物传记资料库（CBDB）以人物编号 164570 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_GIoE72Y2ldZxYXddnSa69Z
          claim_id: c_tj5toiffitVH951bD4b1Vs
          source_id: s_BwWEz7udwNjLvYknQAGPJk
          stance: supports
          locator: CBDB:164570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BwWEz7udwNjLvYknQAGPJk
            source_type: api_record
            title: 中国历代人物传记资料库：王梵相（CBDB 164570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164570&o=json
            external_identifier: CBDB:164570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b9A6qnTk8L6hL48NADsrJR
        subject_person_id: p_78FBZC7wysqkRaewADsWxy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梵相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kqE5UN54ez6r5fM9PYyfAA
          claim_id: c_b9A6qnTk8L6hL48NADsrJR
          source_id: s_BwWEz7udwNjLvYknQAGPJk
          stance: supports
          locator: CBDB:164570
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_BwWEz7udwNjLvYknQAGPJk
            source_type: api_record
            title: 中国历代人物传记资料库：王梵相（CBDB 164570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164570&o=json
            external_identifier: CBDB:164570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FN3lehsdhmpJCT8Ew-FXW2
        subject_person_id: p_AfW62F3zMCpUc8bYoHCt8a
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_78FBZC7wysqkRaewADsWxy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnfqrocajNvVf4WvSdZJBi
          claim_id: c_FN3lehsdhmpJCT8Ew-FXW2
          source_id: s_Q6AK9A4LpZZRFBraMQXXtb
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao23：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q6AK9A4LpZZRFBraMQXXtb
            source_type: api_record
            title: 中国历代人物传记资料库：王仁行（CBDB 142968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142968&o=json
            external_identifier: CBDB:142968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfW62F3zMCpUc8bYoHCt8a
        status: active
        display_name: 王仁行
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王梵相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王梵相，唐人物。中国历代人物传记资料库（CBDB）以人物编号 164570 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王梵相 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AfW62F3zMCpUc8bYoHCt8a | 王仁行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梵相（CBDB 164570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164570&o=json)
- [中国历代人物传记资料库：王仁行（CBDB 142968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142968&o=json)
