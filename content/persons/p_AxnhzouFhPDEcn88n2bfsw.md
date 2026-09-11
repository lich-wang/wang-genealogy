---
schema: wang-person/v1
id: p_AxnhzouFhPDEcn88n2bfsw
status: active
merged_into: null
display_name: 王宗沐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BVHG7gV96vEUqzYnT3aLz3
        subject_person_id: p_AxnhzouFhPDEcn88n2bfsw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗沐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6rkviL4p163KKgG7eHQh85
          claim_id: c_BVHG7gV96vEUqzYnT3aLz3
          source_id: s_xx25jpkVCjYPacK6dHWrz2
          stance: supports
          locator: CBDB:35065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35065）
          source: &a1
            id: s_xx25jpkVCjYPacK6dHWrz2
            source_type: api_record
            title: 中国历代人物传记资料库：王宗沐（CBDB 35065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35065&o=json
            external_identifier: CBDB:35065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5QUJVJttqnK7SZg27Tcig3
        subject_person_id: p_AxnhzouFhPDEcn88n2bfsw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1523年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xpw3Q3GfWP62yPvXnqBf4R
          claim_id: c_5QUJVJttqnK7SZg27Tcig3
          source_id: s_xx25jpkVCjYPacK6dHWrz2
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
        id: c_9CFonyEKX6kmTQ6JPjaFUC
        subject_person_id: p_AxnhzouFhPDEcn88n2bfsw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1591年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ck7YSxDproSV45yMMo7V5T
          claim_id: c_9CFonyEKX6kmTQ6JPjaFUC
          source_id: s_xx25jpkVCjYPacK6dHWrz2
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
        id: c_CJq67HiuZuuXHCCisayCmH
        subject_person_id: p_AxnhzouFhPDEcn88n2bfsw
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
        - id: cs_f5mMiL9GhRyv5QEhyRDaAy
          claim_id: c_CJq67HiuZuuXHCCisayCmH
          source_id: s_xx25jpkVCjYPacK6dHWrz2
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
  ancestors:
    - claim:
        id: c_ChJ1BhkNAAKSmtvzlDh8Fy
        subject_person_id: p_SwDsuB67vTqP193VDVu7Pk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AxnhzouFhPDEcn88n2bfsw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ag3k9ervYK8Cy6xaAEgh6
          claim_id: c_ChJ1BhkNAAKSmtvzlDh8Fy
          source_id: s_5BWU5G5x9tf7D5oDHRBoUy
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5BWU5G5x9tf7D5oDHRBoUy
            source_type: api_record
            title: 中国历代人物传记资料库：王逸卿（CBDB 305708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305708&o=json
            external_identifier: CBDB:305708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SwDsuB67vTqP193VDVu7Pk
        status: active
        display_name: 王逸卿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗沐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗沐 | accepted |
| birth.date | 1523年 | accepted |
| death.date | 1591年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_SwDsuB67vTqP193VDVu7Pk | 王逸卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逸卿（CBDB 305708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305708&o=json)
- [中国历代人物传记资料库：王宗沐（CBDB 35065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35065&o=json)
