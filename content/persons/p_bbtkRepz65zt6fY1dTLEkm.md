---
schema: wang-person/v1
id: p_bbtkRepz65zt6fY1dTLEkm
status: active
merged_into: null
display_name: 王沁
cbdb_id: 191076
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K5kM2ZhAPcVEupBYuYCMP2
        subject_person_id: p_bbtkRepz65zt6fY1dTLEkm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沁（卒于781年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 191076 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PIJ3EvQumAND16C9y4Sg8d
          claim_id: c_K5kM2ZhAPcVEupBYuYCMP2
          source_id: s_PinmjysEADXcAgS1DYq7ZQ
          stance: supports
          locator: CBDB:191076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_PinmjysEADXcAgS1DYq7ZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王沁（CBDB 191076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191076&o=json
            external_identifier: CBDB:191076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yWWRniEhLFRcV7n7DvBdy1
        subject_person_id: p_bbtkRepz65zt6fY1dTLEkm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 781年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0781-01-01
            latest: 0781-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CGLRFzBcYwEgauyZ4XFg9k
          claim_id: c_yWWRniEhLFRcV7n7DvBdy1
          source_id: s_PinmjysEADXcAgS1DYq7ZQ
          stance: supports
          locator: CBDB:191076
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 781
          source:
            id: s_PinmjysEADXcAgS1DYq7ZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王沁（CBDB 191076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191076&o=json
            external_identifier: CBDB:191076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4rMHw4CnMVHCjEv3Yjhz2P
        subject_person_id: p_bbtkRepz65zt6fY1dTLEkm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PiaGCDRv37UgtM323CCu9a
          claim_id: c_4rMHw4CnMVHCjEv3Yjhz2P
          source_id: s_PinmjysEADXcAgS1DYq7ZQ
          stance: supports
          locator: CBDB:191076
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 781
          source:
            id: s_PinmjysEADXcAgS1DYq7ZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王沁（CBDB 191076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191076&o=json
            external_identifier: CBDB:191076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q-PkDvfmXwbk3MdcBCJden
        subject_person_id: p_4ms3zQzj6wikwvfLy2y12w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bbtkRepz65zt6fY1dTLEkm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFvrloq6N4pNUM2bfAPfYH
          claim_id: c_Q-PkDvfmXwbk3MdcBCJden
          source_id: s_Ru2GckTrZK3DV4thPTNQHN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ru2GckTrZK3DV4thPTNQHN
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 191077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191077&o=json
            external_identifier: CBDB:191077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4ms3zQzj6wikwvfLy2y12w
        status: active
        display_name: 王彝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王沁（卒于781年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 191076 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 781年 | accepted |
| name.primary | 王沁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4ms3zQzj6wikwvfLy2y12w | 王彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沁（CBDB 191076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191076&o=json)
- [中国历代人物传记资料库：王彝（CBDB 191077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191077&o=json)
