---
schema: wang-person/v1
id: p_qdfj8n9aJt992f6xYnsVk6
status: active
merged_into: null
display_name: 王之道
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNMibwAuvm73hNvcYxd97s
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N4B1wDFKYWhRWh5DKbAxkZ
          claim_id: c_tNMibwAuvm73hNvcYxd97s
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
          stance: supports
          locator: CBDB:1786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1786）
          source: &a1
            id: s_1hCzGChYAR9f6yAtLzbQMr
            source_type: api_record
            title: 中国历代人物传记资料库：王之道（CBDB 1786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1786&o=json
            external_identifier: CBDB:1786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZC3JpBwDHcqc3QQKsf81EK
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1093年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBsqvfKPNw7KWDBjiDPpnJ
          claim_id: c_ZC3JpBwDHcqc3QQKsf81EK
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
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
        id: c_EhP7e2jmK6HB7K3ehLAZAy
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1169年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SSFjvk1EHqEp84Q8Gw78nw
          claim_id: c_EhP7e2jmK6HB7K3ehLAZAy
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
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
        id: c_XQGtJ5RGqKpf5BC7f9o1Vo
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之道（1093年—1169年），宋人物。籍贯巢縣，入仕進士，曾任提舉、朝奉大夫、府。（中国历代人物传记资料库 CBDB 1786）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XXw9iwmC7bRfm_1z9vOakd
          claim_id: c_XQGtJ5RGqKpf5BC7f9o1Vo
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
          stance: supports
          locator: CBDB:1786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hMv4Z7-6Yt4dF8nQ5bBQFC
        subject_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qdfj8n9aJt992f6xYnsVk6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQUi_trhohtDQrZZEzC371
          claim_id: c_hMv4Z7-6Yt4dF8nQ5bBQFC
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
          stance: supports
          locator: CBDB 双向互证（父 王奇 ⇄ 子 王之道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XLkZGVxRBQSEaHVjzv1aDG
        status: active
        display_name: 王奇
        merged_into_person_id: null
  children:
    - claim:
        id: c_we2Rpj9R_Y3LqbCZuwE13Q
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2jfP3iNWmJUmCrAC7oYuVM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZeblMJt6JWPP3pWtvDz4a1
          claim_id: c_we2Rpj9R_Y3LqbCZuwE13Q
          source_id: s_XY8nYfuOhADQsS9kRzC6S1
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_XY8nYfuOhADQsS9kRzC6S1
            source_type: api_record
            title: 中国历代人物传记资料库：王萊（CBDB 24387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24387&o=json
            external_identifier: CBDB:24387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2jfP3iNWmJUmCrAC7oYuVM
        status: active
        display_name: 王萊
        merged_into_person_id: null
    - claim:
        id: c_8iO2MiPMb-p0Ho40nQYeDO
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6K54xkWmCaZkkh4DKziB3P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pC8HgJx2E3RztmG2g_a0nd
          claim_id: c_8iO2MiPMb-p0Ho40nQYeDO
          source_id: s_wUgfrbBVWYOrdJ_Hlgox8t
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_wUgfrbBVWYOrdJ_Hlgox8t
            source_type: api_record
            title: 中国历代人物传记资料库：王茹（CBDB 36929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36929&o=json
            external_identifier: CBDB:36929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6K54xkWmCaZkkh4DKziB3P
        status: active
        display_name: 王茹
        merged_into_person_id: null
    - claim:
        id: c_s7XrXEAf66xfhPGNc6Jd49
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9T9QTTNf9iC6ytcCKpDoi3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ry5NDTwUfgwENXnZ7yijqk
          claim_id: c_s7XrXEAf66xfhPGNc6Jd49
          source_id: s_YqhPiA5uVupiEpR8ioIwuz
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_YqhPiA5uVupiEpR8ioIwuz
            source_type: api_record
            title: 中国历代人物传记资料库：王蘩（CBDB 36924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36924&o=json
            external_identifier: CBDB:36924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9T9QTTNf9iC6ytcCKpDoi3
        status: active
        display_name: 王蘩
        merged_into_person_id: null
    - claim:
        id: c_HQEHYbxbm1vwlL6Qez83XS
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D7uG7jT88CSyD64SMPeLTu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vmy5iXbiP-vkUhxF4eXEAQ
          claim_id: c_HQEHYbxbm1vwlL6Qez83XS
          source_id: s_nTXozS7p11gmVwOgnUi3Js
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_nTXozS7p11gmVwOgnUi3Js
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 36925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36925&o=json
            external_identifier: CBDB:36925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D7uG7jT88CSyD64SMPeLTu
        status: active
        display_name: 王蘧
        merged_into_person_id: null
    - claim:
        id: c_CJe6CVux-20A7abmRKvKsb
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JKMpt7scuhp9txL2ZENYD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z9u24AGmup8Fmn_7r4rXgD
          claim_id: c_CJe6CVux-20A7abmRKvKsb
          source_id: s_w5bJSsbYXcpe9CrlCf3TM8
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_w5bJSsbYXcpe9CrlCf3TM8
            source_type: api_record
            title: 中国历代人物传记资料库：王著（CBDB 36927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36927&o=json
            external_identifier: CBDB:36927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JKMpt7scuhp9txL2ZENYD2
        status: active
        display_name: 王著
        merged_into_person_id: null
    - claim:
        id: c_flL5W2qVFRQvYErX4z_WcS
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z6GDXea2kdcJroYajoX1dr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NuXMX9EN9DsHCGWSerkvt6
          claim_id: c_flL5W2qVFRQvYErX4z_WcS
          source_id: s_x4eQ23EVa9yw2zJ8xcOm4b
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_x4eQ23EVa9yw2zJ8xcOm4b
            source_type: api_record
            title: 中国历代人物传记资料库：王薳（CBDB 36928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36928&o=json
            external_identifier: CBDB:36928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z6GDXea2kdcJroYajoX1dr
        status: active
        display_name: 王薳
        merged_into_person_id: null
    - claim:
        id: c_sB5BRULgXTvA2WxhogSbdi
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vX4Qavr621fJhbozYn1Wtw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fyyFnGkIqAgzKmUprHM1ah
          claim_id: c_sB5BRULgXTvA2WxhogSbdi
          source_id: s_pgFzQwb5QlaCw4DRYP6o6y
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_pgFzQwb5QlaCw4DRYP6o6y
            source_type: api_record
            title: 中国历代人物传记资料库：王荀（CBDB 36931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36931&o=json
            external_identifier: CBDB:36931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vX4Qavr621fJhbozYn1Wtw
        status: active
        display_name: 王荀
        merged_into_person_id: null
    - claim:
        id: c_meBXeH4VGaC1cdbDU8UnjZ
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vYCsSRXMz6GnVh5uA4fCjd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_79_OgGaMopA3a2Xo2d5zb-
          claim_id: c_meBXeH4VGaC1cdbDU8UnjZ
          source_id: s_IUYd_CBWkMOBeQ-zNt4hTw
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_IUYd_CBWkMOBeQ-zNt4hTw
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 36926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36926&o=json
            external_identifier: CBDB:36926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vYCsSRXMz6GnVh5uA4fCjd
        status: active
        display_name: 王邁
        merged_into_person_id: null
    - claim:
        id: c_DWzyj_Kk5U-COemWGXOxMN
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wudCErwqxGJ3uFdFggQKDs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4ZZDDzaNPzJjmz-WZd2Qd-
          claim_id: c_DWzyj_Kk5U-COemWGXOxMN
          source_id: s_ibc9SEF3akUvX7hx2S1SSM
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ibc9SEF3akUvX7hx2S1SSM
            source_type: api_record
            title: 中国历代人物传记资料库：王芾（CBDB 36930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36930&o=json
            external_identifier: CBDB:36930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wudCErwqxGJ3uFdFggQKDs
        status: active
        display_name: 王芾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EIza0Oo6BlY9LGANfvUSwv
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qrUeQ_F23he-aUnG2p_qcO
          claim_id: c_EIza0Oo6BlY9LGANfvUSwv
          source_id: s_6Q8GQFF56bS9Qa_TDRMPLz
          stance: supports
          locator: CBDB 双向互证（妻子 孫氏(王之道妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6Q8GQFF56bS9Qa_TDRMPLz
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王之道妻)（CBDB 36923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36923&o=json
            external_identifier: CBDB:36923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2x1kEfTy9Rrf9vMAC4nm4e
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王之道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之道 | accepted |
| birth.date | 1093年 | accepted |
| death.date | 1169年 | accepted |
| bio.summary | 王之道（1093年—1169年），宋人物。籍贯巢縣，入仕進士，曾任提舉、朝奉大夫、府。（中国历代人物传记资料库 CBDB 1786） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLkZGVxRBQSEaHVjzv1aDG | 王奇 | accepted |
| children | p_2jfP3iNWmJUmCrAC7oYuVM | 王萊 | accepted |
| children | p_6K54xkWmCaZkkh4DKziB3P | 王茹 | accepted |
| children | p_9T9QTTNf9iC6ytcCKpDoi3 | 王蘩 | accepted |
| children | p_D7uG7jT88CSyD64SMPeLTu | 王蘧 | accepted |
| children | p_JKMpt7scuhp9txL2ZENYD2 | 王著 | accepted |
| children | p_Z6GDXea2kdcJroYajoX1dr | 王薳 | accepted |
| children | p_vX4Qavr621fJhbozYn1Wtw | 王荀 | accepted |
| children | p_vYCsSRXMz6GnVh5uA4fCjd | 王邁 | accepted |
| children | p_wudCErwqxGJ3uFdFggQKDs | 王芾 | accepted |
| spouses | p_2x1kEfTy9Rrf9vMAC4nm4e | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王之道妻)（CBDB 36923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36923&o=json)
- [中国历代人物传记资料库：王蘩（CBDB 36924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36924&o=json)
- [中国历代人物传记资料库：王芾（CBDB 36930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36930&o=json)
- [中国历代人物传记资料库：王萊（CBDB 24387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24387&o=json)
- [中国历代人物传记资料库：王邁（CBDB 36926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36926&o=json)
- [中国历代人物传记资料库：王蘧（CBDB 36925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36925&o=json)
- [中国历代人物传记资料库：王茹（CBDB 36929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36929&o=json)
- [中国历代人物传记资料库：王薳（CBDB 36928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36928&o=json)
- [中国历代人物传记资料库：王荀（CBDB 36931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36931&o=json)
- [中国历代人物传记资料库：王之道（CBDB 1786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1786&o=json)
- [中国历代人物传记资料库：王著（CBDB 36927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36927&o=json)
