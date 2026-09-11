---
schema: wang-person/v1
id: p_6ZrDxvXSwfarkNE19FA1Rq
status: active
merged_into: null
display_name: 王炎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vexH12dNBueGLzmAoDFRf1
        subject_person_id: p_6ZrDxvXSwfarkNE19FA1Rq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UwpCVCfKcJBAUhgQFSHEcx
          claim_id: c_vexH12dNBueGLzmAoDFRf1
          source_id: s_Mb4XKfq1uA6AkkmViaC6jH
          stance: supports
          locator: CBDB:60693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60693）
          source: &a1
            id: s_Mb4XKfq1uA6AkkmViaC6jH
            source_type: api_record
            title: 中国历代人物传记资料库：王炎（CBDB 60693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60693&o=json
            external_identifier: CBDB:60693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yZEaW7jrgY7zZZQnWLQVM7
        subject_person_id: p_6ZrDxvXSwfarkNE19FA1Rq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎，清人物。曾任右翼漢軍副都統。（中国历代人物传记资料库 CBDB 60693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iiX4fLmy13_In9JpX0Jm_5
          claim_id: c_yZEaW7jrgY7zZZQnWLQVM7
          source_id: s_Mb4XKfq1uA6AkkmViaC6jH
          stance: supports
          locator: CBDB:60693
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

# 王炎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎 | accepted |
| bio.summary | 王炎，清人物。曾任右翼漢軍副都統。（中国历代人物传记资料库 CBDB 60693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炎（CBDB 60693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60693&o=json)
