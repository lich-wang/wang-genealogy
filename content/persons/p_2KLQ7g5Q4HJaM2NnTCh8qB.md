---
schema: wang-person/v1
id: p_2KLQ7g5Q4HJaM2NnTCh8qB
status: active
merged_into: null
display_name: 王元璋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1HyXZLq1gVaGwgrjnNJji2
        subject_person_id: p_2KLQ7g5Q4HJaM2NnTCh8qB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8pQBD6HpQ4kE9PuaBZptRs
          claim_id: c_1HyXZLq1gVaGwgrjnNJji2
          source_id: s_3dms1QjAX8RKtBRwPA8xbW
          stance: supports
          locator: CBDB:140014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140014）
          source: &a1
            id: s_3dms1QjAX8RKtBRwPA8xbW
            source_type: api_record
            title: 中国历代人物传记资料库：王元璋（CBDB 140014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140014&o=json
            external_identifier: CBDB:140014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TqQr48K4qVZTJZg6aaCibg
        subject_person_id: p_2KLQ7g5Q4HJaM2NnTCh8qB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 668年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Mm4JEaDL1TMbNP3cWrM3W
          claim_id: c_TqQr48K4qVZTJZg6aaCibg
          source_id: s_3dms1QjAX8RKtBRwPA8xbW
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
        id: c_rBrLnUmU4WG8aDzBytbkDE
        subject_person_id: p_2KLQ7g5Q4HJaM2NnTCh8qB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 697年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kvzf485cbie7CuhutW8vzb
          claim_id: c_rBrLnUmU4WG8aDzBytbkDE
          source_id: s_3dms1QjAX8RKtBRwPA8xbW
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
        id: c_8Xf1HZMkLLfqQGN3nDXtNs
        subject_person_id: p_2KLQ7g5Q4HJaM2NnTCh8qB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元璋（668年—697年），周人物。籍贯新鄭。（中国历代人物传记资料库 CBDB 140014）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L0UEw_HIIrQgXUdGl9VcyG
          claim_id: c_8Xf1HZMkLLfqQGN3nDXtNs
          source_id: s_3dms1QjAX8RKtBRwPA8xbW
          stance: supports
          locator: CBDB:140014
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

# 王元璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元璋 | accepted |
| birth.date | 668年 | accepted |
| death.date | 697年 | accepted |
| bio.summary | 王元璋（668年—697年），周人物。籍贯新鄭。（中国历代人物传记资料库 CBDB 140014） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元璋（CBDB 140014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140014&o=json)
