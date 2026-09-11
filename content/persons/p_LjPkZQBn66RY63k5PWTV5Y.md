---
schema: wang-person/v1
id: p_LjPkZQBn66RY63k5PWTV5Y
status: active
merged_into: null
display_name: 王亮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JaZtfQpk1DXF2GN2dXeM5s
        subject_person_id: p_LjPkZQBn66RY63k5PWTV5Y
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
        - id: cs_FLiLsfmkowg7Cv3KUuFcCE
          claim_id: c_JaZtfQpk1DXF2GN2dXeM5s
          source_id: s_xUTY8UCPMyUvMgUHyCG7QP
          stance: supports
          locator: CBDB:170372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170372）
          source: &a1
            id: s_xUTY8UCPMyUvMgUHyCG7QP
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 170372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170372&o=json
            external_identifier: CBDB:170372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8fMYq6FyzcpEQG3ZMxC5wu
        subject_person_id: p_LjPkZQBn66RY63k5PWTV5Y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 728年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EQG5KTyEUErtpYHdHZWfQQ
          claim_id: c_8fMYq6FyzcpEQG3ZMxC5wu
          source_id: s_xUTY8UCPMyUvMgUHyCG7QP
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
        id: c_wSeic8fQyNdT613qom72Dd
        subject_person_id: p_LjPkZQBn66RY63k5PWTV5Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HbEDVombe8fer7JeYTF6qV
          claim_id: c_wSeic8fQyNdT613qom72Dd
          source_id: s_xUTY8UCPMyUvMgUHyCG7QP
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
        id: c_QoN2KOvTvY0ihWjB5ew4yU
        subject_person_id: p_LjPkZQBn66RY63k5PWTV5Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8dUxja16QufvjZN3pxCyUU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d_tVqdmtIVioWfD3I8ct1R
          claim_id: c_QoN2KOvTvY0ihWjB5ew4yU
          source_id: s_oyfc5UUZtcBsh5HEGaSNXK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oyfc5UUZtcBsh5HEGaSNXK
            source_type: api_record
            title: 中国历代人物传记资料库：王連（CBDB 169867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169867&o=json
            external_identifier: CBDB:169867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8dUxja16QufvjZN3pxCyUU
        status: active
        display_name: 王連
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮 | accepted |
| death.date | 728年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8dUxja16QufvjZN3pxCyUU | 王連 | accepted |

## 外部来源

- [中国历代人物传记资料库：王連（CBDB 169867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169867&o=json)
- [中国历代人物传记资料库：王亮（CBDB 170372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170372&o=json)
