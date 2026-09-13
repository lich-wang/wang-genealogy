---
schema: wang-person/v1
id: p_yPyc2FN6AfiWxn62TdDoMK
status: active
merged_into: null
display_name: 王楚士
cbdb_id: 343202
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CAfzvs8QgCACYsPjNLD82X
        subject_person_id: p_yPyc2FN6AfiWxn62TdDoMK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚士，清人物。明清進士進士，籍贯黃平州，入仕進士。（中国历代人物传记资料库 CBDB 343202）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7muKFwLiQjLRigktiUvTHu
          claim_id: c_CAfzvs8QgCACYsPjNLD82X
          source_id: s_LDT3yi9rVTy8V8sGwCwGFF
          stance: supports
          locator: CBDB:343202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LDT3yi9rVTy8V8sGwCwGFF
            source_type: api_record
            title: 中国历代人物传记资料库：王楚士（CBDB 343202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343202&o=json
            external_identifier: CBDB:343202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:15.941Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yVSREtAf5L1fnU7oDu9mHH
        subject_person_id: p_yPyc2FN6AfiWxn62TdDoMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sXa7KbYLhwYo1khkShL79E
          claim_id: c_yVSREtAf5L1fnU7oDu9mHH
          source_id: s_LDT3yi9rVTy8V8sGwCwGFF
          stance: supports
          locator: CBDB:343202
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4501-4600）｜历史性依据：CBDB 朝代 = 清
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

# 王楚士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王楚士，清人物。明清進士進士，籍贯黃平州，入仕進士。（中国历代人物传记资料库 CBDB 343202） | accepted |
| name.primary | 王楚士 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楚士（CBDB 343202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343202&o=json)
