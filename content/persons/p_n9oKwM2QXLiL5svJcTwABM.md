---
schema: wang-person/v1
id: p_n9oKwM2QXLiL5svJcTwABM
status: active
merged_into: null
display_name: 王德裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ML61uQ4QQ6opA5Qnsb5M69
        subject_person_id: p_n9oKwM2QXLiL5svJcTwABM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HzaQEyDbJHFeKiYHkFSSPR
          claim_id: c_ML61uQ4QQ6opA5Qnsb5M69
          source_id: s_mZFXG5zBVZusp9Y32eGaEb
          stance: supports
          locator: CBDB:38411
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38411）
          source: &a1
            id: s_mZFXG5zBVZusp9Y32eGaEb
            source_type: api_record
            title: 中国历代人物传记资料库：王德裕（CBDB 38411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38411&o=json
            external_identifier: CBDB:38411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gL1jidyEGw5baKJ3r3MRve
        subject_person_id: p_n9oKwM2QXLiL5svJcTwABM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1262年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UKZNE1xD2ZiJR2UGDVcUpP
          claim_id: c_gL1jidyEGw5baKJ3r3MRve
          source_id: s_mZFXG5zBVZusp9Y32eGaEb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQuHm243hs42JaFxtX7gnS
        subject_person_id: p_n9oKwM2QXLiL5svJcTwABM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德裕（生于1262年），元人物。籍贯長泰，身份为收徒講學、隱居授徒。（中国历代人物传记资料库 CBDB 38411）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cVcTRGiDfNfLjeUv-PdSiE
          claim_id: c_EQuHm243hs42JaFxtX7gnS
          source_id: s_mZFXG5zBVZusp9Y32eGaEb
          stance: supports
          locator: CBDB:38411
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

# 王德裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德裕 | accepted |
| birth.date | 1262年 | accepted |
| bio.summary | 王德裕（生于1262年），元人物。籍贯長泰，身份为收徒講學、隱居授徒。（中国历代人物传记资料库 CBDB 38411） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德裕（CBDB 38411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38411&o=json)
