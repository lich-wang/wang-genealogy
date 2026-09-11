---
schema: wang-person/v1
id: p_xgD27Lk2H56bxYUhUNWe2b
status: active
merged_into: null
display_name: 王英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2kNE2w443dmdtAg4EEPZRA
        subject_person_id: p_xgD27Lk2H56bxYUhUNWe2b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2bUshgtK8uMVmSaZS9wgAb
          claim_id: c_2kNE2w443dmdtAg4EEPZRA
          source_id: s_q12jeuAdUcTHZLEMcD5MiC
          stance: supports
          locator: CBDB:100737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100737）
          source: &a1
            id: s_q12jeuAdUcTHZLEMcD5MiC
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 100737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100737&o=json
            external_identifier: CBDB:100737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.409Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u9Q5DtMMgfQMJkBiBh5Bg5
        subject_person_id: p_xgD27Lk2H56bxYUhUNWe2b
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
        - id: cs_apQtUCHvPg35LPTGWNFY6R
          claim_id: c_u9Q5DtMMgfQMJkBiBh5Bg5
          source_id: s_q12jeuAdUcTHZLEMcD5MiC
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
        id: c_9tScNKRwBj1rzwLJsPEZXc
        subject_person_id: p_xgD27Lk2H56bxYUhUNWe2b
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1357年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WJLcGqgmrQ84ZBcjEKd42y
          claim_id: c_9tScNKRwBj1rzwLJsPEZXc
          source_id: s_q12jeuAdUcTHZLEMcD5MiC
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
        id: c_uzstE6tCNw2i7PdWaPMuCF
        subject_person_id: p_xgD27Lk2H56bxYUhUNWe2b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英（1262年—1357年），元人物。籍贯益都路，入仕世襲(替)，曾任宣慰使司同知、萬戶府副千戶、路下千戶。（中国历代人物传记资料库 CBDB 100737）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y5DFyTnJotd_Ck_LCZC12T
          claim_id: c_uzstE6tCNw2i7PdWaPMuCF
          source_id: s_q12jeuAdUcTHZLEMcD5MiC
          stance: supports
          locator: CBDB:100737
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

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| birth.date | 1262年 | accepted |
| death.date | 1357年 | accepted |
| bio.summary | 王英（1262年—1357年），元人物。籍贯益都路，入仕世襲(替)，曾任宣慰使司同知、萬戶府副千戶、路下千戶。（中国历代人物传记资料库 CBDB 100737） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 100737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100737&o=json)
