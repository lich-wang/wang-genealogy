---
schema: wang-person/v1
id: p_H5hUv6XCAEgbiVBnKoM66j
status: active
merged_into: null
display_name: 王之翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLTLH3WJotNn54yaWsZ8Fp
        subject_person_id: p_H5hUv6XCAEgbiVBnKoM66j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HThkoWhevcFVqfEG8F1Z6a
          claim_id: c_vLTLH3WJotNn54yaWsZ8Fp
          source_id: s_YBNevx5JfLzExcJy7oTyLG
          stance: supports
          locator: CBDB:342567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342567）
          source: &a1
            id: s_YBNevx5JfLzExcJy7oTyLG
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 342567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342567&o=json
            external_identifier: CBDB:342567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3XLNSsf4bhCB2L4JPHE59a
        subject_person_id: p_H5hUv6XCAEgbiVBnKoM66j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰，清人物。明清進士進士，籍贯濰縣，入仕進士，曾任編修、侍讀學士、同考官。（中国历代人物传记资料库 CBDB 342567）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L9yGSLs0qz5Cgqlj5IM1Rj
          claim_id: c_3XLNSsf4bhCB2L4JPHE59a
          source_id: s_YBNevx5JfLzExcJy7oTyLG
          stance: supports
          locator: CBDB:342567
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

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翰 | accepted |
| bio.summary | 王之翰，清人物。明清進士進士，籍贯濰縣，入仕進士，曾任編修、侍讀學士、同考官。（中国历代人物传记资料库 CBDB 342567） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之翰（CBDB 342567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342567&o=json)
