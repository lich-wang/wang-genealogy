---
schema: wang-person/v1
id: p_pFKwmgUo3A73nGGMKzBHBs
status: active
merged_into: null
display_name: 王拙
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DEYTLirkKyHtRc2BnVBzvE
        subject_person_id: p_pFKwmgUo3A73nGGMKzBHBs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拙，宋人物。中国历代人物传记资料库（CBDB）以人物编号 37664 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_kEk8MJps6ZP24wxjDTrNOd
          claim_id: c_DEYTLirkKyHtRc2BnVBzvE
          source_id: s_kd2xpmV7cbM7HTHL5LptBW
          stance: supports
          locator: CBDB:37664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_kd2xpmV7cbM7HTHL5LptBW
            source_type: api_record
            title: 中国历代人物传记资料库：王拙（CBDB 37664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37664&o=json
            external_identifier: CBDB:37664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZ1CBQPGHDY76eV1tZRChJ
        subject_person_id: p_pFKwmgUo3A73nGGMKzBHBs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DXb6J328qDQVcE329hJUYy
          claim_id: c_AZ1CBQPGHDY76eV1tZRChJ
          source_id: s_kd2xpmV7cbM7HTHL5LptBW
          stance: supports
          locator: CBDB:37664
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_kd2xpmV7cbM7HTHL5LptBW
            source_type: api_record
            title: 中国历代人物传记资料库：王拙（CBDB 37664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37664&o=json
            external_identifier: CBDB:37664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
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

# 王拙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王拙，宋人物。中国历代人物传记资料库（CBDB）以人物编号 37664 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王拙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拙（CBDB 37664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37664&o=json)
