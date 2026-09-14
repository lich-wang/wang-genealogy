---
schema: wang-person/v1
id: p_4C5VKRVzuAvr67X2BV8fCM
status: active
merged_into: null
display_name: 王仲亨
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NMzYAg7dBokSLpRSxnhnes
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1cnuXWnqWMmRYVyJ2geSaG
          claim_id: c_NMzYAg7dBokSLpRSxnhnes
          source_id: s_uP29PrTEmYii49WH6cPBB1
          stance: supports
          locator: CBDB:236828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236828）
          source: &a1
            id: s_uP29PrTEmYii49WH6cPBB1
            source_type: api_record
            title: 中国历代人物传记资料库：王仲亨（CBDB 236828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json
            external_identifier: CBDB:236828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jp6N3xzecHHguX8iPv7y1f
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲亨，明人物。正統四年進士，籍贯銅梁，曾任知府。（中国历代人物传记资料库 CBDB 236828）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rfx93wjxbdCTbQK3SzKOyc
          claim_id: c_jp6N3xzecHHguX8iPv7y1f
          source_id: s_uP29PrTEmYii49WH6cPBB1
          stance: supports
          locator: CBDB:236828
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_M4KxMxk8phSLXOPT0EiZ0q
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b86fjnoK59mGLdwi8VJS_c
          claim_id: c_M4KxMxk8phSLXOPT0EiZ0q
          source_id: s_uP29PrTEmYii49WH6cPBB1
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zv9iBHh6zJnNFQipkrhq3H
        status: active
        display_name: 王億
        merged_into_person_id: null
    - claim:
        id: c_zJPsioIIWHmSmanfz5X2qf
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nK0ltOWpCX8GdGIEglacgT
          claim_id: c_zJPsioIIWHmSmanfz5X2qf
          source_id: s_uP29PrTEmYii49WH6cPBB1
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        status: active
        display_name: 王儉
        merged_into_person_id: null
    - claim:
        id: c_hEn7qpvNibFyyQ2sS3Ha2F
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2e1xDrBQLLaowuNAJfVekM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SW39hUr5K7IFRMG2U_hB0I
          claim_id: c_hEn7qpvNibFyyQ2sS3Ha2F
          source_id: s_rH46g1QQ7YVcDcyZX-S70T
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王儉 为同胞（CBDB 记「兄」），王儉 之父／母即 王侃 之父／母。
          source:
            id: s_rH46g1QQ7YVcDcyZX-S70T
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 236835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json
            external_identifier: CBDB:236835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2e1xDrBQLLaowuNAJfVekM
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_xzyu6guTKWtP-7btCuw7G1
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HNgP9tS8ifQnN38gR5s4MN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HOgJt7WfMJTyZJNYHPm5HI
          claim_id: c_xzyu6guTKWtP-7btCuw7G1
          source_id: s_B47ama7cQh-wvF7fp4SzwP
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王偉 与 王儉 为同胞（CBDB 记「兄」），王儉 之父／母即 王偉 之父／母。
          source:
            id: s_B47ama7cQh-wvF7fp4SzwP
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 236836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236836&o=json
            external_identifier: CBDB:236836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HNgP9tS8ifQnN38gR5s4MN
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c_rjbUG_AXRqLLxRCpH9uwaN
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d6TxnMJzGBZ2Y7E4pzva77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FR0ljbrE7XfMDAsLj-kSjX
          claim_id: c_rjbUG_AXRqLLxRCpH9uwaN
          source_id: s_2928ayQ-aiPwpSXNyfsVrp
          stance: supports
          locator: CBDB：兄弟 王億（199236）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王修 与 王億 为同胞（CBDB 记「弟」），王億 之父／母即 王修 之父／母。
          source:
            id: s_2928ayQ-aiPwpSXNyfsVrp
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 242145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242145&o=json
            external_identifier: CBDB:242145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d6TxnMJzGBZ2Y7E4pzva77
        status: active
        display_name: 王修
        merged_into_person_id: null
    - claim:
        id: c_m1GLjzTIoRzyWxyAoYBd4J
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jfA2e6jVhosQvNeWUANYcD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CiRQLEiR9J2GgNw8phALQs
          claim_id: c_m1GLjzTIoRzyWxyAoYBd4J
          source_id: s_rIDOS-_zr7GtRGTrOIw75Z
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王儉 为同胞（CBDB 记「兄」），王儉 之父／母即 王儒 之父／母。
          source:
            id: s_rIDOS-_zr7GtRGTrOIw75Z
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 236837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json
            external_identifier: CBDB:236837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jfA2e6jVhosQvNeWUANYcD
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_ZcZigz9l1BIo1in9oseMG8
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kKyKSR6858R5mGvRyVf9db
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x7l-lu99RehvuM5DV6fntN
          claim_id: c_ZcZigz9l1BIo1in9oseMG8
          source_id: s_0MzUOYmYANbmPjZFmiWcpk
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王綱 与 王儉 为同胞（CBDB 记「弟」），王儉 之父／母即 王綱 之父／母。
          source:
            id: s_0MzUOYmYANbmPjZFmiWcpk
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 236832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236832&o=json
            external_identifier: CBDB:236832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kKyKSR6858R5mGvRyVf9db
        status: active
        display_name: 王綱
        merged_into_person_id: null
    - claim:
        id: c_aCF_GOpS5jtkrqEvcBnWU9
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qAa8JxZp1vN3kNe16HV7Ny
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnHDaA3F6B_ZbqkoRGuuDY
          claim_id: c_aCF_GOpS5jtkrqEvcBnWU9
          source_id: s_v9DfxNZ6f9Fw8mA3cUh-CU
          stance: supports
          locator: CBDB：兄弟 王億（199236）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王佑 与 王億 为同胞（CBDB 记「弟」），王億 之父／母即 王佑 之父／母。
          source:
            id: s_v9DfxNZ6f9Fw8mA3cUh-CU
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 236834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json
            external_identifier: CBDB:236834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qAa8JxZp1vN3kNe16HV7Ny
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_khhjNVKqNlWl-2g4ntUZVs
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rfDScpjpktkzFSX1X2TGw7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_of92M8S5TFYtHAPPE24L3m
          claim_id: c_khhjNVKqNlWl-2g4ntUZVs
          source_id: s_z-sSBPydWxELvDGPwMRRFI
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王脩 与 王儉 为同胞（CBDB 记「兄」），王儉 之父／母即 王脩 之父／母。
          source:
            id: s_z-sSBPydWxELvDGPwMRRFI
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 236838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236838&o=json
            external_identifier: CBDB:236838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rfDScpjpktkzFSX1X2TGw7
        status: active
        display_name: 王脩
        merged_into_person_id: null
    - claim:
        id: c_N0tGaDIdmXlIgUFXJ5aO6E
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tE7YPkWSJ8ET97rrVnMNzz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P-Kzr4CAcFXBDKTSRqftMY
          claim_id: c_N0tGaDIdmXlIgUFXJ5aO6E
          source_id: s_9lc8FMjBo1Xg454IDqZ18k
          stance: supports
          locator: CBDB：兄弟 王億（199236）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王億 为同胞（CBDB 记「弟」），王億 之父／母即 王佐 之父／母。
          source:
            id: s_9lc8FMjBo1Xg454IDqZ18k
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 236833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236833&o=json
            external_identifier: CBDB:236833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tE7YPkWSJ8ET97rrVnMNzz
        status: active
        display_name: 王佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲亨 | accepted |
| bio.summary | 王仲亨，明人物。正統四年進士，籍贯銅梁，曾任知府。（中国历代人物传记资料库 CBDB 236828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Zv9iBHh6zJnNFQipkrhq3H | 王億 | accepted |
| children | p_gVNWQ2fsh1sB6kRPqwK7Rn | 王儉 | accepted |
| children | p_2e1xDrBQLLaowuNAJfVekM | 王侃 | accepted |
| children | p_HNgP9tS8ifQnN38gR5s4MN | 王偉 | accepted |
| children | p_d6TxnMJzGBZ2Y7E4pzva77 | 王修 | accepted |
| children | p_jfA2e6jVhosQvNeWUANYcD | 王儒 | accepted |
| children | p_kKyKSR6858R5mGvRyVf9db | 王綱 | accepted |
| children | p_qAa8JxZp1vN3kNe16HV7Ny | 王佑 | accepted |
| children | p_rfDScpjpktkzFSX1X2TGw7 | 王脩 | accepted |
| children | p_tE7YPkWSJ8ET97rrVnMNzz | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 236832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236832&o=json)
- [中国历代人物传记资料库：王侃（CBDB 236835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json)
- [中国历代人物传记资料库：王儒（CBDB 236837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json)
- [中国历代人物传记资料库：王偉（CBDB 236836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236836&o=json)
- [中国历代人物传记资料库：王修（CBDB 242145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242145&o=json)
- [中国历代人物传记资料库：王脩（CBDB 236838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236838&o=json)
- [中国历代人物传记资料库：王佑（CBDB 236834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json)
- [中国历代人物传记资料库：王仲亨（CBDB 236828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json)
- [中国历代人物传记资料库：王佐（CBDB 236833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236833&o=json)
