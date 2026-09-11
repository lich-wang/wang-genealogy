---
schema: wang-person/v1
id: p_N5Z61nTVwYE9gVcdnVFQNG
status: active
merged_into: null
display_name: 王起仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rkB1vXDxaJnE4syQgPuLN5
        subject_person_id: p_N5Z61nTVwYE9gVcdnVFQNG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bz5XRuYP8FszaAyhY6dM5P
          claim_id: c_rkB1vXDxaJnE4syQgPuLN5
          source_id: s_Tu637pSTYQ499EhhBxrxcg
          stance: supports
          locator: CBDB:495287
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495287）
          source: &a1
            id: s_Tu637pSTYQ499EhhBxrxcg
            source_type: api_record
            title: 中国历代人物传记资料库：王起仁（CBDB 495287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495287&o=json
            external_identifier: CBDB:495287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xKcPAbMGTa2ADETVC1ijfh
        subject_person_id: p_N5Z61nTVwYE9gVcdnVFQNG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起仁，清人物。入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 495287）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4r-ouOT60TmtFrhLHzMdSW
          claim_id: c_xKcPAbMGTa2ADETVC1ijfh
          source_id: s_Tu637pSTYQ499EhhBxrxcg
          stance: supports
          locator: CBDB:495287
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

# 王起仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起仁 | accepted |
| bio.summary | 王起仁，清人物。入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 495287） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起仁（CBDB 495287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495287&o=json)
