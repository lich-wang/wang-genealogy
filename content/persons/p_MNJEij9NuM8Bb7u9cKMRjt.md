---
schema: wang-person/v1
id: p_MNJEij9NuM8Bb7u9cKMRjt
status: active
merged_into: null
display_name: 王壽椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mwT8U6uSR5F9s6sviuFvH2
        subject_person_id: p_MNJEij9NuM8Bb7u9cKMRjt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KSGrLZPGRWPsf8Mhz4DPPE
          claim_id: c_mwT8U6uSR5F9s6sviuFvH2
          source_id: s_PsodfyDkdCLBntCybH86C7
          stance: supports
          locator: CBDB:636844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636844）
          source: &a1
            id: s_PsodfyDkdCLBntCybH86C7
            source_type: api_record
            title: 中国历代人物传记资料库：王壽椿（CBDB 636844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636844&o=json
            external_identifier: CBDB:636844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AXTryZvG2ovetRvUdMr5JT
        subject_person_id: p_MNJEij9NuM8Bb7u9cKMRjt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽椿，清人物。籍贯開封府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636844）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QL5b4_noRRuD57BEbSARKV
          claim_id: c_AXTryZvG2ovetRvUdMr5JT
          source_id: s_PsodfyDkdCLBntCybH86C7
          stance: supports
          locator: CBDB:636844
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

# 王壽椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽椿 | accepted |
| bio.summary | 王壽椿，清人物。籍贯開封府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636844） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽椿（CBDB 636844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636844&o=json)
