---
schema: wang-person/v1
id: p_ofDNL1hsFt1v6GYpjecDnr
status: active
merged_into: null
display_name: 王億
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qMEeFPkMVZpXhsGGs777ME
        subject_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_758jza3WjLtJMj6emoPQLk
          claim_id: c_qMEeFPkMVZpXhsGGs777ME
          source_id: s_16kosDeFe6V1RKxa6BUNFX
          stance: supports
          locator: CBDB:126816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126816）
          source: &a1
            id: s_16kosDeFe6V1RKxa6BUNFX
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 126816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126816&o=json
            external_identifier: CBDB:126816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fkEZ7QGH9hnwLhbF15sC19
        subject_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1467年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXDcXxVAZq5GiiQpLmPmYT
          claim_id: c_fkEZ7QGH9hnwLhbF15sC19
          source_id: s_16kosDeFe6V1RKxa6BUNFX
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
        id: c_GYFNxZiLWisBxt91KDVgsV
        subject_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1550年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5KgjHSkiZHAYbm6y5bmNTe
          claim_id: c_GYFNxZiLWisBxt91KDVgsV
          source_id: s_16kosDeFe6V1RKxa6BUNFX
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
        id: c_GLJnA4xJVnSctBnDQ9GYnw
        subject_person_id: p_ofDNL1hsFt1v6GYpjecDnr
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
        - id: cs_HnXsbYWbXptmMBZcuDafjL
          claim_id: c_GLJnA4xJVnSctBnDQ9GYnw
          source_id: s_16kosDeFe6V1RKxa6BUNFX
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
        id: c_UUVSYxrbocdVl8J5HrL-96
        subject_person_id: p_Fv1Rfd46XjEEp3EcP2H95a
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NS1G8TJR04km2lRMPpJGXo
          claim_id: c_UUVSYxrbocdVl8J5HrL-96
          source_id: s_m29UJXvv9nrEKctQLtFMmP
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m29UJXvv9nrEKctQLtFMmP
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 274430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274430&o=json
            external_identifier: CBDB:274430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Fv1Rfd46XjEEp3EcP2H95a
        status: active
        display_name: 王澤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ovicO8iZD9eTybpjP-6cnf
        subject_person_id: p_d1ACSy75swo15wsQo1MMDk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_symEbET7Z2xMj0CfJGugB6
          claim_id: c_ovicO8iZD9eTybpjP-6cnf
          source_id: s_8JsDXf7t9KLUkms8KbLaDw
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8JsDXf7t9KLUkms8KbLaDw
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 274428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274428&o=json
            external_identifier: CBDB:274428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d1ACSy75swo15wsQo1MMDk
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_ANJP5WZV9aSgRGXyl2GJNg
        subject_person_id: p_oCXVM7557zGQmqzQ94ZCEU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w64gSgPNrF5VBg3TOYlL_W
          claim_id: c_ANJP5WZV9aSgRGXyl2GJNg
          source_id: s_K9jmEFrPjCK2LNic4spMmN
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K9jmEFrPjCK2LNic4spMmN
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 274427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274427&o=json
            external_identifier: CBDB:274427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oCXVM7557zGQmqzQ94ZCEU
        status: active
        display_name: 王福
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王億

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王億 | accepted |
| birth.date | 1467年 | accepted |
| death.date | 1550年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fv1Rfd46XjEEp3EcP2H95a | 王澤 | accepted |
| ancestors | p_d1ACSy75swo15wsQo1MMDk | 王瑛 | accepted |
| ancestors | p_oCXVM7557zGQmqzQ94ZCEU | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 274427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274427&o=json)
- [中国历代人物传记资料库：王億（CBDB 126816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126816&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 274428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274428&o=json)
- [中国历代人物传记资料库：王澤（CBDB 274430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274430&o=json)
