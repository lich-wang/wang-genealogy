---
schema: wang-person/v1
id: p_Vgq6Br2pMNYPqGyMJ8HTAx
status: active
merged_into: null
display_name: 王之鵬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CXzBPDtD3hNowanYk32nkT
        subject_person_id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WpHzT9DZtFc8zAXYCFvj8A
          claim_id: c_CXzBPDtD3hNowanYk32nkT
          source_id: s_LrMypHMWUafSmzVU89bu9c
          stance: supports
          locator: CBDB:216061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216061）
          source: &a1
            id: s_LrMypHMWUafSmzVU89bu9c
            source_type: api_record
            title: 中国历代人物传记资料库：王之鵬（CBDB 216061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json
            external_identifier: CBDB:216061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UebxSqraS5GqdBefwE8aXC
        subject_person_id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鵬，明人物。萬曆五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 216061）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cFcB8c160viQZsDLIOETR9
          claim_id: c_UebxSqraS5GqdBefwE8aXC
          source_id: s_LrMypHMWUafSmzVU89bu9c
          stance: supports
          locator: CBDB:216061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i4XIwhQ831xf6v7XqKbtXW
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWd3h0j8p3JfHDzz18RQeQ
          claim_id: c_i4XIwhQ831xf6v7XqKbtXW
          source_id: s_Qq554z1Ig8pgW-Ih0l_KLE
          stance: supports
          locator: CBDB：兄弟 王之麟（338691）之父／母 王萬齡
          quotation: null
          interpretation_note: 由兄弟关系推断：王之鵬 与 王之麟 为同胞（CBDB 记「兄」），王之麟 之父／母即 王之鵬 之父／母。
          source:
            id: s_Qq554z1Ig8pgW-Ih0l_KLE
            source_type: api_record
            title: 中国历代人物传记资料库：王之鵬（CBDB 216061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json
            external_identifier: CBDB:216061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ACyEmNR3JYfTVCeFjd3Md9
        status: active
        display_name: 王萬齡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tM9o9mpf-kb8B3_q2Q2xH_
        subject_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Vgq6Br2pMNYPqGyMJ8HTAx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4mUP0qR1vxgSmN5uLKv3Uw
          claim_id: c_tM9o9mpf-kb8B3_q2Q2xH_
          source_id: s_Qq554z1Ig8pgW-Ih0l_KLE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338691 王之麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Qq554z1Ig8pgW-Ih0l_KLE
            source_type: api_record
            title: 中国历代人物传记资料库：王之鵬（CBDB 216061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json
            external_identifier: CBDB:216061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EbU5HxFXjQt3D8gkdNvhGE
        status: active
        display_name: 王之麟
        merged_into_person_id: null
---

# 王之鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鵬 | accepted |
| bio.summary | 王之鵬，明人物。萬曆五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 216061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ACyEmNR3JYfTVCeFjd3Md9 | 王萬齡 | accepted |
| other | p_EbU5HxFXjQt3D8gkdNvhGE | 王之麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之鵬（CBDB 216061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216061&o=json)
