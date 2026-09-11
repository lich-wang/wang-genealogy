---
schema: wang-person/v1
id: p_A73S9uGGAkovw2GspRR371
status: active
merged_into: null
display_name: 王彥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rD5Qn462nFnbBsj4Sgz8ic
        subject_person_id: p_A73S9uGGAkovw2GspRR371
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M6KZVQyD2gMgQuwb211TEQ
          claim_id: c_rD5Qn462nFnbBsj4Sgz8ic
          source_id: s_6Uf9rPvFyqqAkdwEjN1UnM
          stance: supports
          locator: CBDB:155637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155637）
          source: &a1
            id: s_6Uf9rPvFyqqAkdwEjN1UnM
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 155637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155637&o=json
            external_identifier: CBDB:155637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_21e6SVhhTphFav5ihhtECQ
        subject_person_id: p_A73S9uGGAkovw2GspRR371
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
        - id: cs_Mm5E3CQUkehXKhoPVKrih4
          claim_id: c_21e6SVhhTphFav5ihhtECQ
          source_id: s_6Uf9rPvFyqqAkdwEjN1UnM
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
        id: c_bWqOUj0Li9296svJkjZGWe
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A73S9uGGAkovw2GspRR371
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pUxjUovizv4amiOskVVA9P
          claim_id: c_bWqOUj0Li9296svJkjZGWe
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 50：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NvuDtdsVXEChdgpchxcaLA
            source_type: api_record
            title: 中国历代人物传记资料库：王崇俊（CBDB 141300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141300&o=json
            external_identifier: CBDB:141300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7u3bSDEcDWQ7xscg7g1yer
        status: active
        display_name: 王崇俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7u3bSDEcDWQ7xscg7g1yer | 王崇俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇俊（CBDB 141300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141300&o=json)
- [中国历代人物传记资料库：王彥（CBDB 155637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155637&o=json)
