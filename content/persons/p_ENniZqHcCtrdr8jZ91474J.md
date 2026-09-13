---
schema: wang-person/v1
id: p_ENniZqHcCtrdr8jZ91474J
status: active
merged_into: null
display_name: 王祚明
cbdb_id: 455900
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xPiexLQ186RHGRZYhMunv7
        subject_person_id: p_ENniZqHcCtrdr8jZ91474J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚明，史料所见人物。本项目依据《中国历代人物传记资料库：王祚明（CBDB 455900）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_UpFrDVtemeN_SMGIPzxfKa
          claim_id: c_xPiexLQ186RHGRZYhMunv7
          source_id: s_nzBKveWdFA7iJ2CJ4Qm5Ak
          stance: supports
          locator: CBDB:455900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nzBKveWdFA7iJ2CJ4Qm5Ak
            source_type: api_record
            title: 中国历代人物传记资料库：王祚明（CBDB 455900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455900&o=json
            external_identifier: CBDB:455900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZHvHB7hp4fvC5mgqJVY35n
        subject_person_id: p_ENniZqHcCtrdr8jZ91474J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EhhUV9JLpsf4ZQExRjTYvW
          claim_id: c_ZHvHB7hp4fvC5mgqJVY35n
          source_id: s_nzBKveWdFA7iJ2CJ4Qm5Ak
          stance: supports
          locator: CBDB:455900
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 清
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

# 王祚明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祚明，史料所见人物。本项目依据《中国历代人物传记资料库：王祚明（CBDB 455900）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王祚明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚明（CBDB 455900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455900&o=json)
