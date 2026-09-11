---
schema: wang-person/v1
id: p_RznqNoKYNYcxhtUnus5Vov
status: active
merged_into: null
display_name: 王曉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hYE2LwBJUnXFF3Uw3aPU8W
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P1hjskFyVYTCybQ72KB9Vs
          claim_id: c_hYE2LwBJUnXFF3Uw3aPU8W
          source_id: s_tALXMMVctDVow2DGcPFKE8
          stance: supports
          locator: CBDB:205806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205806）
          source: &a1
            id: s_tALXMMVctDVow2DGcPFKE8
            source_type: api_record
            title: 中国历代人物传记资料库：王曉（CBDB 205806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205806&o=json
            external_identifier: CBDB:205806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7hEoMLD68k3tiBP9RZodod
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ADWjd786zSnsr1oETau4qW
          claim_id: c_7hEoMLD68k3tiBP9RZodod
          source_id: s_tALXMMVctDVow2DGcPFKE8
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
        id: c_wwFqEWzjZ9n92KzNNY9qLW
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
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
        - id: cs_76nj5sXoESr3gW2aJeFN1S
          claim_id: c_wwFqEWzjZ9n92KzNNY9qLW
          source_id: s_tALXMMVctDVow2DGcPFKE8
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
        id: c_ROaGXefZkS9O1kYT9zjdLM
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3qc8_OqSfoBkr7BbQHoBc
          claim_id: c_ROaGXefZkS9O1kYT9zjdLM
          source_id: s_YiHzg9Jkj4EwDSKii8VwE5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YiHzg9Jkj4EwDSKii8VwE5
            source_type: api_record
            title: 中国历代人物传记资料库：王崇義（CBDB 208868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208868&o=json
            external_identifier: CBDB:208868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_548o1SKAP1oKBMmyuHA5jA
        status: active
        display_name: 王崇義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rTQkJcCMLQ49JOqGGJbGFX
        subject_person_id: p_F39Q7SQgdoYApUKzJf32to
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Q1El9iRW_cMW5w7rK2NA8
          claim_id: c_rTQkJcCMLQ49JOqGGJbGFX
          source_id: s_w6aW3x2Wcm6h57vANHEu3S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_w6aW3x2Wcm6h57vANHEu3S
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 208866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208866&o=json
            external_identifier: CBDB:208866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F39Q7SQgdoYApUKzJf32to
        status: active
        display_name: 王振
        merged_into_person_id: null
    - claim:
        id: c_Km8yJ53Gtu3dCCt_gYHLaQ
        subject_person_id: p_XxsX8tJYzGn8mb6N1no1CW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yrddsFg3ScM1oyZ3qMRJGN
          claim_id: c_Km8yJ53Gtu3dCCt_gYHLaQ
          source_id: s_UWGm4JsTsioPrZS7AKNaUd
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UWGm4JsTsioPrZS7AKNaUd
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 208867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208867&o=json
            external_identifier: CBDB:208867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XxsX8tJYzGn8mb6N1no1CW
        status: active
        display_name: 王逵
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王曉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曉 | accepted |
| birth.date | 1540年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_548o1SKAP1oKBMmyuHA5jA | 王崇義 | accepted |
| ancestors | p_F39Q7SQgdoYApUKzJf32to | 王振 | accepted |
| ancestors | p_XxsX8tJYzGn8mb6N1no1CW | 王逵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇義（CBDB 208868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208868&o=json)
- [中国历代人物传记资料库：王逵（CBDB 208867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208867&o=json)
- [中国历代人物传记资料库：王曉（CBDB 205806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205806&o=json)
- [中国历代人物传记资料库：王振（CBDB 208866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208866&o=json)
