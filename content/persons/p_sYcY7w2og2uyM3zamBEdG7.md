---
schema: wang-person/v1
id: p_sYcY7w2og2uyM3zamBEdG7
status: active
merged_into: null
display_name: 王雨穀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4WMSqnLV9sWD9Tzq5Jm3cR
        subject_person_id: p_sYcY7w2og2uyM3zamBEdG7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雨穀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oUSXcXuER5rxHPA1DfDf9P
          claim_id: c_4WMSqnLV9sWD9Tzq5Jm3cR
          source_id: s_938QSkeENuas88J6YALmiE
          stance: supports
          locator: CBDB:341807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341807）
          source: &a1
            id: s_938QSkeENuas88J6YALmiE
            source_type: api_record
            title: 中国历代人物传记资料库：王雨穀（CBDB 341807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341807&o=json
            external_identifier: CBDB:341807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XD86LjvUu8v5KgV34sSX5B
        subject_person_id: p_sYcY7w2og2uyM3zamBEdG7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雨穀，清人物。明清進士進士，籍贯平定直隸州，入仕進士。（中国历代人物传记资料库 CBDB 341807）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ji3ky-FBgkopY9xOwZakz
          claim_id: c_XD86LjvUu8v5KgV34sSX5B
          source_id: s_938QSkeENuas88J6YALmiE
          stance: supports
          locator: CBDB:341807
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

# 王雨穀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雨穀 | accepted |
| bio.summary | 王雨穀，清人物。明清進士進士，籍贯平定直隸州，入仕進士。（中国历代人物传记资料库 CBDB 341807） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雨穀（CBDB 341807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341807&o=json)
