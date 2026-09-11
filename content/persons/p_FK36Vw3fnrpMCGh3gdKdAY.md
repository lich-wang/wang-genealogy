---
schema: wang-person/v1
id: p_FK36Vw3fnrpMCGh3gdKdAY
status: active
merged_into: null
display_name: 王之春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CQfhpew9pUVk25wvLPRY56
        subject_person_id: p_FK36Vw3fnrpMCGh3gdKdAY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_myNCDDBNjXKLcXCfAPfmix
          claim_id: c_CQfhpew9pUVk25wvLPRY56
          source_id: s_mv4ANFY24w5AoBZ3o9rbwT
          stance: supports
          locator: CBDB:66589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66589）
          source: &a1
            id: s_mv4ANFY24w5AoBZ3o9rbwT
            source_type: api_record
            title: 中国历代人物传记资料库：王之春（CBDB 66589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66589&o=json
            external_identifier: CBDB:66589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dEo4BP8G9Mi9AEtAd2sHq5
        subject_person_id: p_FK36Vw3fnrpMCGh3gdKdAY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mQ7MTZYu7ECSfVerPckiqv
          claim_id: c_dEo4BP8G9Mi9AEtAd2sHq5
          source_id: s_mv4ANFY24w5AoBZ3o9rbwT
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
        id: c_Jbk3QkqKBvCsu2kbjufpUZ
        subject_person_id: p_FK36Vw3fnrpMCGh3gdKdAY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1906年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2oNrn5Zbxq5CRvCqTRorqr
          claim_id: c_Jbk3QkqKBvCsu2kbjufpUZ
          source_id: s_mv4ANFY24w5AoBZ3o9rbwT
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
        id: c_hdFMCmudbpQoxCpRfFZzqQ
        subject_person_id: p_FK36Vw3fnrpMCGh3gdKdAY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之春（1842年—1906年），清人物。籍贯清泉，入仕科舉制舉: 童子舉，曾任大臣。（中国历代人物传记资料库 CBDB 66589）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7iCrqyeeihKRJJCB54Hsek
          claim_id: c_hdFMCmudbpQoxCpRfFZzqQ
          source_id: s_mv4ANFY24w5AoBZ3o9rbwT
          stance: supports
          locator: CBDB:66589
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

# 王之春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之春 | accepted |
| birth.date | 1842年 | accepted |
| death.date | 1906年 | accepted |
| bio.summary | 王之春（1842年—1906年），清人物。籍贯清泉，入仕科舉制舉: 童子舉，曾任大臣。（中国历代人物传记资料库 CBDB 66589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之春（CBDB 66589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66589&o=json)
