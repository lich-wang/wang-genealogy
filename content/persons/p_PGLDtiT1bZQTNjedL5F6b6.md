---
schema: wang-person/v1
id: p_PGLDtiT1bZQTNjedL5F6b6
status: active
merged_into: null
display_name: 王御六
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1TFYb5tj8PAqkCA6DBnH8L
        subject_person_id: p_PGLDtiT1bZQTNjedL5F6b6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王御六
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FrUxnDzobTFAumqG5h7tgK
          claim_id: c_1TFYb5tj8PAqkCA6DBnH8L
          source_id: s_x85ZeDjDdXZJx5UWDr53fT
          stance: supports
          locator: CBDB:693122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693122）
          source: &a1
            id: s_x85ZeDjDdXZJx5UWDr53fT
            source_type: api_record
            title: 中国历代人物传记资料库：王御六（CBDB 693122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693122&o=json
            external_identifier: CBDB:693122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n9VFYgzwHJqzApyH155QGQ
        subject_person_id: p_PGLDtiT1bZQTNjedL5F6b6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王御六，清人物。籍贯固始，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 693122）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CnqVcC-FT06K9OycupAR0Z
          claim_id: c_n9VFYgzwHJqzApyH155QGQ
          source_id: s_x85ZeDjDdXZJx5UWDr53fT
          stance: supports
          locator: CBDB:693122
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

# 王御六

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王御六 | accepted |
| bio.summary | 王御六，清人物。籍贯固始，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 693122） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王御六（CBDB 693122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693122&o=json)
