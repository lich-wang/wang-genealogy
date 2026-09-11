---
schema: wang-person/v1
id: p_7AQsavtVHQGkvxTQuPD1CX
status: active
merged_into: null
display_name: 王珉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WW8Artt3c47F7opoFEkC2W
        subject_person_id: p_7AQsavtVHQGkvxTQuPD1CX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nPDePESU1nJyPWAmd95yQU
          claim_id: c_WW8Artt3c47F7opoFEkC2W
          source_id: s_DHMyyMdvP3sbmrgBjYcCNU
          stance: supports
          locator: CBDB:478962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478962）
          source: &a1
            id: s_DHMyyMdvP3sbmrgBjYcCNU
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 478962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478962&o=json
            external_identifier: CBDB:478962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mZNhW3LuWdMLAhyxAfcfWB
        subject_person_id: p_7AQsavtVHQGkvxTQuPD1CX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉，明人物。曾任監察御史。（中国历代人物传记资料库 CBDB 478962）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JEM8F5qGSYfSd3sHVpadsc
          claim_id: c_mZNhW3LuWdMLAhyxAfcfWB
          source_id: s_DHMyyMdvP3sbmrgBjYcCNU
          stance: supports
          locator: CBDB:478962
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

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| bio.summary | 王珉，明人物。曾任監察御史。（中国历代人物传记资料库 CBDB 478962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 478962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478962&o=json)
