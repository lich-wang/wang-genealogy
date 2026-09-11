---
schema: wang-person/v1
id: p_dRzUXqPXMQAnQaNHqbbcfQ
status: active
merged_into: null
display_name: 王希田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6HnFoJygERffVYADMX1CuK
        subject_person_id: p_dRzUXqPXMQAnQaNHqbbcfQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eP1wY8BSDBaxBBNiaa3dQE
          claim_id: c_6HnFoJygERffVYADMX1CuK
          source_id: s_7jsnKLJHkkfmx7GxgtkqVf
          stance: supports
          locator: CBDB:637392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637392）
          source: &a1
            id: s_7jsnKLJHkkfmx7GxgtkqVf
            source_type: api_record
            title: 中国历代人物传记资料库：王希田（CBDB 637392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637392&o=json
            external_identifier: CBDB:637392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7PddFF4WVVM8yU7ZQsLddM
        subject_person_id: p_dRzUXqPXMQAnQaNHqbbcfQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希田，清人物。籍贯隰州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 637392）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3GkXRXAO_YSwkC2M4_dawD
          claim_id: c_7PddFF4WVVM8yU7ZQsLddM
          source_id: s_7jsnKLJHkkfmx7GxgtkqVf
          stance: supports
          locator: CBDB:637392
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

# 王希田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希田 | accepted |
| bio.summary | 王希田，清人物。籍贯隰州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 637392） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希田（CBDB 637392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637392&o=json)
