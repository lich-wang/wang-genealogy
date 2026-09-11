---
schema: wang-person/v1
id: p_miDMkzcjzLfU6Qc668D7Rj
status: active
merged_into: null
display_name: 王之鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_koBGSGevHiQ1CMF7zNHuxt
        subject_person_id: p_miDMkzcjzLfU6Qc668D7Rj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eMZdPmouZK8gKaizMGUmBH
          claim_id: c_koBGSGevHiQ1CMF7zNHuxt
          source_id: s_XeBVF3vambo3mDL79Bm9fE
          stance: supports
          locator: CBDB:531792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531792）
          source: &a1
            id: s_XeBVF3vambo3mDL79Bm9fE
            source_type: api_record
            title: 中国历代人物传记资料库：王之鐸（CBDB 531792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531792&o=json
            external_identifier: CBDB:531792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_waKWZT2foP5LyPwBn52BeC
        subject_person_id: p_miDMkzcjzLfU6Qc668D7Rj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鐸，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 531792）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oLU5YVvLTY99c_Jb6WH5oW
          claim_id: c_waKWZT2foP5LyPwBn52BeC
          source_id: s_XeBVF3vambo3mDL79Bm9fE
          stance: supports
          locator: CBDB:531792
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

# 王之鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鐸 | accepted |
| bio.summary | 王之鐸，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 531792） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之鐸（CBDB 531792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531792&o=json)
