---
schema: wang-person/v1
id: p_fdS8mTs7Hi2mx7F6FG5Qma
status: active
merged_into: null
display_name: 王鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cXT56CDHEiSUdd6Mb9ffP2
        subject_person_id: p_fdS8mTs7Hi2mx7F6FG5Qma
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k6BYi4EMUQkVjR53etmehc
          claim_id: c_cXT56CDHEiSUdd6Mb9ffP2
          source_id: s_wdiu38EtKm4q9Ft5vu6wpB
          stance: supports
          locator: CBDB:493311
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493311）
          source: &a1
            id: s_wdiu38EtKm4q9Ft5vu6wpB
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 493311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493311&o=json
            external_identifier: CBDB:493311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uThPF9QGrLXVA8TXnMqcDb
        subject_person_id: p_fdS8mTs7Hi2mx7F6FG5Qma
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鑾，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任教諭。（中国历代人物传记资料库 CBDB 493311）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AqKJlHXJ5586pAMBaVzION
          claim_id: c_uThPF9QGrLXVA8TXnMqcDb
          source_id: s_wdiu38EtKm4q9Ft5vu6wpB
          stance: supports
          locator: CBDB:493311
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

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| bio.summary | 王鑾，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任教諭。（中国历代人物传记资料库 CBDB 493311） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 493311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493311&o=json)
