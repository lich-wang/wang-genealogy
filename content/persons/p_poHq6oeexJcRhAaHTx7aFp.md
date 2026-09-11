---
schema: wang-person/v1
id: p_poHq6oeexJcRhAaHTx7aFp
status: active
merged_into: null
display_name: 王聚奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GVmyV6QMrFiVUu73aQrN4Y
        subject_person_id: p_poHq6oeexJcRhAaHTx7aFp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S3jEB1F3uH5yDpMmBnMopX
          claim_id: c_GVmyV6QMrFiVUu73aQrN4Y
          source_id: s_Kc8AUMhC9XeVUo5DK6u3HP
          stance: supports
          locator: CBDB:342054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342054）
          source: &a1
            id: s_Kc8AUMhC9XeVUo5DK6u3HP
            source_type: api_record
            title: 中国历代人物传记资料库：王聚奎（CBDB 342054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342054&o=json
            external_identifier: CBDB:342054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RRLCRQET8ue63gPnDJ14fr
        subject_person_id: p_poHq6oeexJcRhAaHTx7aFp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚奎，清人物。明清進士進士，籍贯洛陽，入仕進士。（中国历代人物传记资料库 CBDB 342054）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jf8iAycouUkUT11XW8eiih
          claim_id: c_RRLCRQET8ue63gPnDJ14fr
          source_id: s_Kc8AUMhC9XeVUo5DK6u3HP
          stance: supports
          locator: CBDB:342054
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

# 王聚奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚奎 | accepted |
| bio.summary | 王聚奎，清人物。明清進士進士，籍贯洛陽，入仕進士。（中国历代人物传记资料库 CBDB 342054） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聚奎（CBDB 342054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342054&o=json)
