---
schema: wang-person/v1
id: p_8kdsz31LsNcXBMccuK9UD2
status: active
merged_into: null
display_name: 王恩
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKmJWdbhbb7xojBWazDKwv
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C5P9vuBQKAn9VTBRYwGG4D
          claim_id: c_oKmJWdbhbb7xojBWazDKwv
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: CBDB:200520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200520）
          source: &a1
            id: s_rinjSKxkPZ6GXhj8MmBj5D
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 200520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json
            external_identifier: CBDB:200520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u5TSLSCaAFPPHD4j3B5cjf
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1452年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9SMwQ4G614iuUTidyyGrud
          claim_id: c_u5TSLSCaAFPPHD4j3B5cjf
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
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
        id: c_GvpFcusePWdowR3KForu4b
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩（生于1452年），明人物。明清進士進士，籍贯餘姚，入仕進士。（中国历代人物传记资料库 CBDB 200520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a4xbNb4N7KHMzsD9tNOaQZ
          claim_id: c_GvpFcusePWdowR3KForu4b
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: CBDB:200520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rchdbHQ9KbvBye89WAOg_R
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E6Xybh93MzzAVSCSF8JHxX
          claim_id: c_rchdbHQ9KbvBye89WAOg_R
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o8zvgJXd9bgohC9oUj28Xv
        status: active
        display_name: 王敏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KBhVE-ETMNZFsVA00ig5W5
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EDSV7MRRML1V8q8KrTjLj8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GL0uI3JnYrdEBpm0-NYB1g
          claim_id: c_KBhVE-ETMNZFsVA00ig5W5
          source_id: s_kKplK-lsY7XQCdIaue1qd3
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kKplK-lsY7XQCdIaue1qd3
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王恩妻)（CBDB 259209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259209&o=json
            external_identifier: CBDB:259209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EDSV7MRRML1V8q8KrTjLj8
        status: active
        display_name: 徐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_6V_d6Rypa1XTx2phgVbpEB
        subject_person_id: p_DSEvyAUUU5jVKEwuv4MsEy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akh0pVWv53a3k9w0CW-tgy
          claim_id: c_6V_d6Rypa1XTx2phgVbpEB
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DSEvyAUUU5jVKEwuv4MsEy
        status: active
        display_name: 王貴學
        merged_into_person_id: null
    - claim:
        id: c_Yy2JdziJzMonbX3oiYWDiJ
        subject_person_id: p_mMyJdAuQKEqWr5tm5De2Fi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J5qkpVfSlWwFxHk4HzZCvR
          claim_id: c_Yy2JdziJzMonbX3oiYWDiJ
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mMyJdAuQKEqWr5tm5De2Fi
        status: active
        display_name: 王士怡
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_OGb8Z9Cm1AhbBq6HwgtK-f
        subject_person_id: p_5YjEERsh7utx747aGfmRrp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3CiGQuwhFzAcxzyNQzWuN
          claim_id: c_OGb8Z9Cm1AhbBq6HwgtK-f
          source_id: s_h-uqWDKlUda85K2nqBAAte
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200520 王恩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h-uqWDKlUda85K2nqBAAte
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 259212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259212&o=json
            external_identifier: CBDB:259212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5YjEERsh7utx747aGfmRrp
        status: active
        display_name: 王綺
        merged_into_person_id: null
    - claim:
        id: c_iZZrRgwZguBV75kV53Z1g_
        subject_person_id: p_871R56bHgEcfhFwd2Rmtqb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uqe_Jp7WYO5CdE0YrKEgo6
          claim_id: c_iZZrRgwZguBV75kV53Z1g_
          source_id: s_dIknCPMkSeTnR9Kmz86J3j
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200520 王恩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dIknCPMkSeTnR9Kmz86J3j
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 259215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259215&o=json
            external_identifier: CBDB:259215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_871R56bHgEcfhFwd2Rmtqb
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_s4-GoVtleFK5hWmdZBih59
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aNYYLf4AMVAXh7vdBQNd7w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tIxtRRKE6v1C2BexL4QFuA
          claim_id: c_s4-GoVtleFK5hWmdZBih59
          source_id: s_QTy-lHZ-JAZK6sR8_RIhid
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200520 王恩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QTy-lHZ-JAZK6sR8_RIhid
            source_type: api_record
            title: 中国历代人物传记资料库：王紞（CBDB 259210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259210&o=json
            external_identifier: CBDB:259210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aNYYLf4AMVAXh7vdBQNd7w
        status: active
        display_name: 王紞
        merged_into_person_id: null
    - claim:
        id: c_IUfOMKi4UdgqX9ftWsOFUp
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fJpSBsp4YbiCQbFDsDv75G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fgH71O5HEODHhbCHXL6HVE
          claim_id: c_IUfOMKi4UdgqX9ftWsOFUp
          source_id: s_fymQ6DewAXqIHt7Rx0qF41
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200520 王恩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fymQ6DewAXqIHt7Rx0qF41
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 259214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259214&o=json
            external_identifier: CBDB:259214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fJpSBsp4YbiCQbFDsDv75G
        status: active
        display_name: 王繹
        merged_into_person_id: null
    - claim:
        id: c_VWHnbsoCzwIAIwkfwH0Jhm
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x6mSJVfYmA6MT11XwJbPWF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-gfA3ikjoGqbusbYgqa9F7
          claim_id: c_VWHnbsoCzwIAIwkfwH0Jhm
          source_id: s_yR3Z4H8lSg0YJwqH8XHEsP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200520 王恩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yR3Z4H8lSg0YJwqH8XHEsP
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 259211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259211&o=json
            external_identifier: CBDB:259211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x6mSJVfYmA6MT11XwJbPWF
        status: active
        display_name: 王紳
        merged_into_person_id: null
---

# 王恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩 | accepted |
| birth.date | 1452年 | accepted |
| bio.summary | 王恩（生于1452年），明人物。明清進士進士，籍贯餘姚，入仕進士。（中国历代人物传记资料库 CBDB 200520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o8zvgJXd9bgohC9oUj28Xv | 王敏 | accepted |
| spouses | p_EDSV7MRRML1V8q8KrTjLj8 | 徐氏 | accepted |
| ancestors | p_DSEvyAUUU5jVKEwuv4MsEy | 王貴學 | accepted |
| ancestors | p_mMyJdAuQKEqWr5tm5De2Fi | 王士怡 | accepted |
| other | p_5YjEERsh7utx747aGfmRrp | 王綺 | accepted |
| other | p_871R56bHgEcfhFwd2Rmtqb | 王統 | accepted |
| other | p_aNYYLf4AMVAXh7vdBQNd7w | 王紞 | accepted |
| other | p_fJpSBsp4YbiCQbFDsDv75G | 王繹 | accepted |
| other | p_x6mSJVfYmA6MT11XwJbPWF | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紞（CBDB 259210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259210&o=json)
- [中国历代人物传记资料库：王恩（CBDB 200520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json)
- [中国历代人物传记资料库：王綺（CBDB 259212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259212&o=json)
- [中国历代人物传记资料库：王紳（CBDB 259211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259211&o=json)
- [中国历代人物传记资料库：王統（CBDB 259215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259215&o=json)
- [中国历代人物传记资料库：王繹（CBDB 259214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259214&o=json)
- [中国历代人物传记资料库：徐氏(王恩妻)（CBDB 259209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259209&o=json)
