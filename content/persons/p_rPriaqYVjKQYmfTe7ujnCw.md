---
schema: wang-person/v1
id: p_rPriaqYVjKQYmfTe7ujnCw
status: active
merged_into: null
display_name: 王儇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eikh6QeYYhNBXAqsF2GX4H
        subject_person_id: p_rPriaqYVjKQYmfTe7ujnCw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n13AX1JWuY82YAt6zMe156
          claim_id: c_Eikh6QeYYhNBXAqsF2GX4H
          source_id: s_qoz56wNqoPzbzscMUZF11k
          stance: supports
          locator: CBDB:294959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294959）
          source: &a1
            id: s_qoz56wNqoPzbzscMUZF11k
            source_type: api_record
            title: 中国历代人物传记资料库：王儇（CBDB 294959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294959&o=json
            external_identifier: CBDB:294959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kxw5yS946o2DCahDe4LitQ
        subject_person_id: p_rPriaqYVjKQYmfTe7ujnCw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儇，明人物。嘉靖十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 294959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NiwN-S0DHaz6wGrM_JkXTL
          claim_id: c_kxw5yS946o2DCahDe4LitQ
          source_id: s_qoz56wNqoPzbzscMUZF11k
          stance: supports
          locator: CBDB:294959
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

# 王儇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儇 | accepted |
| bio.summary | 王儇，明人物。嘉靖十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 294959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儇（CBDB 294959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294959&o=json)
