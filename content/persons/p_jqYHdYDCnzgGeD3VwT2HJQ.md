---
schema: wang-person/v1
id: p_jqYHdYDCnzgGeD3VwT2HJQ
status: active
merged_into: null
display_name: 王恂
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_STUbxVEJ8wsM6RkuupWt3Q
        subject_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HTMPRHGWmN2fSeyacUiWJY
          claim_id: c_STUbxVEJ8wsM6RkuupWt3Q
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: CBDB:126598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126598）
          source: &a1
            id: s_A8mfRA1Q8JxLwPQKEgaVDE
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 126598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126598&o=json
            external_identifier: CBDB:126598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AcAqSHiioFSZCLxfNh8nAp
        subject_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂，明人物。籍贯公安，身份为博學之人、工於文，入仕進士，曾任祭酒、巡撫。（中国历代人物传记资料库 CBDB 126598）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N7RWoZN24F_h0PEuUHnZjE
          claim_id: c_AcAqSHiioFSZCLxfNh8nAp
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: CBDB:126598
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T8d9TROzG_IsOwTv7iwRW0
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-B-JNi8ck1GHv5RQXPNLef
          claim_id: c_T8d9TROzG_IsOwTv7iwRW0
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NPL6P9BFMyJuLurCHCVYkH
        status: active
        display_name: 王貴華
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Z1kZDsN-_u5b3kVv1F_Guo
        subject_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9XUAubEfn666FrwKbbZdDZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iSDnAIuRl6_MNzsfRxNxKT
          claim_id: c_Z1kZDsN-_u5b3kVv1F_Guo
          source_id: s_FjGKUyrHSDr98Q4DKWzCbd
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FjGKUyrHSDr98Q4DKWzCbd
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王振妻)（CBDB 322904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322904&o=json
            external_identifier: CBDB:322904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9XUAubEfn666FrwKbbZdDZ
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_B1IJcMg_hwz1SDLRRoKtEt
        subject_person_id: p_Qd1wdV68WZVJmfszU24bRK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Klay2NaKrLjCbRQZfazk1Z
          claim_id: c_B1IJcMg_hwz1SDLRRoKtEt
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qd1wdV68WZVJmfszU24bRK
        status: active
        display_name: 王琦
        merged_into_person_id: null
    - claim:
        id: c_14-HZlOYGOkwbfcWTb6lP-
        subject_person_id: p_ssHxbbtDC56vT3wSvtFyWj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ndfA1QHpNgOAYaIpoYriDv
          claim_id: c_14-HZlOYGOkwbfcWTb6lP-
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ssHxbbtDC56vT3wSvtFyWj
        status: active
        display_name: 王文才
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_cfNlH0KspnJ9d9ZNghGP8K
        subject_person_id: p_69Wd3aw3CTX56SjzuzKuQY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8vkuau-s5tvjhDwa4oeeL
          claim_id: c_cfNlH0KspnJ9d9ZNghGP8K
          source_id: s_2KfOeEs30hFTN3jHI1JSmC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126598 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2KfOeEs30hFTN3jHI1JSmC
            source_type: api_record
            title: 中国历代人物传记资料库：王思忠（CBDB 322906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322906&o=json
            external_identifier: CBDB:322906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_69Wd3aw3CTX56SjzuzKuQY
        status: active
        display_name: 王思忠
        merged_into_person_id: null
    - claim:
        id: c_31kCpawbbTKoyezoE5gvu4
        subject_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y6pBzeVgTjUtyAuzCyRoUb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RPY4jO_Vi5qNk0VS9cNIE_
          claim_id: c_31kCpawbbTKoyezoE5gvu4
          source_id: s_DQbUJs200jJW5o-6aRg-i9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126598 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DQbUJs200jJW5o-6aRg-i9
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 322905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322905&o=json
            external_identifier: CBDB:322905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y6pBzeVgTjUtyAuzCyRoUb
        status: active
        display_name: 王思聰
        merged_into_person_id: null
---

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| bio.summary | 王恂，明人物。籍贯公安，身份为博學之人、工於文，入仕進士，曾任祭酒、巡撫。（中国历代人物传记资料库 CBDB 126598） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NPL6P9BFMyJuLurCHCVYkH | 王貴華 | accepted |
| spouses | p_9XUAubEfn666FrwKbbZdDZ | 張氏 | accepted |
| ancestors | p_Qd1wdV68WZVJmfszU24bRK | 王琦 | accepted |
| ancestors | p_ssHxbbtDC56vT3wSvtFyWj | 王文才 | accepted |
| other | p_69Wd3aw3CTX56SjzuzKuQY | 王思忠 | accepted |
| other | p_y6pBzeVgTjUtyAuzCyRoUb | 王思聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思聰（CBDB 322905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322905&o=json)
- [中国历代人物传记资料库：王思忠（CBDB 322906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322906&o=json)
- [中国历代人物传记资料库：王恂（CBDB 126598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126598&o=json)
- [中国历代人物传记资料库：張氏(王振妻)（CBDB 322904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322904&o=json)
