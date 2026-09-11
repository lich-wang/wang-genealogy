---
schema: wang-person/v1
id: p_C649FKyy6vwpLVe271ivnZ
status: active
merged_into: null
display_name: 王恩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQ5KuNEmUTjagPKJ2WQR9P
        subject_person_id: p_C649FKyy6vwpLVe271ivnZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GJwA4P7YgRHtXrp5fWRDdy
          claim_id: c_WQ5KuNEmUTjagPKJ2WQR9P
          source_id: s_4JWUyKmFJjRKU2cyP2B97v
          stance: supports
          locator: CBDB:158106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158106）
          source: &a1
            id: s_4JWUyKmFJjRKU2cyP2B97v
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 158106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158106&o=json
            external_identifier: CBDB:158106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tJnYR3FNx7W8oDdK3Lqd9i
        subject_person_id: p_C649FKyy6vwpLVe271ivnZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩，史料所见人物。本项目依据《中国历代人物传记资料库：王恩（CBDB 158106）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8BX9NQoGmmOSPsxENtU708
          claim_id: c_tJnYR3FNx7W8oDdK3Lqd9i
          source_id: s_4JWUyKmFJjRKU2cyP2B97v
          stance: supports
          locator: CBDB:158106
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X09ROq1gLyYSCb2pO4Tw_v
        subject_person_id: p_uzLPWq66u7cfNYyrb8gQ8t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C649FKyy6vwpLVe271ivnZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cZxJ1Hw_PrVRGmZ-ivGGyz
          claim_id: c_X09ROq1gLyYSCb2pO4Tw_v
          source_id: s_4JWUyKmFJjRKU2cyP2B97v
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uzLPWq66u7cfNYyrb8gQ8t
        status: active
        display_name: 王璆
        merged_into_person_id: null
  children:
    - claim:
        id: c_zVm5uZ19cpuq6jSs-EgNlN
        subject_person_id: p_C649FKyy6vwpLVe271ivnZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UkJzzb7Gw9QdK6rEomKB8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V9EUypDfxBiB2RCOz1mmzh
          claim_id: c_zVm5uZ19cpuq6jSs-EgNlN
          source_id: s_4JWUyKmFJjRKU2cyP2B97v
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UkJzzb7Gw9QdK6rEomKB8E
        status: active
        display_name: 王良
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Ym1CgCWEsCIgS1j2XUViMK
        subject_person_id: p_C649FKyy6vwpLVe271ivnZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kVMprEyYd61FrSnBQEVsST
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DINZcSqNzWNyFGbflbE2Z7
          claim_id: c_Ym1CgCWEsCIgS1j2XUViMK
          source_id: s_4JWUyKmFJjRKU2cyP2B97v
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 94：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kVMprEyYd61FrSnBQEVsST
        status: active
        display_name: 王仕倫
        merged_into_person_id: null
  other: []
---

# 王恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩 | accepted |
| bio.summary | 王恩，史料所见人物。本项目依据《中国历代人物传记资料库：王恩（CBDB 158106）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uzLPWq66u7cfNYyrb8gQ8t | 王璆 | accepted |
| children | p_UkJzzb7Gw9QdK6rEomKB8E | 王良 | accepted |
| descendants | p_kVMprEyYd61FrSnBQEVsST | 王仕倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 158106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158106&o=json)
