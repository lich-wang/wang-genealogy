---
schema: wang-person/v1
id: p_tNv3KgPdaAVyWaAFG27kEd
status: active
merged_into: null
display_name: 王守
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fu7NhkAbmA8xnJBSLcQ9dV
        subject_person_id: p_tNv3KgPdaAVyWaAFG27kEd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bdz9n96wykDcjbkQGTosBX
          claim_id: c_Fu7NhkAbmA8xnJBSLcQ9dV
          source_id: s_G7gLGDNEPxrkvwRN81K2qx
          stance: supports
          locator: CBDB:126507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126507）
          source: &a1
            id: s_G7gLGDNEPxrkvwRN81K2qx
            source_type: api_record
            title: 中国历代人物传记资料库：王守（CBDB 126507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126507&o=json
            external_identifier: CBDB:126507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cdob9YtbafzuW3BwG9vAks
        subject_person_id: p_tNv3KgPdaAVyWaAFG27kEd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守，明人物。籍贯長洲，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 126507）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X1OgsPdOvCMFgavn9I61Oq
          claim_id: c_Cdob9YtbafzuW3BwG9vAks
          source_id: s_G7gLGDNEPxrkvwRN81K2qx
          stance: supports
          locator: CBDB:126507
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

# 王守

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守 | accepted |
| bio.summary | 王守，明人物。籍贯長洲，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 126507） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守（CBDB 126507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126507&o=json)
