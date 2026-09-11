---
schema: wang-person/v1
id: p_Hzz13QG3KkgrJrrmRHzuBL
status: active
merged_into: null
display_name: 王宣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iSTBPHyS79XqLy7j8h7gTP
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x3Zsb2KcH4afKbCK9yR9jX
          claim_id: c_iSTBPHyS79XqLy7j8h7gTP
          source_id: s_GcrseffxuQu6SyucJV6rd8
          stance: supports
          locator: CBDB:201094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201094）
          source: &a1
            id: s_GcrseffxuQu6SyucJV6rd8
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 201094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201094&o=json
            external_identifier: CBDB:201094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_56DagijEkVh4UXJ8gKN7QM
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1470年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KuzHCPKE6TdD6fzWu51umD
          claim_id: c_56DagijEkVh4UXJ8gKN7QM
          source_id: s_GcrseffxuQu6SyucJV6rd8
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
        id: c_qu7E9FF5TuJUdiqCR9XraV
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
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
        - id: cs_ormLwWhYGPUuPHaAzYut78
          claim_id: c_qu7E9FF5TuJUdiqCR9XraV
          source_id: s_GcrseffxuQu6SyucJV6rd8
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
        id: c_QDRp24ZGQKzcCpEws0bovg
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzJYs2wIZR0GaJONaWJFII
          claim_id: c_QDRp24ZGQKzcCpEws0bovg
          source_id: s_G9yR3MEaqvFb2RLT9A6TVA
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G9yR3MEaqvFb2RLT9A6TVA
            source_type: api_record
            title: 中国历代人物传记资料库：王朝輔（CBDB 267017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267017&o=json
            external_identifier: CBDB:267017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7zDtBoXJhHQDuC7LGFFtF6
        status: active
        display_name: 王朝輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_EHlO5wwumJw3jHkGlv_Fhv
        subject_person_id: p_1meANRjBEetnxL4bUgGNQH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iSfLtmrtHAk53BYju6g_-4
          claim_id: c_EHlO5wwumJw3jHkGlv_Fhv
          source_id: s_g1JCXwFQFtBVqnLVPowN68
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g1JCXwFQFtBVqnLVPowN68
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 267014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267014&o=json
            external_identifier: CBDB:267014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1meANRjBEetnxL4bUgGNQH
        status: active
        display_name: 王琳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| birth.date | 1470年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7zDtBoXJhHQDuC7LGFFtF6 | 王朝輔 | accepted |
| ancestors | p_1meANRjBEetnxL4bUgGNQH | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝輔（CBDB 267017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267017&o=json)
- [中国历代人物传记资料库：王琳（CBDB 267014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267014&o=json)
- [中国历代人物传记资料库：王宣（CBDB 201094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201094&o=json)
