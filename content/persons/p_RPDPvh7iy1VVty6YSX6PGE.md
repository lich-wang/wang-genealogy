---
schema: wang-person/v1
id: p_RPDPvh7iy1VVty6YSX6PGE
status: active
merged_into: null
display_name: 王公成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SG9RgiHVsfoFtEw7Srr2ar
        subject_person_id: p_RPDPvh7iy1VVty6YSX6PGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SXXpFgjvHdevk69Eav2a5v
          claim_id: c_SG9RgiHVsfoFtEw7Srr2ar
          source_id: s_KRX76vYGXx98Hc2Bx51wpu
          stance: supports
          locator: CBDB:545636
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545636）
          source: &a1
            id: s_KRX76vYGXx98Hc2Bx51wpu
            source_type: api_record
            title: 中国历代人物传记资料库：王公成（CBDB 545636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545636&o=json
            external_identifier: CBDB:545636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tmA3CfmGB3fRnZDqwG1j2h
        subject_person_id: p_RPDPvh7iy1VVty6YSX6PGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公成，宋人物。籍贯連江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 545636）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lGJSWb0dqEd0adYvftJsNA
          claim_id: c_tmA3CfmGB3fRnZDqwG1j2h
          source_id: s_KRX76vYGXx98Hc2Bx51wpu
          stance: supports
          locator: CBDB:545636
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

# 王公成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公成 | accepted |
| bio.summary | 王公成，宋人物。籍贯連江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 545636） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公成（CBDB 545636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545636&o=json)
