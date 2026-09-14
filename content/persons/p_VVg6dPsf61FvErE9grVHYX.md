---
schema: wang-person/v1
id: p_VVg6dPsf61FvErE9grVHYX
status: active
merged_into: null
display_name: 王時某
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PnrkkV4C33YrAPLUCZsHp2
        subject_person_id: p_VVg6dPsf61FvErE9grVHYX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uUK63eKBNBdAPWo2G5JLAD
          claim_id: c_PnrkkV4C33YrAPLUCZsHp2
          source_id: s_BwHgLFRgQ8B2qLwFGRW1Hi
          stance: supports
          locator: CBDB:280638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280638）
          source: &a1
            id: s_BwHgLFRgQ8B2qLwFGRW1Hi
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280638&o=json
            external_identifier: CBDB:280638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K54au6BFpEbDs5LWDp1umt
        subject_person_id: p_VVg6dPsf61FvErE9grVHYX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時某，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280638）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kXOIdLFd8d0umjBTXMS9SG
          claim_id: c_K54au6BFpEbDs5LWDp1umt
          source_id: s_BwHgLFRgQ8B2qLwFGRW1Hi
          stance: supports
          locator: CBDB:280638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DFkjh8zErKGpMOd1sVfqCn
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VVg6dPsf61FvErE9grVHYX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qHsn3CAe7z--E9qANnODEX
          claim_id: c_DFkjh8zErKGpMOd1sVfqCn
          source_id: s_3VjuF1nC42b3LoSwHiUclE
          stance: supports
          locator: CBDB：兄弟 王時柯（68118）之父／母 王淵
          quotation: null
          interpretation_note: 由兄弟关系推断：王時某 与 王時柯 为同胞（CBDB 记「弟」），王時柯 之父／母即 王時某 之父／母。
          source:
            id: s_3VjuF1nC42b3LoSwHiUclE
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280638&o=json
            external_identifier: CBDB:280638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pTB7HsH5CT4VpfKwtjMaNH
        status: active
        display_name: 王淵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4pmRMrftdfsWZaS2oB1SE3
        subject_person_id: p_VVg6dPsf61FvErE9grVHYX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dvIxFfMb2XgSknVx03MDtv
          claim_id: c_4pmRMrftdfsWZaS2oB1SE3
          source_id: s_3VjuF1nC42b3LoSwHiUclE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68118 王時柯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3VjuF1nC42b3LoSwHiUclE
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280638&o=json
            external_identifier: CBDB:280638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pUwZmXJA98H12Cyv9Q6e5y
        status: active
        display_name: 王時柯
        merged_into_person_id: null
---

# 王時某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時某 | accepted |
| bio.summary | 王時某，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pTB7HsH5CT4VpfKwtjMaNH | 王淵 | accepted |
| other | p_pUwZmXJA98H12Cyv9Q6e5y | 王時柯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時某（CBDB 280638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280638&o=json)
