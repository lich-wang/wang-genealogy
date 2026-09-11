---
schema: wang-person/v1
id: p_TrBNVDkCMthFCN2v3HWAK3
status: active
merged_into: null
display_name: 王僎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92vMbBKiNBmqsfo67m5MQF
        subject_person_id: p_TrBNVDkCMthFCN2v3HWAK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WGJ9Y5VKyPDL1xUuxbogxB
          claim_id: c_92vMbBKiNBmqsfo67m5MQF
          source_id: s_tP5q3duLcBkEHZU3Rk69yo
          stance: supports
          locator: CBDB:213749
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213749）
          source: &a1
            id: s_tP5q3duLcBkEHZU3Rk69yo
            source_type: api_record
            title: 中国历代人物传记资料库：王僎（CBDB 213749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213749&o=json
            external_identifier: CBDB:213749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iexDMMyrEgSfiD8CBDSfUU
        subject_person_id: p_TrBNVDkCMthFCN2v3HWAK3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僎，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213749）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MuvRt7Qgp5plLluOLV6p0d
          claim_id: c_iexDMMyrEgSfiD8CBDSfUU
          source_id: s_tP5q3duLcBkEHZU3Rk69yo
          stance: supports
          locator: CBDB:213749
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

# 王僎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僎 | accepted |
| bio.summary | 王僎，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213749） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僎（CBDB 213749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213749&o=json)
