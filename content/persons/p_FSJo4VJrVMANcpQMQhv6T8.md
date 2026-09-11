---
schema: wang-person/v1
id: p_FSJo4VJrVMANcpQMQhv6T8
status: active
merged_into: null
display_name: 王一陽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DrDd5ka2AgH7D1v2RgNoiy
        subject_person_id: p_FSJo4VJrVMANcpQMQhv6T8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WqLECRz9PJ75RLcdYDrKWF
          claim_id: c_DrDd5ka2AgH7D1v2RgNoiy
          source_id: s_fvAYsp36F78Pyp2wVZmZiu
          stance: supports
          locator: CBDB:221867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221867）
          source: &a1
            id: s_fvAYsp36F78Pyp2wVZmZiu
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 221867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json
            external_identifier: CBDB:221867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hdkXkDJA42drSMpkCNPyFZ
        subject_person_id: p_FSJo4VJrVMANcpQMQhv6T8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221867）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ENYbf385dd3_0t1hjYOA8v
          claim_id: c_hdkXkDJA42drSMpkCNPyFZ
          source_id: s_fvAYsp36F78Pyp2wVZmZiu
          stance: supports
          locator: CBDB:221867
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

# 王一陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一陽 | accepted |
| bio.summary | 王一陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一陽（CBDB 221867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json)
