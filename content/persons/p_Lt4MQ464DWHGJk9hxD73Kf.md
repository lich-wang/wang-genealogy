---
schema: wang-person/v1
id: p_Lt4MQ464DWHGJk9hxD73Kf
status: active
merged_into: null
display_name: 王偡
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6UUu5MF4YaRXc4hLrKjztn
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xqaNDmbZFsXGEQZEGHGBPa
          claim_id: c_6UUu5MF4YaRXc4hLrKjztn
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: CBDB:204670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204670）
          source: &a1
            id: s_oD9gKDpPboW2xg9Jhpaik1
            source_type: api_record
            title: 中国历代人物传记资料库：王偡（CBDB 204670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204670&o=json
            external_identifier: CBDB:204670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NaGGActsD56f1JZJGf1Me6
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1395年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BugZNZduk4Xjy5Za4zko5v
          claim_id: c_NaGGActsD56f1JZJGf1Me6
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
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
        id: c_K9sPPcQQEff8aHsEx1ZUWZ
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偡（生于1395年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 204670）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NcD8qEv3_dimz5bjGgDxrW
          claim_id: c_K9sPPcQQEff8aHsEx1ZUWZ
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: CBDB:204670
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wcxtNCbbAnu25MzAFaipSB
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vKSXoQ7wh-nJm6YTNrl1Z8
          claim_id: c_wcxtNCbbAnu25MzAFaipSB
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pY4bR9vVd19RvXkc3AZrMW
        status: active
        display_name: 王彥禎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Z0us88PoXan55cyx5yA1gR
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vQLcgRtEn5cW7K5vAZiNpo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7xgQuGMhA0stRnd3M8LMmQ
          claim_id: c_Z0us88PoXan55cyx5yA1gR
          source_id: s_9rFx1KQfK8u-T8liKOoCO2
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9rFx1KQfK8u-T8liKOoCO2
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王偡妻)（CBDB 322376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322376&o=json
            external_identifier: CBDB:322376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vQLcgRtEn5cW7K5vAZiNpo
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_grjUh661Z05pEX-NxvM04y
        subject_person_id: p_A3htMyYv1SZdF7d9GnU5GW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ggwoEDVyyjP1T9sux-7zyG
          claim_id: c_grjUh661Z05pEX-NxvM04y
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A3htMyYv1SZdF7d9GnU5GW
        status: active
        display_name: 王德集
        merged_into_person_id: null
    - claim:
        id: c_ftjyTqBiY6RdiWbIXQ3pad
        subject_person_id: p_jEVGyCWdr9id3tdCNr1hgE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RwECqIorhO4foQ5JhTFK33
          claim_id: c_ftjyTqBiY6RdiWbIXQ3pad
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jEVGyCWdr9id3tdCNr1hgE
        status: active
        display_name: 王谷平
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_HtnPUkhBhUIpXuu1dnVVG-
        subject_person_id: p_4SG5zDfPfmk4FBCh2jAA8J
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z66Zw1t_-fjKsrFHXhVwId
          claim_id: c_HtnPUkhBhUIpXuu1dnVVG-
          source_id: s_MSRkDYCRb_BoZ7TPVirPQG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MSRkDYCRb_BoZ7TPVirPQG
            source_type: api_record
            title: 中国历代人物传记资料库：王儔（CBDB 322378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322378&o=json
            external_identifier: CBDB:322378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4SG5zDfPfmk4FBCh2jAA8J
        status: active
        display_name: 王儔
        merged_into_person_id: null
    - claim:
        id: c_Fkww3BXxkgz7-UtUV1E9O0
        subject_person_id: p_EAH2kvfcJQsDAwQJHRtAXR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEzAqhQ6T8WoL2A8yCtpxd
          claim_id: c_Fkww3BXxkgz7-UtUV1E9O0
          source_id: s_kfW8iGJSU6Ct9jY3fc8Ot2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kfW8iGJSU6Ct9jY3fc8Ot2
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 322384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322384&o=json
            external_identifier: CBDB:322384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EAH2kvfcJQsDAwQJHRtAXR
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_zdKU3OblPB9PkAJbHMRS1i
        subject_person_id: p_K9nYCrNfyLTRCWzjTJDwpi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ejya-5oL_GK6R-j38JlVY_
          claim_id: c_zdKU3OblPB9PkAJbHMRS1i
          source_id: s_cN8cX_xMUEdQ5jFnbJOkFy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cN8cX_xMUEdQ5jFnbJOkFy
            source_type: api_record
            title: 中国历代人物传记资料库：王倣（CBDB 322379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322379&o=json
            external_identifier: CBDB:322379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K9nYCrNfyLTRCWzjTJDwpi
        status: active
        display_name: 王倣
        merged_into_person_id: null
    - claim:
        id: c_zAl4GY5OrEfOILrOkTkewC
        subject_person_id: p_LZJep9CZ8t7FDEXdKWWJ5d
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YSY74UdtHJ791ee1AQ9b9
          claim_id: c_zAl4GY5OrEfOILrOkTkewC
          source_id: s_BkRYsfXEbl5wQOPQKk_O8s
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BkRYsfXEbl5wQOPQKk_O8s
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 322380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322380&o=json
            external_identifier: CBDB:322380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LZJep9CZ8t7FDEXdKWWJ5d
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_hzu-Jt499KfZa-KqGY8oN-
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tc8QNzAuGXa5y32t3B3zYJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XLGLsYQQ72t1xi4T0yl4Bp
          claim_id: c_hzu-Jt499KfZa-KqGY8oN-
          source_id: s_mqNAmk6H0vyJzpC0V0fNHw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mqNAmk6H0vyJzpC0V0fNHw
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 322386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json
            external_identifier: CBDB:322386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tc8QNzAuGXa5y32t3B3zYJ
        status: active
        display_name: 王偃
        merged_into_person_id: null
    - claim:
        id: c_OzIOsPvx-rL_MRKCHbwL9U
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_chSBQQ7ZATo3cFML7RosLG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iCdekaPCZCrla3hKdwsiSV
          claim_id: c_OzIOsPvx-rL_MRKCHbwL9U
          source_id: s_YaOIBIPnFSSZFn8AYrSVQG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YaOIBIPnFSSZFn8AYrSVQG
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 322381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322381&o=json
            external_identifier: CBDB:322381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_chSBQQ7ZATo3cFML7RosLG
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_-f4_w6bG--4n8CHwN_E8wK
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vfbf9MXf9BdNgzCFBVUaAp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t5jfxJTYR_zdmsESoWm0ET
          claim_id: c_-f4_w6bG--4n8CHwN_E8wK
          source_id: s_pZAvdfEgwMM3LnNAY6Z1Is
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pZAvdfEgwMM3LnNAY6Z1Is
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 322383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322383&o=json
            external_identifier: CBDB:322383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfbf9MXf9BdNgzCFBVUaAp
        status: active
        display_name: 王儉
        merged_into_person_id: null
    - claim:
        id: c_b1UvzDKVHvQNe7BurAfkbw
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yRJKVCAcaprLGzLsBDsGAb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ywbcBNCU5yM0UZifcdGNeb
          claim_id: c_b1UvzDKVHvQNe7BurAfkbw
          source_id: s_zJJaeIvHw9KmEjKu_0a9cD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zJJaeIvHw9KmEjKu_0a9cD
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 322382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322382&o=json
            external_identifier: CBDB:322382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yRJKVCAcaprLGzLsBDsGAb
        status: active
        display_name: 王僖
        merged_into_person_id: null
---

# 王偡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偡 | accepted |
| birth.date | 1395年 | accepted |
| bio.summary | 王偡（生于1395年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 204670） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pY4bR9vVd19RvXkc3AZrMW | 王彥禎 | accepted |
| spouses | p_vQLcgRtEn5cW7K5vAZiNpo | 孫氏 | accepted |
| ancestors | p_A3htMyYv1SZdF7d9GnU5GW | 王德集 | accepted |
| ancestors | p_jEVGyCWdr9id3tdCNr1hgE | 王谷平 | accepted |
| other | p_4SG5zDfPfmk4FBCh2jAA8J | 王儔 | accepted |
| other | p_EAH2kvfcJQsDAwQJHRtAXR | 王儀 | accepted |
| other | p_K9nYCrNfyLTRCWzjTJDwpi | 王倣 | accepted |
| other | p_LZJep9CZ8t7FDEXdKWWJ5d | 王儼 | accepted |
| other | p_Tc8QNzAuGXa5y32t3B3zYJ | 王偃 | accepted |
| other | p_chSBQQ7ZATo3cFML7RosLG | 王佐 | accepted |
| other | p_vfbf9MXf9BdNgzCFBVUaAp | 王儉 | accepted |
| other | p_yRJKVCAcaprLGzLsBDsGAb | 王僖 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王偡妻)（CBDB 322376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322376&o=json)
- [中国历代人物传记资料库：王儔（CBDB 322378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322378&o=json)
- [中国历代人物传记资料库：王倣（CBDB 322379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322379&o=json)
- [中国历代人物传记资料库：王儉（CBDB 322383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322383&o=json)
- [中国历代人物传记资料库：王僖（CBDB 322382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322382&o=json)
- [中国历代人物传记资料库：王偃（CBDB 322386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json)
- [中国历代人物传记资料库：王儼（CBDB 322380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322380&o=json)
- [中国历代人物传记资料库：王儀（CBDB 322384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322384&o=json)
- [中国历代人物传记资料库：王偡（CBDB 204670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204670&o=json)
- [中国历代人物传记资料库：王佐（CBDB 322381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322381&o=json)
