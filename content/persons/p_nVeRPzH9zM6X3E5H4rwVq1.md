---
schema: wang-person/v1
id: p_nVeRPzH9zM6X3E5H4rwVq1
status: active
merged_into: null
display_name: 李氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQ2wpZ_t6dNsCkfjC6eBci
        subject_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，王之猷妻。维基数据以独立条目 Q65820432 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RltyYNc0538-j02LAOdu4n
          claim_id: c_EQ2wpZ_t6dNsCkfjC6eBci
          source_id: s_FmCaExmBx5NXeFkAjLnQYm
          stance: supports
          locator: Q65820432
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_FmCaExmBx5NXeFkAjLnQYm
            source_type: api_record
            title: 维基数据：李氏（Q65820432）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65820432
            external_identifier: Q65820432
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:06.712Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rACTMDGgSZFUKT8t7CCa11
        subject_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8piL2ZMHArqTMixpaS43eZ
          claim_id: c_rACTMDGgSZFUKT8t7CCa11
          source_id: s_jYgfVpA5NdEbCanRKQ1W2x
          stance: supports
          locator: Q65820432
          quotation: null
          interpretation_note: null
          source:
            id: s_jYgfVpA5NdEbCanRKQ1W2x
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（217734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217734&o=json
            external_identifier: CBDB:217734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:06.884Z
            metadata_json: null
        - id: cs_EyF5idGHrF11BxETWjcTmu
          claim_id: c_rACTMDGgSZFUKT8t7CCa11
          source_id: s_FmCaExmBx5NXeFkAjLnQYm
          stance: supports
          locator: Q65820432
          quotation: null
          interpretation_note: null
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

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，王之猷妻。维基数据以独立条目 Q65820432 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：李氏（Q65820432）](https://www.wikidata.org/wiki/Q65820432)
- [CBDB 中国历代人物传记资料库：李氏（217734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217734&o=json)
