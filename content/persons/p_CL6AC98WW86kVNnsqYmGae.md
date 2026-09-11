---
schema: wang-person/v1
id: p_CL6AC98WW86kVNnsqYmGae
status: active
merged_into: null
display_name: 王休名
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z1xoexsejsHPjwgcizMBdq
        subject_person_id: p_CL6AC98WW86kVNnsqYmGae
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tcD9UkAUZ2b6Vkx2LwFmDB
          claim_id: c_z1xoexsejsHPjwgcizMBdq
          source_id: s_ruGHzy2j2A9nQQQ5gDJJt2
          stance: supports
          locator: CBDB:379966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379966）
          source: &a1
            id: s_ruGHzy2j2A9nQQQ5gDJJt2
            source_type: api_record
            title: 中国历代人物传记资料库：王休名（CBDB 379966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379966&o=json
            external_identifier: CBDB:379966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aoiCqKv2LyCtGSdZ7CxtJ7
        subject_person_id: p_CL6AC98WW86kVNnsqYmGae
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休名，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6iHbuwg8WLAv4F-UBmiTmr
          claim_id: c_aoiCqKv2LyCtGSdZ7CxtJ7
          source_id: s_ruGHzy2j2A9nQQQ5gDJJt2
          stance: supports
          locator: CBDB:379966
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

# 王休名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王休名 | accepted |
| bio.summary | 王休名，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王休名（CBDB 379966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379966&o=json)
