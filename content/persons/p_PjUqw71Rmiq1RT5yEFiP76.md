---
schema: wang-person/v1
id: p_PjUqw71Rmiq1RT5yEFiP76
status: active
merged_into: null
display_name: 韋氏
revision: 1
cbdb_id: 248392
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VfDVsdNZxlrjg497WaabLS
        subject_person_id: p_PjUqw71Rmiq1RT5yEFiP76
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韋氏，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 248392）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uNAr-gwGx9RmjZQe4sINzI
          claim_id: c_VfDVsdNZxlrjg497WaabLS
          source_id: s_zRpIqHGpCck3Td8B0Rt85R
          stance: supports
          locator: CBDB:248392
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zRpIqHGpCck3Td8B0Rt85R
            source_type: api_record
            title: 中国历代人物传记资料库：韋氏(王盛妻)（CBDB 248392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248392&o=json
            external_identifier: CBDB:248392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c__cm9USMxjra830of7yaEMj
        subject_person_id: p_PjUqw71Rmiq1RT5yEFiP76
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZFXDERPo-Hpfe5Qh-fDBdy
          claim_id: c__cm9USMxjra830of7yaEMj
          source_id: s_zRpIqHGpCck3Td8B0Rt85R
          stance: supports
          locator: CBDB:248392
          quotation: null
          interpretation_note: CBDB 明确记录的王盛配偶
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
        id: c_AqOUyyeHdqAVdGby0rLN9d
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PjUqw71Rmiq1RT5yEFiP76
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q3BCE14_desw3Aee4DhQpp
          claim_id: c_AqOUyyeHdqAVdGby0rLN9d
          source_id: s_zRpIqHGpCck3Td8B0Rt85R
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第六十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2XRBAyxJK1NzbNZAjugN5q
        status: active
        display_name: 王盛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 韋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 韋氏，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 248392） | accepted |
| name.primary | 韋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2XRBAyxJK1NzbNZAjugN5q | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：韋氏(王盛妻)（CBDB 248392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248392&o=json)
