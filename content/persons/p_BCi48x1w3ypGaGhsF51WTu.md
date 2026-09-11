---
schema: wang-person/v1
id: p_BCi48x1w3ypGaGhsF51WTu
status: active
merged_into: null
display_name: 王紹義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VvA4TvxLr7VydGSLe4E4qT
        subject_person_id: p_BCi48x1w3ypGaGhsF51WTu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YVBKEBtK119NnFm3HS2zc9
          claim_id: c_VvA4TvxLr7VydGSLe4E4qT
          source_id: s_4jF2EEL9e8b7a1r5Hr4Qay
          stance: supports
          locator: CBDB:639773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639773）
          source: &a1
            id: s_4jF2EEL9e8b7a1r5Hr4Qay
            source_type: api_record
            title: 中国历代人物传记资料库：王紹義（CBDB 639773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639773&o=json
            external_identifier: CBDB:639773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZjWwfpnjoRBrpobJGPv27r
        subject_person_id: p_BCi48x1w3ypGaGhsF51WTu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹義，清人物。籍贯廣西直隸州，曾任訓導。（中国历代人物传记资料库 CBDB 639773）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dTt1xWJp7dm7pLriL1u3GW
          claim_id: c_ZjWwfpnjoRBrpobJGPv27r
          source_id: s_4jF2EEL9e8b7a1r5Hr4Qay
          stance: supports
          locator: CBDB:639773
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

# 王紹義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹義 | accepted |
| bio.summary | 王紹義，清人物。籍贯廣西直隸州，曾任訓導。（中国历代人物传记资料库 CBDB 639773） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹義（CBDB 639773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639773&o=json)
