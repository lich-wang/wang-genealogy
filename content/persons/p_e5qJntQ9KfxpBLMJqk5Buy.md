---
schema: wang-person/v1
id: p_e5qJntQ9KfxpBLMJqk5Buy
status: active
merged_into: null
display_name: 王民牧
cbdb_id: 414936
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ACxaMkAm2fMqk6vjYqsUtE
        subject_person_id: p_e5qJntQ9KfxpBLMJqk5Buy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民牧，明人物。曾任通判。（中国历代人物传记资料库 CBDB 414936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JakKRt2tpYueR-9zFaVOcD
          claim_id: c_ACxaMkAm2fMqk6vjYqsUtE
          source_id: s_rYiejUSNBGC1Feq575bkif
          stance: supports
          locator: CBDB:414936
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rYiejUSNBGC1Feq575bkif
            source_type: api_record
            title: 中国历代人物传记资料库：王民牧（CBDB 414936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414936&o=json
            external_identifier: CBDB:414936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:42.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gsoDmi41GBKW2Ek3V2TbUA
        subject_person_id: p_e5qJntQ9KfxpBLMJqk5Buy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zhTBGQwBq4X5bJEzwrgYEE
          claim_id: c_gsoDmi41GBKW2Ek3V2TbUA
          source_id: s_rYiejUSNBGC1Feq575bkif
          stance: supports
          locator: CBDB:414936
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5901-6000）｜历史性依据：CBDB 朝代 = 明
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

# 王民牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王民牧，明人物。曾任通判。（中国历代人物传记资料库 CBDB 414936） | accepted |
| name.primary | 王民牧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王民牧（CBDB 414936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414936&o=json)
