---
schema: wang-person/v1
id: p_hJVJm4cd1JDjQQRj7yEiFj
status: active
merged_into: null
display_name: 王懋昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5y7e6Sg1rAeZrcQ6QWAseE
        subject_person_id: p_hJVJm4cd1JDjQQRj7yEiFj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vt1Fp9SFVDNh2zY29HPQa3
          claim_id: c_5y7e6Sg1rAeZrcQ6QWAseE
          source_id: s_pLVFzwD1kvcx1NiTPZfycQ
          stance: supports
          locator: CBDB:343137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343137）
          source: &a1
            id: s_pLVFzwD1kvcx1NiTPZfycQ
            source_type: api_record
            title: 中国历代人物传记资料库：王懋昭（CBDB 343137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343137&o=json
            external_identifier: CBDB:343137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jo2ruS9s9GaBMbz7PA1X34
        subject_person_id: p_hJVJm4cd1JDjQQRj7yEiFj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋昭，清人物。明清進士進士，籍贯南部，入仕進士。（中国历代人物传记资料库 CBDB 343137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hjr-yQSYYaLO2g2L8IkMUW
          claim_id: c_Jo2ruS9s9GaBMbz7PA1X34
          source_id: s_pLVFzwD1kvcx1NiTPZfycQ
          stance: supports
          locator: CBDB:343137
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

# 王懋昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋昭 | accepted |
| bio.summary | 王懋昭，清人物。明清進士進士，籍贯南部，入仕進士。（中国历代人物传记资料库 CBDB 343137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋昭（CBDB 343137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343137&o=json)
