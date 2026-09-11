---
schema: wang-person/v1
id: p_2D3PdcFtNoHZ72gazmTLab
status: active
merged_into: null
display_name: 王禧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gWiCQi7NrmB3Tbhq1t5TuZ
        subject_person_id: p_2D3PdcFtNoHZ72gazmTLab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XwtTj32pfGBPjjPJ1Sjmmm
          claim_id: c_gWiCQi7NrmB3Tbhq1t5TuZ
          source_id: s_NXexGTGeRK4sidwcerAfWP
          stance: supports
          locator: CBDB:565029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565029）
          source: &a1
            id: s_NXexGTGeRK4sidwcerAfWP
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 565029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565029&o=json
            external_identifier: CBDB:565029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_65NBULQoWT7FLxJoSWrsYF
        subject_person_id: p_2D3PdcFtNoHZ72gazmTLab
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧，清人物。籍贯丹徒，身份为畫家。（中国历代人物传记资料库 CBDB 565029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_maol3mFlG40OMIQyeJmlSG
          claim_id: c_65NBULQoWT7FLxJoSWrsYF
          source_id: s_NXexGTGeRK4sidwcerAfWP
          stance: supports
          locator: CBDB:565029
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

# 王禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禧 | accepted |
| bio.summary | 王禧，清人物。籍贯丹徒，身份为畫家。（中国历代人物传记资料库 CBDB 565029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禧（CBDB 565029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565029&o=json)
