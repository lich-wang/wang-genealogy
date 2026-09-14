---
schema: wang-person/v1
id: p_Zv9iBHh6zJnNFQipkrhq3H
status: active
merged_into: null
display_name: 王億
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RsDVixoVDJgDgmvykknfB6
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5ETdLbtEHdeS5cD1mHGn4G
          claim_id: c_RsDVixoVDJgDgmvykknfB6
          source_id: s_NkUDw2KFGUuhuLHMfCDtDi
          stance: supports
          locator: CBDB:199236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199236）
          source: &a1
            id: s_NkUDw2KFGUuhuLHMfCDtDi
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 199236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199236&o=json
            external_identifier: CBDB:199236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nsuhqUHBau5QH5WpCtDdDs
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1432年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7357szUm4PM8dNkJFrZtM
          claim_id: c_nsuhqUHBau5QH5WpCtDdDs
          source_id: s_NkUDw2KFGUuhuLHMfCDtDi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BevCa579y4tJ56ibiYEhvE
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王億（生于1432年），明人物。成化二年進士，籍贯銅梁，入仕進士。（中国历代人物传记资料库 CBDB 199236）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fJv3bR4rp8QDmQLN2El0U8
          claim_id: c_BevCa579y4tJ56ibiYEhvE
          source_id: s_NkUDw2KFGUuhuLHMfCDtDi
          stance: supports
          locator: CBDB:199236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ESoVWsjJSDAa3cBA9nuEZc
        subject_person_id: p_1cUCidbF85cd8DWrZcACj3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yymBVfEqy7SX1_9d8C3pKG
          claim_id: c_ESoVWsjJSDAa3cBA9nuEZc
          source_id: s_oXRjf1kBatv1gFGRM2Nw4h
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零二名：曾孫；重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oXRjf1kBatv1gFGRM2Nw4h
            source_type: api_record
            title: 中国历代人物传记资料库：王德昇（CBDB 242133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242133&o=json
            external_identifier: CBDB:242133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1cUCidbF85cd8DWrZcACj3
        status: active
        display_name: 王德昇
        merged_into_person_id: null
    - claim:
        id: c_4HVK4XPYa8RHOX3GQGWVdq
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UNHRZPPXYx_ZrxWfdAA4W
          claim_id: c_4HVK4XPYa8RHOX3GQGWVdq
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3QYpbUb1KA1PLDW4B4gFnk
            source_type: api_record
            title: 中国历代人物传记资料库：王勝宗（CBDB 236827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json
            external_identifier: CBDB:236827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jgukCQ6yXT1KHa2JP2QrQF
        status: active
        display_name: 王勝宗
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_l_0W4Z3tRveeea54VDwCRb
        subject_person_id: p_2e1xDrBQLLaowuNAJfVekM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWWs-uyo3EfBMCxqCT63yR
          claim_id: c_l_0W4Z3tRveeea54VDwCRb
          source_id: s_rH46g1QQ7YVcDcyZX-S70T
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_uLLHj0I7LTdw5TCAP2fX0j
        subject_person_id: p_HNgP9tS8ifQnN38gR5s4MN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9HjdymPcM1xtSRlNf733dr
          claim_id: c_uLLHj0I7LTdw5TCAP2fX0j
          source_id: s_B47ama7cQh-wvF7fp4SzwP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_M74iQyh-fCnhPmAMBMYxS3
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_d6TxnMJzGBZ2Y7E4pzva77
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaTYju-OARYzc6G3F8RsIO
          claim_id: c_M74iQyh-fCnhPmAMBMYxS3
          source_id: s_2928ayQ-aiPwpSXNyfsVrp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Ds28viJzWu3ZBb65xQW6LF
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jfA2e6jVhosQvNeWUANYcD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yy1-Fbu48musxjB4n_1xM5
          claim_id: c_Ds28viJzWu3ZBb65xQW6LF
          source_id: s_rIDOS-_zr7GtRGTrOIw75Z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_xqBCBrvDCUrsNUa1wFPD3M
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qAa8JxZp1vN3kNe16HV7Ny
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oeeizgCVcskgHh2Ty1vlk-
          claim_id: c_xqBCBrvDCUrsNUa1wFPD3M
          source_id: s_v9DfxNZ6f9Fw8mA3cUh-CU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_NobgXKXLCwDU3ZijBoOMT_
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tE7YPkWSJ8ET97rrVnMNzz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fj-7iAedtM4Hdcksz7fTMw
          claim_id: c_NobgXKXLCwDU3ZijBoOMT_
          source_id: s_9lc8FMjBo1Xg454IDqZ18k
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王億

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王億 | accepted |
| birth.date | 1432年 | accepted |
| bio.summary | 王億（生于1432年），明人物。成化二年進士，籍贯銅梁，入仕進士。（中国历代人物传记资料库 CBDB 199236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| ancestors | p_1cUCidbF85cd8DWrZcACj3 | 王德昇 | accepted |
| ancestors | p_jgukCQ6yXT1KHa2JP2QrQF | 王勝宗 | accepted |
| other | p_2e1xDrBQLLaowuNAJfVekM | 王侃 | accepted |
| other | p_HNgP9tS8ifQnN38gR5s4MN | 王偉 | accepted |
| other | p_d6TxnMJzGBZ2Y7E4pzva77 | 王修 | accepted |
| other | p_jfA2e6jVhosQvNeWUANYcD | 王儒 | accepted |
| other | p_qAa8JxZp1vN3kNe16HV7Ny | 王佑 | accepted |
| other | p_tE7YPkWSJ8ET97rrVnMNzz | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德昇（CBDB 242133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242133&o=json)
- [中国历代人物传记资料库：王侃（CBDB 236835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json)
- [中国历代人物传记资料库：王儒（CBDB 236837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json)
- [中国历代人物传记资料库：王勝宗（CBDB 236827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json)
- [中国历代人物传记资料库：王偉（CBDB 236836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236836&o=json)
- [中国历代人物传记资料库：王修（CBDB 242145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242145&o=json)
- [中国历代人物传记资料库：王億（CBDB 199236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199236&o=json)
- [中国历代人物传记资料库：王佑（CBDB 236834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json)
- [中国历代人物传记资料库：王仲亨（CBDB 236828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json)
- [中国历代人物传记资料库：王佐（CBDB 236833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236833&o=json)
