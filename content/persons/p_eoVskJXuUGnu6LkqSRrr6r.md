---
schema: wang-person/v1
id: p_eoVskJXuUGnu6LkqSRrr6r
status: active
merged_into: null
display_name: 王焜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7cjhvGkfNH4yXsRHpALs7Y
        subject_person_id: p_eoVskJXuUGnu6LkqSRrr6r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MePNGiUm17zeTHPtcYTqdK
          claim_id: c_7cjhvGkfNH4yXsRHpALs7Y
          source_id: s_qCH3XjEcUQ8gbC9kY8sjmR
          stance: supports
          locator: CBDB:71223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71223）
          source: &a1
            id: s_qCH3XjEcUQ8gbC9kY8sjmR
            source_type: api_record
            title: 中国历代人物传记资料库：王焜（CBDB 71223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71223&o=json
            external_identifier: CBDB:71223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kJ9ww1kuhMdANgSy8vxMZD
        subject_person_id: p_eoVskJXuUGnu6LkqSRrr6r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1647年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BwZGQmv8DWwDQ7Y64hVMgV
          claim_id: c_kJ9ww1kuhMdANgSy8vxMZD
          source_id: s_qCH3XjEcUQ8gbC9kY8sjmR
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
        id: c_hbGAqEGXsgBYpaMUAVsVZj
        subject_person_id: p_eoVskJXuUGnu6LkqSRrr6r
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1728年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bw3ERANs5ZQAGVAf3aCR1f
          claim_id: c_hbGAqEGXsgBYpaMUAVsVZj
          source_id: s_qCH3XjEcUQ8gbC9kY8sjmR
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
        id: c_p6k9Fs7bJcPx7CK764J37X
        subject_person_id: p_eoVskJXuUGnu6LkqSRrr6r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焜（1647年—1728年），清人物。籍贯長洲。（中国历代人物传记资料库 CBDB 71223）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tREjwHI9KIAovrcijPAlWM
          claim_id: c_p6k9Fs7bJcPx7CK764J37X
          source_id: s_qCH3XjEcUQ8gbC9kY8sjmR
          stance: supports
          locator: CBDB:71223
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

# 王焜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王焜 | accepted |
| birth.date | 1647年 | accepted |
| death.date | 1728年 | accepted |
| bio.summary | 王焜（1647年—1728年），清人物。籍贯長洲。（中国历代人物传记资料库 CBDB 71223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王焜（CBDB 71223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71223&o=json)
