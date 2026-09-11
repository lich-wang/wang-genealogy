---
schema: wang-person/v1
id: p_uXGBGqFFCGKaz7VkiuU8rU
status: active
merged_into: null
display_name: 王金成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PfR3MX618D2GKHRJZSuYMM
        subject_person_id: p_uXGBGqFFCGKaz7VkiuU8rU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qsPKuZM7CLbFBji9hKdxGF
          claim_id: c_PfR3MX618D2GKHRJZSuYMM
          source_id: s_A52DYMVMDLXh42DDsDnDRP
          stance: supports
          locator: CBDB:640516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640516）
          source: &a1
            id: s_A52DYMVMDLXh42DDsDnDRP
            source_type: api_record
            title: 中国历代人物传记资料库：王金成（CBDB 640516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640516&o=json
            external_identifier: CBDB:640516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wbPCRqQFYFKdvyHAC6FXUx
        subject_person_id: p_uXGBGqFFCGKaz7VkiuU8rU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金成，清人物。籍贯山西省，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640516）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jtFQ-6q9dYuLaJ-MJQkmfj
          claim_id: c_wbPCRqQFYFKdvyHAC6FXUx
          source_id: s_A52DYMVMDLXh42DDsDnDRP
          stance: supports
          locator: CBDB:640516
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

# 王金成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金成 | accepted |
| bio.summary | 王金成，清人物。籍贯山西省，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640516） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金成（CBDB 640516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640516&o=json)
