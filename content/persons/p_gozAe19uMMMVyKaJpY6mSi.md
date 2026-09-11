---
schema: wang-person/v1
id: p_gozAe19uMMMVyKaJpY6mSi
status: active
merged_into: null
display_name: 王榮善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6DL6Nas6QKt6p72vnPqsWt
        subject_person_id: p_gozAe19uMMMVyKaJpY6mSi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZuLJU6kzpDwGA88kXgWBgo
          claim_id: c_6DL6Nas6QKt6p72vnPqsWt
          source_id: s_HuFT4prC3vuGYrzdUBcRYX
          stance: supports
          locator: CBDB:638794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638794）
          source: &a1
            id: s_HuFT4prC3vuGYrzdUBcRYX
            source_type: api_record
            title: 中国历代人物传记资料库：王榮善（CBDB 638794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638794&o=json
            external_identifier: CBDB:638794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1eGTew1B1mNBLVCMA4ggA7
        subject_person_id: p_gozAe19uMMMVyKaJpY6mSi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮善，清人物。籍贯平陽，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638794）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X25ZSrsTzvNtPKsgU61TSy
          claim_id: c_1eGTew1B1mNBLVCMA4ggA7
          source_id: s_HuFT4prC3vuGYrzdUBcRYX
          stance: supports
          locator: CBDB:638794
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

# 王榮善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮善 | accepted |
| bio.summary | 王榮善，清人物。籍贯平陽，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮善（CBDB 638794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638794&o=json)
