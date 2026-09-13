---
schema: wang-person/v1
id: p_AKfdGmjKpTgYpwRysRKVJq
status: active
merged_into: null
display_name: 王子獻
cbdb_id: 1910
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WmtsMMVpf5ZTBK9mzBjLSR
        subject_person_id: p_AKfdGmjKpTgYpwRysRKVJq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子獻，宋人物。曾任轉運副使、集英殿修撰。（中国历代人物传记资料库 CBDB 1910）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_r9-FhiwWf3nyukbwYwFEBE
          claim_id: c_WmtsMMVpf5ZTBK9mzBjLSR
          source_id: s_11VBc687cCxRbhbiJyuq2P
          stance: supports
          locator: CBDB:1910
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_11VBc687cCxRbhbiJyuq2P
            source_type: api_record
            title: 中国历代人物传记资料库：王子獻（CBDB 1910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1910&o=json
            external_identifier: CBDB:1910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QAFZ2z3wK6DsNKBK85Qvk7
        subject_person_id: p_AKfdGmjKpTgYpwRysRKVJq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VzDtW6rEDZ3JWeE17a8KLm
          claim_id: c_QAFZ2z3wK6DsNKBK85Qvk7
          source_id: s_11VBc687cCxRbhbiJyuq2P
          stance: supports
          locator: CBDB:1910
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
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

# 王子獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子獻，宋人物。曾任轉運副使、集英殿修撰。（中国历代人物传记资料库 CBDB 1910） | accepted |
| name.primary | 王子獻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子獻（CBDB 1910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1910&o=json)
