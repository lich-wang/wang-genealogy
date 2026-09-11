---
schema: wang-person/v1
id: p_mJ8Mbp1Zp4Lij7jG64F7ht
status: active
merged_into: null
display_name: 王靖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SRBa7CAahWUdCvFxQs3jpb
        subject_person_id: p_mJ8Mbp1Zp4Lij7jG64F7ht
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2SeA3ALQ5Vu73sEa63483h
          claim_id: c_SRBa7CAahWUdCvFxQs3jpb
          source_id: s_VFQz1hDasntKR15FpqfFb1
          stance: supports
          locator: CBDB:341683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341683）
          source: &a1
            id: s_VFQz1hDasntKR15FpqfFb1
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 341683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341683&o=json
            external_identifier: CBDB:341683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NnVCa7KJPVmvW8a1WgCJeG
        subject_person_id: p_mJ8Mbp1Zp4Lij7jG64F7ht
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖，清人物。明清進士進士，籍贯諸城，入仕進士，曾任副將、縣知縣。（中国历代人物传记资料库 CBDB 341683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lQOkJJryVlH0k6AGD8EpP_
          claim_id: c_NnVCa7KJPVmvW8a1WgCJeG
          source_id: s_VFQz1hDasntKR15FpqfFb1
          stance: supports
          locator: CBDB:341683
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

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靖 | accepted |
| bio.summary | 王靖，清人物。明清進士進士，籍贯諸城，入仕進士，曾任副將、縣知縣。（中国历代人物传记资料库 CBDB 341683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 341683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341683&o=json)
