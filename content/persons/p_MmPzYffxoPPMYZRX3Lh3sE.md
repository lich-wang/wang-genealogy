---
schema: wang-person/v1
id: p_MmPzYffxoPPMYZRX3Lh3sE
status: active
merged_into: null
display_name: 王載
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aoQ9dRSwaKFaLTWUWcPUcg
        subject_person_id: p_MmPzYffxoPPMYZRX3Lh3sE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cV6sJ1hRD4YacZ89J21Jjh
          claim_id: c_aoQ9dRSwaKFaLTWUWcPUcg
          source_id: s_WKrGPG6s3CNZ1qfGwCx37F
          stance: supports
          locator: CBDB:169179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169179）
          source: &a1
            id: s_WKrGPG6s3CNZ1qfGwCx37F
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 169179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169179&o=json
            external_identifier: CBDB:169179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AAhgoZVamvu4aKVqckJ3S5
        subject_person_id: p_MmPzYffxoPPMYZRX3Lh3sE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 817年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3EYtGBS369YHvgAskuMi6
          claim_id: c_AAhgoZVamvu4aKVqckJ3S5
          source_id: s_WKrGPG6s3CNZ1qfGwCx37F
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
        id: c_UV9XbXz9b9CCgRrVSX8thc
        subject_person_id: p_MmPzYffxoPPMYZRX3Lh3sE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載（卒于817年），唐人物。籍贯河東。（中国历代人物传记资料库 CBDB 169179）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QCKvz-YEauq5pqtzmOA5Tv
          claim_id: c_UV9XbXz9b9CCgRrVSX8thc
          source_id: s_WKrGPG6s3CNZ1qfGwCx37F
          stance: supports
          locator: CBDB:169179
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_coC6uUFFdkD7mfCfq20Ril
        subject_person_id: p_8oQVSHmAb3D8KVUPEpFLbQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MmPzYffxoPPMYZRX3Lh3sE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c_KvwtNZldBsgEczvVahDB
          claim_id: c_coC6uUFFdkD7mfCfq20Ril
          source_id: s_tBjiNR81jdnp5BES3XmqsT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tBjiNR81jdnp5BES3XmqsT
            source_type: api_record
            title: 中国历代人物传记资料库：王勖（CBDB 169733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169733&o=json
            external_identifier: CBDB:169733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8oQVSHmAb3D8KVUPEpFLbQ
        status: active
        display_name: 王勖
        merged_into_person_id: null
  children:
    - claim:
        id: c_kYiZdwD3jX0dDskZqvSrpB
        subject_person_id: p_MmPzYffxoPPMYZRX3Lh3sE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z8DtSBjAEoUzy8cxQNFS2x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8hF-1V6mNl7S3JxKsJ5awS
          claim_id: c_kYiZdwD3jX0dDskZqvSrpB
          source_id: s_69Gh848koGViSF4f8SDaQj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_69Gh848koGViSF4f8SDaQj
            source_type: api_record
            title: 中国历代人物传记资料库：王縱（CBDB 144879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144879&o=json
            external_identifier: CBDB:144879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Z8DtSBjAEoUzy8cxQNFS2x
        status: active
        display_name: 王縱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王載 | accepted |
| death.date | 817年 | accepted |
| bio.summary | 王載（卒于817年），唐人物。籍贯河東。（中国历代人物传记资料库 CBDB 169179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8oQVSHmAb3D8KVUPEpFLbQ | 王勖 | accepted |
| children | p_Z8DtSBjAEoUzy8cxQNFS2x | 王縱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勖（CBDB 169733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169733&o=json)
- [中国历代人物传记资料库：王載（CBDB 169179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169179&o=json)
- [中国历代人物传记资料库：王縱（CBDB 144879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144879&o=json)
