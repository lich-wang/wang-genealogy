---
schema: wang-person/v1
id: p_3zRBK42K5MyFsKs7staexG
status: active
merged_into: null
display_name: 王淵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JPgdK2UV9Hn8XRunWuKS6e
        subject_person_id: p_3zRBK42K5MyFsKs7staexG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_46t9NY7uJN6A54HGg6UZJX
          claim_id: c_JPgdK2UV9Hn8XRunWuKS6e
          source_id: s_sGWhhewRRMfW83DS13Kw34
          stance: supports
          locator: CBDB:257477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257477）
          source: &a1
            id: s_sGWhhewRRMfW83DS13Kw34
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 257477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257477&o=json
            external_identifier: CBDB:257477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pmrnoami43ZLt8hUf2NWvx
        subject_person_id: p_3zRBK42K5MyFsKs7staexG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵，明人物。成化二十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 257477）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CbyCS2ccdGpkM6Hvc1PUzD
          claim_id: c_pmrnoami43ZLt8hUf2NWvx
          source_id: s_sGWhhewRRMfW83DS13Kw34
          stance: supports
          locator: CBDB:257477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yRFWfYalvpJiy3tmixHSjz
        subject_person_id: p_3zRBK42K5MyFsKs7staexG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A2oY1DBC6ZsoMfLhszPRPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dOJFeObMthz1iC0i8Y2wr
          claim_id: c_yRFWfYalvpJiy3tmixHSjz
          source_id: s_sGWhhewRRMfW83DS13Kw34
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A2oY1DBC6ZsoMfLhszPRPg
        status: active
        display_name: 王璽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | 王淵，明人物。成化二十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 257477） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_A2oY1DBC6ZsoMfLhszPRPg | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 257477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257477&o=json)
