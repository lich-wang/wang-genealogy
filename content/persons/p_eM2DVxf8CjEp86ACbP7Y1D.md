---
schema: wang-person/v1
id: p_eM2DVxf8CjEp86ACbP7Y1D
status: active
merged_into: null
display_name: 王本墉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ULH386zG6Ea9LUvhtCAdAM
        subject_person_id: p_eM2DVxf8CjEp86ACbP7Y1D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本墉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4S7J8k3EHb8Mk3fQHB5aRL
          claim_id: c_ULH386zG6Ea9LUvhtCAdAM
          source_id: s_itD2AmzPCuG1zH1sM6pffQ
          stance: supports
          locator: CBDB:638656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638656）
          source: &a1
            id: s_itD2AmzPCuG1zH1sM6pffQ
            source_type: api_record
            title: 中国历代人物传记资料库：王本墉（CBDB 638656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638656&o=json
            external_identifier: CBDB:638656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e8aYDXYcBuoYauMp4sKAYy
        subject_person_id: p_eM2DVxf8CjEp86ACbP7Y1D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本墉，清人物。籍贯長山，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638656）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SHa06rIacwCcugKEWJjW-x
          claim_id: c_e8aYDXYcBuoYauMp4sKAYy
          source_id: s_itD2AmzPCuG1zH1sM6pffQ
          stance: supports
          locator: CBDB:638656
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

# 王本墉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本墉 | accepted |
| bio.summary | 王本墉，清人物。籍贯長山，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本墉（CBDB 638656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638656&o=json)
