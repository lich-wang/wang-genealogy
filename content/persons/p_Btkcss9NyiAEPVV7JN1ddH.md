---
schema: wang-person/v1
id: p_Btkcss9NyiAEPVV7JN1ddH
status: active
merged_into: null
display_name: 王崇高
cbdb_id: 266139
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_of9wnHRTJbq2aJ9z3mHiZA
        subject_person_id: p_Btkcss9NyiAEPVV7JN1ddH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇高，明人物。弘治六年進士，籍贯曹縣。（中国历代人物传记资料库 CBDB 266139）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kses8nMPq9z2RN6xGg9jQy
          claim_id: c_of9wnHRTJbq2aJ9z3mHiZA
          source_id: s_RjSEtotfk8isnycLT49gRb
          stance: supports
          locator: CBDB:266139
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RjSEtotfk8isnycLT49gRb
            source_type: api_record
            title: 中国历代人物传记资料库：王崇高（CBDB 266139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266139&o=json
            external_identifier: CBDB:266139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bUvy7A6LyaA1Q5oA3Q28N8
        subject_person_id: p_Btkcss9NyiAEPVV7JN1ddH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_czqVCbQRUwNaudBvGMrsLf
          claim_id: c_bUvy7A6LyaA1Q5oA3Q28N8
          source_id: s_RjSEtotfk8isnycLT49gRb
          stance: supports
          locator: CBDB:266139
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LKd1gYEEEj8ZAKhcXFZDsm
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Btkcss9NyiAEPVV7JN1ddH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AcUzo_HRrlofnHq3qAIcE8
          claim_id: c_LKd1gYEEEj8ZAKhcXFZDsm
          source_id: s_RUW0svwi8kxC6dRXhzaCso
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇高 与 王崇文 为同胞（CBDB 记「弟」），王崇文 之父／母即 王崇高 之父／母。
          source:
            id: s_RUW0svwi8kxC6dRXhzaCso
            source_type: api_record
            title: 中国历代人物传记资料库：王崇高（CBDB 266139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266139&o=json
            external_identifier: CBDB:266139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7xPYAwpK8PS9R7QKy5varP
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Be0CmjD98qa017v10ZsDLJ
        subject_person_id: p_Btkcss9NyiAEPVV7JN1ddH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NecQVkXf5HINCU9P9pXyrP
          claim_id: c_Be0CmjD98qa017v10ZsDLJ
          source_id: s_RUW0svwi8kxC6dRXhzaCso
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126686 王崇文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RUW0svwi8kxC6dRXhzaCso
            source_type: api_record
            title: 中国历代人物传记资料库：王崇高（CBDB 266139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266139&o=json
            external_identifier: CBDB:266139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_skjKvTKbz5aUC8X3W9ytWH
        status: active
        display_name: 王崇文
        merged_into_person_id: null
---

# 王崇高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇高，明人物。弘治六年進士，籍贯曹縣。（中国历代人物传记资料库 CBDB 266139） | accepted |
| name.primary | 王崇高 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7xPYAwpK8PS9R7QKy5varP | 王珣 | accepted |
| other | p_skjKvTKbz5aUC8X3W9ytWH | 王崇文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇高（CBDB 266139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266139&o=json)
