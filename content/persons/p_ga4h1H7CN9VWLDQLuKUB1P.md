---
schema: wang-person/v1
id: p_ga4h1H7CN9VWLDQLuKUB1P
status: active
merged_into: null
display_name: 王大猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yw3bCbQpCq813o31kydtut
        subject_person_id: p_ga4h1H7CN9VWLDQLuKUB1P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bosLPFEJdN3qp3yCLnsHa4
          claim_id: c_Yw3bCbQpCq813o31kydtut
          source_id: s_t3pTVjFQXHq5NEjujKJEv7
          stance: supports
          locator: CBDB:69089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69089）
          source: &a1
            id: s_t3pTVjFQXHq5NEjujKJEv7
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 69089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69089&o=json
            external_identifier: CBDB:69089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dU8SQkG4rbF8EEuNTkUiCM
        subject_person_id: p_ga4h1H7CN9VWLDQLuKUB1P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1807年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wQryCGWNgGxQAFbZVyBVgJ
          claim_id: c_dU8SQkG4rbF8EEuNTkUiCM
          source_id: s_t3pTVjFQXHq5NEjujKJEv7
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
        id: c_LARm5iju2EyB5hff9aA4F4
        subject_person_id: p_ga4h1H7CN9VWLDQLuKUB1P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷（卒于1807年），清人物。籍贯東莞，入仕募入軍伍，曾任把總、鎮標中營把總、知縣。（中国历代人物传记资料库 CBDB 69089）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Z0o3Z8W5zqCsortV-kPrG
          claim_id: c_LARm5iju2EyB5hff9aA4F4
          source_id: s_t3pTVjFQXHq5NEjujKJEv7
          stance: supports
          locator: CBDB:69089
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

# 王大猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大猷 | accepted |
| death.date | 1807年 | accepted |
| bio.summary | 王大猷（卒于1807年），清人物。籍贯東莞，入仕募入軍伍，曾任把總、鎮標中營把總、知縣。（中国历代人物传记资料库 CBDB 69089） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大猷（CBDB 69089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69089&o=json)
