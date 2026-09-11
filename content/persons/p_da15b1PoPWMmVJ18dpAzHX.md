---
schema: wang-person/v1
id: p_da15b1PoPWMmVJ18dpAzHX
status: active
merged_into: null
display_name: 王師
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dGvDN7VXJBYQDLCNmLEUEs
        subject_person_id: p_da15b1PoPWMmVJ18dpAzHX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ASGoFhA92Ss9qHLJ2AR9WR
          claim_id: c_dGvDN7VXJBYQDLCNmLEUEs
          source_id: s_URDFFwVdCtFxrBTQn3MvfV
          stance: supports
          locator: CBDB:139452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139452）
          source: &a1
            id: s_URDFFwVdCtFxrBTQn3MvfV
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 139452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139452&o=json
            external_identifier: CBDB:139452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Zg4EwM6Tenb8LFXqsyhNMp
        subject_person_id: p_da15b1PoPWMmVJ18dpAzHX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 604年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YjpzJuCdHAHaNK6SaKJNZ8
          claim_id: c_Zg4EwM6Tenb8LFXqsyhNMp
          source_id: s_URDFFwVdCtFxrBTQn3MvfV
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
        id: c_6mJtm4Hx39ngGD5d8pJ1VF
        subject_person_id: p_da15b1PoPWMmVJ18dpAzHX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 665年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AV1vgrCd7K6tSJnM2fY9ug
          claim_id: c_6mJtm4Hx39ngGD5d8pJ1VF
          source_id: s_URDFFwVdCtFxrBTQn3MvfV
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
        id: c_gFhj3z9srCAP4gAk8JwKjb
        subject_person_id: p_da15b1PoPWMmVJ18dpAzHX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師（604年—665年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fFu7PzQBdMasTroofntY02
          claim_id: c_gFhj3z9srCAP4gAk8JwKjb
          source_id: s_URDFFwVdCtFxrBTQn3MvfV
          stance: supports
          locator: CBDB:139452
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
  spouses:
    - claim:
        id: c_3I1XB5jQ9-U4UPkmYMKyma
        subject_person_id: p_da15b1PoPWMmVJ18dpAzHX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HSfeJQiHBbvr8fNrKQ1qnv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ToJBVSnZjXrpDdsQNLSYO
          claim_id: c_3I1XB5jQ9-U4UPkmYMKyma
          source_id: s_ovOH-H06O0hLvjWM68HT4Y
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 43：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ovOH-H06O0hLvjWM68HT4Y
            source_type: api_record
            title: 中国历代人物传记资料库：任某(王師夫)（CBDB 148053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148053&o=json
            external_identifier: CBDB:148053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HSfeJQiHBbvr8fNrKQ1qnv
        status: active
        display_name: 任某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王師

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師 | accepted |
| birth.date | 604年 | accepted |
| death.date | 665年 | accepted |
| bio.summary | 王師（604年—665年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HSfeJQiHBbvr8fNrKQ1qnv | 任某 | accepted |

## 外部来源

- [中国历代人物传记资料库：任某(王師夫)（CBDB 148053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148053&o=json)
- [中国历代人物传记资料库：王師（CBDB 139452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139452&o=json)
