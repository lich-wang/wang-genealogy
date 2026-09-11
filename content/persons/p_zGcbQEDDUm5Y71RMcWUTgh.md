---
schema: wang-person/v1
id: p_zGcbQEDDUm5Y71RMcWUTgh
status: active
merged_into: null
display_name: 王鎡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EymtUQKuZMP33KAZGHHEHF
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1wrCupPm8ZuzvHm487TPqJ
          claim_id: c_EymtUQKuZMP33KAZGHHEHF
          source_id: s_vJU69VwCVCj51QDFCVypTL
          stance: supports
          locator: CBDB:22083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22083）
          source: &a1
            id: s_vJU69VwCVCj51QDFCVypTL
            source_type: api_record
            title: 中国历代人物传记资料库：王鎡（CBDB 22083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22083&o=json
            external_identifier: CBDB:22083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ATVqi163PYktHWsLjmoEbG
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎡，宋人物。籍贯石埭，入仕進士，曾任御史、中書舍人、侍講。（中国历代人物传记资料库 CBDB 22083）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nf6VX06tCI4YyC_fx2VqCK
          claim_id: c_ATVqi163PYktHWsLjmoEbG
          source_id: s_vJU69VwCVCj51QDFCVypTL
          stance: supports
          locator: CBDB:22083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TO5JduJzodJV77d9quJPCi
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_An1eB7p5nNk1QDqNJqiSDj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WLiE9Kbq3j3fkrXAQSsKIo
          claim_id: c_TO5JduJzodJV77d9quJPCi
          source_id: s_E5Jpx280VFkf4M9FFhXCyW
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1278;1279：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E5Jpx280VFkf4M9FFhXCyW
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王鎡妻)（CBDB 5365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5365&o=json
            external_identifier: CBDB:5365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_An1eB7p5nNk1QDqNJqiSDj
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_8x6kAT2_4-twjdJOpj82Vm
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1QHHB6mR2XonNZGYyLWjb3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6IQ4a0reBj_y8FXTW6VYYt
          claim_id: c_8x6kAT2_4-twjdJOpj82Vm
          source_id: s_1krZJU6hcp5EP1BvDaK2NS
          stance: supports
          locator: CBDB 双向互证（祖父 王鎡 ⇄ 孫 王克昌）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_1krZJU6hcp5EP1BvDaK2NS
            source_type: api_record
            title: 中国历代人物传记资料库：王克昌（CBDB 30487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30487&o=json
            external_identifier: CBDB:30487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1QHHB6mR2XonNZGYyLWjb3
        status: active
        display_name: 王克昌
        merged_into_person_id: null
    - claim:
        id: c_JjAgCMjVmYw6DbmUz3Ti2o
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_96WsJCaTh25kxTEjXjW8Ry
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zx0wF6wkbglcrTtAg-vKDC
          claim_id: c_JjAgCMjVmYw6DbmUz3Ti2o
          source_id: s_235mdjcmdL7qAWyuj3KgSB
          stance: supports
          locator: CBDB 双向互证（祖父 王鎡 ⇄ 孫 王楠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_235mdjcmdL7qAWyuj3KgSB
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 30492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30492&o=json
            external_identifier: CBDB:30492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_96WsJCaTh25kxTEjXjW8Ry
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_3HYMPASsAqYkaK4mGh9EZ-
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MLyaRuTQgKXsigje69x5rP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D-WaRQRDYvNorrmPdbWhgK
          claim_id: c_3HYMPASsAqYkaK4mGh9EZ-
          source_id: s_fBT7B4BijF9JN1eqorV5JA
          stance: supports
          locator: CBDB 双向互证（祖父 王鎡 ⇄ 孫 王汝昌）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_fBT7B4BijF9JN1eqorV5JA
            source_type: api_record
            title: 中国历代人物传记资料库：王汝昌（CBDB 30491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30491&o=json
            external_identifier: CBDB:30491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MLyaRuTQgKXsigje69x5rP
        status: active
        display_name: 王汝昌
        merged_into_person_id: null
    - claim:
        id: c_Bk3DmEiUjLUUBgVX-nx4CQ
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Sip1o4dDwfqVjFGRutMyss
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sbDUWrzoSo_2dI7GnZj5Zk
          claim_id: c_Bk3DmEiUjLUUBgVX-nx4CQ
          source_id: s_UiBXaDbues5CkyeD5oTFCD
          stance: supports
          locator: CBDB 双向互证（祖父 王鎡 ⇄ 孫 王伯昌）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_UiBXaDbues5CkyeD5oTFCD
            source_type: api_record
            title: 中国历代人物传记资料库：王伯昌（CBDB 30488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30488&o=json
            external_identifier: CBDB:30488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Sip1o4dDwfqVjFGRutMyss
        status: active
        display_name: 王伯昌
        merged_into_person_id: null
    - claim:
        id: c_CHrOa68L1UZvvO7ddoGEas
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CJhsct76FQBCjWidPMqQaJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5U4IJgcbGs9UTFjAyIlDRB
          claim_id: c_CHrOa68L1UZvvO7ddoGEas
          source_id: s_vJU69VwCVCj51QDFCVypTL
          stance: supports
          locator: CBDB 双向互证（孫 王東文 ⇄ 祖父 王鎡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_CJhsct76FQBCjWidPMqQaJ
        status: active
        display_name: 王東文
        merged_into_person_id: null
    - claim:
        id: c_13tDo1FpB3_hUYnYmsS0JY
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_swCRr7FWRZBNLSsPJpSFeP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3TZq5s7pbPWxWNYyq5iyw6
          claim_id: c_13tDo1FpB3_hUYnYmsS0JY
          source_id: s_vJU69VwCVCj51QDFCVypTL
          stance: supports
          locator: CBDB 双向互证（孫 王夢昌 ⇄ 祖父 王鎡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_swCRr7FWRZBNLSsPJpSFeP
        status: active
        display_name: 王夢昌
        merged_into_person_id: null
  other: []
---

# 王鎡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎡 | accepted |
| bio.summary | 王鎡，宋人物。籍贯石埭，入仕進士，曾任御史、中書舍人、侍講。（中国历代人物传记资料库 CBDB 22083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_An1eB7p5nNk1QDqNJqiSDj | 孫氏 | accepted |
| descendants | p_1QHHB6mR2XonNZGYyLWjb3 | 王克昌 | accepted |
| descendants | p_96WsJCaTh25kxTEjXjW8Ry | 王楠 | accepted |
| descendants | p_MLyaRuTQgKXsigje69x5rP | 王汝昌 | accepted |
| descendants | p_Sip1o4dDwfqVjFGRutMyss | 王伯昌 | accepted |
| descendants | p_CJhsct76FQBCjWidPMqQaJ | 王東文 | accepted |
| descendants | p_swCRr7FWRZBNLSsPJpSFeP | 王夢昌 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王鎡妻)（CBDB 5365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5365&o=json)
- [中国历代人物传记资料库：王伯昌（CBDB 30488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30488&o=json)
- [中国历代人物传记资料库：王克昌（CBDB 30487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30487&o=json)
- [中国历代人物传记资料库：王楠（CBDB 30492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30492&o=json)
- [中国历代人物传记资料库：王汝昌（CBDB 30491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30491&o=json)
- [中国历代人物传记资料库：王鎡（CBDB 22083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22083&o=json)
