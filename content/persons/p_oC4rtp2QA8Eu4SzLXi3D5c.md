---
schema: wang-person/v1
id: p_oC4rtp2QA8Eu4SzLXi3D5c
status: active
merged_into: null
display_name: 王德通
cbdb_id: 313084
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7CBtM31vDXGGTgGSHaqYJC
        subject_person_id: p_oC4rtp2QA8Eu4SzLXi3D5c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德通，明人物。中国历代人物传记资料库（CBDB）以人物编号 313084 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_R9QSMmSzGbBHOMn71s00y2
          claim_id: c_7CBtM31vDXGGTgGSHaqYJC
          source_id: s_X8ktLKm7GbA217oHhLB3q2
          stance: supports
          locator: CBDB:313084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_X8ktLKm7GbA217oHhLB3q2
            source_type: api_record
            title: 中国历代人物传记资料库：王德通（CBDB 313084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313084&o=json
            external_identifier: CBDB:313084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qS8uBjmrkx27uStwm2Pi5W
        subject_person_id: p_oC4rtp2QA8Eu4SzLXi3D5c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VRnmj9mM4E1CPNatEBum58
          claim_id: c_qS8uBjmrkx27uStwm2Pi5W
          source_id: s_X8ktLKm7GbA217oHhLB3q2
          stance: supports
          locator: CBDB:313084
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_X8ktLKm7GbA217oHhLB3q2
            source_type: api_record
            title: 中国历代人物传记资料库：王德通（CBDB 313084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313084&o=json
            external_identifier: CBDB:313084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_wSfbMaG5VuPjlHFAJBjaOH
        subject_person_id: p_oC4rtp2QA8Eu4SzLXi3D5c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8egbIYLSqEUxBn_T71JsBV
          claim_id: c_wSfbMaG5VuPjlHFAJBjaOH
          source_id: s_X8ktLKm7GbA217oHhLB3q2
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aeWEfBiaXEc8NBAjLdxyDe
        status: active
        display_name: 王璠
        merged_into_person_id: null
  other: []
---

# 王德通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德通，明人物。中国历代人物传记资料库（CBDB）以人物编号 313084 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王德通 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aeWEfBiaXEc8NBAjLdxyDe | 王璠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德通（CBDB 313084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313084&o=json)
