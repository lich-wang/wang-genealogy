---
schema: wang-person/v1
id: p_BxK799vwCxhyA6JGbqpHzN
status: active
merged_into: null
display_name: 王乾章
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_34ebW2gUo7UgebKXmm1uaD
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gngYfdWPHhR6Lb6BKygF2i
          claim_id: c_34ebW2gUo7UgebKXmm1uaD
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: CBDB:126679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126679）
          source: &a1
            id: s_n8fY6D3sur5MtKi8shwUp7
            source_type: api_record
            title: 中国历代人物传记资料库：王乾章（CBDB 126679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json
            external_identifier: CBDB:126679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TK7w2Lke8Y6mhgTb5AsSAh
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A4rp9oyTJjF5EDEpFMjJ3G
          claim_id: c_TK7w2Lke8Y6mhgTb5AsSAh
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oKdfJjB12ivaG3XQkG6bL1
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3uY9NaLqJGcD1s2DiwZ2c
          claim_id: c_oKdfJjB12ivaG3XQkG6bL1
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5mi63F8Lnes2k5E4kmACTa
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾章（1527年—1599年），明人物。明清進士進士，籍贯東陽，入仕進士，曾任布政使司參議、巡鹽御史。（中国历代人物传记资料库 CBDB 126679）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VdQtTVmF4TgwB--XDTvENu
          claim_id: c_5mi63F8Lnes2k5E4kmACTa
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: CBDB:126679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wETXaKSC5Z0nxMP5SToY92
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxK799vwCxhyA6JGbqpHzN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdco735JDEM6RGyx1FiU7O
          claim_id: c_wETXaKSC5Z0nxMP5SToY92
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KEoDBUQZkr54B6QhQtTe7V
        status: active
        display_name: 王寬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VqfeFZPwgypD6x9NjS4_b2
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xGAJDTiHoTYx2rfQPURJ8V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8a8Vvz9mgfpajWow2SdbA
          claim_id: c_VqfeFZPwgypD6x9NjS4_b2
          source_id: s_w7cUdMAY02Ss5zECq-g3RX
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_w7cUdMAY02Ss5zECq-g3RX
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王乾章妻)（CBDB 327154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327154&o=json
            external_identifier: CBDB:327154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xGAJDTiHoTYx2rfQPURJ8V
        status: active
        display_name: 鄭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_-A8Eeb7-nOr8Zdojeg6XR1
        subject_person_id: p_wm6KMTej7ugu8jJgRxzghC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BxK799vwCxhyA6JGbqpHzN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n-MfGHG5QWd2zNYbbIoG_d
          claim_id: c_-A8Eeb7-nOr8Zdojeg6XR1
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wm6KMTej7ugu8jJgRxzghC
        status: active
        display_name: 王得志
        merged_into_person_id: null
    - claim:
        id: c_Qm5mns7D_0V0S122qMSKc9
        subject_person_id: p_RB7j1kQ2fDoPNyza5PRWdd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BxK799vwCxhyA6JGbqpHzN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n5Z6rLW-RLLq2gRoUbh82d
          claim_id: c_Qm5mns7D_0V0S122qMSKc9
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RB7j1kQ2fDoPNyza5PRWdd
        status: active
        display_name: 王核
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_LhJoQhMqWhcnePCGrjUFhs
        subject_person_id: p_3LzjFw3hzkBCPgK2bCPt2t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BxK799vwCxhyA6JGbqpHzN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvJZa8hh2XJ4THCEQiRtGC
          claim_id: c_LhJoQhMqWhcnePCGrjUFhs
          source_id: s_kqNFqJgLlGmtMcXIwO0yiT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kqNFqJgLlGmtMcXIwO0yiT
            source_type: api_record
            title: 中国历代人物传记资料库：王孝章（CBDB 327160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327160&o=json
            external_identifier: CBDB:327160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3LzjFw3hzkBCPgK2bCPt2t
        status: active
        display_name: 王孝章
        merged_into_person_id: null
    - claim:
        id: c_AjXM50kvP7l_ZzleNQbAj5
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_C49cRVtvgLkUKUPRthcKXq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvLdnVL2Mz27sSD7xi1U3E
          claim_id: c_AjXM50kvP7l_ZzleNQbAj5
          source_id: s_cfzmObTR3gNbwdACIdcprQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cfzmObTR3gNbwdACIdcprQ
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 327156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json
            external_identifier: CBDB:327156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C49cRVtvgLkUKUPRthcKXq
        status: active
        display_name: 王顒
        merged_into_person_id: null
    - claim:
        id: c_CEDuzlU6UpwVu5_PfpV3nD
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_F1QVSUh1zQdUjCVdWEwPTv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CR926v3v1DCcBuu6MJTH1t
          claim_id: c_CEDuzlU6UpwVu5_PfpV3nD
          source_id: s_HRjhwEgV2Xmz1_iIC9miOs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HRjhwEgV2Xmz1_iIC9miOs
            source_type: api_record
            title: 中国历代人物传记资料库：王樂章（CBDB 327158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327158&o=json
            external_identifier: CBDB:327158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F1QVSUh1zQdUjCVdWEwPTv
        status: active
        display_name: 王樂章
        merged_into_person_id: null
    - claim:
        id: c_vANlqYsXfnNxLJEdb00sLS
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q6rPqztXmcyfmokBJdU5qV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pcgfD8MW_ERUKsZe4wL3HQ
          claim_id: c_vANlqYsXfnNxLJEdb00sLS
          source_id: s_mljHPOcpa4oBRidwU6zQTG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mljHPOcpa4oBRidwU6zQTG
            source_type: api_record
            title: 中国历代人物传记资料库：王惠章（CBDB 327159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327159&o=json
            external_identifier: CBDB:327159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q6rPqztXmcyfmokBJdU5qV
        status: active
        display_name: 王惠章
        merged_into_person_id: null
    - claim:
        id: c_YaHRDsF4GuN1n1k7cY09K9
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_c8r2Ubqr461ALieEYa3N36
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FdPY--ifisleUXaJnFE-sI
          claim_id: c_YaHRDsF4GuN1n1k7cY09K9
          source_id: s_5RUbYRW2GVeoazOLA6XpNC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5RUbYRW2GVeoazOLA6XpNC
            source_type: api_record
            title: 中国历代人物传记资料库：王建章（CBDB 327163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327163&o=json
            external_identifier: CBDB:327163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c8r2Ubqr461ALieEYa3N36
        status: active
        display_name: 王建章
        merged_into_person_id: null
    - claim:
        id: c_0rk9erNZO0D7f3FchG7lWF
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s91dnPRqMJdG7bgXAhHHH8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_knWe_dKBhmQy_9kG8F2jOz
          claim_id: c_0rk9erNZO0D7f3FchG7lWF
          source_id: s_fgipfiWwL50dWJW_6mdtdz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fgipfiWwL50dWJW_6mdtdz
            source_type: api_record
            title: 中国历代人物传记资料库：王大章（CBDB 327162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327162&o=json
            external_identifier: CBDB:327162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s91dnPRqMJdG7bgXAhHHH8
        status: active
        display_name: 王大章
        merged_into_person_id: null
    - claim:
        id: c_-ZIBIQZ9D224OTMqfQ9ig5
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tpLWJtXNDzw4MG6mGpFC51
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nBOBOakyZ1o_pI9M1yGcZA
          claim_id: c_-ZIBIQZ9D224OTMqfQ9ig5
          source_id: s_hKg41OHHhtZbU3-5sxG889
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hKg41OHHhtZbU3-5sxG889
            source_type: api_record
            title: 中国历代人物传记资料库：王熲（CBDB 327157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327157&o=json
            external_identifier: CBDB:327157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tpLWJtXNDzw4MG6mGpFC51
        status: active
        display_name: 王熲
        merged_into_person_id: null
    - claim:
        id: c_rA8vJEmfqch7M8qrF89JVv
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tpNza8wZ1oWga6ypdCgL8c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FljccaO7nTHHBQgHyiC9zE
          claim_id: c_rA8vJEmfqch7M8qrF89JVv
          source_id: s_c2Qgi3sYb-L6Jr5ZZ5ESjY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c2Qgi3sYb-L6Jr5ZZ5ESjY
            source_type: api_record
            title: 中国历代人物传记资料库：王廷章（CBDB 327161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327161&o=json
            external_identifier: CBDB:327161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tpNza8wZ1oWga6ypdCgL8c
        status: active
        display_name: 王廷章
        merged_into_person_id: null
---

# 王乾章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾章 | accepted |
| birth.date | 1527年 | accepted |
| death.date | 1599年 | accepted |
| bio.summary | 王乾章（1527年—1599年），明人物。明清進士進士，籍贯東陽，入仕進士，曾任布政使司參議、巡鹽御史。（中国历代人物传记资料库 CBDB 126679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KEoDBUQZkr54B6QhQtTe7V | 王寬 | accepted |
| spouses | p_xGAJDTiHoTYx2rfQPURJ8V | 鄭氏 | accepted |
| ancestors | p_wm6KMTej7ugu8jJgRxzghC | 王得志 | accepted |
| ancestors | p_RB7j1kQ2fDoPNyza5PRWdd | 王核 | accepted |
| other | p_3LzjFw3hzkBCPgK2bCPt2t | 王孝章 | accepted |
| other | p_C49cRVtvgLkUKUPRthcKXq | 王顒 | accepted |
| other | p_F1QVSUh1zQdUjCVdWEwPTv | 王樂章 | accepted |
| other | p_Q6rPqztXmcyfmokBJdU5qV | 王惠章 | accepted |
| other | p_c8r2Ubqr461ALieEYa3N36 | 王建章 | accepted |
| other | p_s91dnPRqMJdG7bgXAhHHH8 | 王大章 | accepted |
| other | p_tpLWJtXNDzw4MG6mGpFC51 | 王熲 | accepted |
| other | p_tpNza8wZ1oWga6ypdCgL8c | 王廷章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大章（CBDB 327162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327162&o=json)
- [中国历代人物传记资料库：王惠章（CBDB 327159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327159&o=json)
- [中国历代人物传记资料库：王建章（CBDB 327163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327163&o=json)
- [中国历代人物传记资料库：王熲（CBDB 327157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327157&o=json)
- [中国历代人物传记资料库：王樂章（CBDB 327158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327158&o=json)
- [中国历代人物传记资料库：王乾章（CBDB 126679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json)
- [中国历代人物传记资料库：王廷章（CBDB 327161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327161&o=json)
- [中国历代人物传记资料库：王孝章（CBDB 327160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327160&o=json)
- [中国历代人物传记资料库：王顒（CBDB 327156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json)
- [中国历代人物传记资料库：鄭氏(王乾章妻)（CBDB 327154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327154&o=json)
