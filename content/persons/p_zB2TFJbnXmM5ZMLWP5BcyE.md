---
schema: wang-person/v1
id: p_zB2TFJbnXmM5ZMLWP5BcyE
status: active
merged_into: null
display_name: 王銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6yaLvQYkkHKDA13dz2sA5B
        subject_person_id: p_zB2TFJbnXmM5ZMLWP5BcyE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ChyLMm76y75zCLrdiAmsFE
          claim_id: c_6yaLvQYkkHKDA13dz2sA5B
          source_id: s_b2Xh3pj4hYtNentgmaiF2y
          stance: supports
          locator: CBDB:71191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71191）
          source: &a1
            id: s_b2Xh3pj4hYtNentgmaiF2y
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 71191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71191&o=json
            external_identifier: CBDB:71191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AmQMwBkr6pbJDCvnKrNPjb
        subject_person_id: p_zB2TFJbnXmM5ZMLWP5BcyE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1770年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2BXFdpp19JMutgWuivMiWy
          claim_id: c_AmQMwBkr6pbJDCvnKrNPjb
          source_id: s_b2Xh3pj4hYtNentgmaiF2y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UPEVjas79BeeugzKyj486Z
        subject_person_id: p_zB2TFJbnXmM5ZMLWP5BcyE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1814年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UBLW7wwRGnHnZoqT4XHEoy
          claim_id: c_UPEVjas79BeeugzKyj486Z
          source_id: s_b2Xh3pj4hYtNentgmaiF2y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NJnM7LpCddEGmps8Pm83Pe
        subject_person_id: p_zB2TFJbnXmM5ZMLWP5BcyE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘（1770年—1814年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jsDbNu-hkfpoLit9-Tn81R
          claim_id: c_NJnM7LpCddEGmps8Pm83Pe
          source_id: s_b2Xh3pj4hYtNentgmaiF2y
          stance: supports
          locator: CBDB:71191
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

# 王銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘 | accepted |
| birth.date | 1770年 | accepted |
| death.date | 1814年 | accepted |
| bio.summary | 王銘（1770年—1814年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71191） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 71191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71191&o=json)
