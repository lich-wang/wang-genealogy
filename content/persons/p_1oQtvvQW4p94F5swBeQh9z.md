---
schema: wang-person/v1
id: p_1oQtvvQW4p94F5swBeQh9z
status: active
merged_into: null
display_name: 王徐錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cuih4cfaoeHvQNFfF8JTH8
        subject_person_id: p_1oQtvvQW4p94F5swBeQh9z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徐錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uCn4U4WfJiMMoRoS6kYqUc
          claim_id: c_Cuih4cfaoeHvQNFfF8JTH8
          source_id: s_48t4qsELB3nn5Gr7MbdyPx
          stance: supports
          locator: CBDB:689546
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689546）
          source: &a1
            id: s_48t4qsELB3nn5Gr7MbdyPx
            source_type: api_record
            title: 中国历代人物传记资料库：王徐錫（CBDB 689546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689546&o=json
            external_identifier: CBDB:689546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.476Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i3K4UVu3K4Fhf833SrNj35
        subject_person_id: p_1oQtvvQW4p94F5swBeQh9z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徐錫，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689546）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aEZNaEJrh-bCrj4fDe3p1H
          claim_id: c_i3K4UVu3K4Fhf833SrNj35
          source_id: s_48t4qsELB3nn5Gr7MbdyPx
          stance: supports
          locator: CBDB:689546
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

# 王徐錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徐錫 | accepted |
| bio.summary | 王徐錫，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689546） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徐錫（CBDB 689546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689546&o=json)
