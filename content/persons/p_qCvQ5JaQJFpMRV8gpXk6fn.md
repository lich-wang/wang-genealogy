---
schema: wang-person/v1
id: p_qCvQ5JaQJFpMRV8gpXk6fn
status: active
merged_into: null
display_name: 王噐
cbdb_id: 414110
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xjTC78TT51b8fGYYX41Lhz
        subject_person_id: p_qCvQ5JaQJFpMRV8gpXk6fn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王噐，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 414110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_miQk2JCfPn14wyWV_Ll5yL
          claim_id: c_xjTC78TT51b8fGYYX41Lhz
          source_id: s_5BMhVWDWcY6uGVD8iQg4Sn
          stance: supports
          locator: CBDB:414110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5BMhVWDWcY6uGVD8iQg4Sn
            source_type: api_record
            title: 中国历代人物传记资料库：王噐（CBDB 414110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414110&o=json
            external_identifier: CBDB:414110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:28.654Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qNc6YTdeFfbCytgZu4zHLm
        subject_person_id: p_qCvQ5JaQJFpMRV8gpXk6fn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王噐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SYBAKHCYtH9aKdhPLZR5Pv
          claim_id: c_qNc6YTdeFfbCytgZu4zHLm
          source_id: s_5BMhVWDWcY6uGVD8iQg4Sn
          stance: supports
          locator: CBDB:414110
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5201-5300）｜历史性依据：CBDB 朝代 = 明
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

# 王噐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王噐，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 414110） | accepted |
| name.primary | 王噐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王噐（CBDB 414110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414110&o=json)
