---
schema: wang-person/v1
id: p_ZVzYqdMQdELMX4RRwgGKXs
status: active
merged_into: null
display_name: 王准
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FDKhv5TH1ytM3LoyivycP7
        subject_person_id: p_ZVzYqdMQdELMX4RRwgGKXs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王准
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xesRcwGumoxJFjAHaSL431
          claim_id: c_FDKhv5TH1ytM3LoyivycP7
          source_id: s_5UHFPRkDuueHJbD6ANWBMp
          stance: supports
          locator: CBDB:213548
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213548）
          source: &a1
            id: s_5UHFPRkDuueHJbD6ANWBMp
            source_type: api_record
            title: 中国历代人物传记资料库：王准（CBDB 213548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213548&o=json
            external_identifier: CBDB:213548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rW85Uh6FGrN4EQ4wZe4ViV
        subject_person_id: p_ZVzYqdMQdELMX4RRwgGKXs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王准，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213548）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eMGe6ORiMGjJzads-vfzxh
          claim_id: c_rW85Uh6FGrN4EQ4wZe4ViV
          source_id: s_5UHFPRkDuueHJbD6ANWBMp
          stance: supports
          locator: CBDB:213548
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

# 王准

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王准 | accepted |
| bio.summary | 王准，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213548） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王准（CBDB 213548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213548&o=json)
