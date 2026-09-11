---
schema: wang-person/v1
id: p_jDKGhMGuo8CR9b7nS9ekhQ
status: active
merged_into: null
display_name: 王忙女
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jsyTXwedCscLsGQC3mXFQ
        subject_person_id: p_jDKGhMGuo8CR9b7nS9ekhQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忙女
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94D7fDbddFV61C3TjZny2f
          claim_id: c_2jsyTXwedCscLsGQC3mXFQ
          source_id: s_R2kp542v9wfsNeg7ETH8QS
          stance: supports
          locator: CBDB:683950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683950）
          source: &a1
            id: s_R2kp542v9wfsNeg7ETH8QS
            source_type: api_record
            title: 中国历代人物传记资料库：王忙女（CBDB 683950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683950&o=json
            external_identifier: CBDB:683950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gjZJEuKji5jMmu7uwvoMVG
        subject_person_id: p_jDKGhMGuo8CR9b7nS9ekhQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忙女，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683950）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aKOFpPKKlkC0SzQu9TUzc0
          claim_id: c_gjZJEuKji5jMmu7uwvoMVG
          source_id: s_R2kp542v9wfsNeg7ETH8QS
          stance: supports
          locator: CBDB:683950
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

# 王忙女

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忙女 | accepted |
| bio.summary | 王忙女，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忙女（CBDB 683950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683950&o=json)
