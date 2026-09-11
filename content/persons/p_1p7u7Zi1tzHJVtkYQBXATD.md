---
schema: wang-person/v1
id: p_1p7u7Zi1tzHJVtkYQBXATD
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EU2LxNFrmHUH8618yGgQMe
        subject_person_id: p_1p7u7Zi1tzHJVtkYQBXATD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s6XTsCiGGudNyfuYrdpzsv
          claim_id: c_EU2LxNFrmHUH8618yGgQMe
          source_id: s_y7sDX4k4wNmcHu95zm4yjn
          stance: supports
          locator: CBDB:265531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265531）
          source: &a1
            id: s_y7sDX4k4wNmcHu95zm4yjn
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 265531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265531&o=json
            external_identifier: CBDB:265531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_35PHjL76ogprcfzzFJpN3C
        subject_person_id: p_1p7u7Zi1tzHJVtkYQBXATD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，明人物。弘治六年進士，籍贯六合。（中国历代人物传记资料库 CBDB 265531）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XwRFv6HykMmhChHZBprKH4
          claim_id: c_35PHjL76ogprcfzzFJpN3C
          source_id: s_y7sDX4k4wNmcHu95zm4yjn
          stance: supports
          locator: CBDB:265531
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

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | 王泰，明人物。弘治六年進士，籍贯六合。（中国历代人物传记资料库 CBDB 265531） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 265531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265531&o=json)
