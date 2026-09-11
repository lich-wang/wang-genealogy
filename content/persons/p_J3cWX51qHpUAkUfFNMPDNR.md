---
schema: wang-person/v1
id: p_J3cWX51qHpUAkUfFNMPDNR
status: active
merged_into: null
display_name: 王先采
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BBVz8jDn1DJ6hK11z2Kir
        subject_person_id: p_J3cWX51qHpUAkUfFNMPDNR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n6s2HVxt26UrLBQBH2GeN1
          claim_id: c_4BBVz8jDn1DJ6hK11z2Kir
          source_id: s_iVEARJLcW4u98he17y3o4z
          stance: supports
          locator: CBDB:562404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562404）
          source: &a1
            id: s_iVEARJLcW4u98he17y3o4z
            source_type: api_record
            title: 中国历代人物传记资料库：王先采（CBDB 562404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562404&o=json
            external_identifier: CBDB:562404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.559Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E33djiJ3REHWQkMXGMHjP6
        subject_person_id: p_J3cWX51qHpUAkUfFNMPDNR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先采，清人物。籍贯蕭山，入仕武舉人，曾任營都司。（中国历代人物传记资料库 CBDB 562404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OpAXGFuc-trhIDPhc9WDzK
          claim_id: c_E33djiJ3REHWQkMXGMHjP6
          source_id: s_iVEARJLcW4u98he17y3o4z
          stance: supports
          locator: CBDB:562404
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

# 王先采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王先采 | accepted |
| bio.summary | 王先采，清人物。籍贯蕭山，入仕武舉人，曾任營都司。（中国历代人物传记资料库 CBDB 562404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王先采（CBDB 562404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562404&o=json)
