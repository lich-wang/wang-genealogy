---
schema: wang-person/v1
id: p_Hv8Fck1x12bcsMV3NbJZ62
status: active
merged_into: null
display_name: 王朝臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9E5oBtCxcQZrFUTRwFw4VS
        subject_person_id: p_Hv8Fck1x12bcsMV3NbJZ62
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gYPgNS2BArz3t9J9jAvtdL
          claim_id: c_9E5oBtCxcQZrFUTRwFw4VS
          source_id: s_tejGr5e6rLHayPEgkKTZfx
          stance: supports
          locator: CBDB:218637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（218637）
          source: &a1
            id: s_tejGr5e6rLHayPEgkKTZfx
            source_type: api_record
            title: 中国历代人物传记资料库：王朝臣（CBDB 218637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218637&o=json
            external_identifier: CBDB:218637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X3NKab1r64REt26JpES8K1
        subject_person_id: p_Hv8Fck1x12bcsMV3NbJZ62
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
        - id: cs_Nm3PwtVUAnYrU9E81t9Ctv
          claim_id: c_X3NKab1r64REt26JpES8K1
          source_id: s_tejGr5e6rLHayPEgkKTZfx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_TMfgq9r8m_lIbQ2pHZIzNf
        subject_person_id: p_Hv8Fck1x12bcsMV3NbJZ62
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9KoQkJpzmuFGWSKkeqbZoc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9RZdVxbKi7MrZXgr5KrjR
          claim_id: c_TMfgq9r8m_lIbQ2pHZIzNf
          source_id: s_tejGr5e6rLHayPEgkKTZfx
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第一甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9KoQkJpzmuFGWSKkeqbZoc
        status: active
        display_name: 王庭譔
        merged_into_person_id: null
    - claim:
        id: c_zSx8buWCurNKk5tik2WnGO
        subject_person_id: p_Hv8Fck1x12bcsMV3NbJZ62
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BehY6enP6cGJBMEXqAzGFc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KooE8z2gJIJ5wsi22xqc86
          claim_id: c_zSx8buWCurNKk5tik2WnGO
          source_id: s_tejGr5e6rLHayPEgkKTZfx
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百三十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BehY6enP6cGJBMEXqAzGFc
        status: active
        display_name: 王庭諭
        merged_into_person_id: null
  other: []
---

# 王朝臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝臣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9KoQkJpzmuFGWSKkeqbZoc | 王庭譔 | accepted |
| descendants | p_BehY6enP6cGJBMEXqAzGFc | 王庭諭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝臣（CBDB 218637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218637&o=json)
