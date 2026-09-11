---
schema: wang-person/v1
id: p_7Dfh7tesPGSK4MKyFJLHck
status: active
merged_into: null
display_name: 王沔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a44xSgsMh3uRrPbgjJPFfL
        subject_person_id: p_7Dfh7tesPGSK4MKyFJLHck
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jm6TKYU5ke6hjv7sZHsbDS
          claim_id: c_a44xSgsMh3uRrPbgjJPFfL
          source_id: s_KEu2taW9JquufFjkZ9T4Lo
          stance: supports
          locator: CBDB:1853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1853）
          source: &a1
            id: s_KEu2taW9JquufFjkZ9T4Lo
            source_type: api_record
            title: 中国历代人物传记资料库：王沔（CBDB 1853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1853&o=json
            external_identifier: CBDB:1853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5js663GXA7AkTv8EKH9Xri
        subject_person_id: p_7Dfh7tesPGSK4MKyFJLHck
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 950年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oddEGo9x4VeVD5GDX5FTZ2
          claim_id: c_5js663GXA7AkTv8EKH9Xri
          source_id: s_KEu2taW9JquufFjkZ9T4Lo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_znTBLhwNWByeA8A3A5ATuA
        subject_person_id: p_7Dfh7tesPGSK4MKyFJLHck
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 992年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vC3KSUfMovZQKSpvQWJsBK
          claim_id: c_znTBLhwNWByeA8A3A5ATuA
          source_id: s_KEu2taW9JquufFjkZ9T4Lo
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
        id: c_kRiEVYFZL3Au49Eia8SThD
        subject_person_id: p_7Dfh7tesPGSK4MKyFJLHck
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沔（950年—992年），宋人物。籍贯咸平，入仕進士，曾任同知樞密院事、參知政事、轉運使。（中国历代人物传记资料库 CBDB 1853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w-924krrOk09SLjPvSAMXL
          claim_id: c_kRiEVYFZL3Au49Eia8SThD
          source_id: s_KEu2taW9JquufFjkZ9T4Lo
          stance: supports
          locator: CBDB:1853
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ib9-M1oGYJE9-K5ghUPNX_
        subject_person_id: p_7Dfh7tesPGSK4MKyFJLHck
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PwEB9MfJmRz2oGwTFBuXo7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2D8OkTdK9vNnB-kgmegvXb
          claim_id: c_ib9-M1oGYJE9-K5ghUPNX_
          source_id: s_KEu2taW9JquufFjkZ9T4Lo
          stance: supports
          locator: CBDB 双向互证（子 王睦 ⇄ 父 王沔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PwEB9MfJmRz2oGwTFBuXo7
        status: active
        display_name: 王睦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_olnuDNk7BEjazXXz2T0GbB
        subject_person_id: p_U4hGLBbX2mHKRKZw9eRccs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7Dfh7tesPGSK4MKyFJLHck
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFyWHgAaF_VK12Fu0G-n0Y
          claim_id: c_olnuDNk7BEjazXXz2T0GbB
          source_id: s_KEu2taW9JquufFjkZ9T4Lo
          stance: supports
          locator: CBDB 双向互证（祖父 王延 ⇄ 孫 王沔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_U4hGLBbX2mHKRKZw9eRccs
        status: active
        display_name: 王延
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王沔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沔 | accepted |
| birth.date | 950年 | accepted |
| death.date | 992年 | accepted |
| bio.summary | 王沔（950年—992年），宋人物。籍贯咸平，入仕進士，曾任同知樞密院事、參知政事、轉運使。（中国历代人物传记资料库 CBDB 1853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PwEB9MfJmRz2oGwTFBuXo7 | 王睦 | accepted |
| ancestors | p_U4hGLBbX2mHKRKZw9eRccs | 王延 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沔（CBDB 1853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1853&o=json)
