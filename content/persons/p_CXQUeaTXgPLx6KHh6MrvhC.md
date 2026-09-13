---
schema: wang-person/v1
id: p_CXQUeaTXgPLx6KHh6MrvhC
status: active
merged_into: null
display_name: 王原析
cbdb_id: 327873
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D6aY8xZQqibaWW3NGeRoU6
        subject_person_id: p_CXQUeaTXgPLx6KHh6MrvhC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原析，明人物。嘉靖四十一年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 327873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_U-ee_Jdlfb4YX3we5tvfx-
          claim_id: c_D6aY8xZQqibaWW3NGeRoU6
          source_id: s_5azUtwCnFUPNw29U9P6Q9p
          stance: supports
          locator: CBDB:327873
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5azUtwCnFUPNw29U9P6Q9p
            source_type: api_record
            title: 中国历代人物传记资料库：王原析（CBDB 327873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327873&o=json
            external_identifier: CBDB:327873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BwNS638gpYLcEKmJV6LaGY
        subject_person_id: p_CXQUeaTXgPLx6KHh6MrvhC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原析
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c3CnJ8WxjrAJKhtU8AvUhC
          claim_id: c_BwNS638gpYLcEKmJV6LaGY
          source_id: s_5azUtwCnFUPNw29U9P6Q9p
          stance: supports
          locator: CBDB:327873
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
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

# 王原析

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王原析，明人物。嘉靖四十一年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 327873） | accepted |
| name.primary | 王原析 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王原析（CBDB 327873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327873&o=json)
