---
schema: wang-person/v1
id: p_9uwzcgAE9d642DC9D12Ei3
status: active
merged_into: null
display_name: 王芹
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wo14fiPx2QjV6drGF7FkNC
        subject_person_id: p_9uwzcgAE9d642DC9D12Ei3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nSKDMJDSPwrRK7QBaMRnLt
          claim_id: c_Wo14fiPx2QjV6drGF7FkNC
          source_id: s_iMFBALFuFzLqMicxDQJzxF
          stance: supports
          locator: CBDB:272393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272393）
          source: &a1
            id: s_iMFBALFuFzLqMicxDQJzxF
            source_type: api_record
            title: 中国历代人物传记资料库：王芹（CBDB 272393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272393&o=json
            external_identifier: CBDB:272393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gvoq2SLwnnGLJPYcvt37U4
        subject_person_id: p_9uwzcgAE9d642DC9D12Ei3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芹，明人物。弘治十五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 272393）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0CN4Lf4x2ad8qW0KvBMPMz
          claim_id: c_Gvoq2SLwnnGLJPYcvt37U4
          source_id: s_iMFBALFuFzLqMicxDQJzxF
          stance: supports
          locator: CBDB:272393
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9PdAf5n-XNkxSafkv25ToQ
        subject_person_id: p_gGC23xhwQXL2gcAMcS3G3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9uwzcgAE9d642DC9D12Ei3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkZMuDtX0_znwGpHy6GVq7
          claim_id: c_9PdAf5n-XNkxSafkv25ToQ
          source_id: s_bfaXDFTEDxMbMI8Wdm2wCE
          stance: supports
          locator: CBDB：兄弟 王萱（126760）之父／母 王序
          quotation: null
          interpretation_note: 由兄弟关系推断：王芹 与 王萱 为同胞（CBDB 记「兄」），王萱 之父／母即 王芹 之父／母。
          source:
            id: s_bfaXDFTEDxMbMI8Wdm2wCE
            source_type: api_record
            title: 中国历代人物传记资料库：王芹（CBDB 272393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272393&o=json
            external_identifier: CBDB:272393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gGC23xhwQXL2gcAMcS3G3U
        status: active
        display_name: 王序
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NX3V3y-fXHHNvrZOth7qsq
        subject_person_id: p_9uwzcgAE9d642DC9D12Ei3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G5CWBF7uCCTFxLBu21txfC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s9-hSgrQGnT2NAL620QI1H
          claim_id: c_NX3V3y-fXHHNvrZOth7qsq
          source_id: s_bfaXDFTEDxMbMI8Wdm2wCE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126760 王萱）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bfaXDFTEDxMbMI8Wdm2wCE
            source_type: api_record
            title: 中国历代人物传记资料库：王芹（CBDB 272393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272393&o=json
            external_identifier: CBDB:272393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G5CWBF7uCCTFxLBu21txfC
        status: active
        display_name: 王萱
        merged_into_person_id: null
    - claim:
        id: c_rhrDLoZWGb7JrdFmddNbEh
        subject_person_id: p_9uwzcgAE9d642DC9D12Ei3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aEsLhzJM2J5736Dvki9e9Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b4IQuNdIpK4HdXtEgN0y3_
          claim_id: c_rhrDLoZWGb7JrdFmddNbEh
          source_id: s_bfaXDFTEDxMbMI8Wdm2wCE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126783 王蓂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bfaXDFTEDxMbMI8Wdm2wCE
            source_type: api_record
            title: 中国历代人物传记资料库：王芹（CBDB 272393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272393&o=json
            external_identifier: CBDB:272393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aEsLhzJM2J5736Dvki9e9Z
        status: active
        display_name: 王蓂
        merged_into_person_id: null
---

# 王芹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芹 | accepted |
| bio.summary | 王芹，明人物。弘治十五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 272393） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGC23xhwQXL2gcAMcS3G3U | 王序 | accepted |
| other | p_G5CWBF7uCCTFxLBu21txfC | 王萱 | accepted |
| other | p_aEsLhzJM2J5736Dvki9e9Z | 王蓂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芹（CBDB 272393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272393&o=json)
