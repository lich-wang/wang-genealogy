---
schema: wang-person/v1
id: p_ynNczWHnkXrQUYAhMaYFcU
status: active
merged_into: null
display_name: 王九思
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hr2tfd4yJ4qDb5cy8XtbxZ
        subject_person_id: p_ynNczWHnkXrQUYAhMaYFcU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HCa8vPLLPLw4MPPh56F1hy
          claim_id: c_Hr2tfd4yJ4qDb5cy8XtbxZ
          source_id: s_128NrR3YR53RvDJQajmiHP
          stance: supports
          locator: CBDB:175970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175970）
          source: &a1
            id: s_128NrR3YR53RvDJQajmiHP
            source_type: api_record
            title: 中国历代人物传记资料库：王九思（CBDB 175970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175970&o=json
            external_identifier: CBDB:175970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_t27au7j9idd7KUWXDTF85W
        subject_person_id: p_ynNczWHnkXrQUYAhMaYFcU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 690年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T6tSJrkxYGuMG1z7zTmyaE
          claim_id: c_t27au7j9idd7KUWXDTF85W
          source_id: s_128NrR3YR53RvDJQajmiHP
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
        id: c_BTC3VmjXKKLNMRbe72mKwK
        subject_person_id: p_ynNczWHnkXrQUYAhMaYFcU
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
        - id: cs_7crG1fy8xwwfuEsE5DonB3
          claim_id: c_BTC3VmjXKKLNMRbe72mKwK
          source_id: s_128NrR3YR53RvDJQajmiHP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w88YGJLDzBu1zP4HFFDBT6
        subject_person_id: p_4LvcHuUhu13Ctna78F2LzQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ynNczWHnkXrQUYAhMaYFcU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHQUWPL6K3oqX3m_ZRGw6I
          claim_id: c_w88YGJLDzBu1zP4HFFDBT6
          source_id: s_yLb2niZn8UZbmBgsy8yD1g
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yLb2niZn8UZbmBgsy8yD1g
            source_type: api_record
            title: 中国历代人物传记资料库：王德真（CBDB 32339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32339&o=json
            external_identifier: CBDB:32339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4LvcHuUhu13Ctna78F2LzQ
        status: active
        display_name: 王德真
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王九思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九思 | accepted |
| death.date | 690年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4LvcHuUhu13Ctna78F2LzQ | 王德真 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德真（CBDB 32339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32339&o=json)
- [中国历代人物传记资料库：王九思（CBDB 175970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175970&o=json)
