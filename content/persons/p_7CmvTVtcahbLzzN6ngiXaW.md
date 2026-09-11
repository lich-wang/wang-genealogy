---
schema: wang-person/v1
id: p_7CmvTVtcahbLzzN6ngiXaW
status: active
merged_into: null
display_name: 王含
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DWM3KEYc8RK8DZEyXAL3ia
        subject_person_id: p_7CmvTVtcahbLzzN6ngiXaW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王含
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9JFvEmB3R2H4aHs9mGoJE6
          claim_id: c_DWM3KEYc8RK8DZEyXAL3ia
          source_id: s_gPciVw8Ci1azM5UMG1ThPP
          stance: supports
          locator: CBDB:244062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244062）
          source: &a1
            id: s_gPciVw8Ci1azM5UMG1ThPP
            source_type: api_record
            title: 中国历代人物传记资料库：王含（CBDB 244062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244062&o=json
            external_identifier: CBDB:244062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KAPgy3YnQMgi2n5ag9GW3M
        subject_person_id: p_7CmvTVtcahbLzzN6ngiXaW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王含，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244062）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZTKZZJrKfCKDsQsUPWqmO3
          claim_id: c_KAPgy3YnQMgi2n5ag9GW3M
          source_id: s_gPciVw8Ci1azM5UMG1ThPP
          stance: supports
          locator: CBDB:244062
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
  ancestors: []
  descendants: []
  other: []
---

# 王含

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王含 | accepted |
| bio.summary | 王含，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244062） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王含（CBDB 244062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244062&o=json)
