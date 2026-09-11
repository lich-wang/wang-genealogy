---
schema: wang-person/v1
id: p_S2JjkKaPG9SjE3bMi8Pt9h
status: active
merged_into: null
display_name: 王良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L2iGGP6hNRbLsM2rDwV9Wd
        subject_person_id: p_S2JjkKaPG9SjE3bMi8Pt9h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v8nRsC22oYKUnP6bjhJHH7
          claim_id: c_L2iGGP6hNRbLsM2rDwV9Wd
          source_id: s_vhEPZTM3eEdT4wZAhcNBet
          stance: supports
          locator: CBDB:295664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295664）
          source: &a1
            id: s_vhEPZTM3eEdT4wZAhcNBet
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 295664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295664&o=json
            external_identifier: CBDB:295664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zTNPVCC9EyHnNFZH79sph3
        subject_person_id: p_S2JjkKaPG9SjE3bMi8Pt9h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良，明人物。天順元年進士，籍贯蠡縣。（中国历代人物传记资料库 CBDB 295664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PKWbP81sFZcHL3CE4k5rdL
          claim_id: c_zTNPVCC9EyHnNFZH79sph3
          source_id: s_vhEPZTM3eEdT4wZAhcNBet
          stance: supports
          locator: CBDB:295664
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

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | 王良，明人物。天順元年進士，籍贯蠡縣。（中国历代人物传记资料库 CBDB 295664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 295664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295664&o=json)
