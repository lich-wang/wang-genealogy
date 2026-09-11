---
schema: wang-person/v1
id: p_NLeHNfHEyM42YYDRMySAxk
status: active
merged_into: null
display_name: 王鍈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z48h3Qi4rQH7JrFwbi9sTU
        subject_person_id: p_NLeHNfHEyM42YYDRMySAxk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4RZr4bR4Gn5f6ZbEhMGxDa
          claim_id: c_Z48h3Qi4rQH7JrFwbi9sTU
          source_id: s_Y864NKvzqzGBzyeqce9mgx
          stance: supports
          locator: CBDB:309981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309981）
          source: &a1
            id: s_Y864NKvzqzGBzyeqce9mgx
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 309981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309981&o=json
            external_identifier: CBDB:309981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EdmCQDitcfHVptGj5xBP3s
        subject_person_id: p_NLeHNfHEyM42YYDRMySAxk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈，明人物。嘉靖二十六年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 309981）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JPaKbN_fwmSbIFODNSbAc2
          claim_id: c_EdmCQDitcfHVptGj5xBP3s
          source_id: s_Y864NKvzqzGBzyeqce9mgx
          stance: supports
          locator: CBDB:309981
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

# 王鍈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍈 | accepted |
| bio.summary | 王鍈，明人物。嘉靖二十六年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 309981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍈（CBDB 309981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309981&o=json)
