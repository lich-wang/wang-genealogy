---
schema: wang-person/v1
id: p_KagoekL8TswimBfGBEW94f
status: active
merged_into: null
display_name: 王思敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TDSmzoSruC7f6jVC9esDri
        subject_person_id: p_KagoekL8TswimBfGBEW94f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a2zLPTasYo6SAQ8HZt3uVi
          claim_id: c_TDSmzoSruC7f6jVC9esDri
          source_id: s_48rW4tF4ag3DUYQE78zDVK
          stance: supports
          locator: CBDB:101279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101279）
          source: &a1
            id: s_48rW4tF4ag3DUYQE78zDVK
            source_type: api_record
            title: 中国历代人物传记资料库：王思敬（CBDB 101279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101279&o=json
            external_identifier: CBDB:101279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BchQAcm8K9kaQExaGkbeLb
        subject_person_id: p_KagoekL8TswimBfGBEW94f
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1224年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6KxKEvH57WNpbaRdnHuyWL
          claim_id: c_BchQAcm8K9kaQExaGkbeLb
          source_id: s_48rW4tF4ag3DUYQE78zDVK
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
        id: c_HeuumQ7pg49un8mQjNK4oV
        subject_person_id: p_KagoekL8TswimBfGBEW94f
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1307年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6VoZhQ8Kwm5Wghxw4sGERB
          claim_id: c_HeuumQ7pg49un8mQjNK4oV
          source_id: s_48rW4tF4ag3DUYQE78zDVK
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
        id: c_ZnEcCYrTCzPJbhSUAMEriF
        subject_person_id: p_KagoekL8TswimBfGBEW94f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敬（1224年—1307年），元人物。籍贯槁城，曾任百戶。（中国历代人物传记资料库 CBDB 101279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hnmDZ8rMzuYCBUFPX2K4pe
          claim_id: c_ZnEcCYrTCzPJbhSUAMEriF
          source_id: s_48rW4tF4ag3DUYQE78zDVK
          stance: supports
          locator: CBDB:101279
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

# 王思敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思敬 | accepted |
| birth.date | 1224年 | accepted |
| death.date | 1307年 | accepted |
| bio.summary | 王思敬（1224年—1307年），元人物。籍贯槁城，曾任百戶。（中国历代人物传记资料库 CBDB 101279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思敬（CBDB 101279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101279&o=json)
