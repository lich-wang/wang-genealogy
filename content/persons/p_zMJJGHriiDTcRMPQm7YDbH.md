---
schema: wang-person/v1
id: p_zMJJGHriiDTcRMPQm7YDbH
status: active
merged_into: null
display_name: 王丕績
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RX8uJQsr2Q1Nn4RqFLEHBi
        subject_person_id: p_zMJJGHriiDTcRMPQm7YDbH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HvEZRabfQre3PwFns6q7J8
          claim_id: c_RX8uJQsr2Q1Nn4RqFLEHBi
          source_id: s_sMRwB3RcvnftWpMArP52dX
          stance: supports
          locator: CBDB:635661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635661）
          source: &a1
            id: s_sMRwB3RcvnftWpMArP52dX
            source_type: api_record
            title: 中国历代人物传记资料库：王丕績（CBDB 635661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635661&o=json
            external_identifier: CBDB:635661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LP4RWfgtUMgUboVdwC4SZf
        subject_person_id: p_zMJJGHriiDTcRMPQm7YDbH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕績，清人物。籍贯代州直隸州直轄地方，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635661）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QuHZIFh6ZlpuiWntmxe1rM
          claim_id: c_LP4RWfgtUMgUboVdwC4SZf
          source_id: s_sMRwB3RcvnftWpMArP52dX
          stance: supports
          locator: CBDB:635661
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

# 王丕績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕績 | accepted |
| bio.summary | 王丕績，清人物。籍贯代州直隸州直轄地方，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635661） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕績（CBDB 635661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635661&o=json)
