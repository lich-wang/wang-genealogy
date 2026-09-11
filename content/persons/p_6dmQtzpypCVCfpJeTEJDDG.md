---
schema: wang-person/v1
id: p_6dmQtzpypCVCfpJeTEJDDG
status: active
merged_into: null
display_name: 王指南
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UcMamSVWYJUMk9hkoEh5pj
        subject_person_id: p_6dmQtzpypCVCfpJeTEJDDG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王指南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t5PCTPy2YvP1DAVdjJmYQC
          claim_id: c_UcMamSVWYJUMk9hkoEh5pj
          source_id: s_37KkQCTzXWKYmRu7LNDNd1
          stance: supports
          locator: CBDB:638118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638118）
          source: &a1
            id: s_37KkQCTzXWKYmRu7LNDNd1
            source_type: api_record
            title: 中国历代人物传记资料库：王指南（CBDB 638118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638118&o=json
            external_identifier: CBDB:638118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3hHbQkUQwFemJLu6oUeceg
        subject_person_id: p_6dmQtzpypCVCfpJeTEJDDG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王指南，清人物。籍贯定州直隸州直轄地方，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638118）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4hIbOmv1uqg0FqcdFB8WfT
          claim_id: c_3hHbQkUQwFemJLu6oUeceg
          source_id: s_37KkQCTzXWKYmRu7LNDNd1
          stance: supports
          locator: CBDB:638118
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

# 王指南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王指南 | accepted |
| bio.summary | 王指南，清人物。籍贯定州直隸州直轄地方，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638118） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王指南（CBDB 638118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638118&o=json)
