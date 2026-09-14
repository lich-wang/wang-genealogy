---
schema: wang-person/v1
id: p_UxPyyPKFuTNFgt47NpTBe5
status: active
merged_into: null
display_name: 王良
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UuHA4AJk4AEeirb8xpRzXE
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q6Hr1MCFfnTYxD2LDE9hHe
          claim_id: c_UuHA4AJk4AEeirb8xpRzXE
          source_id: s_KfjHKn394vW74yEttujij2
          stance: supports
          locator: CBDB:237223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237223）
          source: &a1
            id: s_KfjHKn394vW74yEttujij2
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 237223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237223&o=json
            external_identifier: CBDB:237223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7NbnBqp39DUHMGeHSHN5FG
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良，明人物。正統四年進士，籍贯高平，曾任縣學教諭。（中国历代人物传记资料库 CBDB 237223）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ya03jY1VnneGerTgr3Y557
          claim_id: c_7NbnBqp39DUHMGeHSHN5FG
          source_id: s_KfjHKn394vW74yEttujij2
          stance: supports
          locator: CBDB:237223
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aSUFr8U1RusZfr4e_i75GM
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3c99mAbtCMe882FKM3LMji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ptyzKgn9FzH8mc8p6xtxHp
          claim_id: c_aSUFr8U1RusZfr4e_i75GM
          source_id: s_2T2xWRGb8XqgmHCNfr1KU2
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2T2xWRGb8XqgmHCNfr1KU2
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 207868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207868&o=json
            external_identifier: CBDB:207868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3c99mAbtCMe882FKM3LMji
        status: active
        display_name: 王晏
        merged_into_person_id: null
    - claim:
        id: c_kEhmCpClmVvQe__1DKLytr
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZeeUm458xhyWD94ptyths
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lSrdGJ5VxSvtvoqzx3fw_j
          claim_id: c_kEhmCpClmVvQe__1DKLytr
          source_id: s_Jtx6fEQHI97O6F-ftycIIb
          stance: supports
          locator: CBDB：兄弟 王晏（207868）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王暋 与 王晏 为同胞（CBDB 记「兄」），王晏 之父／母即 王暋 之父／母。
          source:
            id: s_Jtx6fEQHI97O6F-ftycIIb
            source_type: api_record
            title: 中国历代人物传记资料库：王暋（CBDB 237228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237228&o=json
            external_identifier: CBDB:237228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8ZeeUm458xhyWD94ptyths
        status: active
        display_name: 王暋
        merged_into_person_id: null
    - claim:
        id: c_urcfuK_tSoeoon55HTRyyK
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZTD6QwtFte8SkypGed5LJm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZHTH-yLAKXynAfr0fvo47
          claim_id: c_urcfuK_tSoeoon55HTRyyK
          source_id: s_2OFgkpLhbqQlHihfDRYhfY
          stance: supports
          locator: CBDB：兄弟 王晏（207868）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王昶 与 王晏 为同胞（CBDB 记「兄」），王晏 之父／母即 王昶 之父／母。
          source:
            id: s_2OFgkpLhbqQlHihfDRYhfY
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 237227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237227&o=json
            external_identifier: CBDB:237227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZTD6QwtFte8SkypGed5LJm
        status: active
        display_name: 王昶
        merged_into_person_id: null
    - claim:
        id: c_PeDOVGliaQYEghFXmtIGaG
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hmpVZCc6DiB8NnVHu4QTrX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3dEeQ-Tbkx14MMxrt_D36L
          claim_id: c_PeDOVGliaQYEghFXmtIGaG
          source_id: s_k1e5XjlUEketDNLignOX-s
          stance: supports
          locator: CBDB：兄弟 王晏（207868）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王昪 与 王晏 为同胞（CBDB 记「兄」），王晏 之父／母即 王昪 之父／母。
          source:
            id: s_k1e5XjlUEketDNLignOX-s
            source_type: api_record
            title: 中国历代人物传记资料库：王昪（CBDB 237229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237229&o=json
            external_identifier: CBDB:237229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hmpVZCc6DiB8NnVHu4QTrX
        status: active
        display_name: 王昪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | 王良，明人物。正統四年進士，籍贯高平，曾任縣學教諭。（中国历代人物传记资料库 CBDB 237223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3c99mAbtCMe882FKM3LMji | 王晏 | accepted |
| children | p_8ZeeUm458xhyWD94ptyths | 王暋 | accepted |
| children | p_ZTD6QwtFte8SkypGed5LJm | 王昶 | accepted |
| children | p_hmpVZCc6DiB8NnVHu4QTrX | 王昪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昪（CBDB 237229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237229&o=json)
- [中国历代人物传记资料库：王昶（CBDB 237227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237227&o=json)
- [中国历代人物传记资料库：王良（CBDB 237223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237223&o=json)
- [中国历代人物传记资料库：王暋（CBDB 237228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237228&o=json)
- [中国历代人物传记资料库：王晏（CBDB 207868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207868&o=json)
