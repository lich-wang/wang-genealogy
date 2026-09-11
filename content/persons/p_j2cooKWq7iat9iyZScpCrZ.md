---
schema: wang-person/v1
id: p_j2cooKWq7iat9iyZScpCrZ
status: active
merged_into: null
display_name: 王申伯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eme5tVC3QYCWkFxVQRZbkp
        subject_person_id: p_j2cooKWq7iat9iyZScpCrZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申伯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZeH5euGWV45e523UKGh4Eo
          claim_id: c_Eme5tVC3QYCWkFxVQRZbkp
          source_id: s_CGfeJwrwNxy9vhuEEF673g
          stance: supports
          locator: CBDB:71485
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71485）
          source: &a1
            id: s_CGfeJwrwNxy9vhuEEF673g
            source_type: api_record
            title: 中国历代人物传记资料库：王申伯（CBDB 71485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71485&o=json
            external_identifier: CBDB:71485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vZTYW4ziFLmWHhfgpVi2HM
        subject_person_id: p_j2cooKWq7iat9iyZScpCrZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1760年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1WAezb1WzxfrBZkxE7gQM1
          claim_id: c_vZTYW4ziFLmWHhfgpVi2HM
          source_id: s_CGfeJwrwNxy9vhuEEF673g
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
        id: c_bMdPSJnEU5FMoL1gPYQ2hi
        subject_person_id: p_j2cooKWq7iat9iyZScpCrZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1810年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pmwpLmWCk5Avc6EEugVZLB
          claim_id: c_bMdPSJnEU5FMoL1gPYQ2hi
          source_id: s_CGfeJwrwNxy9vhuEEF673g
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
        id: c_Q4B3g8cyBC5uqpuw1i4HRG
        subject_person_id: p_j2cooKWq7iat9iyZScpCrZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申伯（1760年—1810年），清人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 71485）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BY9pCvJZT_mcgxj5S_jKOk
          claim_id: c_Q4B3g8cyBC5uqpuw1i4HRG
          source_id: s_CGfeJwrwNxy9vhuEEF673g
          stance: supports
          locator: CBDB:71485
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

# 王申伯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王申伯 | accepted |
| birth.date | 1760年 | accepted |
| death.date | 1810年 | accepted |
| bio.summary | 王申伯（1760年—1810年），清人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 71485） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王申伯（CBDB 71485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71485&o=json)
