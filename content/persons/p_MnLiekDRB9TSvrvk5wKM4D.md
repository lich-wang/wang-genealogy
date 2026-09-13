---
schema: wang-person/v1
id: p_MnLiekDRB9TSvrvk5wKM4D
status: active
merged_into: null
display_name: 王大礽
cbdb_id: 59895
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XQ4JDFtkLZ1ovNJwc8ZEZU
        subject_person_id: p_MnLiekDRB9TSvrvk5wKM4D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大礽，清人物。明清進士進士，籍贯桐城，入仕進士。（中国历代人物传记资料库 CBDB 59895）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zbySDemMC0vGuSQsdXGu5e
          claim_id: c_XQ4JDFtkLZ1ovNJwc8ZEZU
          source_id: s_Fk97SGcKxr9fwhbpvhPXDS
          stance: supports
          locator: CBDB:59895
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fk97SGcKxr9fwhbpvhPXDS
            source_type: api_record
            title: 中国历代人物传记资料库：王大礽（CBDB 59895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59895&o=json
            external_identifier: CBDB:59895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDhu6N6SmDThmETdEQvjjq
        subject_person_id: p_MnLiekDRB9TSvrvk5wKM4D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大礽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GFVN9YB163Nvid7D6Tn5E6
          claim_id: c_SDhu6N6SmDThmETdEQvjjq
          source_id: s_Fk97SGcKxr9fwhbpvhPXDS
          stance: supports
          locator: CBDB:59895
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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

# 王大礽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大礽，清人物。明清進士進士，籍贯桐城，入仕進士。（中国历代人物传记资料库 CBDB 59895） | accepted |
| name.primary | 王大礽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大礽（CBDB 59895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59895&o=json)
