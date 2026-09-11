---
schema: wang-person/v1
id: p_Wdh34Xf98j1r3HfkcGgoWq
status: active
merged_into: null
display_name: 王時鴻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6hZVyh5cvsDioRqygnz7d5
        subject_person_id: p_Wdh34Xf98j1r3HfkcGgoWq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qkZxrzZafiARMPnB19PGFB
          claim_id: c_6hZVyh5cvsDioRqygnz7d5
          source_id: s_wLfhKA2xBBh51LBVspw8g1
          stance: supports
          locator: CBDB:343519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343519）
          source: &a1
            id: s_wLfhKA2xBBh51LBVspw8g1
            source_type: api_record
            title: 中国历代人物传记资料库：王時鴻（CBDB 343519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343519&o=json
            external_identifier: CBDB:343519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RFBw4UdQRQ4svGVA9Uvp66
        subject_person_id: p_Wdh34Xf98j1r3HfkcGgoWq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時鴻，清人物。明清進士進士，籍贯華亭，入仕進士，曾任編修、鄉試考官。（中国历代人物传记资料库 CBDB 343519）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GfrSruETbcloJkTM61v5CQ
          claim_id: c_RFBw4UdQRQ4svGVA9Uvp66
          source_id: s_wLfhKA2xBBh51LBVspw8g1
          stance: supports
          locator: CBDB:343519
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

# 王時鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時鴻 | accepted |
| bio.summary | 王時鴻，清人物。明清進士進士，籍贯華亭，入仕進士，曾任編修、鄉試考官。（中国历代人物传记资料库 CBDB 343519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時鴻（CBDB 343519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343519&o=json)
