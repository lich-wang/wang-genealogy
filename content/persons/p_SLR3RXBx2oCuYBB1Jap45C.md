---
schema: wang-person/v1
id: p_SLR3RXBx2oCuYBB1Jap45C
status: active
merged_into: null
display_name: 王庭芝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d4akaBCNRmZK6mYmf4LNJr
        subject_person_id: p_SLR3RXBx2oCuYBB1Jap45C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fJuAca5DucU8v9PASLrsXn
          claim_id: c_d4akaBCNRmZK6mYmf4LNJr
          source_id: s_ojVM1hU2sHMoNpPE1TPBPJ
          stance: supports
          locator: CBDB:149842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149842）
          source: &a1
            id: s_ojVM1hU2sHMoNpPE1TPBPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王庭芝（CBDB 149842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149842&o=json
            external_identifier: CBDB:149842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q5pBtH6atDRiPgxr5eBWah
        subject_person_id: p_SLR3RXBx2oCuYBB1Jap45C
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
        - id: cs_8pP2DwG1AMbnYnG8KF291m
          claim_id: c_q5pBtH6atDRiPgxr5eBWah
          source_id: s_ojVM1hU2sHMoNpPE1TPBPJ
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
        id: c_q3_KSzYz81XLWbkAqv2tGW
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SLR3RXBx2oCuYBB1Jap45C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RaUuwJ2WnoAekuOOhYBK7Y
          claim_id: c_q3_KSzYz81XLWbkAqv2tGW
          source_id: s_qyXWu18LpCH4nNUUHkbWpk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiancewansui 6：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qyXWu18LpCH4nNUUHkbWpk
            source_type: api_record
            title: 中国历代人物传记资料库：王思訥（CBDB 139983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139983&o=json
            external_identifier: CBDB:139983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_96KQuq1ZTf34yAWUr3nQms
        status: active
        display_name: 王思訥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭芝 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_96KQuq1ZTf34yAWUr3nQms | 王思訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思訥（CBDB 139983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139983&o=json)
- [中国历代人物传记资料库：王庭芝（CBDB 149842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149842&o=json)
