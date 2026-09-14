---
schema: wang-person/v1
id: p_26uVgWbWAkUDcgWw8N6zSa
status: active
merged_into: null
display_name: 王良玉
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oH2w8h1fHpbugPhDM2J4rR
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zkkZrTj6PL4WwK7CdshY27
          claim_id: c_oH2w8h1fHpbugPhDM2J4rR
          source_id: s_PdAxWVS5S1LbYfiuHsZ3d4
          stance: supports
          locator: CBDB:306001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306001）
          source: &a1
            id: s_PdAxWVS5S1LbYfiuHsZ3d4
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 306001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306001&o=json
            external_identifier: CBDB:306001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P7F6LA2o6di8cDNekYjQ8K
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良玉，明人物。嘉靖二十三年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 306001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GwPl6hIGsAvUuf4_tjKNd9
          claim_id: c_P7F6LA2o6di8cDNekYjQ8K
          source_id: s_PdAxWVS5S1LbYfiuHsZ3d4
          stance: supports
          locator: CBDB:306001
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-AyDHQMJiW0dnVYtwgzawX
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Znen7jNez4DsQZ8W2U88iW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gqtOxnjoq7ciKrRghEHVlt
          claim_id: c_-AyDHQMJiW0dnVYtwgzawX
          source_id: s_PdAxWVS5S1LbYfiuHsZ3d4
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Znen7jNez4DsQZ8W2U88iW
        status: active
        display_name: 王會
        merged_into_person_id: null
    - claim:
        id: c_iDmBAgQb5Igi8lgoV8EmWW
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FySaQ67mXQaGo4CCa3AAv9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSI4o7jmjcwB72oGb7Ua8S
          claim_id: c_iDmBAgQb5Igi8lgoV8EmWW
          source_id: s_YN0541UPL1bUY0T12tS71V
          stance: supports
          locator: CBDB：兄弟 王會（126770）之父／母 王良玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王俞 与 王會 为同胞（CBDB 记「兄」），王會 之父／母即 王俞 之父／母。
          source:
            id: s_YN0541UPL1bUY0T12tS71V
            source_type: api_record
            title: 中国历代人物传记资料库：王俞（CBDB 306006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306006&o=json
            external_identifier: CBDB:306006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FySaQ67mXQaGo4CCa3AAv9
        status: active
        display_name: 王俞
        merged_into_person_id: null
    - claim:
        id: c_aVaRJxvlwieIQirLcOGpxC
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K5b66PBeopHvtQMuTe46Q1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AE0rI5X5Bxr2LR248EB8CO
          claim_id: c_aVaRJxvlwieIQirLcOGpxC
          source_id: s_S44lj6v2uFM3DomjIfLn7t
          stance: supports
          locator: CBDB：兄弟 王會（126770）之父／母 王良玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王僉 与 王會 为同胞（CBDB 记「兄」），王會 之父／母即 王僉 之父／母。
          source:
            id: s_S44lj6v2uFM3DomjIfLn7t
            source_type: api_record
            title: 中国历代人物传记资料库：王僉（CBDB 306009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306009&o=json
            external_identifier: CBDB:306009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K5b66PBeopHvtQMuTe46Q1
        status: active
        display_name: 王僉
        merged_into_person_id: null
    - claim:
        id: c_F7EMkXRO1GqmjrXyttEY9V
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S8WxoM5Fh1DRXyFwC4NkvM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fowngru4pUnkBLTT_BGstK
          claim_id: c_F7EMkXRO1GqmjrXyttEY9V
          source_id: s_r4mSPFEZtY7gLpfP7EF7T_
          stance: supports
          locator: CBDB：兄弟 王會（126770）之父／母 王良玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王命 与 王會 为同胞（CBDB 记「弟」），王會 之父／母即 王命 之父／母。
          source:
            id: s_r4mSPFEZtY7gLpfP7EF7T_
            source_type: api_record
            title: 中国历代人物传记资料库：王命（CBDB 306005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306005&o=json
            external_identifier: CBDB:306005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S8WxoM5Fh1DRXyFwC4NkvM
        status: active
        display_name: 王命
        merged_into_person_id: null
    - claim:
        id: c_8KDfcgw73gT3qB_pkBGpE1
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rKPxzCTxmXZPj1nAAFCiof
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x_Gavkwe6iDjBIiqRy_UlN
          claim_id: c_8KDfcgw73gT3qB_pkBGpE1
          source_id: s_0Kal-NfveXtowD0MdoknJQ
          stance: supports
          locator: CBDB：兄弟 王會（126770）之父／母 王良玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王章 与 王會 为同胞（CBDB 记「弟」），王會 之父／母即 王章 之父／母。
          source:
            id: s_0Kal-NfveXtowD0MdoknJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 306004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306004&o=json
            external_identifier: CBDB:306004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rKPxzCTxmXZPj1nAAFCiof
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_HpZsh2qljykq4N_nclWcCd
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zUXH4N4LJMnYiV4RcqRJsE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dmzX58-mPdwn0Q1aVllJDY
          claim_id: c_HpZsh2qljykq4N_nclWcCd
          source_id: s_koF9ThFNR6tmw1n7myRyGC
          stance: supports
          locator: CBDB：兄弟 王會（126770）之父／母 王良玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王念 与 王會 为同胞（CBDB 记「兄」），王會 之父／母即 王念 之父／母。
          source:
            id: s_koF9ThFNR6tmw1n7myRyGC
            source_type: api_record
            title: 中国历代人物传记资料库：王念（CBDB 306008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306008&o=json
            external_identifier: CBDB:306008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zUXH4N4LJMnYiV4RcqRJsE
        status: active
        display_name: 王念
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良玉 | accepted |
| bio.summary | 王良玉，明人物。嘉靖二十三年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 306001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Znen7jNez4DsQZ8W2U88iW | 王會 | accepted |
| children | p_FySaQ67mXQaGo4CCa3AAv9 | 王俞 | accepted |
| children | p_K5b66PBeopHvtQMuTe46Q1 | 王僉 | accepted |
| children | p_S8WxoM5Fh1DRXyFwC4NkvM | 王命 | accepted |
| children | p_rKPxzCTxmXZPj1nAAFCiof | 王章 | accepted |
| children | p_zUXH4N4LJMnYiV4RcqRJsE | 王念 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良玉（CBDB 306001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306001&o=json)
- [中国历代人物传记资料库：王命（CBDB 306005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306005&o=json)
- [中国历代人物传记资料库：王念（CBDB 306008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306008&o=json)
- [中国历代人物传记资料库：王僉（CBDB 306009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306009&o=json)
- [中国历代人物传记资料库：王俞（CBDB 306006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306006&o=json)
- [中国历代人物传记资料库：王章（CBDB 306004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306004&o=json)
