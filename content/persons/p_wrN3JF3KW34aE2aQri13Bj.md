---
schema: wang-person/v1
id: p_wrN3JF3KW34aE2aQri13Bj
status: active
merged_into: null
display_name: 王亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SEtdSPzBLtX5s8FXhAQMV5
        subject_person_id: p_wrN3JF3KW34aE2aQri13Bj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_piqAdTSGwiY9iM7HbqrDb8
          claim_id: c_SEtdSPzBLtX5s8FXhAQMV5
          source_id: s_eEPdFBs6rLgtygmNhBNFKo
          stance: supports
          locator: CBDB:71137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71137）
          source: &a1
            id: s_eEPdFBs6rLgtygmNhBNFKo
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 71137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71137&o=json
            external_identifier: CBDB:71137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u9u6okuNChCfmHwoAndB4n
        subject_person_id: p_wrN3JF3KW34aE2aQri13Bj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1740年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4S4Nz1HaJSgVDcGed1RGnt
          claim_id: c_u9u6okuNChCfmHwoAndB4n
          source_id: s_eEPdFBs6rLgtygmNhBNFKo
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
        id: c_zreTKhFb6wi35psq1tZnqQ
        subject_person_id: p_wrN3JF3KW34aE2aQri13Bj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1787年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9rAMPmeh2n2AgBLCNE6p1E
          claim_id: c_zreTKhFb6wi35psq1tZnqQ
          source_id: s_eEPdFBs6rLgtygmNhBNFKo
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
        id: c_GPMECbEf6JZ7n1u7QZUeqG
        subject_person_id: p_wrN3JF3KW34aE2aQri13Bj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮（1740年—1787年），清人物。籍贯南海。（中国历代人物传记资料库 CBDB 71137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQdOOl_wN8PEDD6pMGnXvc
          claim_id: c_GPMECbEf6JZ7n1u7QZUeqG
          source_id: s_eEPdFBs6rLgtygmNhBNFKo
          stance: supports
          locator: CBDB:71137
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

# 王亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮 | accepted |
| birth.date | 1740年 | accepted |
| death.date | 1787年 | accepted |
| bio.summary | 王亮（1740年—1787年），清人物。籍贯南海。（中国历代人物传记资料库 CBDB 71137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亮（CBDB 71137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71137&o=json)
