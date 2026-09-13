---
schema: wang-person/v1
id: p_RYJ3dJdN6PTPvLY2XQHXaP
status: active
merged_into: null
display_name: 王從諫
cbdb_id: 154555
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y6LVfYcxxZFa7VH4N5fNVr
        subject_person_id: p_RYJ3dJdN6PTPvLY2XQHXaP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從諫，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 154555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qVMM1zqCiNg9oBk0RSt7Ej
          claim_id: c_y6LVfYcxxZFa7VH4N5fNVr
          source_id: s_C337TFdh8heFJ9zzbudyNz
          stance: supports
          locator: CBDB:154555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C337TFdh8heFJ9zzbudyNz
            source_type: api_record
            title: 中国历代人物传记资料库：王從諫（CBDB 154555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154555&o=json
            external_identifier: CBDB:154555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HC6fgYsA2474Hco4JC7o7W
        subject_person_id: p_RYJ3dJdN6PTPvLY2XQHXaP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P8tevDjUi2fJuDBhoMLvbW
          claim_id: c_HC6fgYsA2474Hco4JC7o7W
          source_id: s_C337TFdh8heFJ9zzbudyNz
          stance: supports
          locator: CBDB:154555
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8X32E0q2TGlx0e-r_eEqqO
        subject_person_id: p_W4c4cQK9DHN1AkS9oTwMLe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RYJ3dJdN6PTPvLY2XQHXaP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0rX3O974vTY_PWgzY40Cj-
          claim_id: c_8X32E0q2TGlx0e-r_eEqqO
          source_id: s_JsDWcrdechH2XKS9gMda6E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengwu 8：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JsDWcrdechH2XKS9gMda6E
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 141086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141086&o=json
            external_identifier: CBDB:141086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W4c4cQK9DHN1AkS9oTwMLe
        status: active
        display_name: 王賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王從諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王從諫，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 154555） | accepted |
| name.primary | 王從諫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W4c4cQK9DHN1AkS9oTwMLe | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 141086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141086&o=json)
- [中国历代人物传记资料库：王從諫（CBDB 154555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154555&o=json)
