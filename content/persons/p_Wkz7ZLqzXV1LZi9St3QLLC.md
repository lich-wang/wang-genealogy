---
schema: wang-person/v1
id: p_Wkz7ZLqzXV1LZi9St3QLLC
status: active
merged_into: null
display_name: 王九功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c4SHwaLDV6M14An67UJFPa
        subject_person_id: p_Wkz7ZLqzXV1LZi9St3QLLC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ocFsiQBQUzBtC7HrWqH2sY
          claim_id: c_c4SHwaLDV6M14An67UJFPa
          source_id: s_b3bhVM8adLAzCW1t2hmP9A
          stance: supports
          locator: CBDB:217988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217988）
          source: &a1
            id: s_b3bhVM8adLAzCW1t2hmP9A
            source_type: api_record
            title: 中国历代人物传记资料库：王九功（CBDB 217988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217988&o=json
            external_identifier: CBDB:217988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LUBE1vP7cSDAeJEL3cVJCt
        subject_person_id: p_Wkz7ZLqzXV1LZi9St3QLLC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九功，明人物。萬曆五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 217988）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zUAJvUdQAMWmJLj2Ta_6Lv
          claim_id: c_LUBE1vP7cSDAeJEL3cVJCt
          source_id: s_b3bhVM8adLAzCW1t2hmP9A
          stance: supports
          locator: CBDB:217988
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

# 王九功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九功 | accepted |
| bio.summary | 王九功，明人物。萬曆五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 217988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九功（CBDB 217988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217988&o=json)
