---
schema: wang-person/v1
id: p_u39wdSPKsoHPmQXFuc8Sqg
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 149854
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_OzDBJ1NQWXinXyMfA0T--K
        subject_person_id: p_u39wdSPKsoHPmQXFuc8Sqg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ieutQPXFSgt1UAO9BFndwx
          claim_id: c_OzDBJ1NQWXinXyMfA0T--K
          source_id: s__Wwf5cB98jvWMOO9vZ1DFt
          stance: supports
          locator: CBDB:149854
          quotation: null
          interpretation_note: CBDB 明确记录的王定配偶
          source: &a1
            id: s__Wwf5cB98jvWMOO9vZ1DFt
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王定妻)（CBDB 149854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149854&o=json
            external_identifier: CBDB:149854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fKw_jTHkkOojP6qv8YblBd
        subject_person_id: p_MbvvbbGMJNdvsnYJvUTTcw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_u39wdSPKsoHPmQXFuc8Sqg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1XHwCvdDSJ9XB2ytrAhEMP
          claim_id: c_fKw_jTHkkOojP6qv8YblBd
          source_id: s__Wwf5cB98jvWMOO9vZ1DFt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuidengfeng 4：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MbvvbbGMJNdvsnYJvUTTcw
        status: active
        display_name: 王定
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 徐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MbvvbbGMJNdvsnYJvUTTcw | 王定 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王定妻)（CBDB 149854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149854&o=json)
