---
schema: wang-person/v1
id: p_o5iCKboKod63KLGnA3UGdF
status: active
merged_into: null
display_name: 王璵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2nkBaJ47WY3YoTSfaLEATw
        subject_person_id: p_o5iCKboKod63KLGnA3UGdF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dq8zxCMjrRr6WLkvQe8ZCz
          claim_id: c_2nkBaJ47WY3YoTSfaLEATw
          source_id: s_FMHjch1AxZimYXE1NLHFCo
          stance: supports
          locator: CBDB:100989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100989）
          source: &a1
            id: s_FMHjch1AxZimYXE1NLHFCo
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 100989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100989&o=json
            external_identifier: CBDB:100989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LgFoGP947yCDrwhPRCCtXY
        subject_person_id: p_o5iCKboKod63KLGnA3UGdF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1281年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rSFGqNFHK7uHUPEyXZpoAP
          claim_id: c_LgFoGP947yCDrwhPRCCtXY
          source_id: s_FMHjch1AxZimYXE1NLHFCo
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
        id: c_8A1cpCAcpjN93N73cw53AX
        subject_person_id: p_o5iCKboKod63KLGnA3UGdF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1346年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cnp2gqFGvvm1gDyHBMPfW8
          claim_id: c_8A1cpCAcpjN93N73cw53AX
          source_id: s_FMHjch1AxZimYXE1NLHFCo
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
        id: c_xFBT2iZfut1TREEen8vZUX
        subject_person_id: p_o5iCKboKod63KLGnA3UGdF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAEmLndvteBQRv7ZEkgryu
          claim_id: c_xFBT2iZfut1TREEen8vZUX
          source_id: s_FMHjch1AxZimYXE1NLHFCo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RfnyZgWAC88BmuRgVXihaO
        subject_person_id: p_okCNcSbsnw3xMM97gGiEC7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o5iCKboKod63KLGnA3UGdF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cM1SvuDYyndbWdX2FK4g0d
          claim_id: c_RfnyZgWAC88BmuRgVXihaO
          source_id: s_FMHjch1AxZimYXE1NLHFCo
          stance: supports
          locator: 宋濂全集，423-425：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_okCNcSbsnw3xMM97gGiEC7
        status: active
        display_name: 王希曾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GuMAcok_IcYPBnn1Qe0Ltm
        subject_person_id: p_o5iCKboKod63KLGnA3UGdF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZqihSrx2AM7qhSQZYzjJ2Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQzuT2Pi4CQ5YpG1q89wFq
          claim_id: c_GuMAcok_IcYPBnn1Qe0Ltm
          source_id: s_GuxFjLruz7qet8w5WF2pnj
          stance: supports
          locator: 宋濂全集，423-425：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GuxFjLruz7qet8w5WF2pnj
            source_type: api_record
            title: 中国历代人物传记资料库：袁氏(王嶼妻)（CBDB 126287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126287&o=json
            external_identifier: CBDB:126287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZqihSrx2AM7qhSQZYzjJ2Y
        status: active
        display_name: 袁氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_i6z2O8Qnbr0GrsxwtzORjf
        subject_person_id: p_xEHN8E9qCG1mm7pRGjhi9k
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o5iCKboKod63KLGnA3UGdF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LNgSezqaOgCiUTO1EAypmO
          claim_id: c_i6z2O8Qnbr0GrsxwtzORjf
          source_id: s_FMHjch1AxZimYXE1NLHFCo
          stance: supports
          locator: 宋濂全集，423-425：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xEHN8E9qCG1mm7pRGjhi9k
        status: active
        display_name: 王宗善
        merged_into_person_id: null
    - claim:
        id: c_TU1HiSB-W0H_P6E1qghPuw
        subject_person_id: p_JFSyR8NJmhCLHZk6LZi9Pp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o5iCKboKod63KLGnA3UGdF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q-7CdCOzyo4EOgMvR6lGtL
          claim_id: c_TU1HiSB-W0H_P6E1qghPuw
          source_id: s_FMHjch1AxZimYXE1NLHFCo
          stance: supports
          locator: 宋濂全集，423-245：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JFSyR8NJmhCLHZk6LZi9Pp
        status: active
        display_name: 王叔祥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璵 | accepted |
| birth.date | 1281年 | accepted |
| death.date | 1346年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_okCNcSbsnw3xMM97gGiEC7 | 王希曾 | accepted |
| spouses | p_ZqihSrx2AM7qhSQZYzjJ2Y | 袁氏 | accepted |
| ancestors | p_xEHN8E9qCG1mm7pRGjhi9k | 王宗善 | accepted |
| ancestors | p_JFSyR8NJmhCLHZk6LZi9Pp | 王叔祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璵（CBDB 100989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100989&o=json)
- [中国历代人物传记资料库：袁氏(王嶼妻)（CBDB 126287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126287&o=json)
