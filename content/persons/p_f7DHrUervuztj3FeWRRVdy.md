---
schema: wang-person/v1
id: p_f7DHrUervuztj3FeWRRVdy
status: active
merged_into: null
display_name: 王文鼇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UoCeKH96GoW4Q8E1NBwcMo
        subject_person_id: p_f7DHrUervuztj3FeWRRVdy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文鼇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cpBPvMCpJLbifPEUe6umvp
          claim_id: c_UoCeKH96GoW4Q8E1NBwcMo
          source_id: s_SmLBu2YnMbbPUEAE9y5JqL
          stance: supports
          locator: CBDB:638295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638295）
          source: &a1
            id: s_SmLBu2YnMbbPUEAE9y5JqL
            source_type: api_record
            title: 中国历代人物传记资料库：王文鼇（CBDB 638295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638295&o=json
            external_identifier: CBDB:638295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_12vM3yXXJAs94BLWAhZHE6
        subject_person_id: p_f7DHrUervuztj3FeWRRVdy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文鼇，清人物。籍贯瀘州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 638295）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_axysJ2t_aH4SOGNv7Ta7kk
          claim_id: c_12vM3yXXJAs94BLWAhZHE6
          source_id: s_SmLBu2YnMbbPUEAE9y5JqL
          stance: supports
          locator: CBDB:638295
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

# 王文鼇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文鼇 | accepted |
| bio.summary | 王文鼇，清人物。籍贯瀘州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 638295） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文鼇（CBDB 638295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638295&o=json)
