---
schema: wang-person/v1
id: p_XvRMvdgZ45JngASf9bKja2
status: active
merged_into: null
display_name: 王詩序
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Liofmx2Dk37NkaL2dvqzGr
        subject_person_id: p_XvRMvdgZ45JngASf9bKja2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詩序
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b3u7TJJbKqEecn3cQgmsU2
          claim_id: c_Liofmx2Dk37NkaL2dvqzGr
          source_id: s_pmGcMiNTfoe9YRcAM5VjQ4
          stance: supports
          locator: CBDB:640272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640272）
          source: &a1
            id: s_pmGcMiNTfoe9YRcAM5VjQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王詩序（CBDB 640272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640272&o=json
            external_identifier: CBDB:640272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBqWSx32nkRARom7AQaobP
        subject_person_id: p_XvRMvdgZ45JngASf9bKja2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詩序，清人物。籍贯楚雄，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7nObp7w63kDPhIqYRN_G_0
          claim_id: c_QBqWSx32nkRARom7AQaobP
          source_id: s_pmGcMiNTfoe9YRcAM5VjQ4
          stance: supports
          locator: CBDB:640272
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

# 王詩序

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詩序 | accepted |
| bio.summary | 王詩序，清人物。籍贯楚雄，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640272） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詩序（CBDB 640272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640272&o=json)
