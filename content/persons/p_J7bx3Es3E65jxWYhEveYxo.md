---
schema: wang-person/v1
id: p_J7bx3Es3E65jxWYhEveYxo
status: active
merged_into: null
display_name: 王叔卿
cbdb_id: 148218
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qSM1VK5RQegHLxVi6FNDBT
        subject_person_id: p_J7bx3Es3E65jxWYhEveYxo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔卿，唐人物。籍贯北芒山。（中国历代人物传记资料库 CBDB 148218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pDV-uJdglChsO7cwi_EuNL
          claim_id: c_qSM1VK5RQegHLxVi6FNDBT
          source_id: s_sfZumQLYPNbkRgFK8r4cts
          stance: supports
          locator: CBDB:148218
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sfZumQLYPNbkRgFK8r4cts
            source_type: api_record
            title: 中国历代人物传记资料库：王叔卿（CBDB 148218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148218&o=json
            external_identifier: CBDB:148218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oHxZ2DgfCbgpFbdp8HeHmB
        subject_person_id: p_J7bx3Es3E65jxWYhEveYxo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TuZBMb3KKzEo6k2RZYCvnu
          claim_id: c_oHxZ2DgfCbgpFbdp8HeHmB
          source_id: s_sfZumQLYPNbkRgFK8r4cts
          stance: supports
          locator: CBDB:148218
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1-PCjl_btRyWNQlg8vys0O
        subject_person_id: p_J7bx3Es3E65jxWYhEveYxo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_igdQuKMftZdo9KJqFgfBZY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YjlPyf1gXI77vbslFx4bv_
          claim_id: c_1-PCjl_btRyWNQlg8vys0O
          source_id: s_sQZNcK3Fy1x5k6jPQKt7L6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 36：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sQZNcK3Fy1x5k6jPQKt7L6
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 139515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139515&o=json
            external_identifier: CBDB:139515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_igdQuKMftZdo9KJqFgfBZY
        status: active
        display_name: 王端
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔卿，唐人物。籍贯北芒山。（中国历代人物传记资料库 CBDB 148218） | accepted |
| name.primary | 王叔卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_igdQuKMftZdo9KJqFgfBZY | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 139515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139515&o=json)
- [中国历代人物传记资料库：王叔卿（CBDB 148218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148218&o=json)
