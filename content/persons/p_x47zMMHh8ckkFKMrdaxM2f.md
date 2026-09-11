---
schema: wang-person/v1
id: p_x47zMMHh8ckkFKMrdaxM2f
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8UJ1vWxMN8HGeFaTppHfr
        subject_person_id: p_x47zMMHh8ckkFKMrdaxM2f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZoU7ZtLZQcNNL8CGf9m9H
          claim_id: c_z8UJ1vWxMN8HGeFaTppHfr
          source_id: s_WPu9ixmbQ91xVdoDNsw4Xt
          stance: supports
          locator: CBDB:503319
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503319）
          source: &a1
            id: s_WPu9ixmbQ91xVdoDNsw4Xt
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 503319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503319&o=json
            external_identifier: CBDB:503319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FE62N8mv6mDrPoU8mwETdP
        subject_person_id: p_x47zMMHh8ckkFKMrdaxM2f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。入仕進士，曾任分巡道。（中国历代人物传记资料库 CBDB 503319）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vtUY8FiMaQdCppabUMZUt_
          claim_id: c_FE62N8mv6mDrPoU8mwETdP
          source_id: s_WPu9ixmbQ91xVdoDNsw4Xt
          stance: supports
          locator: CBDB:503319
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

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。入仕進士，曾任分巡道。（中国历代人物传记资料库 CBDB 503319） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 503319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503319&o=json)
