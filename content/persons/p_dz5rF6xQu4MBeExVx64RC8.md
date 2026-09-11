---
schema: wang-person/v1
id: p_dz5rF6xQu4MBeExVx64RC8
status: active
merged_into: null
display_name: 王倚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PJ65YCkpeuj4K4UaEPCfGC
        subject_person_id: p_dz5rF6xQu4MBeExVx64RC8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_36SsMStpCbKQz9XnnSJPd1
          claim_id: c_PJ65YCkpeuj4K4UaEPCfGC
          source_id: s_a6pSNqB43qnqCAwEQxvXZ4
          stance: supports
          locator: CBDB:100750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100750）
          source: &a1
            id: s_a6pSNqB43qnqCAwEQxvXZ4
            source_type: api_record
            title: 中国历代人物传记资料库：王倚（CBDB 100750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100750&o=json
            external_identifier: CBDB:100750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YMMDaUEXkKceCxbppDzBxv
        subject_person_id: p_dz5rF6xQu4MBeExVx64RC8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1240年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kBBeS8iAxc9Pd8QKPkVdXt
          claim_id: c_YMMDaUEXkKceCxbppDzBxv
          source_id: s_a6pSNqB43qnqCAwEQxvXZ4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CNHutty4aP1kEMtEgTsknn
        subject_person_id: p_dz5rF6xQu4MBeExVx64RC8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1292年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WU8LAazjJCLT99RZwjXHq4
          claim_id: c_CNHutty4aP1kEMtEgTsknn
          source_id: s_a6pSNqB43qnqCAwEQxvXZ4
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
        id: c_2z4LgVbex2ocwdVra7daW1
        subject_person_id: p_dz5rF6xQu4MBeExVx64RC8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倚（1240年—1292年），元人物。籍贯宛平，身份为以疾廢，曾任工部尚書、管領隨路打捕鷹房民匠總管府總管、禮部尚書。（中国历代人物传记资料库 CBDB 100750）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_of_QEESTa7u551wqXjeepf
          claim_id: c_2z4LgVbex2ocwdVra7daW1
          source_id: s_a6pSNqB43qnqCAwEQxvXZ4
          stance: supports
          locator: CBDB:100750
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

# 王倚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倚 | accepted |
| birth.date | 1240年 | accepted |
| death.date | 1292年 | accepted |
| bio.summary | 王倚（1240年—1292年），元人物。籍贯宛平，身份为以疾廢，曾任工部尚書、管領隨路打捕鷹房民匠總管府總管、禮部尚書。（中国历代人物传记资料库 CBDB 100750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倚（CBDB 100750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100750&o=json)
