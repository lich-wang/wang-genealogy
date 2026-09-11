---
schema: wang-person/v1
id: p_hhV2iwXoZNw3FFwP23LDaa
status: active
merged_into: null
display_name: 王拱辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JG33NtBcSMU6SM5NpGTqiG
        subject_person_id: p_hhV2iwXoZNw3FFwP23LDaa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FtsjVbH28iAaMEbxt8KywX
          claim_id: c_JG33NtBcSMU6SM5NpGTqiG
          source_id: s_eEcoZRD4EjUn9pMxuj8JT6
          stance: supports
          locator: CBDB:473110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473110）
          source: &a1
            id: s_eEcoZRD4EjUn9pMxuj8JT6
            source_type: api_record
            title: 中国历代人物传记资料库：王拱辰（CBDB 473110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473110&o=json
            external_identifier: CBDB:473110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2c8z56hcbBRVytnhVpKWfs
        subject_person_id: p_hhV2iwXoZNw3FFwP23LDaa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱辰，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P_vNQcKe3xv5RlbtSQZjz2
          claim_id: c_2c8z56hcbBRVytnhVpKWfs
          source_id: s_eEcoZRD4EjUn9pMxuj8JT6
          stance: supports
          locator: CBDB:473110
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

# 王拱辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱辰 | accepted |
| bio.summary | 王拱辰，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱辰（CBDB 473110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473110&o=json)
