---
schema: wang-person/v1
id: p_f7t9X2kJV7EUtQDpi6JhvW
status: active
merged_into: null
display_name: 王惟政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AiKsFRygZuRq47Cm5dX8yw
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UdkNfQ8DfhUkrdRP89a5Jq
          claim_id: c_AiKsFRygZuRq47Cm5dX8yw
          source_id: s_KzNgEHS7rKsuVitqrYih7c
          stance: supports
          locator: CBDB:250447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250447）
          source: &a1
            id: s_KzNgEHS7rKsuVitqrYih7c
            source_type: api_record
            title: 中国历代人物传记资料库：王惟政（CBDB 250447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250447&o=json
            external_identifier: CBDB:250447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rcDQkSvcUwC2WjmjtBR4Z8
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
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
        - id: cs_HAdRF44yCix7tdJrMZejT7
          claim_id: c_rcDQkSvcUwC2WjmjtBR4Z8
          source_id: s_KzNgEHS7rKsuVitqrYih7c
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
        id: c_6NT56CaO4mSUIh9ohCmHin
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hX4-w4ITQ9FCfwCGtBCj3
          claim_id: c_6NT56CaO4mSUIh9ohCmHin
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MUxq2FyJ4QRyAx99MTCU4A
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 126638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json
            external_identifier: CBDB:126638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4FbGby9fFeKQMmker7tMMP
        status: active
        display_name: 王珩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟政 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4FbGby9fFeKQMmker7tMMP | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珩（CBDB 126638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json)
- [中国历代人物传记资料库：王惟政（CBDB 250447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250447&o=json)
