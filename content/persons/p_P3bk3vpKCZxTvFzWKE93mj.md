---
schema: wang-person/v1
id: p_P3bk3vpKCZxTvFzWKE93mj
status: active
merged_into: null
display_name: 王麟
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MwFHPqq1PRyWbZPGJK6nzk
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aPCGuFNDhbyGTXEPWGFdEM
          claim_id: c_MwFHPqq1PRyWbZPGJK6nzk
          source_id: s_z7d5HYzKcD7H64D6YKWzRd
          stance: supports
          locator: CBDB:245697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245697）
          source: &a1
            id: s_z7d5HYzKcD7H64D6YKWzRd
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 245697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245697&o=json
            external_identifier: CBDB:245697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_93nVK4fMYcTApe3eEFQw5D
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。成化八年進士，籍贯文登，曾任指揮同知。（中国历代人物传记资料库 CBDB 245697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3ty_N0nvpUtE8fZTqS4vg8
          claim_id: c_93nVK4fMYcTApe3eEFQw5D
          source_id: s_z7d5HYzKcD7H64D6YKWzRd
          stance: supports
          locator: CBDB:245697
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-pPL40RkHw1n6aldebjRJi
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G0_XUAWHUAX2EGOLbiLOze
          claim_id: c_-pPL40RkHw1n6aldebjRJi
          source_id: s_z7d5HYzKcD7H64D6YKWzRd
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wEuXW2QRPfavvbFYPCJ1DK
        status: active
        display_name: 王宏
        merged_into_person_id: null
    - claim:
        id: c_Xon7OH9ys2G2GLwlnmngYv
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6SWf882NNoMs9TT22ducd7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHhcErCIohEazLS4HG3n6o
          claim_id: c_Xon7OH9ys2G2GLwlnmngYv
          source_id: s_BqLAL_O6eoSGacmhZddDMm
          stance: supports
          locator: CBDB：兄弟 王宏（199484）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王宏 为同胞（CBDB 记「弟」），王宏 之父／母即 王寧 之父／母。
          source:
            id: s_BqLAL_O6eoSGacmhZddDMm
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 245700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245700&o=json
            external_identifier: CBDB:245700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6SWf882NNoMs9TT22ducd7
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_Jy1SIwonwbeSLJoZJLvjni
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8YQoJ9ap7XQ9u851x9wtF6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j_Tut4UVuB8jd8LcxeGz8l
          claim_id: c_Jy1SIwonwbeSLJoZJLvjni
          source_id: s_iGh4gea0mwfSsO_9-DribX
          stance: supports
          locator: CBDB：兄弟 王宏（199484）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王安 与 王宏 为同胞（CBDB 记「弟」），王宏 之父／母即 王安 之父／母。
          source:
            id: s_iGh4gea0mwfSsO_9-DribX
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 245701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245701&o=json
            external_identifier: CBDB:245701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8YQoJ9ap7XQ9u851x9wtF6
        status: active
        display_name: 王安
        merged_into_person_id: null
    - claim:
        id: c_DPd0IRlkNlORa8EfqytW68
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BmWgCLqoG2bs8skh9MjSZT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fI_80hwTCUd67dN7544Xz4
          claim_id: c_DPd0IRlkNlORa8EfqytW68
          source_id: s_13mK4eiRjF8YlrrRnd5UFX
          stance: supports
          locator: CBDB：兄弟 王宏（199484）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王寬 与 王宏 为同胞（CBDB 记「兄」），王宏 之父／母即 王寬 之父／母。
          source:
            id: s_13mK4eiRjF8YlrrRnd5UFX
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 245704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json
            external_identifier: CBDB:245704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BmWgCLqoG2bs8skh9MjSZT
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_ouAi-0CSQ7-oZH9YGIOZ5w
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MPBiL1iM5rKucTNCufCi87
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_414hS6cbocpwUBtFZ3aFQ8
          claim_id: c_ouAi-0CSQ7-oZH9YGIOZ5w
          source_id: s_6W_7RkfMxqnou77KqQ9KiB
          stance: supports
          locator: CBDB：兄弟 王宏（199484）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王容 与 王宏 为同胞（CBDB 记「弟」），王宏 之父／母即 王容 之父／母。
          source:
            id: s_6W_7RkfMxqnou77KqQ9KiB
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 245703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json
            external_identifier: CBDB:245703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MPBiL1iM5rKucTNCufCi87
        status: active
        display_name: 王容
        merged_into_person_id: null
    - claim:
        id: c_d6SRSk-sK3jIetXjjRne87
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e83ucJicuv1MxVjgd5jQ2Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Q6DuKpKtVCo5uI-jQYxXF
          claim_id: c_d6SRSk-sK3jIetXjjRne87
          source_id: s_f6Bbhpx1b3EB41lplD3lwi
          stance: supports
          locator: CBDB：兄弟 王宏（199484）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王實 与 王宏 为同胞（CBDB 记「弟」），王宏 之父／母即 王實 之父／母。
          source:
            id: s_f6Bbhpx1b3EB41lplD3lwi
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 245702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245702&o=json
            external_identifier: CBDB:245702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e83ucJicuv1MxVjgd5jQ2Q
        status: active
        display_name: 王實
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。成化八年進士，籍贯文登，曾任指揮同知。（中国历代人物传记资料库 CBDB 245697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wEuXW2QRPfavvbFYPCJ1DK | 王宏 | accepted |
| children | p_6SWf882NNoMs9TT22ducd7 | 王寧 | accepted |
| children | p_8YQoJ9ap7XQ9u851x9wtF6 | 王安 | accepted |
| children | p_BmWgCLqoG2bs8skh9MjSZT | 王寬 | accepted |
| children | p_MPBiL1iM5rKucTNCufCi87 | 王容 | accepted |
| children | p_e83ucJicuv1MxVjgd5jQ2Q | 王實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 245701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245701&o=json)
- [中国历代人物传记资料库：王寬（CBDB 245704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json)
- [中国历代人物传记资料库：王麟（CBDB 245697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245697&o=json)
- [中国历代人物传记资料库：王寧（CBDB 245700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245700&o=json)
- [中国历代人物传记资料库：王容（CBDB 245703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245703&o=json)
- [中国历代人物传记资料库：王實（CBDB 245702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245702&o=json)
