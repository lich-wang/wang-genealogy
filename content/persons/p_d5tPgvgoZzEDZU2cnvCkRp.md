---
schema: wang-person/v1
id: p_d5tPgvgoZzEDZU2cnvCkRp
status: active
merged_into: null
display_name: 王維藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJdwVo88VFCfzDeUcavKbL
        subject_person_id: p_d5tPgvgoZzEDZU2cnvCkRp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3mtB8KhhUgjH4S88qj6cLK
          claim_id: c_GJdwVo88VFCfzDeUcavKbL
          source_id: s_6TNKpb1x2SA2xWvHfBhpeJ
          stance: supports
          locator: CBDB:297166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297166）
          source: &a1
            id: s_6TNKpb1x2SA2xWvHfBhpeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王維藩（CBDB 297166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297166&o=json
            external_identifier: CBDB:297166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mQR1de2A9WBP3BjrgeGH77
        subject_person_id: p_d5tPgvgoZzEDZU2cnvCkRp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維藩，明人物。嘉靖十四年進士，籍贯華州，曾任訓導、主簿。（中国历代人物传记资料库 CBDB 297166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8h-XBMHyZrm6EtTgmzftGB
          claim_id: c_mQR1de2A9WBP3BjrgeGH77
          source_id: s_6TNKpb1x2SA2xWvHfBhpeJ
          stance: supports
          locator: CBDB:297166
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

# 王維藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維藩 | accepted |
| bio.summary | 王維藩，明人物。嘉靖十四年進士，籍贯華州，曾任訓導、主簿。（中国历代人物传记资料库 CBDB 297166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維藩（CBDB 297166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297166&o=json)
