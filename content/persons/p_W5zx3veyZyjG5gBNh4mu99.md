---
schema: wang-person/v1
id: p_W5zx3veyZyjG5gBNh4mu99
status: active
merged_into: null
display_name: 王道正
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZZRHw3bWG9EGtfMpVCLofF
        subject_person_id: p_W5zx3veyZyjG5gBNh4mu99
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aAXGMBtnZPBn8nTiBjbH1U
          claim_id: c_ZZRHw3bWG9EGtfMpVCLofF
          source_id: s_gjKQ485fMNxfZMVfEiyQkf
          stance: supports
          locator: CBDB:207263
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207263）
          source: &a1
            id: s_gjKQ485fMNxfZMVfEiyQkf
            source_type: api_record
            title: 中国历代人物传记资料库：王道正（CBDB 207263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207263&o=json
            external_identifier: CBDB:207263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hWLcz36TB9djMFZJdj4392
        subject_person_id: p_W5zx3veyZyjG5gBNh4mu99
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1564年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_njxUf8Ut7NJyxKm9rFFdSW
          claim_id: c_hWLcz36TB9djMFZJdj4392
          source_id: s_gjKQ485fMNxfZMVfEiyQkf
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
        id: c_Av2CSm2fYAgJNo5VcJbvQ6
        subject_person_id: p_W5zx3veyZyjG5gBNh4mu99
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道正（生于1564年），明人物。明清進士進士，籍贯府軍左衛，入仕進士，曾任翰林庶吉士、都察院觀政。（中国历代人物传记资料库 CBDB 207263）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hUCLpOaSo8Ge8o13ZTwlkB
          claim_id: c_Av2CSm2fYAgJNo5VcJbvQ6
          source_id: s_gjKQ485fMNxfZMVfEiyQkf
          stance: supports
          locator: CBDB:207263
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s2NEv3k2kVZZlAXXtdhHcK
        subject_person_id: p_oi69GxTCLN4PZnkGTuscEx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W5zx3veyZyjG5gBNh4mu99
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aOEkY1ZFzEhxyw38Wv0ei8
          claim_id: c_s2NEv3k2kVZZlAXXtdhHcK
          source_id: s_rKw8Zpp1wzx52DHGZ9mHvb
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rKw8Zpp1wzx52DHGZ9mHvb
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 230464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230464&o=json
            external_identifier: CBDB:230464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oi69GxTCLN4PZnkGTuscEx
        status: active
        display_name: 王經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_zHeUdL4Dq7ZSNa6qnGIfDn
        subject_person_id: p_67wcNBy6jc6GHKoznNP6E9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W5zx3veyZyjG5gBNh4mu99
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CSD1TYu21Q33Li1gOyqw_r
          claim_id: c_zHeUdL4Dq7ZSNa6qnGIfDn
          source_id: s_WYFfdaup3UvMbVzh3Xd4Pt
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百五十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WYFfdaup3UvMbVzh3Xd4Pt
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 230462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230462&o=json
            external_identifier: CBDB:230462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_67wcNBy6jc6GHKoznNP6E9
        status: active
        display_name: 王宣
        merged_into_person_id: null
    - claim:
        id: c_VqZSy6MCds9ZKogcezHwUY
        subject_person_id: p_GVdJXGRvXB9DxN69cdCCHG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W5zx3veyZyjG5gBNh4mu99
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1pjdD88-VgL4KHvuhz3Tlv
          claim_id: c_VqZSy6MCds9ZKogcezHwUY
          source_id: s_ynHz9LqQWRvEPH15SCETBF
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百五十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ynHz9LqQWRvEPH15SCETBF
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 230463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230463&o=json
            external_identifier: CBDB:230463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GVdJXGRvXB9DxN69cdCCHG
        status: active
        display_name: 王欽
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_rZ28YwR303868FPsmdXf2m
        subject_person_id: p_Gw7B8bAAtRnjKzBrTNyQYT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W5zx3veyZyjG5gBNh4mu99
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZIhjKA5wcUy7gblVgxLFdF
          claim_id: c_rZ28YwR303868FPsmdXf2m
          source_id: s_LpXM_mqiNbduHepMYc_fmA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207263 王道正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LpXM_mqiNbduHepMYc_fmA
            source_type: api_record
            title: 中国历代人物传记资料库：王道和（CBDB 230469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230469&o=json
            external_identifier: CBDB:230469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gw7B8bAAtRnjKzBrTNyQYT
        status: active
        display_name: 王道和
        merged_into_person_id: null
    - claim:
        id: c_iasUsINd-zUyrz88jN0agk
        subject_person_id: p_U26ovq52qrynked8W9csNM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W5zx3veyZyjG5gBNh4mu99
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VCx6gA8gfNuiPy44ytF4Im
          claim_id: c_iasUsINd-zUyrz88jN0agk
          source_id: s_askL24cBKrt9V-TPuSMCX3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207263 王道正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_askL24cBKrt9V-TPuSMCX3
            source_type: api_record
            title: 中国历代人物传记资料库：王道弘（CBDB 230470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230470&o=json
            external_identifier: CBDB:230470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U26ovq52qrynked8W9csNM
        status: active
        display_name: 王道弘
        merged_into_person_id: null
---

# 王道正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道正 | accepted |
| birth.date | 1564年 | accepted |
| bio.summary | 王道正（生于1564年），明人物。明清進士進士，籍贯府軍左衛，入仕進士，曾任翰林庶吉士、都察院觀政。（中国历代人物传记资料库 CBDB 207263） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oi69GxTCLN4PZnkGTuscEx | 王經 | accepted |
| ancestors | p_67wcNBy6jc6GHKoznNP6E9 | 王宣 | accepted |
| ancestors | p_GVdJXGRvXB9DxN69cdCCHG | 王欽 | accepted |
| other | p_Gw7B8bAAtRnjKzBrTNyQYT | 王道和 | accepted |
| other | p_U26ovq52qrynked8W9csNM | 王道弘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道和（CBDB 230469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230469&o=json)
- [中国历代人物传记资料库：王道弘（CBDB 230470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230470&o=json)
- [中国历代人物传记资料库：王道正（CBDB 207263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207263&o=json)
- [中国历代人物传记资料库：王經（CBDB 230464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230464&o=json)
- [中国历代人物传记资料库：王欽（CBDB 230463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230463&o=json)
- [中国历代人物传记资料库：王宣（CBDB 230462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230462&o=json)
