---
schema: wang-person/v1
id: p_vF71zw6QtRwNeJCCHhLGQ3
status: active
merged_into: null
display_name: 王惟善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mHoaH41Y6GQKxx2V4Ht6gi
        subject_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ueMKhe9nW1yFJq3Ng9bZhH
          claim_id: c_mHoaH41Y6GQKxx2V4Ht6gi
          source_id: s_FTY82EgHLMnu2svfRLKoFQ
          stance: supports
          locator: CBDB:203836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203836）
          source: &a1
            id: s_FTY82EgHLMnu2svfRLKoFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 203836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203836&o=json
            external_identifier: CBDB:203836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HpPFFq4HTq5e1dDhcZ8HyP
        subject_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmoh2WMbL71PiijYALvrFh
          claim_id: c_HpPFFq4HTq5e1dDhcZ8HyP
          source_id: s_FTY82EgHLMnu2svfRLKoFQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N9b66ip5Ji4GZ1rQeieSG5
        subject_person_id: p_vF71zw6QtRwNeJCCHhLGQ3
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
        - id: cs_3TW49X8153bSLSDqATr719
          claim_id: c_N9b66ip5Ji4GZ1rQeieSG5
          source_id: s_FTY82EgHLMnu2svfRLKoFQ
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

# 王惟善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟善 | accepted |
| birth.date | 1518年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟善（CBDB 203836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203836&o=json)
