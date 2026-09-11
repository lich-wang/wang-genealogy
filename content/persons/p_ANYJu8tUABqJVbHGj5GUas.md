---
schema: wang-person/v1
id: p_ANYJu8tUABqJVbHGj5GUas
status: active
merged_into: null
display_name: 王椿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KsL4uVCibLDJ3osw4wrJQk
        subject_person_id: p_ANYJu8tUABqJVbHGj5GUas
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GEAqJT2pvsWaVknVC9NTf5
          claim_id: c_KsL4uVCibLDJ3osw4wrJQk
          source_id: s_v8e36f23Jc3AhVAnGVLwnp
          stance: supports
          locator: CBDB:175955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175955）
          source: &a1
            id: s_v8e36f23Jc3AhVAnGVLwnp
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 175955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175955&o=json
            external_identifier: CBDB:175955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_x2Mo2wYFKUF79PdYisGTP5
        subject_person_id: p_ANYJu8tUABqJVbHGj5GUas
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 927年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MtueBDjK27o5dJFdUH3Rx4
          claim_id: c_x2Mo2wYFKUF79PdYisGTP5
          source_id: s_v8e36f23Jc3AhVAnGVLwnp
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
        id: c_R47VBZPjRJ4qp1Vv9Tioat
        subject_person_id: p_ANYJu8tUABqJVbHGj5GUas
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿（卒于927年），唐人物。籍贯杜陵。（中国历代人物传记资料库 CBDB 175955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N6vzMIxs95EOJWscKVcidX
          claim_id: c_R47VBZPjRJ4qp1Vv9Tioat
          source_id: s_v8e36f23Jc3AhVAnGVLwnp
          stance: supports
          locator: CBDB:175955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4hBLP5dra3pQd67mCMtAm8
        subject_person_id: p_KXeybJ73LDv1DLLTr6v2Ev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ANYJu8tUABqJVbHGj5GUas
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jfq1IMTsXmaZF8ZgL1it8g
          claim_id: c_4hBLP5dra3pQd67mCMtAm8
          source_id: s_v8e36f23Jc3AhVAnGVLwnp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KXeybJ73LDv1DLLTr6v2Ev
        status: active
        display_name: 王徽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿 | accepted |
| death.date | 927年 | accepted |
| bio.summary | 王椿（卒于927年），唐人物。籍贯杜陵。（中国历代人物传记资料库 CBDB 175955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KXeybJ73LDv1DLLTr6v2Ev | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 175955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175955&o=json)
