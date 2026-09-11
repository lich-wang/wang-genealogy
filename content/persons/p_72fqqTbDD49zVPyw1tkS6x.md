---
schema: wang-person/v1
id: p_72fqqTbDD49zVPyw1tkS6x
status: active
merged_into: null
display_name: 王登朝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XE3ASLHgzGVgcsbW15qQkL
        subject_person_id: p_72fqqTbDD49zVPyw1tkS6x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9MJeY9CvS7jdNS2Y6C9gp6
          claim_id: c_XE3ASLHgzGVgcsbW15qQkL
          source_id: s_2FaLPUFzwiCKqzHSWRhL5F
          stance: supports
          locator: CBDB:486714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486714）
          source: &a1
            id: s_2FaLPUFzwiCKqzHSWRhL5F
            source_type: api_record
            title: 中国历代人物传记资料库：王登朝（CBDB 486714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486714&o=json
            external_identifier: CBDB:486714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AKF7GBmBWVBo9PxtrTE8nF
        subject_person_id: p_72fqqTbDD49zVPyw1tkS6x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登朝，明人物。曾任參將。（中国历代人物传记资料库 CBDB 486714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SYzjwpGVMkmpqGVeZtTj-x
          claim_id: c_AKF7GBmBWVBo9PxtrTE8nF
          source_id: s_2FaLPUFzwiCKqzHSWRhL5F
          stance: supports
          locator: CBDB:486714
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

# 王登朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登朝 | accepted |
| bio.summary | 王登朝，明人物。曾任參將。（中国历代人物传记资料库 CBDB 486714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登朝（CBDB 486714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486714&o=json)
