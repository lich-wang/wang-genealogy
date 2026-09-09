---
schema: wang-person/v1
id: p_dQG1avxHo1dBzaJMS5rm9C
status: active
merged_into: null
display_name: 王薦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t55oBKFMQqVr3rRTC894sG
        subject_person_id: p_dQG1avxHo1dBzaJMS5rm9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王薦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ja5jcLHTnnER5ZZa3CfEN6
          claim_id: c_t55oBKFMQqVr3rRTC894sG
          source_id: s_PD6kwAvhyV6RqQzzbrvn2L
          stance: supports
          locator: CBDB:38256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38256）
          source: &a1
            id: s_PD6kwAvhyV6RqQzzbrvn2L
            source_type: api_record
            title: 中国历代人物传记资料库：王薦（CBDB 38256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38256&o=json
            external_identifier: CBDB:38256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BSPK8Dxb64bHwq9QxrZuZB
        subject_person_id: p_dQG1avxHo1dBzaJMS5rm9C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1128年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DSyGE4LfK4fCvjP7TL7i4Z
          claim_id: c_BSPK8Dxb64bHwq9QxrZuZB
          source_id: s_PD6kwAvhyV6RqQzzbrvn2L
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
        id: c_fa235zEdem5a1ckiGxPrBB
        subject_person_id: p_dQG1avxHo1dBzaJMS5rm9C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DCciM5Cyi2fpSMbmccY8Lz
          claim_id: c_fa235zEdem5a1ckiGxPrBB
          source_id: s_PD6kwAvhyV6RqQzzbrvn2L
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

# 王薦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王薦 | accepted |
| death.date | 1128年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王薦（CBDB 38256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38256&o=json)
