---
schema: wang-person/v1
id: p_1GhPFs5m4G2BPwjpU26jtR
status: active
merged_into: null
display_name: 王亮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QJWpdihLjxwsYpt2ScPPtz
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RskRGqYdAQyfJFFPT93uZ2
          claim_id: c_QJWpdihLjxwsYpt2ScPPtz
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: CBDB:207345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207345）
          source: &a1
            id: s_kEMvWdXNEMrMUFHnwDnn61
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 207345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json
            external_identifier: CBDB:207345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LQEif1RBDmkMVHfwvPrrbZ
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1395年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qu3bfKP74fRqoM73q6rQHV
          claim_id: c_LQEif1RBDmkMVHfwvPrrbZ
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
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
        id: c_h7492Ld94gK4SVc1Lvou5d
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
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
        - id: cs_qs65WBn7VESmCFh6LAjQFE
          claim_id: c_h7492Ld94gK4SVc1Lvou5d
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
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
        id: c_8gITiTW42Lj8rwHU8Dd1dJ
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IF1QRaoJbp1MozUWC5QACt
          claim_id: c_8gITiTW42Lj8rwHU8Dd1dJ
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        status: active
        display_name: 王甫林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jQxggGBw_1qoY5zbESd0PG
        subject_person_id: p_CqoXtbYtPK4GM5A6zB25Z1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z0XDQ9F5I1jk_S7_JgsiUr
          claim_id: c_jQxggGBw_1qoY5zbESd0PG
          source_id: s_shrh2vvQn1AJaxuJJ96F8f
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_shrh2vvQn1AJaxuJJ96F8f
            source_type: api_record
            title: 中国历代人物传记资料库：王彥實（CBDB 231565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231565&o=json
            external_identifier: CBDB:231565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CqoXtbYtPK4GM5A6zB25Z1
        status: active
        display_name: 王彥實
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮 | accepted |
| birth.date | 1395年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jn7Z5DoHyCUh3Tr3UBMSXH | 王甫林 | accepted |
| ancestors | p_CqoXtbYtPK4GM5A6zB25Z1 | 王彥實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮（CBDB 207345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json)
- [中国历代人物传记资料库：王彥實（CBDB 231565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231565&o=json)
