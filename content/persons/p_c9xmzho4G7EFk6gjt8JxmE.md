---
schema: wang-person/v1
id: p_c9xmzho4G7EFk6gjt8JxmE
status: active
merged_into: null
display_name: 王振藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pywdTDzKSnn6dpBJnXNsSN
        subject_person_id: p_c9xmzho4G7EFk6gjt8JxmE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ENnz6Etoa5b8HHfoGFRKK3
          claim_id: c_pywdTDzKSnn6dpBJnXNsSN
          source_id: s_CmStZz5FusF1BuRk3rQXAC
          stance: supports
          locator: CBDB:638130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638130）
          source: &a1
            id: s_CmStZz5FusF1BuRk3rQXAC
            source_type: api_record
            title: 中国历代人物传记资料库：王振藩（CBDB 638130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638130&o=json
            external_identifier: CBDB:638130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3nAA4PEniXBKNwiu9MqVRP
        subject_person_id: p_c9xmzho4G7EFk6gjt8JxmE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振藩，清人物。籍贯漢陽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BLazle4_8A6FiQNa4fVGGl
          claim_id: c_3nAA4PEniXBKNwiu9MqVRP
          source_id: s_CmStZz5FusF1BuRk3rQXAC
          stance: supports
          locator: CBDB:638130
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

# 王振藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振藩 | accepted |
| bio.summary | 王振藩，清人物。籍贯漢陽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振藩（CBDB 638130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638130&o=json)
