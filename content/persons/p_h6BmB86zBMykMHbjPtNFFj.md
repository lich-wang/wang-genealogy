---
schema: wang-person/v1
id: p_h6BmB86zBMykMHbjPtNFFj
status: active
merged_into: null
display_name: 王傑
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_34Pm5gJwn4TNiHxmMyVLcm
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2qTcioJdq7GfLjndDysVeb
          claim_id: c_34Pm5gJwn4TNiHxmMyVLcm
          source_id: s_jJMAu1ANH2TaSVooM5PB6f
          stance: supports
          locator: CBDB:268957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268957）
          source: &a1
            id: s_jJMAu1ANH2TaSVooM5PB6f
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 268957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268957&o=json
            external_identifier: CBDB:268957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MJuW6ndXQ6JQ2psQ15sEP1
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。弘治九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 268957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r1Qc3evqlYlKjqrlGXYaKs
          claim_id: c_MJuW6ndXQ6JQ2psQ15sEP1
          source_id: s_jJMAu1ANH2TaSVooM5PB6f
          stance: supports
          locator: CBDB:268957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_y5Mh_U7u8yu9L-dV-iYwb_
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aE8BJNQJMvShc1BQ8KJMip
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k75jrb2grVoSrYKkoYAApz
          claim_id: c_y5Mh_U7u8yu9L-dV-iYwb_
          source_id: s_jJMAu1ANH2TaSVooM5PB6f
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aE8BJNQJMvShc1BQ8KJMip
        status: active
        display_name: 王士昭
        merged_into_person_id: null
    - claim:
        id: c_E01XBYsF_cPTLJ9gslboha
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_514fUU2vAuZjP5Wr7Lhwn6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sBZkuUr3gW1ncXnwKfMuGo
          claim_id: c_E01XBYsF_cPTLJ9gslboha
          source_id: s_kgchoG_CwPUCzKYYy9-COu
          stance: supports
          locator: CBDB：兄弟 王士昭（201216）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王昺 与 王士昭 为同胞（CBDB 记「兄」），王士昭 之父／母即 王昺 之父／母。
          source:
            id: s_kgchoG_CwPUCzKYYy9-COu
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 268963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268963&o=json
            external_identifier: CBDB:268963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_514fUU2vAuZjP5Wr7Lhwn6
        status: active
        display_name: 王昺
        merged_into_person_id: null
    - claim:
        id: c_SrOZ6B8sjhMelqR5_LA3lp
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g9ETCs2LWZEoZ1BLCdT7cG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QLp4TED0lnAqBelxZOhsmn
          claim_id: c_SrOZ6B8sjhMelqR5_LA3lp
          source_id: s_ryQrJ1I_zG7dgtFI2mJgxm
          stance: supports
          locator: CBDB：兄弟 王士昭（201216）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王昱 与 王士昭 为同胞（CBDB 记「兄」），王士昭 之父／母即 王昱 之父／母。
          source:
            id: s_ryQrJ1I_zG7dgtFI2mJgxm
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 268962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268962&o=json
            external_identifier: CBDB:268962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g9ETCs2LWZEoZ1BLCdT7cG
        status: active
        display_name: 王昱
        merged_into_person_id: null
    - claim:
        id: c_uY4i3E1q0iGQOHP2NRKRC5
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mTMqZ927NNCJL74Eug1aL5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-yugLQ_Qo8I-cIyOneS0R2
          claim_id: c_uY4i3E1q0iGQOHP2NRKRC5
          source_id: s_Tr5UobupPAGTnU0GsLftZ0
          stance: supports
          locator: CBDB：兄弟 王士昭（201216）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王昆 与 王士昭 为同胞（CBDB 记「兄」），王士昭 之父／母即 王昆 之父／母。
          source:
            id: s_Tr5UobupPAGTnU0GsLftZ0
            source_type: api_record
            title: 中国历代人物传记资料库：王昆（CBDB 268964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268964&o=json
            external_identifier: CBDB:268964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mTMqZ927NNCJL74Eug1aL5
        status: active
        display_name: 王昆
        merged_into_person_id: null
    - claim:
        id: c_elirIPhxJAMK3ivLH-h3ti
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_psDTG8148fihHUZuCyHaw2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fiiHxxnEEJvLMvdfwVRw-2
          claim_id: c_elirIPhxJAMK3ivLH-h3ti
          source_id: s_C3dCSdA7OlD8SlbSaMAqfQ
          stance: supports
          locator: CBDB：兄弟 王士昭（201216）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王昊 与 王士昭 为同胞（CBDB 记「兄」），王士昭 之父／母即 王昊 之父／母。
          source:
            id: s_C3dCSdA7OlD8SlbSaMAqfQ
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 268966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268966&o=json
            external_identifier: CBDB:268966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_psDTG8148fihHUZuCyHaw2
        status: active
        display_name: 王昊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。弘治九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 268957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aE8BJNQJMvShc1BQ8KJMip | 王士昭 | accepted |
| children | p_514fUU2vAuZjP5Wr7Lhwn6 | 王昺 | accepted |
| children | p_g9ETCs2LWZEoZ1BLCdT7cG | 王昱 | accepted |
| children | p_mTMqZ927NNCJL74Eug1aL5 | 王昆 | accepted |
| children | p_psDTG8148fihHUZuCyHaw2 | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 268963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268963&o=json)
- [中国历代人物传记资料库：王昊（CBDB 268966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268966&o=json)
- [中国历代人物传记资料库：王傑（CBDB 268957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268957&o=json)
- [中国历代人物传记资料库：王昆（CBDB 268964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268964&o=json)
- [中国历代人物传记资料库：王昱（CBDB 268962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268962&o=json)
