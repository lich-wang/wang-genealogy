---
schema: wang-person/v1
id: p_W4hzV214fWg2ZQBiJk7MsQ
status: active
merged_into: null
display_name: 王國梓
cbdb_id: 71755
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nyTv9vehtgTMWysB24A7ej
        subject_person_id: p_W4hzV214fWg2ZQBiJk7MsQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國梓（生于1624年），清人物。籍贯漢陽。（中国历代人物传记资料库 CBDB 71755）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LgAmK8lLi9RHkkVL78XBp6
          claim_id: c_nyTv9vehtgTMWysB24A7ej
          source_id: s_23uoMj9U2rQeNf291MoK96
          stance: supports
          locator: CBDB:71755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_23uoMj9U2rQeNf291MoK96
            source_type: api_record
            title: 中国历代人物传记资料库：王國梓（CBDB 71755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71755&o=json
            external_identifier: CBDB:71755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_m5mTyr3BTMnbWb18g8QDAg
        subject_person_id: p_W4hzV214fWg2ZQBiJk7MsQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1624年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1624-01-01
            latest: 1624-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dZG9H8QUKdrE4DcPKsRuiu
          claim_id: c_m5mTyr3BTMnbWb18g8QDAg
          source_id: s_23uoMj9U2rQeNf291MoK96
          stance: supports
          locator: CBDB:71755
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1624
          source:
            id: s_23uoMj9U2rQeNf291MoK96
            source_type: api_record
            title: 中国历代人物传记资料库：王國梓（CBDB 71755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71755&o=json
            external_identifier: CBDB:71755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XfFRCwLErcyovGTWD3VWyq
        subject_person_id: p_W4hzV214fWg2ZQBiJk7MsQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國梓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XsqxnkZxKGD8ndh7RJuDTo
          claim_id: c_XfFRCwLErcyovGTWD3VWyq
          source_id: s_23uoMj9U2rQeNf291MoK96
          stance: supports
          locator: CBDB:71755
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1624
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

# 王國梓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國梓（生于1624年），清人物。籍贯漢陽。（中国历代人物传记资料库 CBDB 71755） | accepted |
| birth.date | 1624年 | accepted |
| name.primary | 王國梓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國梓（CBDB 71755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71755&o=json)
