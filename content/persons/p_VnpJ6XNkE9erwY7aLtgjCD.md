---
schema: wang-person/v1
id: p_VnpJ6XNkE9erwY7aLtgjCD
status: active
merged_into: null
display_name: 王易
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_du4PhPwUMCMaDQU7qEzR4S
        subject_person_id: p_VnpJ6XNkE9erwY7aLtgjCD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EiW9iAvDv3UEgzvL5rHXE8
          claim_id: c_du4PhPwUMCMaDQU7qEzR4S
          source_id: s_jBeVnE5BV46hcGsKdZD8W6
          stance: supports
          locator: CBDB:685617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685617）
          source: &a1
            id: s_jBeVnE5BV46hcGsKdZD8W6
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 685617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685617&o=json
            external_identifier: CBDB:685617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gy58DNYFM15yKibNd4n7Gs
        subject_person_id: p_VnpJ6XNkE9erwY7aLtgjCD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易，宋人物。籍贯德興，入仕進士。（中国历代人物传记资料库 CBDB 685617）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iHYIxC0dy26Dz3ByKB-755
          claim_id: c_Gy58DNYFM15yKibNd4n7Gs
          source_id: s_jBeVnE5BV46hcGsKdZD8W6
          stance: supports
          locator: CBDB:685617
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

# 王易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易 | accepted |
| bio.summary | 王易，宋人物。籍贯德興，入仕進士。（中国历代人物传记资料库 CBDB 685617） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王易（CBDB 685617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685617&o=json)
