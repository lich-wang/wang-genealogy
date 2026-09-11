---
schema: wang-person/v1
id: p_CroX17fxfAg3aGwXPEDw8d
status: active
merged_into: null
display_name: 王尚賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mqBoG3emCQtc26fC3ygPcc
        subject_person_id: p_CroX17fxfAg3aGwXPEDw8d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TPYtocLPj5FKPaTfuU2iFk
          claim_id: c_mqBoG3emCQtc26fC3ygPcc
          source_id: s_pLuJEkm53VtT3BVQB8cmPY
          stance: supports
          locator: CBDB:544987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544987）
          source: &a1
            id: s_pLuJEkm53VtT3BVQB8cmPY
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 544987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544987&o=json
            external_identifier: CBDB:544987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5qL12qGPeHaKMfm6tw6Qsg
        subject_person_id: p_CroX17fxfAg3aGwXPEDw8d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢，宋人物。籍贯南城，入仕進士。（中国历代人物传记资料库 CBDB 544987）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k-49rGk2Hapf4u2QSM967Z
          claim_id: c_5qL12qGPeHaKMfm6tw6Qsg
          source_id: s_pLuJEkm53VtT3BVQB8cmPY
          stance: supports
          locator: CBDB:544987
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

# 王尚賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚賢 | accepted |
| bio.summary | 王尚賢，宋人物。籍贯南城，入仕進士。（中国历代人物传记资料库 CBDB 544987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚賢（CBDB 544987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544987&o=json)
