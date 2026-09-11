---
schema: wang-person/v1
id: p_EBfbydRv4JZEiVZULEada1
status: active
merged_into: null
display_name: 王寬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KVysZKVF1AxCuRfaqGUQsL
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UdHS36Jsn3235D6XkwAizp
          claim_id: c_KVysZKVF1AxCuRfaqGUQsL
          source_id: s_jQthmMXgRSS42CkS1uY4BB
          stance: supports
          locator: CBDB:299909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299909）
          source: &a1
            id: s_jQthmMXgRSS42CkS1uY4BB
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 299909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299909&o=json
            external_identifier: CBDB:299909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YfmBnuvyeC8TCpZSg3aEMW
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
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
        - id: cs_NVwXxafdxrAopFEM7E2Var
          claim_id: c_YfmBnuvyeC8TCpZSg3aEMW
          source_id: s_jQthmMXgRSS42CkS1uY4BB
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
        id: c_kY82c2dJdTZTDPJIIIpm4A
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_acwBn4E2ueYuXmC3T9fy34
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0-7nbIJ4PLZv-p8m_gQB4Q
          claim_id: c_kY82c2dJdTZTDPJIIIpm4A
          source_id: s_5kvfUU16b6b7vdckWofLHL
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5kvfUU16b6b7vdckWofLHL
            source_type: api_record
            title: 中国历代人物传记资料库：王士翹（CBDB 203106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203106&o=json
            external_identifier: CBDB:203106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_acwBn4E2ueYuXmC3T9fy34
        status: active
        display_name: 王士翹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_acwBn4E2ueYuXmC3T9fy34 | 王士翹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 299909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299909&o=json)
- [中国历代人物传记资料库：王士翹（CBDB 203106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203106&o=json)
