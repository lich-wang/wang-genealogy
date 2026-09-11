---
schema: wang-person/v1
id: p_J55afBgCkqtPSYRig4M9VL
status: active
merged_into: null
display_name: 王約
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VvTmvbvoCH4RH2i4AW3TJi
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cprmnoeHQj8Faj6oWVcT8V
          claim_id: c_VvTmvbvoCH4RH2i4AW3TJi
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: CBDB:206312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206312）
          source: &a1
            id: s_Q9EatNnQ4FxJEyR2y492WM
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 206312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json
            external_identifier: CBDB:206312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xug9yAj7TUc7qirhEZfqMv
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1545年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3gPCZRUJRtKfQJ8RxMDC47
          claim_id: c_xug9yAj7TUc7qirhEZfqMv
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
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
        id: c_7gt9LKmG4AA3i7tezADBwN
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約（生于1545年），明人物。明清進士進士，籍贯惠安，入仕進士。（中国历代人物传记资料库 CBDB 206312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mz-gpXFAyn19OgkTn-b4w3
          claim_id: c_7gt9LKmG4AA3i7tezADBwN
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: CBDB:206312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xlbgvxg4M5ARYKg0ZwQ8Mo
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OH5PO2KGnFzB2fcNA3JVbK
          claim_id: c_Xlbgvxg4M5ARYKg0ZwQ8Mo
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oJyHrTtA8vuQzWweqp45TE
        status: active
        display_name: 王以佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YK9wlY54UAo2yaF_vAiw4R
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5S7FA1n8vFnm7L7uVG5FbH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P6lWUmYqudL_EFsw9BN26B
          claim_id: c_YK9wlY54UAo2yaF_vAiw4R
          source_id: s_H9clHjMsD2m_ncl7yPfrmb
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H9clHjMsD2m_ncl7yPfrmb
            source_type: api_record
            title: 中国历代人物传记资料库：連氏(王約妻)（CBDB 216209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216209&o=json
            external_identifier: CBDB:216209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5S7FA1n8vFnm7L7uVG5FbH
        status: active
        display_name: 連氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_cyqj_uqttJYS0giLaS6cQ9
        subject_person_id: p_yMtffJLVDqf78rSVxJ1yF2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Npujc0JQhWVcVL2EEWUdR
          claim_id: c_cyqj_uqttJYS0giLaS6cQ9
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yMtffJLVDqf78rSVxJ1yF2
        status: active
        display_name: 王璉
        merged_into_person_id: null
    - claim:
        id: c_g1HfTeReKUjXOtfKPK9ZRi
        subject_person_id: p_byePaPbZp6jPRJqt19xyjN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PqjeWP7NXBGIUWhUjBgAJ8
          claim_id: c_g1HfTeReKUjXOtfKPK9ZRi
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_byePaPbZp6jPRJqt19xyjN
        status: active
        display_name: 王奇橙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| birth.date | 1545年 | accepted |
| bio.summary | 王約（生于1545年），明人物。明清進士進士，籍贯惠安，入仕進士。（中国历代人物传记资料库 CBDB 206312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oJyHrTtA8vuQzWweqp45TE | 王以佐 | accepted |
| spouses | p_5S7FA1n8vFnm7L7uVG5FbH | 連氏 | accepted |
| ancestors | p_yMtffJLVDqf78rSVxJ1yF2 | 王璉 | accepted |
| ancestors | p_byePaPbZp6jPRJqt19xyjN | 王奇橙 | accepted |

## 外部来源

- [中国历代人物传记资料库：連氏(王約妻)（CBDB 216209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216209&o=json)
- [中国历代人物传记资料库：王約（CBDB 206312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json)
