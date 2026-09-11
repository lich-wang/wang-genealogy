---
schema: wang-person/v1
id: p_VZzU11Mm4KNiqoUhcf1Hy5
status: active
merged_into: null
display_name: 王萬章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s1xvMKSCQ2kCp4t2nG9cEY
        subject_person_id: p_VZzU11Mm4KNiqoUhcf1Hy5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_96RpxEc4PwL8NDfMV2qoHc
          claim_id: c_s1xvMKSCQ2kCp4t2nG9cEY
          source_id: s_nxMAz2rtUQ4fh3nf7dUpzh
          stance: supports
          locator: CBDB:473965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473965）
          source: &a1
            id: s_nxMAz2rtUQ4fh3nf7dUpzh
            source_type: api_record
            title: 中国历代人物传记资料库：王萬章（CBDB 473965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473965&o=json
            external_identifier: CBDB:473965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3o4ieCzfNM6jk3k84SvqTP
        subject_person_id: p_VZzU11Mm4KNiqoUhcf1Hy5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬章，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 473965）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B7QcyRymNr091HfUp2M8Bd
          claim_id: c_3o4ieCzfNM6jk3k84SvqTP
          source_id: s_nxMAz2rtUQ4fh3nf7dUpzh
          stance: supports
          locator: CBDB:473965
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

# 王萬章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬章 | accepted |
| bio.summary | 王萬章，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 473965） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬章（CBDB 473965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473965&o=json)
