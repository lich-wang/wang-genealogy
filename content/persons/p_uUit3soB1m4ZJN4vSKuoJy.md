---
schema: wang-person/v1
id: p_uUit3soB1m4ZJN4vSKuoJy
status: active
merged_into: null
display_name: 王喦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P2nfU8FWimM8C6GPPfJo2D
        subject_person_id: p_uUit3soB1m4ZJN4vSKuoJy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nerhgtyDfu9WLJ1Q24DrJc
          claim_id: c_P2nfU8FWimM8C6GPPfJo2D
          source_id: s_ZPFME3TMuLBpR9X7vBCb91
          stance: supports
          locator: CBDB:71216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71216）
          source: &a1
            id: s_ZPFME3TMuLBpR9X7vBCb91
            source_type: api_record
            title: 中国历代人物传记资料库：王喦（CBDB 71216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71216&o=json
            external_identifier: CBDB:71216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aJEhxEzhfCVAB1NuWpCR2E
        subject_person_id: p_uUit3soB1m4ZJN4vSKuoJy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1818年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xs1HZ6JjXw1V9ieVSekgvH
          claim_id: c_aJEhxEzhfCVAB1NuWpCR2E
          source_id: s_ZPFME3TMuLBpR9X7vBCb91
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
        id: c_WMh4PqiyoP9ww1xyq9uR1B
        subject_person_id: p_uUit3soB1m4ZJN4vSKuoJy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1886年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3aaE5Ph5EVA1T4sWF2q3g
          claim_id: c_WMh4PqiyoP9ww1xyq9uR1B
          source_id: s_ZPFME3TMuLBpR9X7vBCb91
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
        id: c_SpJwdkLmixmLfinioDpCXw
        subject_person_id: p_uUit3soB1m4ZJN4vSKuoJy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rz7NnoXWkBTCfu2NMejfdp
          claim_id: c_SpJwdkLmixmLfinioDpCXw
          source_id: s_ZPFME3TMuLBpR9X7vBCb91
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王喦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喦 | accepted |
| birth.date | 1818年 | accepted |
| death.date | 1886年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喦（CBDB 71216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71216&o=json)
