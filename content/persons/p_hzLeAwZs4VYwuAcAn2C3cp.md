---
schema: wang-person/v1
id: p_hzLeAwZs4VYwuAcAn2C3cp
status: active
merged_into: null
display_name: 王安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fJgnuDmXGKsg7EjsBh9mnQ
        subject_person_id: p_hzLeAwZs4VYwuAcAn2C3cp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_enfAJ9uu7cnKq7NBYr5tqV
          claim_id: c_fJgnuDmXGKsg7EjsBh9mnQ
          source_id: s_NFVNsRx62FwTtC9k5KL7mZ
          stance: supports
          locator: CBDB:147333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147333）
          source: &a1
            id: s_NFVNsRx62FwTtC9k5KL7mZ
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 147333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147333&o=json
            external_identifier: CBDB:147333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WXfRL36mt3mehiMv8iB7Kp
        subject_person_id: p_hzLeAwZs4VYwuAcAn2C3cp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，唐人物。籍贯鞏州，曾任上儀同三司。（中国历代人物传记资料库 CBDB 147333）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y28dmFq77LFslsOdmCC8MC
          claim_id: c_WXfRL36mt3mehiMv8iB7Kp
          source_id: s_NFVNsRx62FwTtC9k5KL7mZ
          stance: supports
          locator: CBDB:147333
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4xfXcwyrXjKs8BZbDeUADH
        subject_person_id: p_hzLeAwZs4VYwuAcAn2C3cp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p7K3tmeqp6utYYMJ6NNNHL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wle21srYJX75y6VlEiwO60
          claim_id: c_4xfXcwyrXjKs8BZbDeUADH
          source_id: s_NFVNsRx62FwTtC9k5KL7mZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 21：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p7K3tmeqp6utYYMJ6NNNHL
        status: active
        display_name: 王師感
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | 王安，唐人物。籍贯鞏州，曾任上儀同三司。（中国历代人物传记资料库 CBDB 147333） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_p7K3tmeqp6utYYMJ6NNNHL | 王師感 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 147333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147333&o=json)
