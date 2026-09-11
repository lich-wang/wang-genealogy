---
schema: wang-person/v1
id: p_cAK86y7GGgtEAfMtkGogPL
status: active
merged_into: null
display_name: 王積翁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dbSA7DiMyDN38DdizmFB7u
        subject_person_id: p_cAK86y7GGgtEAfMtkGogPL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積翁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FRFPLgTCE3qdBsywsWMD71
          claim_id: c_dbSA7DiMyDN38DdizmFB7u
          source_id: s_NvxrXV1DkqaVSDKcGFm74Q
          stance: supports
          locator: CBDB:101438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101438）
          source: &a1
            id: s_NvxrXV1DkqaVSDKcGFm74Q
            source_type: api_record
            title: 中国历代人物传记资料库：王積翁（CBDB 101438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101438&o=json
            external_identifier: CBDB:101438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FNZggdwWjoUZYKb2JTPLU7
        subject_person_id: p_cAK86y7GGgtEAfMtkGogPL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1229年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ngw1TNoDa8mLpYwoaFWAEU
          claim_id: c_FNZggdwWjoUZYKb2JTPLU7
          source_id: s_NvxrXV1DkqaVSDKcGFm74Q
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
        id: c_iBtH1ZvP1QmcXQYa8ySGDc
        subject_person_id: p_cAK86y7GGgtEAfMtkGogPL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1284年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2LbYg6ACJJWDsZecUdkCXP
          claim_id: c_iBtH1ZvP1QmcXQYa8ySGDc
          source_id: s_NvxrXV1DkqaVSDKcGFm74Q
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
        id: c_GR4NNHQCfgPbdSJEYLB7t9
        subject_person_id: p_cAK86y7GGgtEAfMtkGogPL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積翁（1229年—1284年），元人物。籍贯福寧州，曾任制置使、戶部尚書、行中書省參政。（中国历代人物传记资料库 CBDB 101438）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RJ4h365KCRlKlZ1AShFHl6
          claim_id: c_GR4NNHQCfgPbdSJEYLB7t9
          source_id: s_NvxrXV1DkqaVSDKcGFm74Q
          stance: supports
          locator: CBDB:101438
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_IKW8JYOhHiNlCtC0Ho8067
        subject_person_id: p_cAK86y7GGgtEAfMtkGogPL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DTwM4if86rnBrT4hEDdams
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S9Txd2H52KfT4HbIiDk51A
          claim_id: c_IKW8JYOhHiNlCtC0Ho8067
          source_id: s_NvxrXV1DkqaVSDKcGFm74Q
          stance: supports
          locator: 元人傳記資料索引，1298：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DTwM4if86rnBrT4hEDdams
        status: active
        display_name: 王都中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王積翁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積翁 | accepted |
| birth.date | 1229年 | accepted |
| death.date | 1284年 | accepted |
| bio.summary | 王積翁（1229年—1284年），元人物。籍贯福寧州，曾任制置使、戶部尚書、行中書省參政。（中国历代人物传记资料库 CBDB 101438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DTwM4if86rnBrT4hEDdams | 王都中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王積翁（CBDB 101438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101438&o=json)
