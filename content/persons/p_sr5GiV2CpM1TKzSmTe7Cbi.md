---
schema: wang-person/v1
id: p_sr5GiV2CpM1TKzSmTe7Cbi
status: active
merged_into: null
display_name: 王喬棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GbJcmtN6DH4V7yTtBWiR4z
        subject_person_id: p_sr5GiV2CpM1TKzSmTe7Cbi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4MVE9NH3e2VPpCH9ujPeq8
          claim_id: c_GbJcmtN6DH4V7yTtBWiR4z
          source_id: s_ejEPSJzNkKt1cej4P1UH3j
          stance: supports
          locator: CBDB:126736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126736）
          source: &a1
            id: s_ejEPSJzNkKt1cej4P1UH3j
            source_type: api_record
            title: 中国历代人物传记资料库：王喬棟（CBDB 126736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126736&o=json
            external_identifier: CBDB:126736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bpuzGjW4DDcmBoSLjkbd7c
        subject_person_id: p_sr5GiV2CpM1TKzSmTe7Cbi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬棟，明人物。籍贯雄縣。（中国历代人物传记资料库 CBDB 126736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tXoXBH7-6j9y29mxZSfJvc
          claim_id: c_bpuzGjW4DDcmBoSLjkbd7c
          source_id: s_ejEPSJzNkKt1cej4P1UH3j
          stance: supports
          locator: CBDB:126736
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

# 王喬棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喬棟 | accepted |
| bio.summary | 王喬棟，明人物。籍贯雄縣。（中国历代人物传记资料库 CBDB 126736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喬棟（CBDB 126736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126736&o=json)
