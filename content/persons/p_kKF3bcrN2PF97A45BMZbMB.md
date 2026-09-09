---
schema: wang-person/v1
id: p_kKF3bcrN2PF97A45BMZbMB
status: active
merged_into: null
display_name: 王頊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N9WgBSbx8XS7Pcebc1jBR9
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rn4m2yyUzuM7SJmyP1Z27f
          claim_id: c_N9WgBSbx8XS7Pcebc1jBR9
          source_id: s_6GxqCoN7QkiTBKpKA5PCzN
          stance: supports
          locator: CBDB:192264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192264）
          source: &a1
            id: s_6GxqCoN7QkiTBKpKA5PCzN
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 192264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192264&o=json
            external_identifier: CBDB:192264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2Nd3F6xa4R8WG5dKvWhuzH
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ezS15XJAUCWstReyTUTQv
          claim_id: c_2Nd3F6xa4R8WG5dKvWhuzH
          source_id: s_6GxqCoN7QkiTBKpKA5PCzN
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
        id: c_uBMN67fxXtVEgohQKNEbr6
        subject_person_id: p_kKF3bcrN2PF97A45BMZbMB
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
        - id: cs_vJqPSHjSeQy2yv5RB9UkVe
          claim_id: c_uBMN67fxXtVEgohQKNEbr6
          source_id: s_6GxqCoN7QkiTBKpKA5PCzN
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

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| death.date | 858年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頊（CBDB 192264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192264&o=json)
