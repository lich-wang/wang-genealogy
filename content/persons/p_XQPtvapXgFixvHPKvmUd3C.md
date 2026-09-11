---
schema: wang-person/v1
id: p_XQPtvapXgFixvHPKvmUd3C
status: active
merged_into: null
display_name: 王琳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBXsVQN8TabgTNt1jrGEq3
        subject_person_id: p_XQPtvapXgFixvHPKvmUd3C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BqGtgFmrB9s9t5RokSTNvb
          claim_id: c_xBXsVQN8TabgTNt1jrGEq3
          source_id: s_J1PNvfgC14YLcShZYtzCcP
          stance: supports
          locator: CBDB:158169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158169）
          source: &a1
            id: s_J1PNvfgC14YLcShZYtzCcP
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 158169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158169&o=json
            external_identifier: CBDB:158169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X84145RoMP98WvpyMfjPzz
        subject_person_id: p_XQPtvapXgFixvHPKvmUd3C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，唐人物。籍贯太原，曾任州司馬。（中国历代人物传记资料库 CBDB 158169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EUzj1jdAGjvPhM77su7q0u
          claim_id: c_X84145RoMP98WvpyMfjPzz
          source_id: s_J1PNvfgC14YLcShZYtzCcP
          stance: supports
          locator: CBDB:158169
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MjwXoZFlw4_u-mhxwOsRSv
        subject_person_id: p_44BqYJB79NSZx7U895HuBk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XQPtvapXgFixvHPKvmUd3C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rG-7PDkLKf9McozplQnsQU
          claim_id: c_MjwXoZFlw4_u-mhxwOsRSv
          source_id: s_qxN738BoX8sV5Rs2efh2Av
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qxN738BoX8sV5Rs2efh2Av
            source_type: api_record
            title: 中国历代人物传记资料库：王冰（CBDB 158168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158168&o=json
            external_identifier: CBDB:158168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_44BqYJB79NSZx7U895HuBk
        status: active
        display_name: 王冰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | 王琳，唐人物。籍贯太原，曾任州司馬。（中国历代人物传记资料库 CBDB 158169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_44BqYJB79NSZx7U895HuBk | 王冰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冰（CBDB 158168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158168&o=json)
- [中国历代人物传记资料库：王琳（CBDB 158169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158169&o=json)
