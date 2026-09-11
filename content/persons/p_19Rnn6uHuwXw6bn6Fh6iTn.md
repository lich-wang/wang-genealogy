---
schema: wang-person/v1
id: p_19Rnn6uHuwXw6bn6Fh6iTn
status: active
merged_into: null
display_name: 王執蒲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FC5ykZAewkmgZ6ezAC1LJE
        subject_person_id: p_19Rnn6uHuwXw6bn6Fh6iTn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執蒲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sAeY2uMpzFYbuFu3nGL5bs
          claim_id: c_FC5ykZAewkmgZ6ezAC1LJE
          source_id: s_j2j6xv2eMH5Fue5S8bGAzC
          stance: supports
          locator: CBDB:636710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636710）
          source: &a1
            id: s_j2j6xv2eMH5Fue5S8bGAzC
            source_type: api_record
            title: 中国历代人物传记资料库：王執蒲（CBDB 636710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636710&o=json
            external_identifier: CBDB:636710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8MBo1KhRMb47a7U2mvoa2D
        subject_person_id: p_19Rnn6uHuwXw6bn6Fh6iTn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執蒲，清人物。籍贯平定直隸州直轄地方，入仕鄉貢舉人，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 636710）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t72juqk7pqCijvBR3v5VVv
          claim_id: c_8MBo1KhRMb47a7U2mvoa2D
          source_id: s_j2j6xv2eMH5Fue5S8bGAzC
          stance: supports
          locator: CBDB:636710
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

# 王執蒲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王執蒲 | accepted |
| bio.summary | 王執蒲，清人物。籍贯平定直隸州直轄地方，入仕鄉貢舉人，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 636710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王執蒲（CBDB 636710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636710&o=json)
