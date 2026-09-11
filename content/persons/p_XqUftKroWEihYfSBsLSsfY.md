---
schema: wang-person/v1
id: p_XqUftKroWEihYfSBsLSsfY
status: active
merged_into: null
display_name: 王以莊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TmmUYNrV6Cme2i4J6HLSZ5
        subject_person_id: p_XqUftKroWEihYfSBsLSsfY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以莊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LsfZksrt2yDG2pZFPeFCFf
          claim_id: c_TmmUYNrV6Cme2i4J6HLSZ5
          source_id: s_m2bGBAxoQ4PCGNmyLdz6GA
          stance: supports
          locator: CBDB:635927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635927）
          source: &a1
            id: s_m2bGBAxoQ4PCGNmyLdz6GA
            source_type: api_record
            title: 中国历代人物传记资料库：王以莊（CBDB 635927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635927&o=json
            external_identifier: CBDB:635927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2MML2EYFtHYZLGKN93Yhrh
        subject_person_id: p_XqUftKroWEihYfSBsLSsfY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以莊，清人物。籍贯鎮遠府，曾任訓導。（中国历代人物传记资料库 CBDB 635927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2tZhr-kx2cZ86QQ-qWh1EP
          claim_id: c_2MML2EYFtHYZLGKN93Yhrh
          source_id: s_m2bGBAxoQ4PCGNmyLdz6GA
          stance: supports
          locator: CBDB:635927
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

# 王以莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以莊 | accepted |
| bio.summary | 王以莊，清人物。籍贯鎮遠府，曾任訓導。（中国历代人物传记资料库 CBDB 635927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以莊（CBDB 635927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635927&o=json)
