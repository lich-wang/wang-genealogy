---
schema: wang-person/v1
id: p_TNME6d7BpGkh6sn9pY2ok2
status: active
merged_into: null
display_name: 王德真
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MjqnMtwQiPRWHF24UbHG39
        subject_person_id: p_TNME6d7BpGkh6sn9pY2ok2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ghwahtW9h6GAYAGAyG1Jd
          claim_id: c_MjqnMtwQiPRWHF24UbHG39
          source_id: s_zDBtf97PohF3h8KoMYV2Vo
          stance: supports
          locator: CBDB:101423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101423）
          source: &a1
            id: s_zDBtf97PohF3h8KoMYV2Vo
            source_type: api_record
            title: 中国历代人物传记资料库：王德真（CBDB 101423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101423&o=json
            external_identifier: CBDB:101423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Pq1jvnyJTXBAsikoN48Vtq
        subject_person_id: p_TNME6d7BpGkh6sn9pY2ok2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1202年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_citCJTFJk5M6VbdH1UY6BN
          claim_id: c_Pq1jvnyJTXBAsikoN48Vtq
          source_id: s_zDBtf97PohF3h8KoMYV2Vo
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
        id: c_4hRJEm3wQ6RsCeNcjaCKN9
        subject_person_id: p_TNME6d7BpGkh6sn9pY2ok2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1272年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7N49HCb1FBHPNXC4NLLAWR
          claim_id: c_4hRJEm3wQ6RsCeNcjaCKN9
          source_id: s_zDBtf97PohF3h8KoMYV2Vo
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
        id: c_QgBzmgwhUt2kVSFcS28LNq
        subject_person_id: p_TNME6d7BpGkh6sn9pY2ok2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xujpdhKe2Ki4XzsQ9nZnag
          claim_id: c_QgBzmgwhUt2kVSFcS28LNq
          source_id: s_zDBtf97PohF3h8KoMYV2Vo
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

# 王德真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德真 | accepted |
| birth.date | 1202年 | accepted |
| death.date | 1272年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德真（CBDB 101423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101423&o=json)
