---
schema: wang-person/v1
id: p_b9Weew9xoweL4JikZrNaSu
status: active
merged_into: null
display_name: 王元隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EHGmv3DRPo74JPut5hRJQ2
        subject_person_id: p_b9Weew9xoweL4JikZrNaSu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LR8x6c5wuJmtrUM4RmhBDM
          claim_id: c_EHGmv3DRPo74JPut5hRJQ2
          source_id: s_CMbyAo7TtDyB91v1JPZr4S
          stance: supports
          locator: CBDB:692047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692047）
          source: &a1
            id: s_CMbyAo7TtDyB91v1JPZr4S
            source_type: api_record
            title: 中国历代人物传记资料库：王元隆（CBDB 692047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692047&o=json
            external_identifier: CBDB:692047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RZuNKPTLsWeSJetnZNhEvL
        subject_person_id: p_b9Weew9xoweL4JikZrNaSu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fYHb257TW23nfeMn1GWD3U
          claim_id: c_RZuNKPTLsWeSJetnZNhEvL
          source_id: s_CMbyAo7TtDyB91v1JPZr4S
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王元隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元隆 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元隆（CBDB 692047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692047&o=json)
