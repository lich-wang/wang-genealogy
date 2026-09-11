---
schema: wang-person/v1
id: p_yxveRSN4PCugTKtPqZyU2j
status: active
merged_into: null
display_name: 王仁洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZMsCRNWoJ7DsMhhDdT7Z7Z
        subject_person_id: p_yxveRSN4PCugTKtPqZyU2j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MpM7ALjz1UJmJ9Sqt3kxuH
          claim_id: c_ZMsCRNWoJ7DsMhhDdT7Z7Z
          source_id: s_LNHDmPtwZ37biL1KCatAvL
          stance: supports
          locator: CBDB:635890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635890）
          source: &a1
            id: s_LNHDmPtwZ37biL1KCatAvL
            source_type: api_record
            title: 中国历代人物传记资料库：王仁洪（CBDB 635890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635890&o=json
            external_identifier: CBDB:635890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_27yavbDpFxiwzNY98TDVYa
        subject_person_id: p_yxveRSN4PCugTKtPqZyU2j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁洪，清人物。籍贯萊州府，曾任訓導。（中国历代人物传记资料库 CBDB 635890）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s5TCxOaftbfqESn6nMgKzC
          claim_id: c_27yavbDpFxiwzNY98TDVYa
          source_id: s_LNHDmPtwZ37biL1KCatAvL
          stance: supports
          locator: CBDB:635890
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

# 王仁洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁洪 | accepted |
| bio.summary | 王仁洪，清人物。籍贯萊州府，曾任訓導。（中国历代人物传记资料库 CBDB 635890） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁洪（CBDB 635890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635890&o=json)
