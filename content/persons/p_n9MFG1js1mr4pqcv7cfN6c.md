---
schema: wang-person/v1
id: p_n9MFG1js1mr4pqcv7cfN6c
status: active
merged_into: null
display_name: 王敬柔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yRVPARQQhHq6faF3c3CZnD
        subject_person_id: p_n9MFG1js1mr4pqcv7cfN6c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬柔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a1SfULDwy4PJyzjhSSnR7g
          claim_id: c_yRVPARQQhHq6faF3c3CZnD
          source_id: s_v9WRqNJTgm4VzX94AiGn7y
          stance: supports
          locator: CBDB:380491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380491）
          source: &a1
            id: s_v9WRqNJTgm4VzX94AiGn7y
            source_type: api_record
            title: 中国历代人物传记资料库：王敬柔（CBDB 380491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380491&o=json
            external_identifier: CBDB:380491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R25mzu9bEZ7nZW19yvswmZ
        subject_person_id: p_n9MFG1js1mr4pqcv7cfN6c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬柔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jv8TPRWtKfx8kiFASPmquI
          claim_id: c_R25mzu9bEZ7nZW19yvswmZ
          source_id: s_v9WRqNJTgm4VzX94AiGn7y
          stance: supports
          locator: CBDB:380491
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

# 王敬柔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬柔 | accepted |
| bio.summary | 王敬柔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬柔（CBDB 380491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380491&o=json)
