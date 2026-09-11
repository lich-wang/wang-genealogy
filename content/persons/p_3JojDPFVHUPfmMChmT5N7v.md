---
schema: wang-person/v1
id: p_3JojDPFVHUPfmMChmT5N7v
status: active
merged_into: null
display_name: 王凝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QuZTLhPpGt8PhnzNx9mz5p
        subject_person_id: p_3JojDPFVHUPfmMChmT5N7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PgJa8PF7ZQPRu1KMVrQE6R
          claim_id: c_QuZTLhPpGt8PhnzNx9mz5p
          source_id: s_qtSwB7PAV6AohJt2wBRnse
          stance: supports
          locator: CBDB:487218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487218）
          source: &a1
            id: s_qtSwB7PAV6AohJt2wBRnse
            source_type: api_record
            title: 中国历代人物传记资料库：王凝（CBDB 487218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487218&o=json
            external_identifier: CBDB:487218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C6zqmLAtTBLDqGF9GRKNza
        subject_person_id: p_3JojDPFVHUPfmMChmT5N7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝，明人物。曾任道員。（中国历代人物传记资料库 CBDB 487218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ujz03v0Sx--ibyt4N3h6If
          claim_id: c_C6zqmLAtTBLDqGF9GRKNza
          source_id: s_qtSwB7PAV6AohJt2wBRnse
          stance: supports
          locator: CBDB:487218
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

# 王凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝 | accepted |
| bio.summary | 王凝，明人物。曾任道員。（中国历代人物传记资料库 CBDB 487218） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凝（CBDB 487218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487218&o=json)
