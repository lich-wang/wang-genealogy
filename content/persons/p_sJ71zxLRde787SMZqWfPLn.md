---
schema: wang-person/v1
id: p_sJ71zxLRde787SMZqWfPLn
status: active
merged_into: null
display_name: 王起雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fsCC2WZW4XKh3Uo7A9CnWn
        subject_person_id: p_sJ71zxLRde787SMZqWfPLn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EY448aWJc58ovmZy5f7vPb
          claim_id: c_fsCC2WZW4XKh3Uo7A9CnWn
          source_id: s_4ZkEJq6WrVYCAyWPJgdtzu
          stance: supports
          locator: CBDB:69344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69344）
          source: &a1
            id: s_4ZkEJq6WrVYCAyWPJgdtzu
            source_type: api_record
            title: 中国历代人物传记资料库：王起雲（CBDB 69344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69344&o=json
            external_identifier: CBDB:69344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GwKGr7dWHN8AGQQypkKoef
        subject_person_id: p_sJ71zxLRde787SMZqWfPLn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1714年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHAF6ojX1iuJNvmK6T4UHB
          claim_id: c_GwKGr7dWHN8AGQQypkKoef
          source_id: s_4ZkEJq6WrVYCAyWPJgdtzu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wAKFvrx1qgt9eZsHR8LqBd
        subject_person_id: p_sJ71zxLRde787SMZqWfPLn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起雲（卒于1714年），清人物。籍贯平凉府，曾任鎮標右營遊擊。（中国历代人物传记资料库 CBDB 69344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-26mWZ-JIiTuZ8yuFA2Pjv
          claim_id: c_wAKFvrx1qgt9eZsHR8LqBd
          source_id: s_4ZkEJq6WrVYCAyWPJgdtzu
          stance: supports
          locator: CBDB:69344
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

# 王起雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起雲 | accepted |
| death.date | 1714年 | accepted |
| bio.summary | 王起雲（卒于1714年），清人物。籍贯平凉府，曾任鎮標右營遊擊。（中国历代人物传记资料库 CBDB 69344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起雲（CBDB 69344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69344&o=json)
