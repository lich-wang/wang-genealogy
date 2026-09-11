---
schema: wang-person/v1
id: p_UXAHPSwvUShfssjz4sgNgP
status: active
merged_into: null
display_name: 王庭瑋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wF3A8LWcd76yiHNBHT7kjC
        subject_person_id: p_UXAHPSwvUShfssjz4sgNgP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭瑋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rDnFMP8zMMFu15MjhWKC5h
          claim_id: c_wF3A8LWcd76yiHNBHT7kjC
          source_id: s_NpBd2PqR2ptXthAqP2USNt
          stance: supports
          locator: CBDB:12168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12168）
          source: &a1
            id: s_NpBd2PqR2ptXthAqP2USNt
            source_type: api_record
            title: 中国历代人物传记资料库：王庭瑋（CBDB 12168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12168&o=json
            external_identifier: CBDB:12168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4fcw5waa2tnk2EK6zo3szT
        subject_person_id: p_UXAHPSwvUShfssjz4sgNgP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1091年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Trzk8EWNFNcLTP5PW2g3tW
          claim_id: c_4fcw5waa2tnk2EK6zo3szT
          source_id: s_NpBd2PqR2ptXthAqP2USNt
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
        id: c_J8dEg3FZnpjHAHBhR3eJn4
        subject_person_id: p_UXAHPSwvUShfssjz4sgNgP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1141年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CZE1s1JZ18bfLMQhjK2HRf
          claim_id: c_J8dEg3FZnpjHAHBhR3eJn4
          source_id: s_NpBd2PqR2ptXthAqP2USNt
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
        id: c_YhTv7o6yWrQFdbC6qXnLWW
        subject_person_id: p_UXAHPSwvUShfssjz4sgNgP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭瑋（1091年—1141年），宋人物。籍贯安福，身份为士人。（中国历代人物传记资料库 CBDB 12168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PuvnvPFqQjMJuaZLoq4f5z
          claim_id: c_YhTv7o6yWrQFdbC6qXnLWW
          source_id: s_NpBd2PqR2ptXthAqP2USNt
          stance: supports
          locator: CBDB:12168
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

# 王庭瑋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭瑋 | accepted |
| birth.date | 1091年 | accepted |
| death.date | 1141年 | accepted |
| bio.summary | 王庭瑋（1091年—1141年），宋人物。籍贯安福，身份为士人。（中国历代人物传记资料库 CBDB 12168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭瑋（CBDB 12168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12168&o=json)
