---
schema: wang-person/v1
id: p_5jdoYejsQkfLqGA75X2L7y
status: active
merged_into: null
display_name: 王廣田
cbdb_id: 414441
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pUXs4fCAAWZmKNQHcE46Vf
        subject_person_id: p_5jdoYejsQkfLqGA75X2L7y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣田，清人物。曾任典史。（中国历代人物传记资料库 CBDB 414441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ZCmKGN1IJRkx5-r_ssIHhj
          claim_id: c_pUXs4fCAAWZmKNQHcE46Vf
          source_id: s_Mha1YHDkcnzM8iyMEpJ4sR
          stance: supports
          locator: CBDB:414441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Mha1YHDkcnzM8iyMEpJ4sR
            source_type: api_record
            title: 中国历代人物传记资料库：王廣田（CBDB 414441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414441&o=json
            external_identifier: CBDB:414441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:34.838Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5LQBe2gJYpJ6sBngRHZ2VS
        subject_person_id: p_5jdoYejsQkfLqGA75X2L7y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_exM8jU52NBkPD1zXERgohj
          claim_id: c_5LQBe2gJYpJ6sBngRHZ2VS
          source_id: s_Mha1YHDkcnzM8iyMEpJ4sR
          stance: supports
          locator: CBDB:414441
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5501-5600）｜历史性依据：CBDB 朝代 = 清
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

# 王廣田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廣田，清人物。曾任典史。（中国历代人物传记资料库 CBDB 414441） | accepted |
| name.primary | 王廣田 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣田（CBDB 414441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414441&o=json)
