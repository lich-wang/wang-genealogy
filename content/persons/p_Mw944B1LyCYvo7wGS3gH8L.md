---
schema: wang-person/v1
id: p_Mw944B1LyCYvo7wGS3gH8L
status: active
merged_into: null
display_name: 王祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tz1RxTfg6eLGcS772TDrL4
        subject_person_id: p_Mw944B1LyCYvo7wGS3gH8L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fEPw2vaaVVFuEK6q64ENPP
          claim_id: c_Tz1RxTfg6eLGcS772TDrL4
          source_id: s_gBLwLdYNHk32eqcWhBZCx9
          stance: supports
          locator: CBDB:256432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256432）
          source: &a1
            id: s_gBLwLdYNHk32eqcWhBZCx9
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 256432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256432&o=json
            external_identifier: CBDB:256432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ryCbxySrGYGxGE6Xa67urh
        subject_person_id: p_Mw944B1LyCYvo7wGS3gH8L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 256432）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FoB2wxBO6qO5jgFQn_LGDW
          claim_id: c_ryCbxySrGYGxGE6Xa67urh
          source_id: s_gBLwLdYNHk32eqcWhBZCx9
          stance: supports
          locator: CBDB:256432
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
  descendants:
    - claim:
        id: c_u9VoRiOcbAP6xnHZzgB2_7
        subject_person_id: p_Mw944B1LyCYvo7wGS3gH8L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKdTO_8L_OwfBRftL82RwU
          claim_id: c_u9VoRiOcbAP6xnHZzgB2_7
          source_id: s_gBLwLdYNHk32eqcWhBZCx9
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZjPesmadeqK3r3wUy19KCm
        status: active
        display_name: 王一言
        merged_into_person_id: null
  other: []
---

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | 王祚，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 256432） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ZjPesmadeqK3r3wUy19KCm | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 256432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256432&o=json)
