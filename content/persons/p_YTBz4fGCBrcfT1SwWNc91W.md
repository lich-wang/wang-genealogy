---
schema: wang-person/v1
id: p_YTBz4fGCBrcfT1SwWNc91W
status: active
merged_into: null
display_name: 王八元
cbdb_id: 330492
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jC2y1P6Fr5vRD8tG2rqC97
        subject_person_id: p_YTBz4fGCBrcfT1SwWNc91W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王八元，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330492）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YVgsp7-OT9RkJMI8D6BdKO
          claim_id: c_jC2y1P6Fr5vRD8tG2rqC97
          source_id: s_XnnF7jxfyFRjP9LLgzUzDn
          stance: supports
          locator: CBDB:330492
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XnnF7jxfyFRjP9LLgzUzDn
            source_type: api_record
            title: 中国历代人物传记资料库：王八元（CBDB 330492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330492&o=json
            external_identifier: CBDB:330492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iLZWSyLuoNaFzieBRiC356
        subject_person_id: p_YTBz4fGCBrcfT1SwWNc91W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王八元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Dp91G5ng7SZccRUKWRqSAX
          claim_id: c_iLZWSyLuoNaFzieBRiC356
          source_id: s_XnnF7jxfyFRjP9LLgzUzDn
          stance: supports
          locator: CBDB:330492
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o62AXmL9rKOG5tG1ky5A2w
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YTBz4fGCBrcfT1SwWNc91W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jEC4r6-CzuM8shpFhlzz_w
          claim_id: c_o62AXmL9rKOG5tG1ky5A2w
          source_id: s__2IPLHH3xDvKuw5ccmwUQz
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王八元 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王八元 之父／母。
          source:
            id: s__2IPLHH3xDvKuw5ccmwUQz
            source_type: api_record
            title: 中国历代人物传记资料库：王八元（CBDB 330492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330492&o=json
            external_identifier: CBDB:330492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwWAP4cMFqggRtz76GL45y
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xE_cd5nxLFg5RjaTObspF9
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YTBz4fGCBrcfT1SwWNc91W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tPtT6O2jeXBXViZHXnUHAn
          claim_id: c_xE_cd5nxLFg5RjaTObspF9
          source_id: s__2IPLHH3xDvKuw5ccmwUQz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__2IPLHH3xDvKuw5ccmwUQz
            source_type: api_record
            title: 中国历代人物传记资料库：王八元（CBDB 330492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330492&o=json
            external_identifier: CBDB:330492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SNd4UuLmfsSW8TJsfi9MKm
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王八元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王八元，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330492） | accepted |
| name.primary | 王八元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FwWAP4cMFqggRtz76GL45y | 王訪 | accepted |
| other | p_SNd4UuLmfsSW8TJsfi9MKm | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王八元（CBDB 330492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330492&o=json)
