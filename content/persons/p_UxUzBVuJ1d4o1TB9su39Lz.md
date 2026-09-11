---
schema: wang-person/v1
id: p_UxUzBVuJ1d4o1TB9su39Lz
status: active
merged_into: null
display_name: 王櫸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_trnh8dudTV5zZPquC84QTW
        subject_person_id: p_UxUzBVuJ1d4o1TB9su39Lz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wj4EghfbzL4G5LERydbDAF
          claim_id: c_trnh8dudTV5zZPquC84QTW
          source_id: s_X5Ptw7uB2dvrru1hxhVu7v
          stance: supports
          locator: CBDB:544462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544462）
          source: &a1
            id: s_X5Ptw7uB2dvrru1hxhVu7v
            source_type: api_record
            title: 中国历代人物传记资料库：王櫸（CBDB 544462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544462&o=json
            external_identifier: CBDB:544462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VvbJ1i2srFNBCznXL7fLvK
        subject_person_id: p_UxUzBVuJ1d4o1TB9su39Lz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫸，宋人物。籍贯廬陵，入仕進士。（中国历代人物传记资料库 CBDB 544462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8bNtjxvlvKaNHH_oVf2hgd
          claim_id: c_VvbJ1i2srFNBCznXL7fLvK
          source_id: s_X5Ptw7uB2dvrru1hxhVu7v
          stance: supports
          locator: CBDB:544462
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

# 王櫸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王櫸 | accepted |
| bio.summary | 王櫸，宋人物。籍贯廬陵，入仕進士。（中国历代人物传记资料库 CBDB 544462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王櫸（CBDB 544462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544462&o=json)
