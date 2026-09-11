---
schema: wang-person/v1
id: p_7RG94Vwz7kqEHszhbhPKKn
status: active
merged_into: null
display_name: 王士進
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yEoPs4SV6PZ7aG42YLgVCU
        subject_person_id: p_7RG94Vwz7kqEHszhbhPKKn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cbyETJhywsTKMoJ9RSYY1N
          claim_id: c_yEoPs4SV6PZ7aG42YLgVCU
          source_id: s_vN9hy1p4pCYCyP4zJ3E9PT
          stance: supports
          locator: CBDB:636822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636822）
          source: &a1
            id: s_vN9hy1p4pCYCyP4zJ3E9PT
            source_type: api_record
            title: 中国历代人物传记资料库：王士進（CBDB 636822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636822&o=json
            external_identifier: CBDB:636822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nZjN73PjCVgowKPuMXAV8Y
        subject_person_id: p_7RG94Vwz7kqEHszhbhPKKn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士進，清人物。籍贯會昌，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RQSH5f-W0GBNIBl8vHT5ob
          claim_id: c_nZjN73PjCVgowKPuMXAV8Y
          source_id: s_vN9hy1p4pCYCyP4zJ3E9PT
          stance: supports
          locator: CBDB:636822
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

# 王士進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士進 | accepted |
| bio.summary | 王士進，清人物。籍贯會昌，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士進（CBDB 636822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636822&o=json)
