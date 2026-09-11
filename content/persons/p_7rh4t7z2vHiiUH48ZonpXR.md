---
schema: wang-person/v1
id: p_7rh4t7z2vHiiUH48ZonpXR
status: active
merged_into: null
display_name: 王嵩高
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h72GKsUEdfRggPr7M49RkY
        subject_person_id: p_7rh4t7z2vHiiUH48ZonpXR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ou2HLBae3ZUtHCjCM3veYt
          claim_id: c_h72GKsUEdfRggPr7M49RkY
          source_id: s_gbvKEQPeqEyx9eCyct9PFb
          stance: supports
          locator: CBDB:342212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342212）
          source: &a1
            id: s_gbvKEQPeqEyx9eCyct9PFb
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩高（CBDB 342212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342212&o=json
            external_identifier: CBDB:342212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jv2ZeVMJ3u9YfrfEaAihXT
        subject_person_id: p_7rh4t7z2vHiiUH48ZonpXR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩高，清人物。明清進士進士，入仕進士。（中国历代人物传记资料库 CBDB 342212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RAntHpnodaKJdZ81nVE5_0
          claim_id: c_Jv2ZeVMJ3u9YfrfEaAihXT
          source_id: s_gbvKEQPeqEyx9eCyct9PFb
          stance: supports
          locator: CBDB:342212
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

# 王嵩高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩高 | accepted |
| bio.summary | 王嵩高，清人物。明清進士進士，入仕進士。（中国历代人物传记资料库 CBDB 342212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩高（CBDB 342212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342212&o=json)
