---
schema: wang-person/v1
id: p_jDSxDyfM6DU98uHudrHjw5
status: active
merged_into: null
display_name: 王寶龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y8G1W994tcV1vysQq3idM7
        subject_person_id: p_jDSxDyfM6DU98uHudrHjw5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tHW9KmdsuUcg3NGtHyLf4e
          claim_id: c_y8G1W994tcV1vysQq3idM7
          source_id: s_caiC1diVLB5Pv2buh77RAr
          stance: supports
          locator: CBDB:637268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637268）
          source: &a1
            id: s_caiC1diVLB5Pv2buh77RAr
            source_type: api_record
            title: 中国历代人物传记资料库：王寶龍（CBDB 637268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637268&o=json
            external_identifier: CBDB:637268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AMP1dE2fDkMZCch16EruPD
        subject_person_id: p_jDSxDyfM6DU98uHudrHjw5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶龍，清人物。籍贯甯都直隸州甯都直隸州前鋪，曾任藍翎侍衛、三等侍衛。（中国历代人物传记资料库 CBDB 637268）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_53qnqIVFbmZRLDl1-7UBFQ
          claim_id: c_AMP1dE2fDkMZCch16EruPD
          source_id: s_caiC1diVLB5Pv2buh77RAr
          stance: supports
          locator: CBDB:637268
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

# 王寶龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶龍 | accepted |
| bio.summary | 王寶龍，清人物。籍贯甯都直隸州甯都直隸州前鋪，曾任藍翎侍衛、三等侍衛。（中国历代人物传记资料库 CBDB 637268） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶龍（CBDB 637268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637268&o=json)
