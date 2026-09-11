---
schema: wang-person/v1
id: p_SfJd8Gs7E4Kh19kJQm4j3B
status: active
merged_into: null
display_name: 王序賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LjU3FvKuPeAAHz6quN9Dwa
        subject_person_id: p_SfJd8Gs7E4Kh19kJQm4j3B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_25dp6uoKVAo3sK7t84H9aL
          claim_id: c_LjU3FvKuPeAAHz6quN9Dwa
          source_id: s_9DFcCDCyLPY5QJS87qJ3YW
          stance: supports
          locator: CBDB:341539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341539）
          source: &a1
            id: s_9DFcCDCyLPY5QJS87qJ3YW
            source_type: api_record
            title: 中国历代人物传记资料库：王序賓（CBDB 341539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341539&o=json
            external_identifier: CBDB:341539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HvWi2P8efDbFMLjy2bzHv3
        subject_person_id: p_SfJd8Gs7E4Kh19kJQm4j3B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序賓，清人物。明清進士進士，籍贯榆次，入仕進士。（中国历代人物传记资料库 CBDB 341539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PbCiOxn1QeymVozog0yrCs
          claim_id: c_HvWi2P8efDbFMLjy2bzHv3
          source_id: s_9DFcCDCyLPY5QJS87qJ3YW
          stance: supports
          locator: CBDB:341539
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

# 王序賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王序賓 | accepted |
| bio.summary | 王序賓，清人物。明清進士進士，籍贯榆次，入仕進士。（中国历代人物传记资料库 CBDB 341539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王序賓（CBDB 341539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341539&o=json)
