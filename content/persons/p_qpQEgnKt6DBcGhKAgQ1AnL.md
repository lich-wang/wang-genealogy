---
schema: wang-person/v1
id: p_qpQEgnKt6DBcGhKAgQ1AnL
status: active
merged_into: null
display_name: 王承熬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b1JxJ4RGC763hJU6L3hCv5
        subject_person_id: p_qpQEgnKt6DBcGhKAgQ1AnL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承熬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_25jh9RBpsw4TC74h6uKdwq
          claim_id: c_b1JxJ4RGC763hJU6L3hCv5
          source_id: s_AK4eGqbgU6i623EcxX6TLe
          stance: supports
          locator: CBDB:638094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638094）
          source: &a1
            id: s_AK4eGqbgU6i623EcxX6TLe
            source_type: api_record
            title: 中国历代人物传记资料库：王承熬（CBDB 638094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638094&o=json
            external_identifier: CBDB:638094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gnLR62H1LpnMzCJpvH8u5P
        subject_person_id: p_qpQEgnKt6DBcGhKAgQ1AnL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承熬，清人物。籍贯樂陵，曾任主事。（中国历代人物传记资料库 CBDB 638094）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xms-uWpGanheCP1f4Wz-yr
          claim_id: c_gnLR62H1LpnMzCJpvH8u5P
          source_id: s_AK4eGqbgU6i623EcxX6TLe
          stance: supports
          locator: CBDB:638094
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

# 王承熬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承熬 | accepted |
| bio.summary | 王承熬，清人物。籍贯樂陵，曾任主事。（中国历代人物传记资料库 CBDB 638094） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承熬（CBDB 638094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638094&o=json)
