---
schema: wang-person/v1
id: p_22k6hhT8vuxCa9HGs4ctvM
status: active
merged_into: null
display_name: 王理
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4MpEGdLN4WVRVvXyfRFiXF
        subject_person_id: p_22k6hhT8vuxCa9HGs4ctvM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9JkeWrzMMAHd35J23477eN
          claim_id: c_4MpEGdLN4WVRVvXyfRFiXF
          source_id: s_v1uyBiK8Cu9n7RY9KG2NEv
          stance: supports
          locator: CBDB:100804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100804）
          source: &a1
            id: s_v1uyBiK8Cu9n7RY9KG2NEv
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 100804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100804&o=json
            external_identifier: CBDB:100804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eEMzZeF6EH3gU4KdGaWCHG
        subject_person_id: p_22k6hhT8vuxCa9HGs4ctvM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，元人物。籍贯南鄭，入仕進士，曾任翰林國史院國史編修官、南臺察院監察御史、僉提刑按察司事。（中国历代人物传记资料库 CBDB 100804）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ANRAwCFtlBkonRA33eVHdF
          claim_id: c_eEMzZeF6EH3gU4KdGaWCHG
          source_id: s_v1uyBiK8Cu9n7RY9KG2NEv
          stance: supports
          locator: CBDB:100804
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Q6wUaA9spUtQGaQsJivFFE
        subject_person_id: p_d1JekhUC1u26KL7YhJWveP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_22k6hhT8vuxCa9HGs4ctvM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Wu5dw4-kOPcap7iYEz7xf
          claim_id: c_Q6wUaA9spUtQGaQsJivFFE
          source_id: s_v1uyBiK8Cu9n7RY9KG2NEv
          stance: supports
          locator: 元人傳記資料索引，622：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d1JekhUC1u26KL7YhJWveP
        status: active
        display_name: 王得輿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | 王理，元人物。籍贯南鄭，入仕進士，曾任翰林國史院國史編修官、南臺察院監察御史、僉提刑按察司事。（中国历代人物传记资料库 CBDB 100804） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_d1JekhUC1u26KL7YhJWveP | 王得輿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 100804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100804&o=json)
