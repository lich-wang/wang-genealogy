---
schema: wang-person/v1
id: p_f8cdeyyhqojaX8KjkiWgNJ
status: active
merged_into: null
display_name: 王應鵬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CjHYLbB9NFwb8Ymm5JPGWF
        subject_person_id: p_f8cdeyyhqojaX8KjkiWgNJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a1dkx2Wz31LsDt8Hjs5yfn
          claim_id: c_CjHYLbB9NFwb8Ymm5JPGWF
          source_id: s_mLPCsp411DDCZM1xNjyouW
          stance: supports
          locator: CBDB:221582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221582）
          source: &a1
            id: s_mLPCsp411DDCZM1xNjyouW
            source_type: api_record
            title: 中国历代人物传记资料库：王應鵬（CBDB 221582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221582&o=json
            external_identifier: CBDB:221582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Bc1CtowaCfR2NgWY5QJpJ
        subject_person_id: p_f8cdeyyhqojaX8KjkiWgNJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鵬，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221582）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R4VDB6iSyMAsYfoaF_YMJK
          claim_id: c_6Bc1CtowaCfR2NgWY5QJpJ
          source_id: s_mLPCsp411DDCZM1xNjyouW
          stance: supports
          locator: CBDB:221582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2HNOSdtpeaUKW9ona4Dd5s
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f8cdeyyhqojaX8KjkiWgNJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YMFfxd-RJKrNxZRGcRAb9y
          claim_id: c_2HNOSdtpeaUKW9ona4Dd5s
          source_id: s_dGAmJvhGMnLBKMyY9q8FMs
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鵬 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應鵬 之父／母。
          source:
            id: s_dGAmJvhGMnLBKMyY9q8FMs
            source_type: api_record
            title: 中国历代人物传记资料库：王應鵬（CBDB 221582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221582&o=json
            external_identifier: CBDB:221582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        status: active
        display_name: 王榮貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JCMo-3X2vv-Lya8_fsaa-T
        subject_person_id: p_f8cdeyyhqojaX8KjkiWgNJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iEL2WJ_GSjygI8OEPBcgL9
          claim_id: c_JCMo-3X2vv-Lya8_fsaa-T
          source_id: s_dGAmJvhGMnLBKMyY9q8FMs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dGAmJvhGMnLBKMyY9q8FMs
            source_type: api_record
            title: 中国历代人物传记资料库：王應鵬（CBDB 221582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221582&o=json
            external_identifier: CBDB:221582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hnvFbFQMD3qoDJL59kCJv1
        status: active
        display_name: 王應麟
        merged_into_person_id: null
---

# 王應鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鵬 | accepted |
| bio.summary | 王應鵬，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221582） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MpRHKYQgMhyeJ8uJAKZD2Z | 王榮貴 | accepted |
| other | p_hnvFbFQMD3qoDJL59kCJv1 | 王應麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應鵬（CBDB 221582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221582&o=json)
