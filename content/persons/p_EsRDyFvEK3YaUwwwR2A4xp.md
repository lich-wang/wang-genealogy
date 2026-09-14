---
schema: wang-person/v1
id: p_EsRDyFvEK3YaUwwwR2A4xp
status: active
merged_into: null
display_name: 王璣
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zdx2LxWq3R6Hdsoyi9NiXR
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iiYus7HXmQYrytsfgg9jvb
          claim_id: c_Zdx2LxWq3R6Hdsoyi9NiXR
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: CBDB:126823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126823）
          source: &a1
            id: s_pjZuWWz5q9b7suKN74HyQM
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 126823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126823&o=json
            external_identifier: CBDB:126823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C9wruzTCBeAH1LBaXR5ihQ
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1490年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xzLG2mnqjMPDqWkbhNrABo
          claim_id: c_C9wruzTCBeAH1LBaXR5ihQ
          source_id: s_pjZuWWz5q9b7suKN74HyQM
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
        id: c_uDngymGrkXNge5vRpebKhN
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1563年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9bCEL4XiicPpZE9kpR8P7z
          claim_id: c_uDngymGrkXNge5vRpebKhN
          source_id: s_pjZuWWz5q9b7suKN74HyQM
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
        id: c_VHztc4qnAN3exPjjr8Gh6b
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣（1490年—1563年），明人物。明清進士進士，籍贯西安，入仕進士，曾任右僉都御史。（中国历代人物传记资料库 CBDB 126823）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kzNpnJEOwpY6iBWq7tYT5D
          claim_id: c_VHztc4qnAN3exPjjr8Gh6b
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: CBDB:126823
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZeqDGGOnD-gmdKrsSacXIK
        subject_person_id: p_oLGH5VdAkbTAKw9xdBWvfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H6eIEiFsLWjk8RdULOsir9
          claim_id: c_ZeqDGGOnD-gmdKrsSacXIK
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oLGH5VdAkbTAKw9xdBWvfS
        status: active
        display_name: 王文暉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NJR1k5oNH8a8d6CI-Lvdjc
        subject_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AZHUc1Wdu5ZWGMDfPkogp9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bRc2TLbhWKWhgesU6iZ6wf
          claim_id: c_NJR1k5oNH8a8d6CI-Lvdjc
          source_id: s_dV3D5Uy9ijzxJ8aJdEyMYx
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dV3D5Uy9ijzxJ8aJdEyMYx
            source_type: api_record
            title: 中国历代人物传记资料库：余氏(王璣妻)（CBDB 290014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290014&o=json
            external_identifier: CBDB:290014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AZHUc1Wdu5ZWGMDfPkogp9
        status: active
        display_name: 余氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_9U64Y2kTvLL9FQeKFgSCwH
        subject_person_id: p_w95Qyiy1Ei4ZGtAAFRrWXU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XiTBYO5yw500R4k2QarQyj
          claim_id: c_9U64Y2kTvLL9FQeKFgSCwH
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w95Qyiy1Ei4ZGtAAFRrWXU
        status: active
        display_name: 王時言
        merged_into_person_id: null
    - claim:
        id: c_ZiDScIPZQ96xDRBIChezw4
        subject_person_id: p_SKTCYUFHWsLRhaeZBL7nG7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zDBbwFB8u6TN6XY1LAs7Vh
          claim_id: c_ZiDScIPZQ96xDRBIChezw4
          source_id: s_pjZuWWz5q9b7suKN74HyQM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SKTCYUFHWsLRhaeZBL7nG7
        status: active
        display_name: 王璽
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_iKNnFJAEHwUQWf9wEwIDbm
        subject_person_id: p_8yXHpS1XXTWNEbHqcV5CiM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTVtzcnneAkmgXRqrBfpVV
          claim_id: c_iKNnFJAEHwUQWf9wEwIDbm
          source_id: s_TAXShRXHGTAn17kvo6i-ns
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126823 王璣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TAXShRXHGTAn17kvo6i-ns
            source_type: api_record
            title: 中国历代人物传记资料库：王瑢（CBDB 290018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json
            external_identifier: CBDB:290018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8yXHpS1XXTWNEbHqcV5CiM
        status: active
        display_name: 王瑢
        merged_into_person_id: null
    - claim:
        id: c_Lj92UpbSVY8Cf-yMsAp430
        subject_person_id: p_CoMtV9xq2X5pH1y41LjC86
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EsRDyFvEK3YaUwwwR2A4xp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p3WhREWmhls03LLLLZZw9p
          claim_id: c_Lj92UpbSVY8Cf-yMsAp430
          source_id: s_0H_tCdT1Zmredb0Jk2qtew
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126823 王璣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0H_tCdT1Zmredb0Jk2qtew
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 290017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290017&o=json
            external_identifier: CBDB:290017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CoMtV9xq2X5pH1y41LjC86
        status: active
        display_name: 王瓊
        merged_into_person_id: null
---

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| birth.date | 1490年 | accepted |
| death.date | 1563年 | accepted |
| bio.summary | 王璣（1490年—1563年），明人物。明清進士進士，籍贯西安，入仕進士，曾任右僉都御史。（中国历代人物传记资料库 CBDB 126823） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oLGH5VdAkbTAKw9xdBWvfS | 王文暉 | accepted |
| spouses | p_AZHUc1Wdu5ZWGMDfPkogp9 | 余氏 | accepted |
| ancestors | p_w95Qyiy1Ei4ZGtAAFRrWXU | 王時言 | accepted |
| ancestors | p_SKTCYUFHWsLRhaeZBL7nG7 | 王璽 | accepted |
| other | p_8yXHpS1XXTWNEbHqcV5CiM | 王瑢 | accepted |
| other | p_CoMtV9xq2X5pH1y41LjC86 | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 126823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126823&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 290017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290017&o=json)
- [中国历代人物传记资料库：王瑢（CBDB 290018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290018&o=json)
- [中国历代人物传记资料库：余氏(王璣妻)（CBDB 290014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290014&o=json)
