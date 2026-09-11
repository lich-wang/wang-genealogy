---
schema: wang-person/v1
id: p_7xPYAwpK8PS9R7QKy5varP
status: active
merged_into: null
display_name: 王珣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7d8UhTW8ZrA85oC9u5Tww
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wWCs1V8tPKwWd5tBKp6nVn
          claim_id: c_d7d8UhTW8ZrA85oC9u5Tww
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: CBDB:266132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266132）
          source: &a1
            id: s_Vys9dZU9Gy34qAcr5P9Ciw
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 266132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json
            external_identifier: CBDB:266132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75WkTfzzraSoeADP32hpDY
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
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
        - id: cs_XAfCBoeuzAeULA3qBqA44g
          claim_id: c_75WkTfzzraSoeADP32hpDY
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RpRnD0_WjsTkwzGIUqNVDx
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JZiIsJF4osc23_x51oUlzP
          claim_id: c_RpRnD0_WjsTkwzGIUqNVDx
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_skjKvTKbz5aUC8X3W9ytWH
        status: active
        display_name: 王崇文
        merged_into_person_id: null
    - claim:
        id: c_BxADcTP4WGBJymM-FPu5GK
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5btbNFkuNqxJDcg99ibvfp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Pp-H_l9rm7uCP_LKgRJp0
          claim_id: c_BxADcTP4WGBJymM-FPu5GK
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5btbNFkuNqxJDcg99ibvfp
        status: active
        display_name: 王崇儉
        merged_into_person_id: null
    - claim:
        id: c_ShpgqvRn2jpDmeoOwW8lmn
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HIPL68xmmUFYqYB6vX3jQG
          claim_id: c_ShpgqvRn2jpDmeoOwW8lmn
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第二十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gZEG3LV8BoSpVH5X7JPghB
        status: active
        display_name: 王崇獻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_skjKvTKbz5aUC8X3W9ytWH | 王崇文 | accepted |
| children | p_5btbNFkuNqxJDcg99ibvfp | 王崇儉 | accepted |
| children | p_gZEG3LV8BoSpVH5X7JPghB | 王崇獻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珣（CBDB 266132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json)
