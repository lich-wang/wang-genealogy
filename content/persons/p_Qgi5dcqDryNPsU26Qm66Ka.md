---
schema: wang-person/v1
id: p_Qgi5dcqDryNPsU26Qm66Ka
status: active
merged_into: null
display_name: 王琮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QfNTEFpZPwfx7muXy3RCjQ
        subject_person_id: p_Qgi5dcqDryNPsU26Qm66Ka
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B15Xq4NmXugsU69KVEr8zZ
          claim_id: c_QfNTEFpZPwfx7muXy3RCjQ
          source_id: s_aEe6FUYW81xr5NLbfuSATb
          stance: supports
          locator: CBDB:270237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270237）
          source: &a1
            id: s_aEe6FUYW81xr5NLbfuSATb
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 270237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270237&o=json
            external_identifier: CBDB:270237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d8n6V3iUq7ioPcL5uqTUai
        subject_person_id: p_Qgi5dcqDryNPsU26Qm66Ka
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
        - id: cs_TNFNuXQLxXEeF4veS1Ae1Z
          claim_id: c_d8n6V3iUq7ioPcL5uqTUai
          source_id: s_aEe6FUYW81xr5NLbfuSATb
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
        id: c_T3EeTEKYy_HAhQcCn8z1sM
        subject_person_id: p_Qgi5dcqDryNPsU26Qm66Ka
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUjPxhWSgEOsEYid70Cp3M
          claim_id: c_T3EeTEKYy_HAhQcCn8z1sM
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z5C1Z7dXiFUhSuKwZiKM9C
            source_type: api_record
            title: 中国历代人物传记资料库：王納誨（CBDB 126660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126660&o=json
            external_identifier: CBDB:126660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1Z5UnhG19fXLy7n6F1UwHg
        status: active
        display_name: 王納誨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1Z5UnhG19fXLy7n6F1UwHg | 王納誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 270237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270237&o=json)
- [中国历代人物传记资料库：王納誨（CBDB 126660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126660&o=json)
