---
schema: wang-person/v1
id: p_a4JA1ubxKxyVUK2M9eyjLp
status: active
merged_into: null
display_name: 王遂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JaAHMwV9CdnyBAPAznk8Qx
        subject_person_id: p_a4JA1ubxKxyVUK2M9eyjLp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XYqugtvS9dBbLWTFKZmMxT
          claim_id: c_JaAHMwV9CdnyBAPAznk8Qx
          source_id: s_r7AB1vgPKhUARW1ahhcYQ2
          stance: supports
          locator: CBDB:146027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146027）
          source: &a1
            id: s_r7AB1vgPKhUARW1ahhcYQ2
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 146027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146027&o=json
            external_identifier: CBDB:146027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q3JvPy2oUP26kSLAHVnDTV
        subject_person_id: p_a4JA1ubxKxyVUK2M9eyjLp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 772年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rWUghCn5vuZ48Kh151BYkw
          claim_id: c_Q3JvPy2oUP26kSLAHVnDTV
          source_id: s_r7AB1vgPKhUARW1ahhcYQ2
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
        id: c_9zRR1BCg9VW1AxP7ysVJut
        subject_person_id: p_a4JA1ubxKxyVUK2M9eyjLp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 822年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M8EkxN92x5t67zNhJggQ2u
          claim_id: c_9zRR1BCg9VW1AxP7ysVJut
          source_id: s_r7AB1vgPKhUARW1ahhcYQ2
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
        id: c_KeBpfVNEiKyBBFndh7KWog
        subject_person_id: p_a4JA1ubxKxyVUK2M9eyjLp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oqYh5j9yfevbzJq1YLR82G
          claim_id: c_KeBpfVNEiKyBBFndh7KWog
          source_id: s_r7AB1vgPKhUARW1ahhcYQ2
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

# 王遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遂 | accepted |
| birth.date | 772年 | accepted |
| death.date | 822年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遂（CBDB 146027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146027&o=json)
