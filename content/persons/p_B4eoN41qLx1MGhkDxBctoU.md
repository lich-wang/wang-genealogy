---
schema: wang-person/v1
id: p_B4eoN41qLx1MGhkDxBctoU
status: active
merged_into: null
display_name: 王忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zaJw3osR4MVeUke6KJmY47
        subject_person_id: p_B4eoN41qLx1MGhkDxBctoU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BkFN4ZHadv3n4iBfgKM66k
          claim_id: c_zaJw3osR4MVeUke6KJmY47
          source_id: s_JjnAn9gGQQniEniGrw8SSk
          stance: supports
          locator: CBDB:271353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271353）
          source: &a1
            id: s_JjnAn9gGQQniEniGrw8SSk
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 271353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271353&o=json
            external_identifier: CBDB:271353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vphs8KCJSVUZkBpycd1PPH
        subject_person_id: p_B4eoN41qLx1MGhkDxBctoU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。弘治十五年進士，曾任百戶。（中国历代人物传记资料库 CBDB 271353）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UGa6mL5OBO5OPSfU7aaMTH
          claim_id: c_vphs8KCJSVUZkBpycd1PPH
          source_id: s_JjnAn9gGQQniEniGrw8SSk
          stance: supports
          locator: CBDB:271353
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_OMQmeDbOIVgCiIzhV4_WcJ
        subject_person_id: p_B4eoN41qLx1MGhkDxBctoU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SDhXLz8M87mOw3Jnx0IoiW
          claim_id: c_OMQmeDbOIVgCiIzhV4_WcJ
          source_id: s_JjnAn9gGQQniEniGrw8SSk
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第六十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zpBDmxnkNUmk6akFW8LRFz
        status: active
        display_name: 王鍇
        merged_into_person_id: null
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。弘治十五年進士，曾任百戶。（中国历代人物传记资料库 CBDB 271353） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zpBDmxnkNUmk6akFW8LRFz | 王鍇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 271353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271353&o=json)
