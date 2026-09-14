---
schema: wang-person/v1
id: p_6BcNKRe82htPqYxnsGXoQy
status: active
merged_into: null
display_name: 王用賓
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ebq1pMCSsG4abgXfRY4vF8
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P3iKHSVU34fdy9Vo8F46cV
          claim_id: c_Ebq1pMCSsG4abgXfRY4vF8
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: CBDB:202137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202137）
          source: &a1
            id: s_jrE49LbHYi16DqAT581UjL
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 202137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202137&o=json
            external_identifier: CBDB:202137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nFAEqWuy2HwAYvL3orMf7N
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXJGWdr8MrULqdDtiXE4K8
          claim_id: c_nFAEqWuy2HwAYvL3orMf7N
          source_id: s_jrE49LbHYi16DqAT581UjL
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
        id: c_GDa8jmt2wWJfxnVJAbZWS1
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓（生于1501年），明人物。正德十六年進士，籍贯咸寧，入仕進士。（中国历代人物传记资料库 CBDB 202137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XNj1GbiTfZ14w803JydhJ7
          claim_id: c_GDa8jmt2wWJfxnVJAbZWS1
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: CBDB:202137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7mgjT_ApbHai_E2l2rQxZl
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6BcNKRe82htPqYxnsGXoQy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cc13neTgqZN_zjF6G6jn83
          claim_id: c_7mgjT_ApbHai_E2l2rQxZl
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NuNTQZExjKcTBss2PH1NRS
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iLytA5Yn0bKx3ZiFbuIHUd
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SqY75r66LH44q86PW22K7z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bTgjBJGHrXU_j3WOlm_LlA
          claim_id: c_iLytA5Yn0bKx3ZiFbuIHUd
          source_id: s_RrTgTOZYSvSFTFGedoKtXV
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RrTgTOZYSvSFTFGedoKtXV
            source_type: api_record
            title: 中国历代人物传记资料库：盧氏(王用賓妻)（CBDB 284142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284142&o=json
            external_identifier: CBDB:284142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SqY75r66LH44q86PW22K7z
        status: active
        display_name: 盧氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_f4tA2jDkgjaaPkhyeWr5iG
        subject_person_id: p_7aUTPEtKBJQCs2MeHeH92w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6BcNKRe82htPqYxnsGXoQy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5AV7j_36IaMb_fZjL-qvv3
          claim_id: c_f4tA2jDkgjaaPkhyeWr5iG
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7aUTPEtKBJQCs2MeHeH92w
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_O-0Rojrn7OskN7p07ucBZd
        subject_person_id: p_NG6up6tyYjPFB9nq4tmUEG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6BcNKRe82htPqYxnsGXoQy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xOEPGEm7uBi8_em6_RKm-x
          claim_id: c_O-0Rojrn7OskN7p07ucBZd
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NG6up6tyYjPFB9nq4tmUEG
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_hY38Mo713oCPcEKT8xefrb
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MQw6zqb5PMzxmJgQ7D4f7W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eGroEBIhL9BPTYvqspDK-o
          claim_id: c_hY38Mo713oCPcEKT8xefrb
          source_id: s_pUK85Rm0Of52ivHYeB26-r
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202137 王用賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pUK85Rm0Of52ivHYeB26-r
            source_type: api_record
            title: 中国历代人物传记资料库：王用相（CBDB 284148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284148&o=json
            external_identifier: CBDB:284148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MQw6zqb5PMzxmJgQ7D4f7W
        status: active
        display_name: 王用相
        merged_into_person_id: null
    - claim:
        id: c_Te7DYbxucqVfBO-hc6lXXP
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WMTDY152yLgD1vUR6EUCH7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3e8zunxGoAxUSIRKbxicU1
          claim_id: c_Te7DYbxucqVfBO-hc6lXXP
          source_id: s_dqsXq0Cx2D9Yc_07MGg_vW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202137 王用賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dqsXq0Cx2D9Yc_07MGg_vW
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 284147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284147&o=json
            external_identifier: CBDB:284147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WMTDY152yLgD1vUR6EUCH7
        status: active
        display_name: 王用賢
        merged_into_person_id: null
    - claim:
        id: c_5RHRKAEvgHxJOlDfp-rC9O
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cbYnYQZYQZy71Dxd2nAk58
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UtbSTSDdAG0u7SX7aqHPnm
          claim_id: c_5RHRKAEvgHxJOlDfp-rC9O
          source_id: s_QTa7f9__DEeYLQbtYoswLj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202137 王用賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QTa7f9__DEeYLQbtYoswLj
            source_type: api_record
            title: 中国历代人物传记资料库：王用予（CBDB 284145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284145&o=json
            external_identifier: CBDB:284145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cbYnYQZYQZy71Dxd2nAk58
        status: active
        display_name: 王用予
        merged_into_person_id: null
    - claim:
        id: c_p-xqTDn4fYeE5iJa97QA04
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rsAF2KQAbJbejUUt9Zgq9J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6jr-mvRCGkc-iX0pHCc0tH
          claim_id: c_p-xqTDn4fYeE5iJa97QA04
          source_id: s_VlvTUPy4AwMdqSWxdbjf8P
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202137 王用賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VlvTUPy4AwMdqSWxdbjf8P
            source_type: api_record
            title: 中国历代人物传记资料库：王用卿（CBDB 284146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284146&o=json
            external_identifier: CBDB:284146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rsAF2KQAbJbejUUt9Zgq9J
        status: active
        display_name: 王用卿
        merged_into_person_id: null
    - claim:
        id: c_hft6SG7W-boaHL0BukSB68
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yqzECoS43GzFGAMb7TPXrs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bkkCEO9YEXFniZIyaZRpwS
          claim_id: c_hft6SG7W-boaHL0BukSB68
          source_id: s_7E0M6jBgqq_oFIxKcwAc32
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202137 王用賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7E0M6jBgqq_oFIxKcwAc32
            source_type: api_record
            title: 中国历代人物传记资料库：王用臣（CBDB 284143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284143&o=json
            external_identifier: CBDB:284143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yqzECoS43GzFGAMb7TPXrs
        status: active
        display_name: 王用臣
        merged_into_person_id: null
---

# 王用賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賓 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | 王用賓（生于1501年），明人物。正德十六年進士，籍贯咸寧，入仕進士。（中国历代人物传记资料库 CBDB 202137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NuNTQZExjKcTBss2PH1NRS | 王懋 | accepted |
| spouses | p_SqY75r66LH44q86PW22K7z | 盧氏 | accepted |
| ancestors | p_7aUTPEtKBJQCs2MeHeH92w | 王福 | accepted |
| ancestors | p_NG6up6tyYjPFB9nq4tmUEG | 王鑾 | accepted |
| other | p_MQw6zqb5PMzxmJgQ7D4f7W | 王用相 | accepted |
| other | p_WMTDY152yLgD1vUR6EUCH7 | 王用賢 | accepted |
| other | p_cbYnYQZYQZy71Dxd2nAk58 | 王用予 | accepted |
| other | p_rsAF2KQAbJbejUUt9Zgq9J | 王用卿 | accepted |
| other | p_yqzECoS43GzFGAMb7TPXrs | 王用臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王用賓妻)（CBDB 284142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284142&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 202137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202137&o=json)
- [中国历代人物传记资料库：王用臣（CBDB 284143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284143&o=json)
- [中国历代人物传记资料库：王用卿（CBDB 284146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284146&o=json)
- [中国历代人物传记资料库：王用賢（CBDB 284147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284147&o=json)
- [中国历代人物传记资料库：王用相（CBDB 284148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284148&o=json)
- [中国历代人物传记资料库：王用予（CBDB 284145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284145&o=json)
