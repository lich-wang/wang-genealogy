---
schema: wang-person/v1
id: p_rgFGVLW85GBN7za3yUpaZ6
status: active
merged_into: null
display_name: 王永健
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7KLV6QLjbSHA6XGj4zx9AD
        subject_person_id: p_rgFGVLW85GBN7za3yUpaZ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永健
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k5iN1vmiLWatK6sF7qqHms
          claim_id: c_7KLV6QLjbSHA6XGj4zx9AD
          source_id: s_L8FPT6sMekiWLskd7dhTap
          stance: supports
          locator: CBDB:638971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638971）
          source: &a1
            id: s_L8FPT6sMekiWLskd7dhTap
            source_type: api_record
            title: 中国历代人物传记资料库：王永健（CBDB 638971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638971&o=json
            external_identifier: CBDB:638971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BdpvvB8nbqGw4KLKSk3FhA
        subject_person_id: p_rgFGVLW85GBN7za3yUpaZ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永健，清人物。籍贯延津，曾任教授。（中国历代人物传记资料库 CBDB 638971）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kwv00H2v02z0mjH6lN0IuA
          claim_id: c_BdpvvB8nbqGw4KLKSk3FhA
          source_id: s_L8FPT6sMekiWLskd7dhTap
          stance: supports
          locator: CBDB:638971
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

# 王永健

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永健 | accepted |
| bio.summary | 王永健，清人物。籍贯延津，曾任教授。（中国历代人物传记资料库 CBDB 638971） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永健（CBDB 638971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638971&o=json)
