---
schema: wang-person/v1
id: p_1PNnxsBVvKtkCY23WAFAh7
status: active
merged_into: null
display_name: 王效
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rj2xLZCDAQsYarezZ6WWMT
        subject_person_id: p_1PNnxsBVvKtkCY23WAFAh7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王效
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vyu1UdVzNJq6APZK28vyL1
          claim_id: c_Rj2xLZCDAQsYarezZ6WWMT
          source_id: s_XoXyPGFrzoM3KYEoCJxrue
          stance: supports
          locator: CBDB:68925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68925）
          source: &a1
            id: s_XoXyPGFrzoM3KYEoCJxrue
            source_type: api_record
            title: 中国历代人物传记资料库：王效（CBDB 68925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68925&o=json
            external_identifier: CBDB:68925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FSuA3cbRY12Dki8GypdfBB
        subject_person_id: p_1PNnxsBVvKtkCY23WAFAh7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tsoPV55qLY18owCftuxukF
          claim_id: c_FSuA3cbRY12Dki8GypdfBB
          source_id: s_XoXyPGFrzoM3KYEoCJxrue
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e94Z1JkikZyxcZFhxKvEQR
        subject_person_id: p_1PNnxsBVvKtkCY23WAFAh7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王效（卒于1538年），明人物。籍贯蒙古，身份为精於騎射，入仕武舉進士，曾任都督僉事、都督同知、將軍。（中国历代人物传记资料库 CBDB 68925）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ebUJ7y60SBaIXj5zn2fX_y
          claim_id: c_e94Z1JkikZyxcZFhxKvEQR
          source_id: s_XoXyPGFrzoM3KYEoCJxrue
          stance: supports
          locator: CBDB:68925
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

# 王效

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王效 | accepted |
| death.date | 1538年 | accepted |
| bio.summary | 王效（卒于1538年），明人物。籍贯蒙古，身份为精於騎射，入仕武舉進士，曾任都督僉事、都督同知、將軍。（中国历代人物传记资料库 CBDB 68925） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王效（CBDB 68925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68925&o=json)
